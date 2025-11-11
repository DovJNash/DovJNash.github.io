#!/usr/bin/env python3
"""
Process planPhases.js and add comprehensive task details to all tasks.
This script generates 120-200+ word details for each task following Week 1 template.
"""

import re
import sys
import os

# Import the generator
sys.path.insert(0, os.path.dirname(__file__))
from task_detail_generator import TaskDetailGenerator

def main():
    print("=== Processing planPhases.js to add task details ===\n")
    
    # Read the file
    input_file = 'assets/js/data/planPhases.js'
    print(f"Reading {input_file}...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Initialize generator
    generator = TaskDetailGenerator()
    
    # Track progress
    tasks_processed = 0
    tasks_with_details = 0
    tasks_added_details = 0
    
    # Current context tracking
    current_phase = None
    current_day = None
    current_week = None
    
    lines = content.split('\n')
    output_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        output_lines.append(line)
        
        # Track phase context
        phase_match = re.match(r"\s*id:\s*['\"]([^'\"]+)['\"]", line)
        if phase_match:
            current_phase = phase_match.group(1)
            print(f"\nProcessing phase: {current_phase}")
        
        # Track day context
        day_match = re.match(r"\s*globalDay:\s*(\d+)", line)
        if day_match:
            current_day = int(day_match.group(1))
        
        week_match = re.match(r"\s*week:\s*(\d+)", line)
        if week_match:
            current_week = int(week_match.group(1))
        
        # Check for task line with label
        task_match = re.match(r"(\s*\{\s*label:\s*['\"])", line)
        if task_match and current_phase and current_day:
            # Extract the full task object (may span multiple lines)
            indent = task_match.group(1)
            task_start = i
            
            # Find the end of this task object
            brace_count = 1
            task_lines = [line]
            j = i + 1
            
            while j < len(lines) and brace_count > 0:
                task_lines.append(lines[j])
                for char in lines[j]:
                    if char == '{':
                        brace_count += 1
                    elif char == '}':
                        brace_count -= 1
                j += 1
            
            # Parse the task object
            task_text = '\n'.join(task_lines)
            
            # Check if details already exist
            if 'details:' in task_text:
                tasks_with_details += 1
                tasks_processed += 1
                i = j
                continue
            
            # Extract task label
            label_match = re.search(r"label:\s*['\"]([^'\"]+)['\"]", task_text)
            if not label_match:
                i = j
                continue
            
            task_label = label_match.group(1)
            
            # Extract estMinutes if present
            est_match = re.search(r"estMinutes:\s*(\d+)", task_text)
            est_minutes = int(est_match.group(1)) if est_match else 60
            
            # Generate details
            details = generator.generate_details(
                task_label, 
                current_phase, 
                current_day, 
                current_week or 1
            )
            
            # Escape single quotes in details
            details_escaped = details.replace("'", "\\'")
            
            # Find where to insert details
            # Look for the closing of estMinutes or label, before }
            insert_point = -1
            for k, tline in enumerate(task_lines):
                if 'estMinutes:' in tline:
                    insert_point = k
                elif insert_point == -1 and ('label:' in tline and ',' in tline):
                    insert_point = k
            
            if insert_point == -1:
                insert_point = len(task_lines) - 2
            
            # Insert details line
            base_indent = re.match(r'^(\s*)', task_lines[0]).group(1)
            details_line = f"{base_indent}  details: '{details_escaped}'"
            
            # Check if we need to add comma after previous line
            if insert_point < len(task_lines) - 1:
                prev_line = task_lines[insert_point]
                if not prev_line.rstrip().endswith(','):
                    task_lines[insert_point] = prev_line.rstrip() + ','
            
            # Insert details
            task_lines.insert(insert_point + 1, details_line + (',' if insert_point < len(task_lines) - 2 else ''))
            
            # Replace the original task lines
            output_lines = output_lines[:-1]  # Remove the already-added first line
            output_lines.extend(task_lines)
            
            tasks_processed += 1
            tasks_added_details += 1
            
            if tasks_added_details % 50 == 0:
                print(f"  Processed {tasks_added_details} tasks (Day {current_day})...")
            
            i = j
            continue
        
        i += 1
    
    # Write output
    output_file = 'assets/js/data/planPhases_with_details.js'
    print(f"\n\nWriting to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output_lines))
    
    print(f"\n=== Summary ===")
    print(f"Total tasks processed: {tasks_processed}")
    print(f"Tasks already had details: {tasks_with_details}")
    print(f"Tasks with details added: {tasks_added_details}")
    print(f"\nOutput written to: {output_file}")
    print(f"\nNext steps:")
    print(f"1. Review the generated file")
    print(f"2. If satisfied, replace original: mv {output_file} {input_file}")
    print(f"3. Test in browser")

if __name__ == '__main__':
    main()
