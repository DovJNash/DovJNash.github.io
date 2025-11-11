#!/usr/bin/env python3
"""
Generate comprehensive task details for the AI & ML Mastery Plan.
This script creates rich, paragraph-level descriptions following the Week 1 template.
"""

import re
import json

# Resource mapping for different topics
RESOURCE_DATABASES = {
    'numpy': [
        'https://numpy.org/doc/stable/user/absolute_beginners.html',
        'https://numpy.org/doc/stable/user/basics.html',
        'https://numpy.org/doc/stable/reference/routines.linalg.html'
    ],
    'datacamp': [
        'https://www.datacamp.com/courses/intro-to-python-for-data-science',
        'https://www.datacamp.com/courses/intermediate-python',
        'https://www.datacamp.com/courses/data-manipulation-with-pandas'
    ],
    '3blue1brown': [
        'https://www.3blue1brown.com/topics/linear-algebra',
        'https://www.youtube.com/c/3blue1brown'
    ],
    'khan_academy': [
        'https://www.khanacademy.org/math/linear-algebra',
        'https://www.khanacademy.org/math/calculus-1',
        'https://www.khanacademy.org/math/probability'
    ],
    'pytorch': [
        'https://pytorch.org/docs/stable/index.html',
        'https://pytorch.org/tutorials/',
        'https://pytorch.org/docs/stable/nn.html'
    ],
    'sklearn': [
        'https://scikit-learn.org/stable/user_guide.html',
        'https://scikit-learn.org/stable/modules/classes.html',
        'https://scikit-learn.org/stable/tutorial/index.html'
    ],
    'transformers': [
        'https://huggingface.co/docs/transformers/index',
        'https://arxiv.org/abs/1706.03762',  # Attention Is All You Need
        'https://jalammar.github.io/illustrated-transformer/'
    ],
    'gpt': [
        'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf',  # GPT-2
        'https://arxiv.org/abs/2005.14165',  # GPT-3
        'https://github.com/karpathy/nanoGPT'
    ],
    'mlops': [
        'https://docs.pytest.org/',
        'https://black.readthedocs.io/',
        'https://docs.github.com/en/actions'
    ]
}

