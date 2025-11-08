#!/usr/bin/env python3
"""
Generate detailed task descriptions for all 364 days following Week 1 pattern.
Uses intelligent templates based on task type and phase context.
"""

import re
import json

# Template for "Core concepts" tasks
CORE_CONCEPTS_TEMPLATE = """<strong>Action:</strong> Study the core concepts of {topic} through a combination of reading documentation, watching tutorial videos, and working through examples. Focus on understanding {focus}. Take detailed notes on key definitions, formulas, and intuitions. Use active learning techniques—don't just read passively.

<strong>Boundaries:</strong> Focus on conceptual understanding before implementation. Don't skip foundational concepts to rush ahead. Spend time visualizing and drawing diagrams to solidify understanding. Stop when you have a clear mental model—you'll implement in the next task.

<strong>Deliverable:</strong> Create a concept map or notes document explaining {topic} in your own words. Include: (1) Core definitions and terminology, (2) Visual diagrams illustrating key concepts, (3) Connections to prior topics, (4) 3-5 self-test questions with answers.

<strong>Verification:</strong> Can you explain {topic} to someone else without looking at your notes? Can you identify potential pitfalls or common misconceptions? Test yourself by covering your notes and explaining the concept aloud.

Common pitfall: Passive reading without active engagement. Success check: You should be able to connect {topic} to the broader learning objectives and explain why it matters for machine learning systems.

Estimated time: 90 minutes including active note-taking and self-testing.

<strong>Resources:</strong> <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener">PyTorch Documentation</a>, <a href="https://huggingface.co/docs" target="_blank" rel="noopener">Hugging Face Docs</a>"""

# Template for "Implementation" tasks
IMPLEMENTATION_TEMPLATE = """<strong>Action:</strong> Implement {topic} from scratch following best practices. Start with a minimal working version, then iteratively add features and improvements. Write clean, well-documented code with type hints and docstrings. Include inline comments explaining non-obvious logic.

<strong>Boundaries:</strong> Focus on correctness before optimization. Write tests as you go to verify each component works. Don't copy-paste large code blocks—type everything yourself to build muscle memory. Keep functions small and focused on single responsibilities.

<strong>Deliverable:</strong> Create a well-structured implementation file with: (1) Clear function/class definitions, (2) Comprehensive docstrings with examples, (3) Unit tests verifying correctness, (4) A demonstration notebook showing the implementation in action.

<strong>Verification:</strong> Run all tests—they should pass. Code should execute without errors. Check edge cases: what happens with empty inputs, very large inputs, or invalid inputs? Use assertions to catch bugs early. Compare outputs against reference implementations where applicable.

Common pitfall: Writing code without testing, leading to subtle bugs. Success check: Your implementation should match expected outputs for at least 5 diverse test cases. Code should be clean enough that you'd be proud to show it in a code review.

Estimated time: 75 minutes including testing and documentation.

<strong>Resources:</strong> <a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener">PyTorch Tutorials</a>, <a href="https://docs.python.org/3/" target="_blank" rel="noopener">Python Documentation</a>"""

# Template for "Practice" tasks  
PRACTICE_TEMPLATE = """<strong>Action:</strong> Complete practice exercises to solidify your understanding of {topic}. Work through at least 5-8 problems of varying difficulty. Start with simpler problems to build confidence, then tackle more challenging ones. Time yourself on some problems to build fluency.

<strong>Boundaries:</strong> Attempt each problem independently before checking solutions. If stuck for more than 10-15 minutes, review the relevant concept then retry. Don't just verify your answer is correct—make sure you understand WHY it's correct and what the question was testing.

<strong>Deliverable:</strong> A collection of solved problems with your working shown. For each problem: (1) Write out your approach, (2) Show step-by-step work, (3) Verify your answer, (4) Note what concept it tested, (5) Identify any patterns or tricks you learned.

<strong>Verification:</strong> Aim for 85%+ accuracy. If scoring lower, review the underlying concepts before proceeding. For any mistakes, understand exactly where your reasoning went wrong. Can you solve similar problems quickly now?

Common pitfall: Looking at solutions too quickly instead of struggling productively. Success check: You should feel significantly more confident with {topic} after practice. You should be able to solve new problems of similar difficulty without help.

Estimated time: 60 minutes for deliberate practice and reflection.

<strong>Resources:</strong> <a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>, <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode</a>"""

# Template for "Review week materials" tasks
REVIEW_MATERIALS_TEMPLATE = """<strong>Action:</strong> Systematically review all materials from Week {week_num}. Open each notebook and re-run all cells to ensure everything still works. Review your notes and identify sections that remain unclear. Create a summary document highlighting the most important concepts, formulas, and techniques covered.

<strong>Boundaries:</strong> This is active review, not passive re-reading. Test your understanding by solving problems without looking at solutions. Identify gaps in your knowledge—these are opportunities for deeper learning. Spend extra time on topics that felt difficult during the week.

<strong>Deliverable:</strong> A comprehensive week review document containing: (1) Summary of main topics covered, (2) Key insights and "aha" moments, (3) Connections between different topics, (4) Areas needing more practice, (5) Updated concept maps showing how everything fits together, (6) Questions to explore in future weeks.

<strong>Verification:</strong> Can you solve a random problem from any day this week without looking up the approach? Can you explain each major concept to someone else? Your review should reveal a coherent story of what you learned this week.

Common pitfall: Skimming materials without deep engagement. Success check: After review, you should feel confident you could teach this week's content to someone else. Any confusion should be clearly identified and scheduled for additional study.

Estimated time: 75 minutes for thorough review across all days.

<strong>Resources:</strong> Your Week {week_num} notebooks and notes, <a href="https://www.coursera.org/learn/learning-how-to-learn" target="_blank" rel="noopener">Learning How to Learn</a>"""

