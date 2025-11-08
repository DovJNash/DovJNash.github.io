#!/usr/bin/env python3
"""
Validate task details in planPhases.js for Phases 1-4.
Checks:
- Minimum 120 words per task detail
- Presence of required <strong> tags (Action, Boundaries, Deliverable, Verification)
- At least 2 source links with proper attributes (target="_blank" rel="noopener")
- Proper HTML formatting
"""

import re
import sys
from collections import defaultdict


def extract_text_from_html(html):
    """Extract plain text from HTML, removing tags."""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', html)
    # Decode HTML entities
    text = text.replace('&nbsp;', ' ')
    text = text.replace('&amp;', '&')
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&quot;', '"')
    text = text.replace('&#39;', "'")
    return text


def count_words(text):
    """Count words in text."""
    return len(text.split())


def validate_details(details_text, task_label, day_num, phase_name):
    """Validate a single task's details. Returns list of issues."""
    issues = []
    
    # 1. Check word count (minimum 120 words)
    plain_text = extract_text_from_html(details_text)
    word_count = count_words(plain_text)
    if word_count < 120:
        issues.append(f"❌ Only {word_count} words (minimum 120 required)")
    
    # 2. Check for required <strong> tags
    required_tags = ['Action', 'Boundaries', 'Deliverable', 'Verification']
    for tag in required_tags:
        if f'<strong>{tag}:</strong>' not in details_text:
            issues.append(f"❌ Missing <strong>{tag}:</strong> tag")
    
    # 3. Check for at least 2 source links
    link_pattern = r'<a\s+href="([^"]+)"[^>]*>([^<]+)</a>'
    links = re.findall(link_pattern, details_text)
    if len(links) < 2:
        issues.append(f"❌ Only {len(links)} source links (minimum 2 required)")
    
    # 4. Check link attributes
    for url, text in links:
        # Check for proper attributes
        link_match = re.search(rf'<a\s+href="{re.escape(url)}"([^>]+)>{re.escape(text)}</a>', details_text)
        if link_match:
            attrs = link_match.group(1)
            if 'target="_blank"' not in attrs:
                issues.append(f"⚠️  Link to {url} missing target=\"_blank\"")
            if 'rel="noopener"' not in attrs and 'rel="noreferrer"' not in attrs:
                issues.append(f"⚠️  Link to {url} missing rel=\"noopener\" or rel=\"noreferrer\"")
    
    return issues, word_count, len(links)


def validate_planphases():
    """Validate all task details in planPhases.js."""
    
    input_file = 'assets/js/data/planPhases.js'
    
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Track statistics by phase
    stats = defaultdict(lambda: {
        'total_tasks': 0,
        'tasks_with_details': 0,
        'min_words': float('inf'),
        'max_words': 0,
        'total_words': 0,
        'issues': []
    })
    
    # Process each phase
    phases_to_check = [
        ('Phase 1:', 1, 42),
        ('Phase 2:', 43, 49),
        ('Phase 3:', 50, 70),
        ('Phase 4:', 71, 119)
    ]
    
    for phase_title, start_day, end_day in phases_to_check:
        phase_name = phase_title.replace(':', '').strip()
        print(f"\n{'='*60}")
        print(f"Validating {phase_name} (Days {start_day}-{end_day})")
        print(f"{'='*60}")
        
        # Extract phase content
        phase_start = content.find(f"title: '{phase_title}")
        if phase_start == -1:
            print(f"⚠️  Could not find {phase_name}")
            continue
        
        # Find next phase or end of phases array
        next_phase_start = content.find("title: 'Phase", phase_start + 1)
        if next_phase_start == -1:
            next_phase_start = len(content)
        
        phase_content = content[phase_start:next_phase_start]
        
        # Find all tasks with details in this phase
        task_pattern = r"{\s*label:\s*'([^']+)',\s*estMinutes:\s*(\d+)(?:,\s*resourceLinks:.*?)?(?:,\s*notebook:.*?)?(?:,\s*artifact:.*?)?(?:,\s*successCriteria:.*?)?,\s*details:\s*'((?:[^'\\]|\\.)+?)'\s*}"
        
        tasks = re.finditer(task_pattern, phase_content, re.DOTALL)
        
        task_count = 0
        for task_match in tasks:
            task_count += 1
            task_label = task_match.group(1)
            details_text = task_match.group(3)
            
            # Unescape JavaScript string
            details_text = details_text.replace("\\'", "'")
            details_text = details_text.replace("\\\\", "\\")
            
            # Try to find day number from context
            task_start_pos = task_match.start()
            context_before = phase_content[max(0, task_start_pos-500):task_start_pos]
            day_match = re.search(r'globalDay:\s*(\d+)', context_before)
            day_num = int(day_match.group(1)) if day_match else 0
            
            # Validate
            issues, word_count, link_count = validate_details(
                details_text, task_label, day_num, phase_name
            )
            
            stats[phase_name]['total_tasks'] += 1
            if details_text:
                stats[phase_name]['tasks_with_details'] += 1
                stats[phase_name]['min_words'] = min(stats[phase_name]['min_words'], word_count)
                stats[phase_name]['max_words'] = max(stats[phase_name]['max_words'], word_count)
                stats[phase_name]['total_words'] += word_count
            
            if issues:
                print(f"\nDay {day_num}: {task_label[:60]}...")
                for issue in issues:
                    print(f"  {issue}")
                stats[phase_name]['issues'].extend(issues)
            else:
                # Success case - show only if verbose
                pass
        
        # Phase summary
        phase_stats = stats[phase_name]
        print(f"\n{phase_name} Summary:")
        print(f"  Total tasks found: {phase_stats['total_tasks']}")
        print(f"  Tasks with details: {phase_stats['tasks_with_details']}")
        
        if phase_stats['tasks_with_details'] > 0:
            avg_words = phase_stats['total_words'] / phase_stats['tasks_with_details']
            print(f"  Word count: min={phase_stats['min_words']}, max={phase_stats['max_words']}, avg={avg_words:.1f}")
            print(f"  Issues found: {len(phase_stats['issues'])}")
            
            if len(phase_stats['issues']) == 0:
                print(f"  ✅ All tasks pass validation!")
    
    # Overall summary
    print(f"\n{'='*60}")
    print("OVERALL SUMMARY")
    print(f"{'='*60}")
    
    total_tasks = sum(s['total_tasks'] for s in stats.values())
    total_with_details = sum(s['tasks_with_details'] for s in stats.values())
    total_issues = sum(len(s['issues']) for s in stats.values())
    
    print(f"Total tasks checked: {total_tasks}")
    print(f"Tasks with details: {total_with_details}")
    print(f"Total issues: {total_issues}")
    
    if total_issues == 0:
        print("\n✅ All validations passed!")
        return 0
    else:
        print(f"\n⚠️  {total_issues} issues need attention")
        return 1


if __name__ == "__main__":
    try:
        exit_code = validate_planphases()
        sys.exit(exit_code)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
