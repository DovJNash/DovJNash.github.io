#!/usr/bin/env python3
"""
Generate detailed task descriptions for Phase 3 (Classical ML) and Phase 4 (Deep Learning Core).
Follows the style/quality established in PR #18 and Phase 1-2 follow-up PR.

Each task receives a 120-200+ word paragraph with:
- Action: Exact steps with filenames/paths, dataset names, key parameters
- Boundaries: What NOT to do (scope fences)
- Deliverables: Explicit files (notebooks, docs, artifacts, scripts, checkpoints)
- Verification: Concrete checks/metrics
- Pitfalls: Common mistakes and quick fixes
- Sources: 2-6 authoritative links
"""

import re
import json

# Phase 3: Classical ML (Days 50-70) - Detailed templates by topic
PHASE3_DETAILS = {
    # Day 50: Sklearn Introduction
    "day50_task1": """<strong>Action:</strong> Complete <a href="https://www.datacamp.com/courses/supervised-learning-with-scikit-learn" target="_blank" rel="noopener">DataCamp: Introduction to Machine Learning with scikit-learn Chapter 1</a>, focusing on the sklearn API pattern (fit, predict, score), supervised learning concepts, and classification vs regression. Take notes on estimator interface, hyperparameters, and the train-test split paradigm. Work through all exercises to understand how sklearn abstracts ML algorithms. <strong>Boundaries:</strong> Stop after Chapter 1—don't dive into ensemble methods or advanced topics yet. Focus on understanding the consistent sklearn API that makes all models interchangeable. <strong>Deliverable:</strong> Completed DataCamp chapter with notes on the sklearn design philosophy and basic workflow (import, instantiate, fit, predict). <strong>Verification:</strong> Can you explain the sklearn estimator pattern and why it's powerful? Common pitfall: treating sklearn as a black box—understand what fit() computes and what predict() returns. Success check: Can you train a simple classifier on toy data and evaluate it? Estimated time: 90 minutes. <strong>Resources:</strong> <a href="https://scikit-learn.org/stable/getting_started.html" target="_blank" rel="noopener">sklearn Getting Started</a>, <a href="https://scikit-learn.org/stable/tutorial/basic/tutorial.html" target="_blank" rel="noopener">sklearn Tutorial</a>""",
    
    "day50_task2": """<strong>Action:</strong> Create <code>notebooks/classical_ml/day50_sklearn_intro.ipynb</code> exploring the sklearn ecosystem. Structure: (1) Import sklearn and verify installation, (2) Load a toy dataset (load_iris or make_classification), (3) Explore dataset structure (.data, .target, .feature_names), (4) Demonstrate train_test_split with various split ratios, (5) Train a simple classifier (LogisticRegression or KNeighborsClassifier), (6) Evaluate with .score() method. Add markdown cells explaining each step, the sklearn API pattern, and why reproducible splits matter (random_state parameter). <strong>Boundaries:</strong> Keep it simple—use default hyperparameters, focus on workflow not model tuning. Include data exploration (shape, dtypes, class distribution) before modeling. <strong>Deliverable:</strong> A well-documented notebook demonstrating the end-to-end sklearn workflow with clear outputs and explanations. <strong>Verification:</strong> Notebook runs error-free, demonstrates fit-predict-score pattern, explains why train-test split prevents overfitting. Common pitfall: forgetting to set random_state, making results non-reproducible. Success check: Someone unfamiliar with sklearn should understand the basic workflow from your notebook. Estimated time: 90 minutes. <strong>Resources:</strong> <a href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html" target="_blank" rel="noopener">train_test_split docs</a>""",
    
    "day50_task3": """<strong>Action:</strong> Train your first LogisticRegression model on the Iris dataset in the same notebook. Steps: (1) Load iris dataset with <code>from sklearn.datasets import load_iris</code>, (2) Examine the 4 features (sepal length/width, petal length/width) and 3 classes, (3) Split data 80/20 with stratification to preserve class balance, (4) Import and instantiate LogisticRegression with default params, (5) Fit on training data, (6) Predict on test set, (7) Calculate accuracy score. Add visualization of predictions vs actuals. <strong>Boundaries:</strong> Use default solver and regularization—don't tune hyperparameters yet. Focus on understanding what logistic regression computes (class probabilities via sigmoid). Work with all 150 samples, all 4 features, all 3 classes (multi-class classification). <strong>Deliverable:</strong> Trained LogisticRegression model achieving >90% accuracy on Iris test set with prediction analysis. <strong>Verification:</strong> Model accuracy >0.90, predictions align with ground truth for most samples. Common pitfall: forgetting to fit before predict—sklearn raises NotFittedError. Success check: Can you interpret the model's class probability predictions using predict_proba()? Estimated time: 60 minutes. <strong>Resources:</strong> <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html" target="_blank" rel="noopener">LogisticRegression docs</a>, <a href="https://scikit-learn.org/stable/auto_examples/linear_model/plot_iris_logistic.html" target="_blank" rel="noopener">Iris Logistic Regression Example</a>""",
    
    "day50_task4": """<strong>Action:</strong> Visualize decision boundaries for your Iris classifier to understand how logistic regression partitions feature space. Implementation: (1) Select two features (petal length and petal width for clearest separation), (2) Create a meshgrid covering the feature space range, (3) Predict class for every point in the mesh, (4) Plot decision regions with contourf, (5) Overlay training points with scatter, color-coded by true class. Show how the model creates linear decision boundaries separating classes. Add 3D visualization if using 3 features. <strong>Boundaries:</strong> Start with 2D visualization (2 features) before attempting 3D. Use matplotlib's contourf for filled contours, scatter for data points. Include color bar and legend. Don't spend time on artistic styling—focus on clarity. <strong>Deliverable:</strong> Clear decision boundary plot showing how logistic regression separates Iris classes in feature space, saved as <code>artifacts/day50_decision_boundaries.png</code>. <strong>Verification:</strong> Plot clearly shows decision regions, data points, and class labels. Boundaries should be roughly linear. Common pitfall: meshgrid resolution too coarse—use at least 100 points per axis. Success check: Can you see where the model is confident vs uncertain? Estimated time: 45 minutes. <strong>Resources:</strong> <a href="https://scikit-learn.org/stable/auto_examples/classification/plot_classifier_comparison.html" target="_blank" rel="noopener">Classifier Comparison Visualization</a>""",
    
    "day50_task5": """<strong>Action:</strong> Write <code>docs/notes/day50_sklearn.md</code> summarizing sklearn fundamentals and your first classification experience. Structure: (1) The sklearn API philosophy (estimators, fit/predict pattern, consistency across models), (2) Why train-test split is essential (overfitting prevention, honest evaluation), (3) Logistic regression intuition (linear model + sigmoid for probabilities), (4) Decision boundaries concept (how models partition feature space), (5) Key takeaways and open questions. Aim for 500-700 words. Include code snippets showing the basic workflow pattern. <strong>Boundaries:</strong> Write in your own voice—don't copy docs. Focus on your understanding and insights from today. What surprised you? What was confusing? Explain concepts as if teaching a peer. <strong>Deliverable:</strong> Well-structured markdown document capturing sklearn fundamentals and first classification insights. <strong>Verification:</strong> Document explains sklearn API, train-test split rationale, and logistic regression basics clearly. No spelling errors, proper markdown formatting. Common pitfall: being too abstract—use concrete Iris example to ground explanations. Success check: Could you reference this document later to remember today's key insights? Estimated time: 30 minutes. <strong>Resources:</strong> <a href="https://scikit-learn.org/stable/developers/develop.html" target="_blank" rel="noopener">sklearn API Design</a>""",
}