# Template for "Practice exercises" tasks
PRACTICE_EXERCISES_TEMPLATE = """<strong>Action:</strong> Complete comprehensive practice exercises covering Week {week_num} topics. Choose 8-10 problems that span all major concepts from the week. Include a mix of difficulty levels: some to build confidence, some to challenge you. Time some problems to build speed and fluency.

<strong>Boundaries:</strong> Work independently—resist the urge to immediately look up solutions. If stuck, review the specific concept rather than the solution. For each problem, write out your full reasoning process, not just the final answer. Explain your approach as if teaching someone else.

<strong>Deliverable:</strong> A problem set with complete solutions showing: (1) Problem statement, (2) Your approach and reasoning, (3) Step-by-step work, (4) Final answer with units/interpretation, (5) Verification of correctness, (6) Reflection on what you learned. Organize by topic to identify strength and weakness areas.

<strong>Verification:</strong> Aim for 85%+ correct on first attempt. For any errors, categorize them: conceptual misunderstanding vs. careless mistake vs. incomplete knowledge. Can you now solve each problem type confidently? Create 2-3 similar problems yourself to test deep understanding.

Common pitfall: Doing problems mechanically without understanding the underlying principles. Success check: You should recognize problem patterns and know which techniques to apply. Mistakes should teach you something specific about gaps in understanding.

Estimated time: 60 minutes for focused problem-solving and reflection.

<strong>Resources:</strong> <a href="https://www.khanacademy.org/" target="_blank" rel="noopener">Khan Academy</a>, <a href="https://brilliant.org/" target="_blank" rel="noopener">Brilliant.org</a>"""

# Template for "Write weekly log" tasks
WEEKLY_LOG_TEMPLATE = """<strong>Action:</strong> Write a comprehensive, reflective weekly log for Week {week_num}. This is your learning journal—be honest about what worked, what didn't, and how you grew. Include: (1) Main topics covered and key takeaways, (2) Most interesting insights or "aha" moments, (3) Biggest challenges and how you addressed them, (4) Artifacts created, (5) Skills developed, (6) Time management observations, (7) Community engagement, (8) Plans for next week.

<strong>Boundaries:</strong> Write in first person—this is YOUR story. Be specific with examples rather than generic statements. Include both successes and struggles. Aim for 600-800 words of thoughtful reflection.

<strong>Deliverable:</strong> A well-structured markdown document (docs/weekly_logs/week_{week_num:02d}.md) that captures your complete learning experience. Future you should be able to read this and remember the week clearly. Include links to key artifacts you created.

<strong>Verification:</strong> Does your log tell a coherent story of your week? Does it include specific examples and insights? Would someone reading it understand your learning journey? Have you identified actionable improvements for next week?

Common pitfall: Writing a dry checklist instead of a reflective narrative. Success check: Your log should reveal patterns in how you learn best and help you optimize your study approach. It should document both intellectual progress and metacognitive growth.

Estimated time: 30-45 minutes for thoughtful writing and editing.

<strong>Resources:</strong> <a href="https://www.edutopia.org/article/powerful-benefits-reflective-journaling" target="_blank" rel="noopener">Reflective Journaling</a>, <a href="https://fs.blog/deliberate-practice-guide/" target="_blank" rel="noopener">Deliberate Practice</a>"""

def extract_topic_from_label(label):
    """Extract the main topic from a task label."""
    # Pattern: "Topic: Core concepts" -> extract "Topic"
    if ':' in label:
        topic = label.split(':')[0].strip()
        return topic
    return label

def generate_details_for_task(task, day, phase_id, week_num):
    """Generate details string for a task based on its label pattern."""
    label = task.get('label', '')
    
    # Check for patterns
    if ': Core concepts' in label or ': core concepts' in label:
        topic = extract_topic_from_label(label)
        focus = "the fundamental principles and how they connect to machine learning"
        return CORE_CONCEPTS_TEMPLATE.format(topic=topic, focus=focus)
    
    elif ': Implementation' in label or ': implementation' in label:
        topic = extract_topic_from_label(label)
        return IMPLEMENTATION_TEMPLATE.format(topic=topic)
    
    elif ': Practice' in label or ': practice' in label:
        topic = extract_topic_from_label(label)
        return PRACTICE_TEMPLATE.format(topic=topic)
    
    elif 'Review week materials' in label:
        return REVIEW_MATERIALS_TEMPLATE.format(week_num=week_num)
    
    elif 'Practice exercises' in label:
        return PRACTICE_EXERCISES_TEMPLATE.format(week_num=week_num)
    
    elif 'Write weekly log' in label or 'weekly log' in label.lower():
        return WEEKLY_LOG_TEMPLATE.format(week_num=week_num, week_num=week_num)
    
    else:
        # Generic template for other tasks
        return None

print("Template definitions created successfully")
print("This script provides templates for generating task details")
print("Templates cover: Core Concepts, Implementation, Practice, Review, and Weekly Logs")
