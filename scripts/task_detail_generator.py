#!/usr/bin/env python3
"""
Comprehensive Task Detail Generator for AI & ML Mastery Plan
Generates high-quality, contextually appropriate task details for all 1,199 tasks.
"""

import re
import json

class TaskDetailGenerator:
    """Generates detailed task descriptions following the Week 1 exemplar template."""
    
    def __init__(self):
        self.phase_context = self._load_phase_contexts()
        self.resource_db = self._load_resource_database()
        
    def _load_phase_contexts(self):
        """Load contextual information for each phase."""
        return {
            'foundations': {
                'topics': ['linear algebra', 'calculus', 'probability', 'NumPy', 'vectors', 'matrices', 'eigenvalues'],
                'tools': ['NumPy', 'Matplotlib', 'Jupyter', 'Khan Academy', '3Blue1Brown'],
                'outcomes': 'Build strong mathematical foundations for ML',
            },
            'buffer-setup': {
                'topics': ['development setup', 'pytest', 'black', 'git', 'project structure'],
                'tools': ['pytest', 'black', 'VS Code', 'git', 'Deepnote'],
                'outcomes': 'Establish professional development workflow',
            },
            'classical-ml': {
                'topics': ['sklearn', 'classification', 'regression', 'cross-validation', 'metrics', 'learning curves'],
                'tools': ['scikit-learn', 'pandas', 'matplotlib', 'seaborn'],
                'outcomes': 'Master classical ML techniques and evaluation',
            },
            'deep-learning': {
                'topics': ['PyTorch', 'MLP', 'CNN', 'backpropagation', 'optimization', 'regularization', 'CIFAR-10'],
                'tools': ['PyTorch', 'torchvision', 'tensorboard', 'Kaggle GPUs'],
                'outcomes': 'Build and train neural networks from scratch',
            },
            'nlp-warmup': {
                'topics': ['text processing', 'embeddings', 'RNN', 'character models'],
                'tools': ['PyTorch', 'NLTK', 'spaCy'],
                'outcomes': 'Introduction to NLP fundamentals',
            },
            'transformers': {
                'topics': ['attention mechanism', 'multi-head attention', 'positional encoding', 'transformer architecture'],
                'tools': ['PyTorch', 'Hugging Face Transformers'],
                'outcomes': 'Deep understanding of transformer architecture',
            },
            'gpt-from-scratch': {
                'topics': ['GPT architecture', 'autoregressive models', 'training loops', 'sampling', 'generation'],
                'tools': ['PyTorch', 'Colab Pro', 'wandb', 'Git LFS'],
                'outcomes': 'Implement and train GPT-style models',
            },
            'tokenizer-scaling': {
                'topics': ['BPE tokenization', 'data curation', 'scaling laws', 'compute budgets'],
                'tools': ['tokenizers', 'datasets', 'PyTorch', 'wandb'],
                'outcomes': 'Train tokenizers and understand scaling dynamics',
            },
            'serving-safety': {
                'topics': ['FastAPI', 'Docker', 'HTTPS', 'safety filters', 'monitoring', 'deployment'],
                'tools': ['FastAPI', 'Docker', 'DigitalOcean', 'Sentry', 'nginx'],
                'outcomes': 'Deploy production-ready LLM APIs',
            },
            'peft-optimization': {
                'topics': ['LoRA', 'QLoRA', 'quantization', 'KV-cache', 'inference optimization'],
                'tools': ['PEFT library', 'bitsandbytes', 'PyTorch', 'Azure'],
                'outcomes': 'Efficient fine-tuning and fast inference',
            },
            'buffer-refactor': {
                'topics': ['code refactoring', 'testing', 'documentation', 'cleanup'],
                'tools': ['pytest', 'black', 'mypy', 'sphinx'],
                'outcomes': 'Improve code quality and maintainability',
            },
            'mlops': {
                'topics': ['CI/CD', 'testing', 'logging', 'configs', 'monitoring', 'profiling'],
                'tools': ['pytest', 'GitHub Actions', 'YAML', 'JSONL', 'torch.profiler'],
                'outcomes': 'Production-grade ML engineering practices',
            },
            'capstone': {
                'topics': ['project planning', 'implementation', 'evaluation', 'iteration', 'demo'],
                'tools': ['Full stack', 'all previous tools'],
                'outcomes': 'Complete end-to-end ML project',
            },
            'portfolio': {
                'topics': ['documentation', 'blog writing', 'diagrams', 'presentations', 'GitHub'],
                'tools': ['Markdown', 'Mermaid', 'GitHub Pages', 'Medium'],
                'outcomes': 'Professional portfolio and public presence',
            }
        }
    
    def _load_resource_database(self):
        """Comprehensive resource database organized by topic."""
        return {
            'numpy': [
                ('NumPy Absolute Beginners Guide', 'https://numpy.org/doc/stable/user/absolute_beginners.html'),
                ('NumPy Basics', 'https://numpy.org/doc/stable/user/basics.html'),
                ('NumPy Linear Algebra', 'https://numpy.org/doc/stable/reference/routines.linalg.html'),
            ],
            'linear_algebra': [
                ('3Blue1Brown Linear Algebra', 'https://www.3blue1brown.com/topics/linear-algebra'),
                ('Khan Academy Linear Algebra', 'https://www.khanacademy.org/math/linear-algebra'),
                ('MIT OCW Linear Algebra', 'https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/'),
            ],
            'calculus': [
                ('Khan Academy Calculus', 'https://www.khanacademy.org/math/calculus-1'),
                ('3Blue1Brown Calculus', 'https://www.3blue1brown.com/topics/calculus'),
                ('MIT OCW Single Variable Calculus', 'https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/'),
            ],
            'probability': [
                ('Khan Academy Probability', 'https://www.khanacademy.org/math/statistics-probability'),
                ('Seeing Theory Visual Probability', 'https://seeing-theory.brown.edu/'),
                ('MIT OCW Probability', 'https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/'),
            ],
            'datacamp': [
                ('DataCamp Python Courses', 'https://www.datacamp.com/courses/tech:python'),
                ('DataCamp Data Science Path', 'https://www.datacamp.com/tracks/data-scientist-with-python'),
            ],
            'sklearn': [
                ('scikit-learn User Guide', 'https://scikit-learn.org/stable/user_guide.html'),
                ('scikit-learn API Reference', 'https://scikit-learn.org/stable/modules/classes.html'),
                ('scikit-learn Tutorials', 'https://scikit-learn.org/stable/tutorial/index.html'),
            ],
            'pytorch': [
                ('PyTorch Documentation', 'https://pytorch.org/docs/stable/index.html'),
                ('PyTorch Tutorials', 'https://pytorch.org/tutorials/'),
                ('PyTorch nn Module', 'https://pytorch.org/docs/stable/nn.html'),
                ('PyTorch Autograd', 'https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html'),
            ],
            'deep_learning': [
                ('Deep Learning Book', 'https://www.deeplearningbook.org/'),
                ('Stanford CS231n', 'http://cs231n.stanford.edu/'),
                ('Fast.ai Course', 'https://course.fast.ai/'),
            ],
            'transformers': [
                ('Attention Is All You Need', 'https://arxiv.org/abs/1706.03762'),
                ('Illustrated Transformer', 'https://jalammar.github.io/illustrated-transformer/'),
                ('Annotated Transformer', 'http://nlp.seas.harvard.edu/2018/04/03/attention.html'),
                ('Hugging Face Transformers Docs', 'https://huggingface.co/docs/transformers/index'),
            ],
            'gpt': [
                ('GPT-2 Paper', 'https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf'),
                ('GPT-3 Paper', 'https://arxiv.org/abs/2005.14165'),
                ('nanoGPT Repository', 'https://github.com/karpathy/nanoGPT'),
                ('Karpathy GPT Video', 'https://www.youtube.com/watch?v=kCc8FmEb1nY'),
            ],
            'tokenization': [
                ('Hugging Face Tokenizers', 'https://huggingface.co/docs/tokenizers/index'),
                ('BPE Paper', 'https://arxiv.org/abs/1508.07909'),
                ('SentencePiece', 'https://github.com/google/sentencepiece'),
            ],
            'scaling': [
                ('Chinchilla Paper', 'https://arxiv.org/abs/2203.15556'),
                ('Scaling Laws Paper', 'https://arxiv.org/abs/2001.08361'),
                ('LLM Training Compute Trends', 'https://arxiv.org/abs/2202.05924'),
            ],
            'lora': [
                ('LoRA Paper', 'https://arxiv.org/abs/2106.09685'),
                ('QLoRA Paper', 'https://arxiv.org/abs/2305.14314'),
                ('PEFT Library', 'https://huggingface.co/docs/peft/index'),
            ],
            'optimization': [
                ('FlashAttention Paper', 'https://arxiv.org/abs/2205.14135'),
                ('FlashAttention-2 Paper', 'https://arxiv.org/abs/2307.08691'),
                ('PyTorch Performance Tutorial', 'https://pytorch.org/tutorials/recipes/recipes/tuning_guide.html'),
            ],
            'fastapi': [
                ('FastAPI Documentation', 'https://fastapi.tiangolo.com/'),
                ('FastAPI Tutorial', 'https://fastapi.tiangolo.com/tutorial/'),
                ('Python Type Hints', 'https://docs.python.org/3/library/typing.html'),
            ],
            'docker': [
                ('Docker Documentation', 'https://docs.docker.com/'),
                ('Docker Get Started', 'https://docs.docker.com/get-started/'),
                ('Docker Compose', 'https://docs.docker.com/compose/'),
            ],
            'mlops': [
                ('pytest Documentation', 'https://docs.pytest.org/'),
                ('GitHub Actions Docs', 'https://docs.github.com/en/actions'),
                ('MLOps Best Practices', 'https://ml-ops.org/'),
            ],
            'monitoring': [
                ('Sentry Documentation', 'https://docs.sentry.io/'),
                ('Prometheus Docs', 'https://prometheus.io/docs/'),
            ]
        }
    
    def generate_details(self, task_label, phase_id, day_num, week_num, task_idx=0):
        """Generate comprehensive task details following the Week 1 template."""
        
        task_lower = task_label.lower()
        task_type = self._detect_task_type(task_lower)
        context = self.phase_context.get(phase_id, {})
        
        # Generate each component
        action = self._generate_action(task_label, task_type, phase_id, context, day_num)
        boundaries = self._generate_boundaries(task_label, task_type, phase_id)
        deliverable = self._generate_deliverable(task_label, task_type, phase_id, day_num)
        verification = self._generate_verification(task_label, task_type, phase_id)
        pitfalls = self._generate_pitfalls(task_label, task_type, phase_id)
        sources = self._generate_sources(task_label, phase_id, task_type)
        
        # Construct HTML with proper formatting
        html_parts = [
            f'<p><strong>Action:</strong> {action}',
            f'<strong>Boundaries:</strong> {boundaries}',
            f'<strong>Deliverable:</strong> {deliverable}',
            f'<strong>Verification:</strong> {verification}',
            f'<strong>Pitfalls:</strong> {pitfalls}'
        ]
        
        if sources:
            source_links = ', '.join([
                f'<a href="{url}" target="_blank" rel="noopener">{name}</a>'
                for name, url in sources
            ])
            html_parts.append(f'<strong>Resources:</strong> {source_links}')
        
        html_parts.append('</p>')
        
        return ' '.join(html_parts)
    
    def _detect_task_type(self, task_lower):
        """Detect task type from label keywords."""
        if 'datacamp' in task_lower or 'course' in task_lower:
            return 'datacamp'
        elif 'watch' in task_lower or 'video' in task_lower or '3blue1brown' in task_lower:
            return 'video'
        elif 'create' in task_lower and '.ipynb' in task_lower:
            return 'notebook'
        elif 'notebook' in task_lower:
            return 'notebook'
        elif 'implement' in task_lower or 'from scratch' in task_lower:
            return 'implementation'
        elif 'practice' in task_lower or 'exercise' in task_lower:
            return 'practice'
        elif 'write' in task_lower and '.md' in task_lower:
            return 'documentation'
        elif 'generate' in task_lower and ('.png' in task_lower or 'artifacts' in task_lower):
            return 'visualization'
        elif 'test' in task_lower or 'verify' in task_lower:
            return 'testing'
        elif 'setup' in task_lower or 'install' in task_lower or 'configure' in task_lower:
            return 'setup'
        elif 'train' in task_lower or 'fine-tune' in task_lower:
            return 'training'
        elif 'deploy' in task_lower or 'serve' in task_lower:
            return 'deployment'
        elif 'review' in task_lower or 'summarize' in task_lower:
            return 'review'
        else:
            return 'general'
    
    def _generate_action(self, task_label, task_type, phase_id, context, day_num=1):
        """Generate detailed action instructions."""
        # Extract key information from task label
        task_lower = task_label.lower()
        
        if task_type == 'datacamp':
            chapter_match = re.search(r'chapter\s+(\d+)', task_lower, re.IGNORECASE)
            chapter = f"Chapter {chapter_match.group(1)}" if chapter_match else "the assigned chapter"
            course_name = "DataCamp course"
            
            return (f'Work through {chapter} of the {course_name}, focusing on hands-on exercises and key concepts. '
                   f'Complete all interactive coding challenges, taking detailed notes on patterns and techniques. '
                   f'Experiment with code variations to deepen understanding. For each new concept, create a simple example '
                   f'in your own notebook to test comprehension.')
        
        elif task_type == 'video':
            duration_match = re.search(r'(\d+)\s*min', task_label, re.IGNORECASE)
            duration = duration_match.group(1) if duration_match else "10-15"
            
            return (f'Watch the educational video ({duration} minutes) with full attention, pausing frequently to visualize '
                   f'and internalize concepts. Take comprehensive notes on key insights, drawing diagrams where helpful. '
                   f'After each major concept, pause and try to explain it in your own words before continuing. '
                   f'Rewatch sections that aren\'t immediately clear—depth matters more than speed.')
        
        elif task_type == 'notebook':
            file_match = re.search(r'([\w/]+\.ipynb)', task_label)
            file_path = file_match.group(1) if file_match else f'{phase_id}/day{day_num:02d}_notebook.ipynb'
            
            return (f'Create a comprehensive Jupyter notebook at notebooks/{file_path} with clear structure: '
                   f'(1) Introduction with learning objectives, (2) Theory explanation with examples, '
                   f'(3) Code implementation with inline comments, (4) Visualizations with proper labels and legends, '
                   f'(5) Exercises and solutions. Use markdown cells to explain concepts between code blocks. '
                   f'Ensure the notebook tells a story and can serve as a learning resource.')
        
        elif task_type == 'implementation':
            return (f'Implement {self._extract_concept(task_label)} from first principles without using high-level abstractions. '
                   f'Start by writing the mathematical definition as comments, then translate step-by-step to code. '
                   f'Add comprehensive docstrings explaining parameters, returns, and algorithm steps. '
                   f'Include type hints for clarity. Build iteratively: implement core algorithm first, test with simple cases, '
                   f'then add error handling and edge case support.')
        
        elif task_type == 'practice':
            return (f'Complete all practice problems on {self._extract_topic(task_label)} independently, working through each '
                   f'problem systematically. For each problem: (1) Read carefully and identify what\'s being asked, '
                   f'(2) Plan your approach before coding, (3) Implement solution, (4) Test with multiple examples, '
                   f'(5) Reflect on what you learned. Aim to understand the underlying patterns, not just get correct answers.')
        
        elif task_type == 'documentation':
            word_target = "500-700"
            return (f'Write clear, comprehensive documentation (target: {word_target} words) explaining {self._extract_topic(task_label)} '
                   f'in your own words. Structure with: (1) Brief overview, (2) Key concepts with examples, '
                   f'(3) Practical applications to ML, (4) Common pitfalls and how to avoid them, '
                   f'(5) Connections to other concepts. Write as if teaching someone encountering this topic for the first time. '
                   f'Use analogies and concrete examples rather than abstract definitions.')
        
        elif task_type == 'visualization':
            return (f'Create a publication-quality visualization showing {self._extract_concept(task_label)}. '
                   f'Use clear colors, proper labels, legends, and axes. The visualization should be self-explanatory: '
                   f'someone seeing it without context should understand the key message. Save as high-resolution PNG (300 DPI). '
                   f'Iterate on the design: first get it working, then make it clear, then make it beautiful.')
        
        elif task_type == 'testing':
            return (f'Write comprehensive tests for {self._extract_concept(task_label)} using pytest. '
                   f'Include: (1) Unit tests for individual functions, (2) Integration tests for workflows, '
                   f'(3) Edge case tests (empty inputs, invalid data, boundary conditions), (4) Property-based tests where applicable. '
                   f'Each test should have a clear assertion and descriptive name. Aim for >80% code coverage.')
        
        elif task_type == 'setup':
            return (f'Set up {self._extract_concept(task_label)} following official documentation. '
                   f'Verify installation by running test commands. Document your setup process in a markdown file '
                   f'for future reference, including any troubleshooting steps needed. Test that all components work together '
                   f'before proceeding to next tasks.')
        
        elif task_type == 'training':
            return (f'Train {self._extract_concept(task_label)} with careful monitoring of metrics and logs. '
                   f'Start with small-scale runs to verify setup, then scale up. Track: loss curves, validation metrics, '
                   f'training time, memory usage. Save checkpoints at regular intervals. If training becomes unstable, '
                   f'reduce learning rate and check data preprocessing. Document all hyperparameters and results.')
        
        elif task_type == 'deployment':
            return (f'Deploy {self._extract_concept(task_label)} following production best practices. '
                   f'Test locally first, then deploy to staging environment. Verify: (1) Service starts correctly, '
                   f'(2) Health checks pass, (3) API endpoints respond as expected, (4) Monitoring is active, '
                   f'(5) Logs are being captured. Test error handling and edge cases before going live.')
        
        elif task_type == 'review':
            return (f'Review the week\'s materials systematically: (1) Re-read your notes and identify key concepts, '
                   f'(2) Revisit code and ensure you understand each part, (3) Attempt practice problems without reference, '
                   f'(4) Write a summary of what you learned and what remains unclear, (5) Identify connections between concepts. '
                   f'This is active learning, not passive review—test yourself frequently.')
        
        else:
            return (f'Complete {task_label} with focus on deep understanding of underlying concepts. '
                   f'Work systematically, testing your understanding at each step. Take notes on key insights, '
                   f'challenges encountered, and solutions found. Create examples to reinforce learning. '
                   f'If concepts are unclear, consult multiple resources before moving forward.')
    
    def _extract_concept(self, task_label):
        """Extract the main concept from task label."""
        # Simple heuristic: look for key phrases
        task_lower = task_label.lower()
        if 'matrix' in task_lower:
            return 'matrix operations'
        elif 'attention' in task_lower:
            return 'attention mechanism'
        elif 'transformer' in task_lower:
            return 'transformer architecture'
        elif 'tokenizer' in task_lower or 'bpe' in task_lower:
            return 'tokenizer'
        elif 'gpt' in task_lower:
            return 'GPT model'
        elif 'lora' in task_lower:
            return 'LoRA fine-tuning'
        else:
            # Extract first significant word
            words = task_label.split()
            for word in words:
                if len(word) > 4 and word.lower() not in ['create', 'implement', 'write', 'generate', 'complete']:
                    return word
            return 'the concept'
    
    def _extract_topic(self, task_label):
        """Extract topic from task label."""
        return self._extract_concept(task_label)
    
    def _generate_boundaries(self, task_label, task_type, phase_id):
        """Generate scope boundaries and what NOT to do."""
        boundaries = []
        task_lower = task_label.lower()
        
        # Type-specific boundaries
        if task_type == 'datacamp':
            if 'chapter' in task_lower:
                chapter_num = re.search(r'chapter\s+(\d+)', task_lower, re.IGNORECASE)
                if chapter_num:
                    boundaries.append(f'Complete only Chapter {chapter_num.group(1)}—don\'t proceed to later chapters yet.')
            boundaries.append('Don\'t skip exercises even if they seem simple—each builds essential skills.')
            boundaries.append('Focus on understanding over speed. Take time to experiment with variations.')
        
        elif task_type == 'video':
            boundaries.append('Watch at 1x speed for conceptual content—speed watching reduces retention.')
            boundaries.append('Don\'t just watch passively. Pause frequently to think and take notes.')
            boundaries.append('If a section is confusing, rewatch it rather than moving forward with gaps.')
        
        elif task_type == 'notebook':
            boundaries.append('Keep code examples focused and educational. Avoid premature optimization.')
            boundaries.append('Don\'t create overly complex examples that obscure the learning goal.')
            boundaries.append('Include explanations for every code block—the notebook should teach, not just show.')
        
        elif task_type == 'implementation':
            libraries = self._get_allowed_libraries(phase_id)
            boundaries.append(f'Use only fundamental libraries ({libraries})—avoid high-level abstractions that hide the learning.')
            boundaries.append('Don\'t optimize for performance yet. Prioritize clarity and correctness first.')
            boundaries.append('Avoid copying code without understanding. Type everything out to build muscle memory.')
        
        elif task_type == 'practice':
            boundaries.append('Attempt each problem independently for at least 15 minutes before seeking hints.')
            boundaries.append('Don\'t look at solutions immediately when stuck. Try different approaches first.')
            boundaries.append('Focus on understanding the problem-solving approach, not just getting the answer.')
        
        elif task_type == 'documentation':
            boundaries.append('Write in your own words—don\'t copy from sources verbatim.')
            boundaries.append('Avoid excessive mathematical notation. Focus on intuition and examples.')
            boundaries.append('Don\'t write for experts. Write as if teaching someone new to the topic.')
        
        elif task_type == 'training':
            boundaries.append('Start with small-scale tests before full training runs.')
            boundaries.append('Don\'t ignore early warning signs (NaN losses, explosion gradients)—stop and debug.')
            boundaries.append('Avoid changing multiple hyperparameters simultaneously. Change one thing at a time.')
        
        elif task_type == 'deployment':
            boundaries.append('Test thoroughly in local/staging environments before production deployment.')
            boundaries.append('Don\'t deploy without monitoring and logging in place.')
            boundaries.append('Avoid exposing sensitive data or API keys in code or logs.')
        
        # Add phase-specific boundaries
        if phase_id == 'foundations':
            boundaries.append('Master each concept before moving on. Foundations are crucial.')
        elif phase_id == 'deep-learning':
            boundaries.append('Don\'t move forward if training is unstable. Debug issues immediately.')
        elif phase_id in ['gpt-from-scratch', 'tokenizer-scaling']:
            boundaries.append('Monitor GPU usage and costs carefully. Stay within budget.')
        
        # General boundaries
        if not boundaries:
            boundaries.append('Focus on depth over breadth. Complete understanding is more valuable than surface coverage.')
        
        boundaries.append('If stuck for more than 30 minutes, document the issue and seek help.')
        
        return ' '.join(boundaries)
    
    def _get_allowed_libraries(self, phase_id):
        """Get allowed libraries for implementation tasks."""
        if phase_id == 'foundations':
            return 'NumPy, Matplotlib'
        elif phase_id == 'classical-ml':
            return 'NumPy, scikit-learn, pandas'
        elif phase_id in ['deep-learning', 'transformers', 'gpt-from-scratch']:
            return 'PyTorch, NumPy'
        else:
            return 'standard libraries'
    
    def _generate_deliverable(self, task_label, task_type, phase_id, day_num):
        """Generate specific deliverable requirements."""
        file_match = re.search(r'([\w/]+\.(?:ipynb|py|md|png|json|yaml))', task_label)
        
        if task_type == 'datacamp':
            return (f'Completed exercises with >80% accuracy, green checkmarks in DataCamp profile showing section completion, '
                   f'and comprehensive notes in notebooks/{phase_id}/day{day_num:02d}_datacamp_notes.md documenting '
                   f'key concepts, code patterns, and insights.')
        
        elif task_type == 'video':
            video_name = self._extract_video_name(task_label)
            return (f'Notes in docs/notes/day{day_num:02d}_{self._slugify(video_name)}_notes.md (300-500 words) '
                   f'capturing main insights, 3-5 key takeaways in your own words, and 1-2 questions for further exploration.')
        
        elif task_type == 'notebook':
            file_path = file_match.group(1) if file_match else f'{phase_id}/day{day_num:02d}_notebook.ipynb'
            return (f'Complete Jupyter notebook at notebooks/{file_path} with: (1) Clear markdown explanations (≥200 words total), '
                   f'(2) Working code cells with inline comments, (3) At least 3 visualizations with proper labels, '
                   f'(4) Successfully runs top-to-bottom without errors, (5) Educational value for future reference.')
        
        elif task_type == 'implementation':
            file_path = file_match.group(1) if file_match else f'{phase_id}/day{day_num:02d}_impl.py'
            return (f'Working implementation in src/{file_path} with: (1) Comprehensive docstrings, (2) Type hints, '
                   f'(3) Unit tests in tests/test_{file_path.split("/")[-1]}, (4) Passes all tests, '
                   f'(5) Accuracy matches reference implementation within tolerance of 1e-6 for numerical operations.')
        
        elif task_type == 'practice':
            return (f'Solutions to all practice problems in notebooks/{phase_id}/day{day_num:02d}_practice.ipynb '
                   f'with: (1) Correct solutions (≥85% accuracy), (2) Explanation of approach for each problem, '
                   f'(3) Alternative solutions considered, (4) Reflection on difficulties and learnings.')
        
        elif task_type == 'documentation':
            file_path = file_match.group(1) if file_match else f'day{day_num:02d}_{phase_id}.md'
            return (f'Well-structured markdown document at docs/{file_path} with: (1) Clear section headings, '
                   f'(2) Target length 500-800 words, (3) Code examples where relevant, (4) Concrete examples and analogies, '
                   f'(5) Proper markdown formatting, no spelling/grammar errors.')
        
        elif task_type == 'visualization':
            file_path = file_match.group(1) if file_match else f'day{day_num:02d}_viz.png'
            return (f'High-quality visualization saved as artifacts/{file_path} with: (1) Resolution ≥300 DPI, '
                   f'(2) Clear labels on all axes, (3) Legend if multiple elements, (4) Professional color scheme, '
                   f'(5) Self-explanatory without additional context.')
        
        elif task_type == 'testing':
            return (f'Comprehensive test suite in tests/ with: (1) >80% code coverage, (2) Tests for normal cases, '
                   f'edge cases, and error conditions, (3) All tests passing, (4) Clear test names explaining what\'s being tested, '
                   f'(5) Fixtures for common test data.')
        
        elif task_type == 'training':
            return (f'Trained model with: (1) Saved checkpoint in checkpoints/, (2) Training logs in logs/day{day_num:02d}_training.jsonl, '
                   f'(3) Loss curves and metrics plots in artifacts/, (4) Hyperparameters documented in configs/day{day_num:02d}_config.yaml, '
                   f'(5) Training summary in docs/experiments/day{day_num:02d}_results.md.')
        
        elif task_type == 'deployment':
            return (f'Deployed service with: (1) Health check endpoint responding correctly, (2) All API endpoints tested and working, '
                   f'(3) Monitoring dashboard active, (4) Logs being captured and stored, (5) Documentation in docs/deployment/ '
                   f'explaining setup and how to verify deployment.')
        
        elif task_type == 'review':
            return (f'Weekly review summary in docs/weekly_logs/week{(day_num-1)//7 + 1}.md with: (1) Key concepts mastered (bullet list), '
                   f'(2) Challenges encountered and how solved, (3) Code examples demonstrating understanding, '
                   f'(4) Questions remaining for further study, (5) Plans for next week.')
        
        else:
            return (f'Completed task with appropriate artifacts in relevant directories, documentation of process and outcomes, '
                   f'verification that all acceptance criteria are met, and notes on challenges and learnings in '
                   f'docs/notes/day{day_num:02d}_notes.md.')
    
    def _extract_video_name(self, task_label):
        """Extract video name from task label."""
        match = re.search(r'"([^"]+)"', task_label)
        if match:
            return match.group(1)
        return 'video'
    
    def _slugify(self, text):
        """Convert text to slug format."""
        text = text.lower()
        text = re.sub(r'[^a-z0-9]+', '_', text)
        return text.strip('_')
    
    def _generate_verification(self, task_label, task_type, phase_id):
        """Generate verification criteria and self-checks."""
        checks = []
        
        if task_type == 'datacamp':
            checks.append('All exercises show green checkmarks in your DataCamp profile.')
            checks.append('Can you explain each key concept without looking at notes?')
            checks.append('Try teaching the concepts to someone else (or rubber duck).')
        
        elif task_type == 'video':
            checks.append('Can you summarize the main points without rewatching?')
            checks.append('Explain the core concept to someone unfamiliar with it.')
            checks.append('Create your own example demonstrating the concept.')
        
        elif task_type == 'notebook':
            checks.append('Notebook executes completely from top to bottom without errors.')
            checks.append('All visualizations render correctly with proper labels and legends.')
            checks.append('Markdown explanations are clear and grammatically correct.')
            checks.append('A beginner could learn from your notebook without additional resources.')
        
        elif task_type == 'implementation':
            checks.append('All unit tests pass (run pytest and verify 100% pass rate).')
            checks.append('Implementation produces correct results on known test cases.')
            checks.append('Code matches reference implementation outputs within specified tolerance.')
            checks.append('Edge cases handled appropriately (empty inputs, boundary values).')
        
        elif task_type == 'practice':
            checks.append('Solutions are correct (verify against provided answers or test cases).')
            checks.append('Can you solve similar problems without looking at your solutions?')
            checks.append('Understand why your approach works, not just that it works.')
        
        elif task_type == 'documentation':
            checks.append('Document is complete, well-structured, and properly formatted.')
            checks.append('No spelling or grammar errors (run through spell checker).')
            checks.append('Contains concrete examples that aid understanding.')
            checks.append('Someone unfamiliar with the topic can learn from it.')
        
        elif task_type == 'visualization':
            checks.append('Image file exists and opens correctly.')
            checks.append('Resolution is ≥300 DPI (check file properties).')
            checks.append('All axes labeled, legend present if needed, colors distinguishable.')
            checks.append('Visualization communicates its message without additional explanation.')
        
        elif task_type == 'testing':
            checks.append('Run pytest --cov to verify >80% code coverage.')
            checks.append('All tests pass with green checkmarks.')
            checks.append('Tests cover normal cases, edge cases, and error conditions.')
            checks.append('Test names clearly describe what is being tested.')
        
        elif task_type == 'training':
            checks.append('Training completed without crashes or NaN losses.')
            checks.append('Final validation metrics meet or exceed target thresholds.')
            checks.append('Loss curves show smooth descent (no erratic behavior).')
            checks.append('Checkpoint loads correctly and model makes reasonable predictions.')
        
        elif task_type == 'deployment':
            checks.append('Service starts successfully and health check returns 200 OK.')
            checks.append('All API endpoints respond within acceptable latency (<500ms for simple requests).')
            checks.append('Monitoring shows service is running and capturing metrics.')
            checks.append('Logs are being written and are searchable.')
        
        # Add common checks
        checks.append('Self-test: Can you explain what you did and why to someone else?')
        checks.append('Have you documented any blockers or unclear points for follow-up?')
        
        return ' '.join(checks)
    
    def _generate_pitfalls(self, task_label, task_type, phase_id):
        """Generate common pitfalls and quick fixes."""
        pitfalls = []
        
        if task_type == 'datacamp':
            pitfalls.append('Common mistake: rushing through exercises without understanding.')
            pitfalls.append('Quick fix: For each exercise, explain to yourself why the solution works before moving on.')
        
        elif task_type == 'video':
            pitfalls.append('Common mistake: passive watching leads to poor retention.')
            pitfalls.append('Quick fix: Pause every 2-3 minutes and summarize what you just learned out loud.')
        
        elif task_type == 'notebook':
            pitfalls.append('Common mistake: creating overly complex code that obscures the learning point.')
            pitfalls.append('Quick fix: Simplify. Each code cell should demonstrate one clear concept.')
        
        elif task_type == 'implementation':
            pitfalls.append('Common mistake: index errors and off-by-one bugs in loops.')
            pitfalls.append('Quick fix: Test with tiny examples (2×2 matrices, length-3 arrays) where you can verify by hand.')
        
        elif task_type == 'practice':
            pitfalls.append('Common mistake: looking at solutions too quickly when stuck.')
            pitfalls.append('Quick fix: Struggle for at least 15 minutes, try a different approach, consult hints (not solutions).')
        
        elif task_type == 'documentation':
            pitfalls.append('Common mistake: copying definitions from sources without understanding.')
            pitfalls.append('Quick fix: Write first draft without looking at sources. Then verify accuracy and add details.')
        
        elif task_type == 'visualization':
            pitfalls.append('Common mistake: default plot settings with poor readability.')
            pitfalls.append('Quick fix: Always specify figure size, DPI, labels, and use colorblind-friendly palettes.')
        
        elif task_type == 'testing':
            pitfalls.append('Common mistake: writing tests that always pass (testing implementation, not behavior).')
            pitfalls.append('Quick fix: Write test first (should fail), then implement feature (test should pass).')
        
        elif task_type == 'training':
            if phase_id in ['deep-learning', 'gpt-from-scratch']:
                pitfalls.append('Common mistake: ignoring NaN losses or explosions ("maybe it will recover").')
                pitfalls.append('Quick fix: Stop immediately, reduce learning rate 10×, check data normalization, inspect gradients.')
        
        elif task_type == 'deployment':
            pitfalls.append('Common mistake: deploying without proper error handling and monitoring.')
            pitfalls.append('Quick fix: Test error scenarios locally. Verify monitoring captures errors before deploying.')
        
        # Add general pitfall
        if not pitfalls:
            pitfalls.append('Common mistake: assuming understanding without testing yourself.')
        
        pitfalls.append('Remember: Mistakes are learning opportunities. Document what went wrong and how you fixed it.')
        
        return ' '.join(pitfalls)
    
    def _generate_sources(self, task_label, phase_id, task_type):
        """Generate 2-6 authoritative source links."""
        sources = []
        task_lower = task_label.lower()
        
        # Extract sources from task label if present (e.g., resourceLinks)
        # For now, we'll generate based on keywords and phase
        
        # Keyword-based sources
        if 'numpy' in task_lower:
            sources.extend(self.resource_db['numpy'][:2])
        
        if '3blue1brown' in task_lower or ('watch' in task_lower and 'algebra' in task_lower):
            sources.extend(self.resource_db['linear_algebra'][:1])
        
        if 'khan academy' in task_lower or 'khan' in task_lower:
            if 'linear algebra' in task_lower or 'matrix' in task_lower or 'vector' in task_lower:
                sources.append(self.resource_db['linear_algebra'][1])
            elif 'calculus' in task_lower or 'derivative' in task_lower or 'gradient' in task_lower:
                sources.append(self.resource_db['calculus'][0])
            elif 'probability' in task_lower or 'statistics' in task_lower:
                sources.append(self.resource_db['probability'][0])
        
        if 'datacamp' in task_lower:
            sources.extend(self.resource_db['datacamp'][:1])
        
        if 'sklearn' in task_lower or 'scikit-learn' in task_lower:
            sources.extend(self.resource_db['sklearn'][:2])
        
        if 'pytorch' in task_lower:
            sources.extend(self.resource_db['pytorch'][:2])
        
        if 'transformer' in task_lower or 'attention' in task_lower:
            sources.extend(self.resource_db['transformers'][:2])
        
        if 'gpt' in task_lower:
            sources.extend(self.resource_db['gpt'][:2])
        
        if 'tokenizer' in task_lower or 'bpe' in task_lower:
            sources.extend(self.resource_db['tokenization'][:2])
        
        if 'lora' in task_lower or 'qlora' in task_lower:
            sources.extend(self.resource_db['lora'][:2])
        
        if 'scaling' in task_lower or 'chinchilla' in task_lower:
            sources.extend(self.resource_db['scaling'][:2])
        
        if 'fastapi' in task_lower or 'api' in task_lower:
            sources.extend(self.resource_db['fastapi'][:2])
        
        if 'docker' in task_lower:
            sources.extend(self.resource_db['docker'][:2])
        
        if 'pytest' in task_lower or 'test' in task_lower:
            sources.append(self.resource_db['mlops'][0])
        
        # Phase-based sources (if not enough from keywords)
        if len(sources) < 2:
            if phase_id == 'foundations':
                sources.extend(self.resource_db['linear_algebra'][:2])
            elif phase_id == 'classical-ml':
                sources.extend(self.resource_db['sklearn'][:2])
            elif phase_id in ['deep-learning', 'nlp-warmup']:
                sources.extend(self.resource_db['pytorch'][:2])
            elif phase_id == 'transformers':
                sources.extend(self.resource_db['transformers'][:2])
            elif phase_id == 'gpt-from-scratch':
                sources.extend(self.resource_db['gpt'][:2])
            elif phase_id == 'tokenizer-scaling':
                sources.extend(self.resource_db['tokenization'] + self.resource_db['scaling'][:1])
            elif phase_id == 'serving-safety':
                sources.extend(self.resource_db['fastapi'] + self.resource_db['docker'][:1])
            elif phase_id == 'peft-optimization':
                sources.extend(self.resource_db['lora'] + self.resource_db['optimization'][:1])
            elif phase_id == 'mlops':
                sources.extend(self.resource_db['mlops'][:2])
        
        # Remove duplicates while preserving order
        seen = set()
        unique_sources = []
        for name, url in sources:
            if url not in seen:
                seen.add(url)
                unique_sources.append((name, url))
        
        # Limit to 6 sources
        return unique_sources[:6]

# Example usage
if __name__ == '__main__':
    generator = TaskDetailGenerator()
    
    # Test with various task types
    test_tasks = [
        ("Complete DataCamp: Introduction to NumPy Chapter 2", 'foundations', 2, 1),
        ("Watch 3Blue1Brown Ep. 3: Linear transformations", 'foundations', 4, 1),
        ("Create notebooks/foundations/day05_matrices.ipynb", 'foundations', 5, 1),
        ("Implement backpropagation from scratch", 'deep-learning', 85, 13),
        ("Train GPT model on character dataset", 'gpt-from-scratch', 160, 23),
    ]
    
    print("=== Task Detail Generator Test ===\n")
    for task_label, phase_id, day_num, week_num in test_tasks:
        print(f"Task: {task_label}")
        print(f"Phase: {phase_id}, Day: {day_num}")
        details = generator.generate_details(task_label, phase_id, day_num, week_num)
        word_count = len(details.split())
        print(f"Generated ({word_count} words):")
        print(details[:200] + "..." if len(details) > 200 else details)
        print("\n" + "="*80 + "\n")