# Template patterns for different task types
TASK_PATTERNS = {
    'datacamp': {
        'action_template': 'Complete the <a href="{url}" target="_blank" rel="noopener">{course_name}</a> {chapter}, focusing on {key_concepts}. Work through all exercises methodically, taking notes on key concepts.',
        'boundaries': 'Complete only the assigned {unit}—don\'t skip ahead. Focus on understanding concepts deeply rather than rushing through exercises. If stuck on a concept for >20 minutes, flag it for review.',
        'deliverable': 'Completed exercises with >80% accuracy, notes in {notebook_file}, and green checkmarks for all sections in your DataCamp profile.',
        'verification': 'Can you explain the key concepts without looking at notes? Try teaching the concepts to someone else or writing them in your own words. All code examples should run without errors.',
        'pitfalls': 'Common mistake: clicking through exercises without understanding. Take time to experiment with code variations. Don\'t memorize—understand the underlying principles.',
    },
    'video': {
        'action_template': 'Watch <a href="{url}" target="_blank" rel="noopener">{video_title}</a> ({duration} minutes). Focus on {key_concepts}. Pause frequently to visualize concepts and take notes.',
        'boundaries': 'Watch at 1x speed for conceptual videos—speed watching reduces retention. Rewatch confusing sections rather than moving forward with gaps in understanding.',
        'deliverable': 'Notes capturing main insights, 2-3 key takeaways written in your own words, and conceptual understanding demonstrated through examples.',
        'verification': 'After watching, can you explain the core concept to someone unfamiliar with the topic? Create a simple analogy or visualization for the main idea.',
        'pitfalls': 'Passive watching without engagement leads to poor retention. Actively pause and try to predict what comes next. Draw diagrams while watching.',
    },
    'notebook': {
        'action_template': 'Create a comprehensive Jupyter notebook at {file_path} covering: {sections}. Include markdown explanations between code cells, clear visualizations, and well-commented code.',
        'boundaries': 'Focus on clarity and educational value over complexity. Each code cell should have a clear purpose. Include error handling only where essential for understanding.',
        'deliverable': 'A {word_count}-line notebook with {num_examples} complete examples, visualizations with proper labels and legends, and markdown explanations totaling {explanation_words} words.',
        'verification': 'Notebook runs top-to-bottom without errors. Visualizations are clear and properly labeled. A beginner could learn from your notebook. Code follows PEP 8 style guidelines.',
        'pitfalls': 'Overcomplicated code obscures learning. Keep examples simple and focused. Don\'t copy-paste without understanding—type out code to build muscle memory.',
    },
    'implementation': {
        'action_template': 'Implement {concept} from scratch in Python at {file_path}. Start with the mathematical definition, then translate to code. Include docstrings, type hints, and comprehensive tests.',
        'boundaries': 'Use only fundamental libraries ({allowed_libs}). Don\'t use high-level abstractions that hide the learning—the goal is deep understanding. Implement the core algorithm yourself.',
        'deliverable': 'Working implementation in {file_path}, unit tests in {test_file}, and verification that your implementation matches reference results within {tolerance}.',
        'verification': 'Implementation passes all tests. Performance is reasonable (not optimized, but not obviously inefficient). Code is readable and well-documented.',
        'pitfalls': 'Index errors in loops are common—test with small examples first. Off-by-one errors frequently occur. Verify against known examples before assuming correctness.',
    },
    'practice': {
        'action_template': 'Complete {num_problems} practice problems on {topic} from {source}. Focus on {skill_areas}. Work through problems without looking at solutions first.',
        'boundaries': 'Attempt each problem independently for at least 15 minutes before seeking hints. If completely stuck, look for hints (not solutions) first.',
        'deliverable': 'Solutions to all {num_problems} problems in {file_path}, with explanations of approach and any challenges encountered. Accuracy target: ≥{accuracy}%.',
        'verification': 'Solutions are correct and demonstrate understanding of underlying principles. Can you solve similar problems without reference materials?',
        'pitfalls': 'Looking at solutions too quickly prevents learning. Struggle is part of the process. Mistakes teach more than perfect first attempts.',
    },
    'documentation': {
        'action_template': 'Write comprehensive documentation in {file_path} covering {topics}. Structure with clear headings, examples, and explanations. Target length: {word_count} words.',
        'boundaries': 'Write in your own words—don\'t copy from sources. Use simple language and concrete examples. Include diagrams or ASCII art where helpful.',
        'deliverable': 'Well-structured markdown document ({word_count} words) with {num_sections} sections, code examples where relevant, and proper formatting.',
        'verification': 'Document is clear and self-contained. Someone unfamiliar with the topic can learn from it. No spelling/grammar errors. Proper markdown formatting.',
        'pitfalls': 'Being too abstract without examples reduces understanding. Include concrete examples. Don\'t assume reader knowledge—define terms.',
    }
}

def generate_task_details(task_label, phase_id, day_num, task_context=None):
    """
    Generate rich task details following the Week 1 template.
    
    Args:
        task_label: The task label/description
        phase_id: Phase identifier (e.g., 'foundations', 'deep-learning')
        day_num: Day number in the plan
        task_context: Optional dict with additional context
    
    Returns:
        HTML string with detailed task description
    """
    
    # Analyze task to determine type and extract key info
    task_lower = task_label.lower()
    task_type = detect_task_type(task_lower)
    
    # Generate components
    action = generate_action(task_label, task_type, phase_id)
    boundaries = generate_boundaries(task_label, task_type, phase_id)
    deliverable = generate_deliverable(task_label, task_type, phase_id, day_num)
    verification = generate_verification(task_label, task_type)
    pitfalls = generate_pitfalls(task_label, task_type)
    sources = generate_sources(task_label, phase_id, task_type)
    
    # Construct HTML
    details = f'<p><strong>Action:</strong> {action} '
    details += f'<strong>Boundaries:</strong> {boundaries} '
    details += f'<strong>Deliverable:</strong> {deliverable} '
    details += f'<strong>Verification:</strong> {verification} '
    details += f'<strong>Pitfalls:</strong> {pitfalls} '
    
    if sources:
        details += '<strong>Resources:</strong> '
        details += ', '.join([f'<a href="{url}" target="_blank" rel="noopener">{name}</a>' 
                             for name, url in sources])
    
    details += '</p>'
    
    return details