# Phase 4: Deep Learning Core (Days 71-119) - Detailed templates by topic
PHASE4_DETAILS = {
    # Day 71: PyTorch Introduction
    "day71_task1": """<strong>Action:</strong> Complete the <a href="https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" target="_blank" rel="noopener">PyTorch 60-minute blitz tutorial</a>, focusing on tensor fundamentals, autograd basics, and neural network building blocks. Work through all sections: What is PyTorch?, Autograd, Neural Networks, and Training a Classifier. Take notes on tensor operations, requires_grad flag, backward() computation, nn.Module structure, and optimizer step pattern. Run all code examples and experiment with modifications. <strong>Boundaries:</strong> Complete the full tutorial but don't diverge into advanced topics. Focus on understanding PyTorch's eager execution model (vs TensorFlow's graph model), dynamic computational graphs, and the manual training loop structure. <strong>Deliverable:</strong> Completed tutorial with running code examples and notes on PyTorch fundamentals (tensors, autograd, nn.Module, DataLoader, optimizer pattern). <strong>Verification:</strong> Can you explain the difference between NumPy arrays and PyTorch tensors? Can you describe what happens when you call loss.backward()? Common pitfall: skipping autograd concepts—they're foundational for understanding how gradients flow. Success check: Can you write a minimal training loop from scratch? Estimated time: 90 minutes. <strong>Resources:</strong> <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener">PyTorch Documentation</a>, <a href="https://pytorch.org/docs/stable/tensors.html" target="_blank" rel="noopener">Tensor Documentation</a>""",
    
    "day71_task2": """<strong>Action:</strong> Create <code>notebooks/deep_learning/day71_pytorch_intro.ipynb</code> exploring PyTorch tensor operations and GPU acceleration. Structure: (1) Import torch and check version, (2) Create tensors from lists, NumPy arrays, and using factory functions (zeros, ones, randn), (3) Demonstrate tensor operations (arithmetic, indexing, reshaping, broadcasting), (4) Show tensor-NumPy interoperability, (5) Explore device management (CPU vs CUDA), (6) Demonstrate moving tensors to GPU if available and timing operations, (7) Show in-place operations (underscore suffix). Compare performance of CPU vs GPU for large matrix multiplication. <strong>Boundaries:</strong> Focus on core tensor operations needed for deep learning—don't explore every tensor method. Include examples of common shapes: batch_size × channels × height × width. Verify CUDA availability but don't require it. <strong>Deliverable:</strong> Comprehensive notebook demonstrating PyTorch tensor fundamentals with performance comparisons and clear explanations. <strong>Verification:</strong> Notebook runs on both CPU and GPU (if available), demonstrates key tensor operations, shows performance benefits of GPU. Common pitfall: forgetting .to(device) when mixing CPU and GPU tensors—raises errors. Success check: Can you create, manipulate, and move tensors confidently? Estimated time: 90 minutes. <strong>Resources:</strong> <a href="https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html" target="_blank" rel="noopener">Tensor Tutorial</a>""",
    
    "day71_task3": """<strong>Action:</strong> Experiment with <code>torch.autograd</code> on simple mathematical functions to understand automatic differentiation. Examples: (1) Define scalar function f(x) = x², compute df/dx = 2x using autograd, (2) Multi-variable function f(x,y) = x²y + y³, compute partial derivatives, (3) Vector function and Jacobian, (4) Chain rule demonstration with composed functions, (5) Explore .backward(), .grad attribute, and gradient accumulation. Verify gradients match analytical derivatives you compute by hand. Visualize how gradients change with input values. <strong>Boundaries:</strong> Start with simple scalar functions before vectors. Always verify autograd output against hand-calculated derivatives. Use requires_grad=True explicitly. Understand when gradients accumulate vs reset (zero_grad). <strong>Deliverable:</strong> Notebook section with 4-5 autograd examples, comparing analytical vs automatic gradients, demonstrating gradient flow through computations. <strong>Verification:</strong> All autograd results match hand-calculated derivatives within floating-point precision. Can explain what computational graph autograd builds. Common pitfall: forgetting to zero gradients between backward() calls—they accumulate! Success check: Can you explain how autograd enables efficient neural network training? Estimated time: 60 minutes. <strong>Resources:</strong> <a href="https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html" target="_blank" rel="noopener">Autograd Tutorial</a>, <a href="https://pytorch.org/docs/stable/autograd.html" target="_blank" rel="noopener">Autograd Documentation</a>""",
    
    "day71_task4": """<strong>Action:</strong> Implement gradient descent manually using autograd to minimize a simple function. Problem: Find minimum of f(x,y) = (x-3)² + (y+2)² using gradient descent. Implementation: (1) Initialize parameters as tensors with requires_grad=True, (2) Set learning rate (try 0.1), (3) Loop for N iterations: compute function value, call backward(), manually update parameters with gradient step (x = x - lr * x.grad), zero gradients, (4) Track and plot function value vs iteration, (5) Visualize optimization trajectory on contour plot. Demonstrate convergence to true minimum (x=3, y=-2). Try different learning rates and observe behavior. <strong>Boundaries:</strong> Implement the update step manually (don't use torch.optim yet). Understand each component: loss computation, backward pass, gradient descent update, gradient zeroing. Start with simple quadratic—it's convex with unique minimum. <strong>Deliverable:</strong> Working gradient descent implementation finding function minimum, with convergence plot and trajectory visualization. <strong>Verification:</strong> Algorithm converges to correct minimum within tolerance (|x-3| < 0.01, |y+2| < 0.01) within 100 iterations. Function value decreases monotonically (if lr not too large). Common pitfall: forgetting to detach parameters from graph during update—use .data or .detach(). Success check: Can you explain why learning rate matters and what happens if it's too large/small? Estimated time: 75 minutes. <strong>Resources:</strong> <a href="https://pytorch.org/tutorials/beginner/examples_autograd/two_layer_net_autograd.html" target="_blank" rel="noopener">Autograd Example</a>""",
    
    "day71_task5": """<strong>Action:</strong> Write <code>docs/notes/day71_pytorch.md</code> summarizing PyTorch fundamentals and autograd magic. Structure: (1) PyTorch vs NumPy: when to use each, key differences (GPU support, autograd, dynamic graphs), (2) Tensor basics: creation, operations, device management, (3) Autograd mechanics: computational graphs, backward pass, gradient computation, (4) Manual gradient descent: the training loop building block, (5) Why autograd is revolutionary for deep learning (eliminates hand-coded derivatives, enables experimentation), (6) Key insights and open questions. Aim for 600-800 words. <strong>Boundaries:</strong> Focus on conceptual understanding not API reference. Explain why these tools matter for building neural networks. Use analogies where helpful (computational graph like recipe, backward like backtracking). <strong>Deliverable:</strong> Clear, insightful markdown document explaining PyTorch fundamentals and their significance for deep learning. <strong>Verification:</strong> Document explains tensors, autograd, and gradient descent clearly with examples. Proper markdown formatting, no spelling errors. Common pitfall: listing features without explaining why they matter—connect to your learning goals. Success check: Could this document help you remember PyTorch fundamentals weeks later? Estimated time: 30 minutes. <strong>Resources:</strong> <a href="https://pytorch.org/blog/computational-graphs-constructed-in-pytorch/" target="_blank" rel="noopener">PyTorch Computational Graphs</a>""",
}


