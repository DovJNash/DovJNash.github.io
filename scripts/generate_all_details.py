#!/usr/bin/env python3
"""
Add comprehensive task details to Phases 1-3 following Week 1 patterns.
This script will intelligently generate 120-200+ word details with proper structure.
"""

import re
import json
from typing import Dict, List, Tuple

# Read original file
with open('assets/js/data/planPhases.js', 'r') as f:
    original_content = f.read()

def create_detail_for_task(task_label: str, day_context: Dict) -> str:
    """
    Generate a comprehensive details field for a task.
    Follows Week 1 format: Action, Boundaries, Deliverable, Verification, Pitfalls, Resources
    Target: 120-200+ words with 2-6 links
    """
    
    day_num = day_context.get('day', 0)
    title = day_context.get('title', '')
    phase = day_context.get('phase', '')
    
    # Parse task type and topic from label
    task_lower = task_label.lower()
    
    # Common resource links based on topic
    resources = []
    
    # DataCamp tasks
    if 'datacamp' in task_lower:
        resources.append('<a href="https://www.datacamp.com/" target="_blank" rel="noopener">DataCamp</a>')
        action = f"Work through the DataCamp course material systematically"
        boundaries = "Complete all exercises in the specified chapter. Take notes on key concepts and code patterns. Don't skip the practice problems—they reinforce learning."
        deliverable = f"Completed exercises with notes on key concepts covered in the course material"
        verification = "All course exercises should be complete with correct solutions. Can you explain the main concepts without looking at notes?"
        pitfalls = "Rushing through without practicing. Success check: You should be able to apply the concepts to new problems."
        
    # 3Blue1Brown videos
    elif '3blue1brown' in task_lower or 'essence of linear algebra' in task_lower:
        resources.extend([
            '<a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>',
            '<a href="https://www.youtube.com/c/3blue1brown" target="_blank" rel="noopener">3Blue1Brown YouTube</a>'
        ])
        action = f"Watch the specified 3Blue1Brown video focusing on visual intuition and geometric understanding"
        boundaries = "Pause frequently to visualize concepts. Rewatch confusing sections. Focus on understanding WHY things work, not just WHAT they are."
        deliverable = "Mental model and geometric intuition for the concepts covered. Consider drawing diagrams to solidify understanding."
        verification = "Can you explain the concept visually to someone else? Can you predict behavior before seeing calculations?"
        pitfalls = "Passive watching without engagement. Success check: You should have geometric intuition, not just formula knowledge."
        
    # Khan Academy
    elif 'khan academy' in task_lower:
        resources.extend([
            '<a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" rel="noopener">Khan Academy Linear Algebra</a>',
            '<a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>'
        ])
        action = f"Complete the Khan Academy exercises on {title} aiming for mastery level"
        boundaries = "Work through all practice problems. Don't use hints unless stuck for 10+ minutes. Strive for 100% mastery before moving on."
        deliverable = "Mastery-level completion of the exercise set with correct solutions"
        verification = "You should consistently get problems correct without help. Can you solve similar problems quickly?"
        pitfalls = "Moving on without achieving mastery. Success check: Green checkmarks and ability to solve problems confidently."
        
    # Notebook creation
    elif 'create notebooks/' in task_lower or 'notebook' in task_lower:
        resources.extend([
            '<a href="https://jupyter.org/documentation" target="_blank" rel="noopener">Jupyter Documentation</a>',
            '<a href="https://numpy.org/doc/stable/" target="_blank" rel="noopener">NumPy Documentation</a>'
        ])
        notebook_name = task_label.split('notebooks/')[-1].split()[0] if 'notebooks/' in task_label else 'your notebook'
        action = f"Create a comprehensive Jupyter notebook ({notebook_name}) with clear sections, code cells, and markdown explanations"
        boundaries = "Include: (1) Imports and setup, (2) Working examples with comments, (3) Visualizations where relevant, (4) Markdown cells explaining concepts. Keep code clean and well-documented."
        deliverable = f"A well-structured notebook that could serve as a tutorial for others learning the topic"
        verification = "Notebook runs top-to-bottom without errors. Code is commented. Visualizations are clear. Someone else could learn from it."
        pitfalls = "Creating code-only notebooks without explanations. Success check: Your notebook teaches the concept effectively."
        
    # Artifact generation (images/plots)
    elif 'generate artifacts/' in task_lower or 'artifact' in task_lower:
        resources.extend([
            '<a href="https://matplotlib.org/stable/gallery/index.html" target="_blank" rel="noopener">Matplotlib Gallery</a>',
            '<a href="https://matplotlib.org/stable/tutorials/index.html" target="_blank" rel="noopener">Matplotlib Tutorials</a>'
        ])
        action = f"Create a high-quality visualization demonstrating {title} concepts clearly and effectively"
        boundaries = "Use proper labels, titles, legends, and color schemes. Save at 300 DPI. Make it publication-ready but focus on clarity over aesthetics."
        deliverable = "A clear, well-labeled PNG file that effectively communicates the concept visually"
        verification = "Image is sharp and readable. Labels are clear. Could this be used in a presentation?"
        pitfalls = "Low resolution or cluttered visualizations. Success check: Someone unfamiliar with the topic should gain insight from the visualization."
        
    # Write documentation/notes
    elif 'write docs/' in task_lower or 'notes.md' in task_lower:
        resources.extend([
            '<a href="https://www.markdownguide.org/" target="_blank" rel="noopener">Markdown Guide</a>',
            '<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">Markdown Cheatsheet</a>'
        ])
        action = f"Write a comprehensive markdown document explaining {title} in your own words"
        boundaries = "Include: (1) Main concepts and definitions, (2) Why it matters for ML, (3) Examples, (4) Common misconceptions. Aim for 400-600 words. Write as if teaching a peer."
        deliverable = "A well-structured markdown document that serves as a reference for the topic"
        verification = "Document is clear, accurate, and insightful. No spelling errors. Could you teach from this document?"
        pitfalls = "Copying definitions instead of explaining in your own words. Success check: Writing reveals true understanding."
        
    # Review tasks
    elif 'review' in task_lower:
        resources.extend([
            '<a href="https://www.coursera.org/learn/learning-how-to-learn" target="_blank" rel="noopener">Learning How to Learn</a>',
            '<a href="https://fs.blog/deliberate-practice-guide/" target="_blank" rel="noopener">Deliberate Practice Guide</a>'
        ])
        action = f"Systematically review materials from {title}, re-running code and testing understanding"
        boundaries = "This is active review, not passive reading. Test yourself on concepts. Identify gaps. Spend time on difficult areas."
        deliverable = "Refreshed understanding with any gaps or questions clearly identified"
        verification = "Can you solve random problems from this period without looking up solutions? Can you explain concepts to others?"
        pitfalls = "Passive skimming instead of active engagement. Success check: You should feel confident teaching this material."
        
    # Testing/Pytest
    elif 'pytest' in task_lower or 'test' in task_lower:
        resources.extend([
            '<a href="https://docs.pytest.org/" target="_blank" rel="noopener">Pytest Documentation</a>',
            '<a href="https://realpython.com/pytest-python-testing/" target="_blank" rel="noopener">Real Python: Pytest Guide</a>'
        ])
        action = f"Set up pytest testing infrastructure and write comprehensive tests"
        boundaries = "Create test files following pytest conventions. Write tests for key functions. Ensure all tests pass."
        deliverable = "Working test suite with good coverage of core functionality"
        verification = "Run `pytest` - all tests should pass. Tests should cover normal cases and edge cases."
        pitfalls = "Writing tests that don't actually test anything meaningful. Success check: Tests catch real bugs."
        
    # Sklearn/ML tasks
    elif 'sklearn' in task_lower or 'scikit-learn' in task_lower:
        resources.extend([
            '<a href="https://scikit-learn.org/stable/documentation.html" target="_blank" rel="noopener">Scikit-learn Documentation</a>',
            '<a href="https://scikit-learn.org/stable/tutorial/index.html" target="_blank" rel="noopener">Scikit-learn Tutorials</a>'
        ])
        action = f"Work with scikit-learn to understand {title} implementation and best practices"
        boundaries = "Follow sklearn conventions. Use proper train/test splits. Evaluate with appropriate metrics."
        deliverable = "Working sklearn implementation with proper evaluation and interpretation"
        verification = "Code runs without errors. Results are reasonable. Can you explain what each parameter does?"
        pitfalls = "Using sklearn as a black box without understanding. Success check: You understand both the API and the underlying concepts."
        
    # Generic fallback
    else:
        resources.extend([
            '<a href="https://docs.python.org/3/" target="_blank" rel="noopener">Python Documentation</a>',
            '<a href="https://numpy.org/doc/" target="_blank" rel="noopener">NumPy Documentation</a>'
        ])
        # Extract topic from label
        topic = task_label.split(':')[0] if ':' in task_label else task_label
        action = f"Complete the task: {task_label}"
        boundaries = "Focus on understanding rather than just completion. Take notes on key insights."
        deliverable = f"Completed task with clear understanding of {topic}"
        verification = "Task objectives met. Can you explain what you learned?"
        pitfalls = "Rushing without understanding. Success check: You can apply these concepts to new situations."
    
    # Add phase-specific resources
    if phase == 'foundations':
        if 'linear algebra' in title.lower() and '<a href="https://www.khanacademy.org' not in str(resources):
            resources.append('<a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" rel="noopener">Khan Academy Linear Algebra</a>')
    elif phase == 'classical-ml':
        if '<a href="https://scikit-learn.org' not in str(resources):
            resources.append('<a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener">Scikit-learn Documentation</a>')
    
    # Ensure we have at least 2 resources
    if len(resources) < 2:
        resources.append('<a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>')
    
    # Build the details string
    details = f"<strong>Action:</strong> {action}. "
    details += f"<strong>Boundaries:</strong> {boundaries} "
    details += f"<strong>Deliverable:</strong> {deliverable}. "
    details += f"<strong>Verification:</strong> {verification} "
    details += f"Common pitfall: {pitfalls} "
    details += "Estimated time: As specified in task. "
    details += f"<strong>Resources:</strong> {', '.join(resources)}"
    
    return details

# Test with a sample task
sample_context = {
    'day': 8,
    'title': 'Dot Product & Duality',
    'phase': 'foundations'
}

sample_detail = create_detail_for_task("Watch 3Blue1Brown Ep. 7 'Dot products and duality'", sample_context)
print("Sample generated detail:")
print(sample_detail)
print(f"\nWord count: ~{len(sample_detail.split())}")