def detect_task_type(task_lower):
    """Detect the type of task based on keywords."""
    if 'datacamp' in task_lower or 'course' in task_lower:
        return 'datacamp'
    elif 'watch' in task_lower or 'video' in task_lower or '3blue1brown' in task_lower:
        return 'video'
    elif 'notebook' in task_lower or 'create' in task_lower and '.ipynb' in task_lower:
        return 'notebook'
    elif 'implement' in task_lower or 'from scratch' in task_lower:
        return 'implementation'
    elif 'practice' in task_lower or 'exercise' in task_lower:
        return 'practice'
    elif 'write' in task_lower or 'document' in task_lower or '.md' in task_lower:
        return 'documentation'
    else:
        return 'general'

def generate_action(task_label, task_type, phase_id):
    """Generate the Action section."""
    # This is a placeholder - in practice, this would use more sophisticated logic
    if task_type == 'datacamp':
        return f'Work through the assigned DataCamp module, focusing on hands-on exercises and core concepts. Take detailed notes on key techniques and common patterns.'
    elif task_type == 'video':
        return f'Watch the educational video with full attention, pausing to visualize and internalize concepts. Take notes on key insights and create examples.'
    elif task_type == 'notebook':
        return f'Create a comprehensive Jupyter notebook with clear structure, visualizations, and explanations. Include both code and markdown cells for maximum educational value.'
    elif task_type == 'implementation':
        return f'Implement the core algorithm from first principles, starting with the mathematical definition. Build iteratively, testing at each step.'
    elif task_type == 'practice':
        return f'Complete all practice problems independently, focusing on understanding rather than speed. Work through each problem systematically.'
    elif task_type == 'documentation':
        return f'Write clear, comprehensive documentation that explains concepts in your own words. Use examples and analogies to aid understanding.'
    else:
        return f'Complete the assigned task with focus on understanding the underlying concepts. Take notes and create examples to reinforce learning.'

def generate_boundaries(task_label, task_type, phase_id):
    """Generate the Boundaries section."""
    boundaries = []
    
    if 'chapter' in task_label.lower():
        boundaries.append('Complete only the assigned chapter—don\'t proceed to later sections.')
    
    boundaries.append('Focus on depth over speed. If a concept is unclear, spend time clarifying it before moving forward.')
    
    if task_type in ['implementation', 'notebook']:
        boundaries.append('Avoid premature optimization. Prioritize clarity and correctness over performance.')
    
    if task_type == 'datacamp':
        boundaries.append('Don\'t skip exercises even if they seem simple—each builds essential skills.')
    
    return ' '.join(boundaries)

def generate_deliverable(task_label, task_type, phase_id, day_num):
    """Generate the Deliverable section."""
    # Extract file paths from task label if present
    file_match = re.search(r'[\w/]+\.(?:ipynb|py|md)', task_label)
    file_path = file_match.group(0) if file_match else f'{phase_id}/day{day_num:02d}_task.ipynb'
    
    if task_type == 'datacamp':
        return f'Completed exercises with >80% accuracy, green checkmarks in DataCamp profile, and notes in notebooks/{phase_id}/day{day_num:02d}_notes.md.'
    elif task_type == 'video':
        return f'Notes capturing key insights in docs/notes/day{day_num:02d}_video_notes.md (300-500 words).'
    elif task_type == 'notebook':
        return f'A complete, executable Jupyter notebook at notebooks/{file_path} with visualizations and explanations.'
    elif task_type == 'implementation':
        return f'Working implementation at src/{file_path}, passing tests, with accuracy matching reference within 1e-6.'
    elif task_type == 'practice':
        return f'Solutions to all practice problems in notebooks/{phase_id}/day{day_num:02d}_practice.ipynb with ≥85% accuracy.'
    elif task_type == 'documentation':
        return f'Well-structured markdown document (500-800 words) at docs/{file_path}.'
    else:
        return f'Completed task artifacts in appropriate directories with documentation.'