def generate_generic_details(task_label, day_number, topic, task_type="core"):
    """Generate appropriate details based on task type and phase context."""
    
    # Determine if Classical ML (Phase 3) or Deep Learning (Phase 4)
    is_phase3 = 50 <= day_number <= 70
    is_phase4 = 71 <= day_number <= 119
    
    if "Core concepts" in task_label or "core concepts" in task_label.lower():
        return generate_core_concepts_details(topic, is_phase3, is_phase4)
    elif "Implementation" in task_label or "implementation" in task_label.lower():
        return generate_implementation_details(topic, is_phase3, is_phase4)
    elif "Practice" in task_label or "practice" in task_label.lower():
        return generate_practice_details(topic, is_phase3, is_phase4)
    elif "Review" in task_label or "review" in task_label.lower():
        return generate_review_details(day_number, is_phase3)
    elif "weekly log" in task_label.lower():
        return generate_weekly_log_details(day_number)
    else:
        # Default generic template
        return generate_default_details(task_label, topic, is_phase3, is_phase4)


def generate_core_concepts_details(topic, is_phase3, is_phase4):
    """Generate details for 'Core concepts' tasks."""
    if is_phase3:
        resources = """<a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener">sklearn User Guide</a>, <a href="https://hastie.su.domains/ElemStatLearn/" target="_blank" rel="noopener">Elements of Statistical Learning</a>"""
        focus_areas = "algorithm intuition, when to use each method, strengths/weaknesses, and connections to mathematical foundations"
    else:  # Phase 4
        resources = """<a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener">PyTorch Documentation</a>, <a href="https://d2l.ai/" target="_blank" rel="noopener">Dive into Deep Learning</a>"""
        focus_areas = "architecture design, forward/backward pass mechanics, gradient flow, and training stability considerations"
    
    return f"""<strong>Action:</strong> Study the core concepts of {topic} through official documentation, tutorial videos, and worked examples. Focus on understanding {focus_areas}. Take detailed notes on key definitions, formulas, architectural choices, and intuitions. Create concept maps connecting {topic} to previously learned material. Use active learning—don't just read passively; implement small examples as you learn, experiment with parameters, and test your understanding.

<strong>Boundaries:</strong> Focus on conceptual understanding before full implementation. Don't skip foundational concepts to rush ahead. Spend time visualizing and drawing diagrams—mental models are crucial. Stop when you have clear intuition—detailed implementation comes in the next task. Don't get distracted by advanced variants or optimizations yet.

<strong>Deliverable:</strong> Create comprehensive notes document or concept map explaining {topic} in your own words. Include: (1) Core definitions and terminology with examples, (2) Visual diagrams illustrating key concepts and data flow, (3) Connections to prior topics and prerequisite knowledge, (4) 3-5 self-test questions with detailed answers, (5) Summary of when to use this approach vs alternatives.

<strong>Verification:</strong> Can you explain {topic} to someone else without looking at your notes? Can you identify potential pitfalls or common misconceptions? Test yourself by covering your notes and explaining the concept aloud or writing a summary. Your explanation should include both what {topic} is and why it matters for ML systems.

Common pitfall: Passive reading without active engagement leads to shallow understanding. Success check: You should be able to connect {topic} to broader learning objectives and explain why it matters. Can you predict what problems might arise in practice?

Estimated time: 90 minutes including active note-taking, diagramming, and self-testing.

<strong>Resources:</strong> {resources}"""


