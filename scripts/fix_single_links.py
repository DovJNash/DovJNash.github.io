#!/usr/bin/env python3
"""
Fix tasks that only have 1 link by adding a second authoritative source.
Targets specific tasks identified by the validation script.
"""

import re

# Map of task patterns to additional links to add
ADDITIONAL_LINKS = {
    # Phase 3
    "notebooks/classical_ml/day50_sklearn_intro": (
        ", <a href=\"https://scikit-learn.org/stable/tutorial/statistical_inference/supervised_learning.html\" target=\"_blank\" rel=\"noopener\">Supervised Learning Tutorial</a>",
        "train_test_split docs</a>"
    ),
    "Visualize decision boundaries": (
        ", <a href=\"https://matplotlib.org/stable/gallery/images_contours_and_fields/contourf_demo.html\" target=\"_blank\" rel=\"noopener\">Contourf Demo</a>",
        "Classifier Comparison Visualization</a>"
    ),
    "docs/notes/day50_sklearn.md": (
        ", <a href=\"https://jakevdp.github.io/PythonDataScienceHandbook/05.02-introducing-scikit-learn.html\" target=\"_blank\" rel=\"noopener\">Python Data Science Handbook: sklearn</a>",
        "sklearn API Design</a>"
    ),
    # Phase 4
    "notebooks/deep_learning/day71_pytorch_intro": (
        ", <a href=\"https://pytorch.org/docs/stable/torch.html\" target=\"_blank\" rel=\"noopener\">torch Package Documentation</a>",
        "Tensor Tutorial</a>"
    ),
    "Implement gradient descent manually": (
        ", <a href=\"https://pytorch.org/docs/stable/notes/autograd.html\" target=\"_blank\" rel=\"noopener\">Autograd Mechanics</a>",
        "Autograd Example</a>"
    ),
    "docs/notes/day71_pytorch.md": (
        ", <a href=\"https://pytorch.org/docs/stable/notes/extending.html\" target=\"_blank\" rel=\"noopener\">Extending PyTorch</a>",
        "PyTorch Computational Graphs</a>"
    ),
    # Review tasks
    "Review week materials": (
        ", <a href=\"https://www.learningscientists.org/learning-scientists-podcast\" target=\"_blank\" rel=\"noopener\">Learning Scientists Podcast</a>",
        "Effective Study Techniques</a>"
    ),
}


def fix_single_link_tasks():
    """Add second links to tasks that only have one."""
    
    input_file = 'assets/js/data/planPhases.js'
    output_file = 'assets/js/data/planPhases.js'
    backup_file = 'assets/js/data/planPhases.js.backup3'
    
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create backup
    with open(backup_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Backup created: {backup_file}")
    
    fixes_applied = 0
    
    for pattern, (new_link, after_text) in ADDITIONAL_LINKS.items():
        # Find all occurrences
        count = 0
        while True:
            # Find the pattern in a task label
            match = re.search(rf"label: '[^']*{re.escape(pattern)}[^']*'.*?details: '", content, re.DOTALL)
            if not match:
                break
            
            # Find the full details string
            start = match.end()
            # Find matching closing quote (accounting for escaped quotes)
            end = start
            escaped = False
            while end < len(content):
                if content[end] == '\\':
                    escaped = not escaped
                elif content[end] == "'" and not escaped:
                    break
                else:
                    escaped = False
                end += 1
            
            if end >= len(content):
                break
            
            details = content[start:end]
            
            # Check if it needs the fix (has the after_text but not the new_link)
            if after_text in details and new_link not in details:
                # Find the position to insert after
                insert_pos = details.find(after_text) + len(after_text)
                updated_details = details[:insert_pos] + new_link + details[insert_pos:]
                
                # Replace in content
                content = content[:start] + updated_details + content[end:]
                
                count += 1
                fixes_applied += 1
            else:
                # Move past this occurrence to find the next
                # Replace the start of the match to prevent infinite loop
                replace_end = match.start() + len("label:")
                content = content[:replace_end] + "PROCESSED_LABEL:" + content[replace_end+len("label:"):]
        
        # Restore the PROCESSED_LABEL markers
        content = content.replace("PROCESSED_LABEL:", "label:")
        
        if count > 0:
            print(f"Fixed {count} occurrences of '{pattern[:50]}...'")
    
    # Write output
    print(f"\nWriting {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\nSummary:")
    print(f"  Total fixes applied: {fixes_applied}")
    print(f"  Backup file: {backup_file}")
    
    return fixes_applied


if __name__ == "__main__":
    import sys
    try:
        count = fix_single_link_tasks()
        print(f"\nSuccess! Fixed {count} tasks.")
        sys.exit(0)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