def generate_verification(task_label, task_type):
    """Generate the Verification section."""
    checks = []
    
    if task_type == 'notebook':
        checks.append('Notebook runs end-to-end without errors.')
        checks.append('All visualizations render correctly with proper labels.')
    elif task_type == 'implementation':
        checks.append('All unit tests pass.')
        checks.append('Implementation matches reference results within specified tolerance.')
    elif task_type == 'datacamp':
        checks.append('All exercises show green checkmarks.')
        checks.append('Can explain key concepts without notes.')
    elif task_type == 'practice':
        checks.append('Solutions are correct and demonstrable.')
        checks.append('Approach is sound and generalizable.')
    
    checks.append('Can you explain the core concepts to someone else?')
    
    return ' '.join(checks)

def generate_pitfalls(task_label, task_type):
    """Generate the Pitfalls section."""
    pitfalls = {
        'datacamp': 'Don\'t rush through exercises without understanding. Take time to experiment with variations.',
        'video': 'Passive watching without engagement leads to poor retention. Pause frequently and take notes.',
        'notebook': 'Overcomplicated code obscures learning. Keep examples focused and clear.',
        'implementation': 'Index errors and off-by-one mistakes are common. Test with small examples first.',
        'practice': 'Looking at solutions too quickly prevents learning. Struggle is part of the process.',
        'documentation': 'Being too abstract without examples reduces comprehension. Use concrete examples.',
        'general': 'Memorizing without understanding is ineffective. Focus on principles over procedures.'
    }
    
    common_pitfall = pitfalls.get(task_type, pitfalls['general'])
    
    return f'{common_pitfall} Common mistake: assuming understanding without testing yourself. Self-explanation is key.'

def generate_sources(task_label, phase_id, task_type):
    """Generate resource links based on context."""
    sources = []
    task_lower = task_label.lower()
    
    # Add relevant resources based on keywords
    if 'numpy' in task_lower or phase_id == 'foundations':
        sources.append(('NumPy Documentation', RESOURCE_DATABASES['numpy'][0]))
    
    if 'datacamp' in task_lower:
        sources.append(('DataCamp Courses', RESOURCE_DATABASES['datacamp'][0]))
    
    if '3blue1brown' in task_lower or 'video' in task_lower and 'algebra' in task_lower:
        sources.append(('3Blue1Brown Linear Algebra', RESOURCE_DATABASES['3blue1brown'][0]))
    
    if 'khan' in task_lower or phase_id == 'foundations':
        sources.append(('Khan Academy Math', RESOURCE_DATABASES['khan_academy'][0]))
    
    if 'pytorch' in task_lower or phase_id in ['deep-learning', 'gpt-from-scratch']:
        sources.append(('PyTorch Documentation', RESOURCE_DATABASES['pytorch'][0]))
    
    if 'sklearn' in task_lower or phase_id == 'classical-ml':
        sources.append(('scikit-learn Guide', RESOURCE_DATABASES['sklearn'][0]))
    
    if 'transformer' in task_lower or 'attention' in task_lower:
        sources.append(('Attention Is All You Need', RESOURCE_DATABASES['transformers'][1]))
        sources.append(('Illustrated Transformer', RESOURCE_DATABASES['transformers'][2]))
    
    if 'gpt' in task_lower or phase_id == 'gpt-from-scratch':
        sources.append(('GPT-2 Paper', RESOURCE_DATABASES['gpt'][0]))
        sources.append(('nanoGPT', RESOURCE_DATABASES['gpt'][2]))
    
    if phase_id == 'mlops' or 'test' in task_lower or 'ci' in task_lower:
        sources.append(('pytest Documentation', RESOURCE_DATABASES['mlops'][0]))
    
    # Ensure we have at least 2-3 resources
    if len(sources) < 2:
        # Add generic but relevant resources
        if task_type == 'implementation':
            sources.append(('Python Documentation', 'https://docs.python.org/3/'))
        if task_type == 'notebook':
            sources.append(('Jupyter Documentation', 'https://jupyter.org/documentation'))
    
    # Limit to 6 resources max
    return sources[:6]

# Test the generator
if __name__ == '__main__':
    # Test with a sample task
    sample_task = "Complete DataCamp: Machine Learning Fundamentals Chapter 2"
    details = generate_task_details(sample_task, 'classical-ml', 52)
    print("Generated Details:")
    print(details)
    print(f"\nWord count: {len(details.split())}")