def generate_implementation_details(topic, is_phase3, is_phase4):
    """Generate details for 'Implementation' tasks."""
    if is_phase3:
        notebook_path = f"notebooks/classical_ml/day{{day}}_{{topic_slug}}.ipynb"
        framework = "scikit-learn"
        resources = """<a href="https://scikit-learn.org/stable/modules/classes.html" target="_blank" rel="noopener">sklearn API Reference</a>, <a href="https://scikit-learn.org/stable/auto_examples/index.html" target="_blank" rel="noopener">sklearn Examples Gallery</a>"""
        verification = "Run all cells error-free, check model accuracy against baselines, verify predictions make sense (no NaNs, correct shapes, reasonable values). Compare against sklearn documentation examples."
    else:  # Phase 4
        notebook_path = f"notebooks/deep_learning/day{{day}}_{{topic_slug}}.ipynb"
        framework = "PyTorch"
        resources = """<a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener">PyTorch Tutorials</a>, <a href="https://pytorch.org/docs/stable/nn.html" target="_blank" rel="noopener">torch.nn Documentation</a>"""
        verification = "Run training loop successfully with loss decreasing, check gradients aren't NaN/exploding, verify model outputs have correct shapes and reasonable values. Use torch.no_grad() for validation, ensure reproducibility with seeds."
    
    return f"""<strong>Action:</strong> Implement {topic} from scratch following best practices and the {framework} API patterns. Start with a minimal working version, then iteratively add features and improvements. Write clean, well-documented code with type hints where appropriate and comprehensive docstrings. Include inline comments explaining non-obvious logic, especially for mathematical operations or architectural choices. Structure your notebook clearly: imports, data loading, model definition, training, evaluation, visualization.

<strong>Boundaries:</strong> Focus on correctness before optimization. Write tests or verification code as you go to verify each component works as expected. Don't copy-paste large code blocks—type everything yourself to build muscle memory and deep understanding. Keep functions small and focused on single responsibilities. Use meaningful variable names (not x, y, z for everything).

<strong>Deliverable:</strong> Create a well-structured implementation in {notebook_path} with: (1) Clear function/class definitions following {framework} conventions, (2) Comprehensive docstrings with parameter descriptions and examples, (3) Verification code checking outputs at each stage, (4) A demonstration section showing the implementation in action on appropriate dataset, (5) Visualization of results (plots, metrics, confusion matrices as applicable).

<strong>Verification:</strong> {verification}

Common pitfall: Writing code without testing incrementally, leading to hard-to-debug errors. Another pitfall: poor variable names making code unreadable. Success check: Your implementation should produce expected outputs for at least 5 diverse test cases. Code should be clean enough that you'd be proud to show it in a code review or add to your portfolio.

Estimated time: 75 minutes including implementation, testing, documentation, and verification.

<strong>Resources:</strong> {resources}"""


