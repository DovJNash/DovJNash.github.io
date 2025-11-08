#!/usr/bin/env python3
"""
Inject detailed task descriptions into planPhases.js for Phase 3 and Phase 4.
Processes the file and adds contextually appropriate 120-200+ word details to each task.
"""

import re
import sys
from generate_phase3_4_details import (
    PHASE3_DETAILS, PHASE4_DETAILS,
    generate_generic_details,
    generate_core_concepts_details,
    generate_implementation_details,
    generate_practice_details,
    generate_review_details,
    generate_weekly_log_details,
    generate_default_details
)


def extract_topic_from_title(title):
    """Extract main topic from day title."""
    # Remove common prefixes
    topic = title.replace("Week ", "").replace("Review", "").strip()
    return topic if topic else "machine learning"


def extract_topic_from_label(label):
    """Extract topic from task label."""
    # Try to extract meaningful topic
    if ":" in label:
        topic = label.split(":")[0].strip()
    else:
        # Take first few words
        words = label.split()
        topic = " ".join(words[:3]) if len(words) >= 3 else label
    return topic


def should_add_details(task_line):
    """Check if task already has details."""
    return ", details:" not in task_line and "details: '" not in task_line


def escape_for_js(text):
    """Escape text for JavaScript string."""
    # Escape single quotes and backslashes
    text = text.replace("\\", "\\\\")
    text = text.replace("'", "\\'")
    # Handle newlines
    text = text.replace("\n", " ")
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    return text


def generate_details_for_task(task_label, day_number, day_title, existing_details_count):
    """Generate appropriate details for a task."""
    
    # Extract topic from label or title
    topic = extract_topic_from_label(task_label)
    if not topic or len(topic) < 5:
        topic = extract_topic_from_title(day_title)
    
    # Check for pre-defined details first
    task_key = f"day{day_number}_task{existing_details_count + 1}"
    
    if task_key in PHASE3_DETAILS:
        return PHASE3_DETAILS[task_key]
    elif task_key in PHASE4_DETAILS:
        return PHASE4_DETAILS[task_key]
    
    # Generate based on task type
    return generate_generic_details(task_label, day_number, topic)


def process_planphases():
    """Process planPhases.js and add details to Phase 3 and 4 tasks."""
    
    input_file = 'assets/js/data/planPhases.js'
    output_file = 'assets/js/data/planPhases.js.new'
    backup_file = 'assets/js/data/planPhases.js.backup2'
    
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Create backup
    with open(backup_file, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Backup created: {backup_file}")
    
    output_lines = []
    in_phase3 = False
    in_phase4 = False
    current_day = None
    current_day_title = ""
    tasks_processed = 0
    details_added = 0
    task_count_in_day = 0
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Track which phase we're in
        if "title: 'Phase 3:" in line:
            in_phase3 = True
            in_phase4 = False
            print("\nEntering Phase 3...")
        elif "title: 'Phase 4:" in line:
            in_phase3 = False
            in_phase4 = True
            print("\nEntering Phase 4...")
        elif "title: 'Phase 5:" in line:
            in_phase3 = False
            in_phase4 = False
            if tasks_processed > 0:
                print("\nExiting Phase 4...")
        
        # Track current day
        day_match = re.search(r'globalDay:\s*(\d+)', line)
        if day_match:
            current_day = int(day_match.group(1))
            task_count_in_day = 0  # Reset task counter for new day
        
        title_match = re.search(r"title:\s*'([^']+)'", line)
        if title_match and current_day:
            current_day_title = title_match.group(1)
        
        # Check if this is a task line that needs details
        # Handle both single-line and multi-line task formats
        if (in_phase3 or in_phase4) and current_day:
            # Try single-line format: { label: '...', estMinutes: ... },
            task_match = re.search(r"{\s*label:\s*'([^']+)',\s*estMinutes:\s*(\d+)(\s*,?\s*details:)?", line)
            
            if task_match and not task_match.group(3):  # No details yet
                task_label = task_match.group(1)
                est_minutes = task_match.group(2)
                task_count_in_day += 1
                
                # Generate details
                details = generate_details_for_task(
                    task_label, 
                    current_day, 
                    current_day_title,
                    task_count_in_day - 1
                )
                
                # Escape for JavaScript
                details_escaped = escape_for_js(details)
                
                # Reconstruct line with details, preserving original format
                indent = line[:len(line) - len(line.lstrip())]
                
                # Preserve trailing comma if present
                has_comma = line.rstrip().endswith(',') or line.rstrip().endswith('},')
                comma = ',' if has_comma else ''
                
                new_line = f"{indent}{{ label: '{task_label}', estMinutes: {est_minutes}, details: '{details_escaped}' }}{comma}\n"
                
                output_lines.append(new_line)
                details_added += 1
                tasks_processed += 1
                
                if tasks_processed % 10 == 0:
                    print(f"Processed {tasks_processed} tasks (Day {current_day})...")
                
                i += 1
                continue
        
        output_lines.append(line)
        i += 1
    
    # Write output
    print(f"\nWriting {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    
    print(f"\nSummary:")
    print(f"  Total tasks processed: {tasks_processed}")
    print(f"  Details added: {details_added}")
    print(f"  Output file: {output_file}")
    print(f"  Backup file: {backup_file}")
    print(f"\nReview the output file, then rename it to replace the original:")
    print(f"  mv {output_file} {input_file}")
    
    return details_added


if __name__ == "__main__":
    try:
        count = process_planphases()
        print(f"\nSuccess! Added {count} detailed task descriptions.")
        sys.exit(0)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
