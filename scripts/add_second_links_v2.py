#!/usr/bin/env python3
"""
Properly add second links to tasks that only have one source link.
Uses proper string replacement without regex complications.
"""

import re


def add_second_links_properly():
    """Add second links to specific tasks."""
    
    input_file = 'assets/js/data/planPhases.js'
    backup_file = 'assets/js/data/planPhases.js.backup4'
    
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create backup
    with open(backup_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Backup created: {backup_file}")
    
    # Define replacements as simple string pairs (old substring -> new substring)
    replacements = [
        # Day 50 Task 2
        (
            'train_test_split docs</a>\'',
            'train_test_split docs</a>, <a href="https://scikit-learn.org/stable/tutorial/statistical_inference/supervised_learning.html" target="_blank" rel="noopener">Supervised Learning Tutorial</a>\''
        ),
        # Day 50 Task 4
        (
            'Classifier Comparison Visualization</a>\'',
            'Classifier Comparison Visualization</a>, <a href="https://matplotlib.org/stable/gallery/images_contours_and_fields/contourf_demo.html" target="_blank" rel="noopener">Contourf Demo</a>\''
        ),
        # Day 50 Task 5
        (
            'sklearn API Design</a>\'',
            'sklearn API Design</a>, <a href="https://jakevdp.github.io/PythonDataScienceHandbook/05.02-introducing-scikit-learn.html" target="_blank" rel="noopener">Python Data Science Handbook: sklearn</a>\''
        ),
        # Day 71 Task 2
        (
            'Tensor Tutorial</a>\'',
            'Tensor Tutorial</a>, <a href="https://pytorch.org/docs/stable/torch.html" target="_blank" rel="noopener">torch Package Documentation</a>\''
        ),
        # Day 71 Task 4
        (
            'Autograd Example</a>\'',
            'Autograd Example</a>, <a href="https://pytorch.org/docs/stable/notes/autograd.html" target="_blank" rel="noopener">Autograd Mechanics</a>\''
        ),
        # Day 71 Task 5
        (
            'PyTorch Computational Graphs</a>\'',
            'PyTorch Computational Graphs</a>, <a href="https://pytorch.org/docs/stable/notes/extending.html" target="_blank" rel="noopener">Extending PyTorch</a>\''
        ),
        # Review tasks
        (
            'Effective Study Techniques</a>\'',
            'Effective Study Techniques</a>, <a href="https://www.learningscientists.org/learning-scientists-podcast" target="_blank" rel="noopener">Learning Scientists Podcast</a>\''
        ),
    ]
    
    fixes_applied = 0
    for old_text, new_text in replacements:
        count = content.count(old_text)
        if count > 0:
            content = content.replace(old_text, new_text)
            fixes_applied += count
            print(f"Fixed {count} occurrence(s)")
    
    # Write output
    print(f"\nWriting {input_file}...")
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\nSummary:")
    print(f"  Total fixes applied: {fixes_applied}")
    print(f"  Backup file: {backup_file}")
    
    return fixes_applied


if __name__ == "__main__":
    import sys
    try:
        count = add_second_links_properly()
        print(f"\nSuccess! Fixed {count} tasks.")
        sys.exit(0)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