def generate_practice_details(topic, is_phase3, is_phase4):
    """Generate details for 'Practice' tasks."""
    if is_phase3:
        practice_focus = "different datasets (classification and regression), various hyperparameter settings, comparing multiple algorithms, analyzing failure cases"
        success_metrics = "model performance metrics (accuracy, precision, recall, F1, AUC), proper cross-validation"
    else:  # Phase 4
        practice_focus = "different architectures, hyperparameter variations (learning rate, batch size, hidden dimensions), training techniques, debugging common issues (vanishing/exploding gradients, overfitting)"
        success_metrics = "training loss convergence, validation accuracy improvement, stable gradients, reasonable training time"
    
    return f"""<strong>Action:</strong> Complete practice exercises to solidify your understanding of {topic}. Work through at least 5-8 problems or experiments of varying difficulty covering {practice_focus}. Start with simpler problems to build confidence, then tackle more challenging ones. Time yourself on some problems to build fluency. Document your process, results, and insights for each experiment.

<strong>Boundaries:</strong> Attempt each problem independently before checking solutions or references. If stuck for more than 15-20 minutes on implementation details, review the relevant concept from previous tasks then retry with fresh perspective. Don't just verify your answer is correct—make sure you understand WHY it's correct, what assumptions you made, and what the exercise was designed to teach you.

<strong>Deliverable:</strong> A collection of solved problems or experiments with your working shown in notebook format. For each problem: (1) Write out your approach and hypotheses, (2) Show implementation with step-by-step work, (3) Visualize results appropriately (plots, tables, metrics), (4) Verify outcomes and analyze any surprises, (5) Note what concept it tested, (6) Identify any patterns, tricks, or insights you learned.

<strong>Verification:</strong> Aim for {success_metrics} on practice problems. If results are poor, debug systematically: check data preprocessing, verify model architecture, examine loss curves, inspect predictions. For any mistakes, understand exactly where your reasoning or implementation went wrong. Can you solve similar problems quickly and confidently now?

Common pitfall: Looking at solutions too quickly instead of struggling productively—the struggle builds deeper understanding. Another pitfall: not varying parameters enough to see their effects. Success check: You should feel significantly more confident with {topic} after practice. You should be able to approach new problems of similar difficulty without help, and debug issues efficiently.

Estimated time: 60 minutes for thorough practice with multiple examples.

<strong>Resources:</strong> <a href="https://scikit-learn.org/stable/auto_examples/index.html" target="_blank" rel="noopener">sklearn Examples</a>, <a href="https://pytorch.org/tutorials/beginner/basics/intro.html" target="_blank" rel="noopener">PyTorch Basics</a>, <a href="https://paperswithcode.com/" target="_blank" rel="noopener">Papers with Code</a>"""


def generate_review_details(day_number, is_phase3):
    """Generate details for review days."""
    week_num = ((day_number - 50) // 7) + 8 if is_phase3 else ((day_number - 71) // 7) + 11
    phase_name = "Classical ML" if is_phase3 else "Deep Learning"
    
    return f"""<strong>Action:</strong> Conduct comprehensive review of Week {week_num} {phase_name} material. Process: (1) Re-read all notes from this week, identifying key concepts and any remaining confusion, (2) Review all notebooks you created—can you follow the logic? Do results still make sense? (3) Revisit hardest concepts: re-watch relevant videos, re-read documentation, create additional examples if needed, (4) Test yourself: solve 2-3 problems from scratch without referring to previous solutions, (5) Create a one-page summary of the week's key insights and how they connect.

<strong>Boundaries:</strong> Don't just skim—engage actively with the material. Focus on understanding, not memorization. If something is still unclear after review, mark it for deeper study or to ask mentors. Don't spend excessive time on material you've mastered—focus on weak areas. Balance breadth (touching all topics) with depth (solidifying shaky concepts).

<strong>Deliverable:</strong> Week {week_num} review document (<code>docs/notes/week{week_num}_review.md</code>) containing: (1) Summary of each day's key topics (2-3 sentences each), (2) Concepts that now make sense that didn't before, (3) Remaining questions or confusion (with plan to address), (4) 3-5 integration questions testing cross-topic understanding, (5) Self-assessment of mastery (1-5 scale) for each major topic with justification.

<strong>Verification:</strong> Review document demonstrates genuine engagement and honest self-assessment. Can you explain this week's concepts to someone else? Can you solve problems combining multiple concepts from the week? Your self-assessment should identify both strengths and areas needing more work.

Common pitfall: Passive re-reading without active problem-solving—you need to test your understanding. Another pitfall: overconfidence from recognizing concepts vs actually being able to use them. Success check: You should feel more confident about the week's material and have a clear plan for any remaining gaps.

Estimated time: 75 minutes for thorough, active review.

<strong>Resources:</strong> Your own notes and notebooks from the week, <a href="https://www.scotthyoung.com/blog/2020/05/04/study-better/" target="_blank" rel="noopener">Effective Study Techniques</a>"""


def generate_weekly_log_details(day_number):
    """Generate details for weekly log tasks."""
    week_num = ((day_number - 50) // 7) + 8 if day_number <= 70 else ((day_number - 71) // 7) + 11
    
    return f"""<strong>Action:</strong> Write your Week {week_num} log documenting progress, challenges, and insights. Structure: (1) Overview: major topics covered, time spent, overall feeling about the week, (2) Achievements: what went well, breakthroughs, successful implementations, concepts that clicked, (3) Challenges: what was difficult, topics needing more work, technical issues encountered, time management struggles, (4) Key learnings: 3-5 major insights or "aha moments" from the week, (5) Looking ahead: goals for next week, specific concepts to reinforce, adjustments to study approach if needed. Be honest and reflective—this log is for you.

<strong>Boundaries:</strong> Keep it concise but substantive—aim for 400-600 words. Focus on learning and growth, not just activities. Don't just list what you did—reflect on what you learned and how you're evolving as a learner. Be specific with examples rather than generic ("I struggled with cross-validation overfitting on the Wine dataset" not "some things were hard").

<strong>Deliverable:</strong> Weekly log document saved as <code>docs/logs/week{week_num}_log.md</code> with structured reflection on progress, challenges, learnings, and forward-looking goals.

<strong>Verification:</strong> Log demonstrates genuine reflection and honest self-assessment. Contains specific examples and insights, not generic platitudes. Shows growth mindset—challenges viewed as learning opportunities. Includes actionable plans for improvement.

Common pitfall: Writing perfunctory logs just to check a box—invest in reflection, it pays dividends in learning efficiency. Another pitfall: being too harsh or too easy on yourself—aim for honest, balanced assessment. Success check: Could you review this log in a month and remember the week clearly? Does it help you see your growth trajectory?

Estimated time: 30 minutes for thoughtful reflection and writing.

<strong>Resources:</strong> <a href="https://www.scotthyoung.com/blog/2010/01/11/learn-faster-by-writing-twice/" target="_blank" rel="noopener">Learning Through Reflection</a>, <a href="https://fs.blog/learning/" target="_blank" rel="noopener">Learning Principles</a>"""


def generate_default_details(task_label, topic, is_phase3, is_phase4):
    """Generate default details for tasks that don't fit specific patterns."""
    # Extract key action from label
    action = task_label.strip()
    
    # Determine appropriate resources and context
    if is_phase3:
        resources = """<a href="https://scikit-learn.org/stable/" target="_blank" rel="noopener">sklearn Documentation</a>, <a href="https://hastie.su.domains/ElemStatLearn/" target="_blank" rel="noopener">ESL Textbook</a>"""
        framework = "sklearn and classical ML"
        context = "understanding algorithm behavior, model selection, and evaluation metrics"
    else:
        resources = """<a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener">PyTorch Docs</a>, <a href="https://d2l.ai/" target="_blank" rel="noopener">D2L.ai</a>"""
        framework = "PyTorch and neural networks"
        context = "understanding architecture design, training dynamics, and debugging techniques"
    
    return f"""<strong>Action:</strong> {action}. Approach this systematically: (1) Review any relevant documentation or examples first, (2) Plan your implementation or study approach, (3) Execute step-by-step with verification at each stage, (4) Document your process, results, and insights, (5) Test your understanding with self-created examples or questions. Focus on building deep understanding of {topic} in the context of {framework}.

<strong>Boundaries:</strong> Stay focused on the stated task—don't diverge into related but out-of-scope topics. Ensure you understand prerequisites before proceeding. If you encounter errors or confusion, debug systematically: check inputs, inspect intermediate outputs, verify assumptions. Don't skip verification steps.

<strong>Deliverable:</strong> Completed task with appropriate artifacts (code, notes, visualizations as applicable). Ensure outputs are well-documented and reproducible. Create clear deliverables that you could reference later or show to others.

<strong>Verification:</strong> Task completed successfully with expected outputs. For code: runs without errors, produces correct results verified against test cases. For conceptual work: can explain the topic clearly to someone else. Common pitfall: rushing through without true understanding—take time to internalize concepts.

Success check: Can you apply what you learned to a novel problem? Can you explain the key insights gained from this task? Do your deliverables reflect quality work?

Estimated time: As specified in task description.

<strong>Resources:</strong> {resources}, relevant examples and tutorials for {context}"""


def main():
    """Main function to process planPhases.js and add details."""
    import sys
    
    # Read the planPhases.js file
    with open('assets/js/data/planPhases.js', 'r') as f:
        content = f.read()
    
    # Find Phase 3 start
    phase3_start = content.find("title: 'Phase 3:")
    phase4_start = content.find("title: 'Phase 4:")
    
    if phase3_start == -1 or phase4_start == -1:
        print("Error: Could not find Phase 3 or Phase 4 in planPhases.js")
        sys.exit(1)
    
    print("Script ready to generate details for Phase 3 and Phase 4")
    print("This script provides the framework and templates.")
    print("Due to the large number of tasks (214), details will be added in batches.")
    print("\nNext steps:")
    print("1. Run a more specific script to process and inject details")
    print("2. Validate the generated details meet the 120+ word requirement")
    print("3. Check for proper HTML formatting and authoritative links")
    

if __name__ == "__main__":
    main()
