// AI & Machine Learning Mastery Plan - Complete 12-Month Data Model
// 364 days across 14 phases with comprehensive task breakdown
// NOTE: Expansions include previously condensed eigen decomposition, CNN build sequence,
// GPT training passes, scaling experiments, LoRA/QLoRA steps, capstone evaluation days,
// and portfolio polish.

const PLAN = {
  phases: [
    {
      id: 'foundations',
      title: 'Phase 1: Math + Python-for-Data Foundations',
      description: 'Build strong foundations in linear algebra, calculus, probability, and Python programming for data science.',
      duration: '42 days (Weeks 1-6)',
      weeks: [1, 2, 3, 4, 5, 6],
      days: [
        // Week 1
        {
          globalDay: 1,
          week: 1,
          title: 'Environment Setup & Vectors Introduction',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 1 only', estMinutes: 90, resourceLinks: ['https://datacamp.com'], notebook: 'foundations/day01_vectors_intro.ipynb', artifact: 'day01_vectors_plot.png', successCriteria: 'Environment script passes; notebook renders plots' },
            { label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 1 "Vectors" (full episode)', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=fNk_zzaMoSs'] },
            { label: 'Run scripts/test_env_setup.py to verify Python environment', estMinutes: 15 },
            { label: 'Create notebooks/foundations/day01_vectors_intro.ipynb with vector visualization', estMinutes: 60 },
            { label: 'Generate artifacts/day01_vectors_plot.png showing 2D/3D vector examples', estMinutes: 30 },
            { label: 'Write docs/notes/day01_vectors.md summarizing vectors as geometric objects', estMinutes: 30 }
          ],
          reflectionPrompt: 'Consider: How do vectors differ from scalars? Why are they fundamental to ML?'
        },
        {
          globalDay: 2,
          week: 1,
          title: 'Vector Operations & Community Intro',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 2', estMinutes: 90 },
            { label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 2 "Linear combinations, span, and basis vectors"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=k7RM-ot2NWY'] },
            { label: 'Create notebooks/foundations/day02_vector_ops.ipynb with addition, scaling, dot product', estMinutes: 90 },
            { label: 'Join Hugging Face Discord and introduce yourself in #introductions', estMinutes: 20 },
            { label: 'Write docs/notes/day02_span.md explaining span and linear combinations', estMinutes: 30 }
          ],
          reflectionPrompt: 'Post in HF Discord about your learning journey start.'
        },
        {
          globalDay: 3,
          week: 1,
          title: 'Linear Combinations & Span',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 3', estMinutes: 90 },
            { label: 'Complete Khan Academy linear algebra: vector intro and span pages', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day03_linear_combinations.ipynb exploring span', estMinutes: 75 },
            { label: 'Generate artifacts/day03_span_coverage.png visualizing 2D span', estMinutes: 30 },
            { label: 'Start docs/questions/week_01.md with any unclear concepts', estMinutes: 20 }
          ],
          reflectionPrompt: 'What happens when vectors are parallel? How does this relate to linear independence?'
        },
        {
          globalDay: 4,
          week: 1,
          title: 'Matrix Basics & Transformations',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 3 "Linear transformations and matrices"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=kYB8IZa5AuE'] },
            { label: 'Complete Khan Academy: matrix intro and matrix-vector multiplication', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day04_matrices.ipynb with transformation examples', estMinutes: 90 },
            { label: 'Generate artifacts/day04_transformation.png showing rotation/scaling transformations', estMinutes: 45 },
            { label: 'Add to docs/notes/day04_matrices.md explaining matrices as transformations', estMinutes: 30 }
          ],
          reflectionPrompt: 'Why is the column perspective for matrix-vector multiplication useful?'
        },
        {
          globalDay: 5,
          week: 1,
          title: 'Matrix Multiplication & Composition',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 4 "Matrix multiplication as composition"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=XkY2DOUCWMU'] },
            { label: 'DataCamp: Intermediate Python - functions and loops (refresher)', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day05_mat_mult.ipynb with composition examples', estMinutes: 90 },
            { label: 'Implement matrix multiplication from scratch (no NumPy matmul)', estMinutes: 60 },
            { label: 'Write docs/notes/day05_composition.md on why order matters', estMinutes: 30 }
          ],
          reflectionPrompt: 'Try composing rotation + scaling vs scaling + rotation. What changes?'
        },
        {
          globalDay: 6,
          week: 1,
          title: 'Determinants & Inverses',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 5 "The determinant"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=Ip3X9LOh2dk'] },
            { label: 'Watch 3Blue1Brown Ep. 6 "Inverse matrices, column space and null space"', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=uQhTuRlWMxw'] },
            { label: 'Create notebooks/foundations/day06_determinants.ipynb with det calculations', estMinutes: 75 },
            { label: 'Generate artifacts/day06_det_visual.png showing area scaling', estMinutes: 30 },
            { label: 'Write docs/notes/day06_determinants.md on geometric meaning', estMinutes: 30 }
          ],
          reflectionPrompt: 'What does det=0 mean for invertibility? Why?'
        },
        {
          globalDay: 7,
          week: 1,
          title: 'Week 1 Review & Reflection',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all Week 1 notebooks and notes', estMinutes: 60 },
            { label: 'Update docs/questions/week_01.md with remaining questions', estMinutes: 20 },
            { label: 'Write docs/weekly_logs/week_01.md summarizing key learnings', estMinutes: 45 },
            { label: 'Complete 5 practice problems from Khan Academy linear algebra', estMinutes: 60 },
            { label: 'Post Week 1 progress update in HF Discord or Twitter', estMinutes: 15 }
          ],
          reflectionPrompt: 'What was hardest this week? What clicked? What still feels fuzzy?'
        },
        // Week 2: Days 8-14 (continuing pattern with eigenvalues expansion)
        {
          globalDay: 8,
          week: 2,
          title: 'Dot Product & Duality',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 7 "Dot products and duality"', estMinutes: 15, resourceLinks: ['https://www.youtube.com/watch?v=LyGKycYT2v0'] },
            { label: 'Complete Khan Academy: dot product and projections', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day08_dot_product.ipynb exploring orthogonality', estMinutes: 90 },
            { label: 'Generate artifacts/day08_projection.png showing vector projection', estMinutes: 30 },
            { label: 'Write docs/notes/day08_duality.md on dual interpretation of dot product', estMinutes: 30 }
          ],
          reflectionPrompt: 'How does dot product relate to cosine similarity in ML?'
        },
        {
          globalDay: 9,
          week: 2,
          title: 'Cross Product & 3D Geometry',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 8 "Cross products"', estMinutes: 8, resourceLinks: ['https://www.youtube.com/watch?v=eu6i7WJeinw'] },
            { label: 'Complete Khan Academy: cross product intro', estMinutes: 45 },
            { label: 'Create notebooks/foundations/day09_cross_product.ipynb with 3D examples', estMinutes: 90 },
            { label: 'Generate artifacts/day09_cross_3d.png showing perpendicular result', estMinutes: 30 },
            { label: 'Write docs/notes/day09_cross.md on right-hand rule', estMinutes: 25 }
          ],
          reflectionPrompt: 'Cross product is less common in ML—when might it appear?'
        },
        {
          globalDay: 10,
          week: 2,
          title: 'Change of Basis',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 9 "Change of basis"', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=P2LTAUO1TdA'] },
            { label: 'Complete Khan Academy: change of basis exercises', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day10_basis_change.ipynb', estMinutes: 90 },
            { label: 'Implement basis transformation matrices', estMinutes: 60 },
            { label: 'Write docs/notes/day10_basis.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'Why is change of basis important for understanding eigenvalues?'
        },
        {
          globalDay: 11,
          week: 2,
          title: 'Eigenvalues & Eigenvectors Introduction',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 10 "Eigenvectors and eigenvalues"', estMinutes: 17, resourceLinks: ['https://www.youtube.com/watch?v=PFDu9oVAE-g'] },
            { label: 'Complete Khan Academy: eigenvectors intro', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day11_eigenvalues_intro.ipynb', estMinutes: 90 },
            { label: 'Find eigenvalues for 2×2 matrices by hand', estMinutes: 45 },
            { label: 'Write docs/notes/day11_eigen.md explaining geometric intuition', estMinutes: 30 }
          ],
          reflectionPrompt: 'What does it mean for a vector to "stay on its span" after transformation?'
        },
        {
          globalDay: 12,
          week: 2,
          title: 'Eigendecomposition & Diagonalization',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete Khan Academy: eigendecomposition and diagonalization', estMinutes: 75 },
            { label: 'Create notebooks/foundations/day12_eigendecomp.ipynb', estMinutes: 120 },
            { label: 'Implement eigendecomposition verification (A = PDP^-1)', estMinutes: 60 },
            { label: 'Test matrix powers using diagonalization', estMinutes: 45 },
            { label: 'Write docs/notes/day12_diagonalization.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'Why does diagonalization make matrix powers easy to compute?'
        },
        {
          globalDay: 13,
          week: 2,
          title: 'Abstract Vector Spaces & Basis',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 11 "Abstract vector spaces"', estMinutes: 16, resourceLinks: ['https://www.youtube.com/watch?v=TgKwz5Ikpc8'] },
            { label: 'Complete Khan Academy: vector spaces exercises', estMinutes: 60 },
            { label: 'Create notebooks/foundations/day13_vector_spaces.ipynb', estMinutes: 90 },
            { label: 'Explore polynomial space as vector space example', estMinutes: 45 },
            { label: 'Write docs/notes/day13_abstract_spaces.md', estMinutes: 25 }
          ],
          reflectionPrompt: 'How does thinking of functions as vectors help in ML?'
        },
        {
          globalDay: 14,
          week: 2,
          title: 'Week 2 Review & Linear Algebra Consolidation',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all Week 2 notebooks (eigen focus)', estMinutes: 75 },
            { label: 'Solve 10 practice problems on eigenvalues/eigenvectors', estMinutes: 90 },
            { label: 'Write docs/weekly_logs/week_02.md', estMinutes: 45 },
            { label: 'Update docs/questions/week_02.md', estMinutes: 20 },
            { label: 'Post week 2 progress in HF Discord', estMinutes: 15 }
          ],
          reflectionPrompt: 'How confident are you with eigenvalues? Any gaps to revisit?'
        },
        {
          globalDay: 15,
          week: 3,
          title: 'Derivatives',
          priority: 'HIGH',
          tasks: [
            { label: 'Derivatives: Core concepts', estMinutes: 90 },
            { label: 'Derivatives: Implementation', estMinutes: 75 },
            { label: 'Derivatives: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Derivatives help?'
        },
        {
          globalDay: 16,
          week: 3,
          title: 'Calculus',
          priority: 'HIGH',
          tasks: [
            { label: 'Calculus: Core concepts', estMinutes: 90 },
            { label: 'Calculus: Implementation', estMinutes: 75 },
            { label: 'Calculus: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Calculus help?'
        },
        {
          globalDay: 17,
          week: 3,
          title: 'Probability',
          priority: 'HIGH',
          tasks: [
            { label: 'Probability: Core concepts', estMinutes: 90 },
            { label: 'Probability: Implementation', estMinutes: 75 },
            { label: 'Probability: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Probability help?'
        },
        {
          globalDay: 18,
          week: 3,
          title: 'Statistics',
          priority: 'HIGH',
          tasks: [
            { label: 'Statistics: Core concepts', estMinutes: 90 },
            { label: 'Statistics: Implementation', estMinutes: 75 },
            { label: 'Statistics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Statistics help?'
        },
        {
          globalDay: 19,
          week: 3,
          title: 'Python Data',
          priority: 'HIGH',
          tasks: [
            { label: 'Python Data: Core concepts', estMinutes: 90 },
            { label: 'Python Data: Implementation', estMinutes: 75 },
            { label: 'Python Data: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Python Data help?'
        },
        {
          globalDay: 20,
          week: 3,
          title: 'ML Math',
          priority: 'HIGH',
          tasks: [
            { label: 'ML Math: Core concepts', estMinutes: 90 },
            { label: 'ML Math: Implementation', estMinutes: 75 },
            { label: 'ML Math: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does ML Math help?'
        },
        {
          globalDay: 21,
          week: 3,
          title: 'Week 3 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 22,
          week: 4,
          title: 'Derivatives',
          priority: 'HIGH',
          tasks: [
            { label: 'Derivatives: Core concepts', estMinutes: 90 },
            { label: 'Derivatives: Implementation', estMinutes: 75 },
            { label: 'Derivatives: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Derivatives help?'
        },
        {
          globalDay: 23,
          week: 4,
          title: 'Calculus',
          priority: 'HIGH',
          tasks: [
            { label: 'Calculus: Core concepts', estMinutes: 90 },
            { label: 'Calculus: Implementation', estMinutes: 75 },
            { label: 'Calculus: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Calculus help?'
        },
        {
          globalDay: 24,
          week: 4,
          title: 'Probability',
          priority: 'HIGH',
          tasks: [
            { label: 'Probability: Core concepts', estMinutes: 90 },
            { label: 'Probability: Implementation', estMinutes: 75 },
            { label: 'Probability: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Probability help?'
        },
        {
          globalDay: 25,
          week: 4,
          title: 'Statistics',
          priority: 'HIGH',
          tasks: [
            { label: 'Statistics: Core concepts', estMinutes: 90 },
            { label: 'Statistics: Implementation', estMinutes: 75 },
            { label: 'Statistics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Statistics help?'
        },
        {
          globalDay: 26,
          week: 4,
          title: 'Python Data',
          priority: 'HIGH',
          tasks: [
            { label: 'Python Data: Core concepts', estMinutes: 90 },
            { label: 'Python Data: Implementation', estMinutes: 75 },
            { label: 'Python Data: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Python Data help?'
        },
        {
          globalDay: 27,
          week: 4,
          title: 'ML Math',
          priority: 'HIGH',
          tasks: [
            { label: 'ML Math: Core concepts', estMinutes: 90 },
            { label: 'ML Math: Implementation', estMinutes: 75 },
            { label: 'ML Math: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does ML Math help?'
        },
        {
          globalDay: 28,
          week: 4,
          title: 'Week 4 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 29,
          week: 5,
          title: 'Derivatives',
          priority: 'HIGH',
          tasks: [
            { label: 'Derivatives: Core concepts', estMinutes: 90 },
            { label: 'Derivatives: Implementation', estMinutes: 75 },
            { label: 'Derivatives: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Derivatives help?'
        },
        {
          globalDay: 30,
          week: 5,
          title: 'Calculus',
          priority: 'HIGH',
          tasks: [
            { label: 'Calculus: Core concepts', estMinutes: 90 },
            { label: 'Calculus: Implementation', estMinutes: 75 },
            { label: 'Calculus: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Calculus help?'
        },
        {
          globalDay: 31,
          week: 5,
          title: 'Probability',
          priority: 'HIGH',
          tasks: [
            { label: 'Probability: Core concepts', estMinutes: 90 },
            { label: 'Probability: Implementation', estMinutes: 75 },
            { label: 'Probability: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Probability help?'
        },
        {
          globalDay: 32,
          week: 5,
          title: 'Statistics',
          priority: 'HIGH',
          tasks: [
            { label: 'Statistics: Core concepts', estMinutes: 90 },
            { label: 'Statistics: Implementation', estMinutes: 75 },
            { label: 'Statistics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Statistics help?'
        },
        {
          globalDay: 33,
          week: 5,
          title: 'Python Data',
          priority: 'HIGH',
          tasks: [
            { label: 'Python Data: Core concepts', estMinutes: 90 },
            { label: 'Python Data: Implementation', estMinutes: 75 },
            { label: 'Python Data: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Python Data help?'
        },
        {
          globalDay: 34,
          week: 5,
          title: 'ML Math',
          priority: 'HIGH',
          tasks: [
            { label: 'ML Math: Core concepts', estMinutes: 90 },
            { label: 'ML Math: Implementation', estMinutes: 75 },
            { label: 'ML Math: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does ML Math help?'
        },
        {
          globalDay: 35,
          week: 5,
          title: 'Week 5 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 36,
          week: 6,
          title: 'Derivatives',
          priority: 'HIGH',
          tasks: [
            { label: 'Derivatives: Core concepts', estMinutes: 90 },
            { label: 'Derivatives: Implementation', estMinutes: 75 },
            { label: 'Derivatives: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Derivatives help?'
        },
        {
          globalDay: 37,
          week: 6,
          title: 'Calculus',
          priority: 'HIGH',
          tasks: [
            { label: 'Calculus: Core concepts', estMinutes: 90 },
            { label: 'Calculus: Implementation', estMinutes: 75 },
            { label: 'Calculus: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Calculus help?'
        },
        {
          globalDay: 38,
          week: 6,
          title: 'Probability',
          priority: 'HIGH',
          tasks: [
            { label: 'Probability: Core concepts', estMinutes: 90 },
            { label: 'Probability: Implementation', estMinutes: 75 },
            { label: 'Probability: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Probability help?'
        },
        {
          globalDay: 39,
          week: 6,
          title: 'Statistics',
          priority: 'HIGH',
          tasks: [
            { label: 'Statistics: Core concepts', estMinutes: 90 },
            { label: 'Statistics: Implementation', estMinutes: 75 },
            { label: 'Statistics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Statistics help?'
        },
        {
          globalDay: 40,
          week: 6,
          title: 'Python Data',
          priority: 'HIGH',
          tasks: [
            { label: 'Python Data: Core concepts', estMinutes: 90 },
            { label: 'Python Data: Implementation', estMinutes: 75 },
            { label: 'Python Data: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Python Data help?'
        },
        {
          globalDay: 41,
          week: 6,
          title: 'ML Math',
          priority: 'HIGH',
          tasks: [
            { label: 'ML Math: Core concepts', estMinutes: 90 },
            { label: 'ML Math: Implementation', estMinutes: 75 },
            { label: 'ML Math: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does ML Math help?'
        },
        {
          globalDay: 42,
          week: 6,
          title: 'Week 6 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        }
      ]
    },
    {
      id: 'buffer-setup',
      title: 'Phase 2: Buffer & Structure Setup',
      description: 'Set up testing infrastructure, migrate to Deepnote, and establish weekly logging habits.',
      duration: '7 days (Week 7)',
      weeks: [7],
      days: [
        {
          globalDay: 43,
          week: 7,
          title: 'Pytest & Testing Setup',
          priority: 'HIGH',
          tasks: [
            { label: 'Install pytest and configure project structure', estMinutes: 60 },
            { label: 'Create tests/ directory with __init__.py', estMinutes: 15 },
            { label: 'Write first test: test_vector_ops.py', estMinutes: 90 },
            { label: 'Run pytest and verify all tests pass', estMinutes: 30 },
            { label: 'Document testing setup in docs/testing_guide.md', estMinutes: 45 }
          ],
          reflectionPrompt: 'Why is testing important even for learning projects?'
        },
                {
          globalDayglobalDay: 44,
          week: 7,
          title: 'Black formatter',
          priority: 'HIGH',
          tasks: [
            { label: 'Black formatter: Core concepts', estMinutes: 90 },
            { label: 'Black formatter: Implementation', estMinutes: 75 },
            { label: 'Black formatter: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Black formatter help?'
        },
        {
          globalDay: 45,
          week: 7,
          title: 'Deepnote setup',
          priority: 'HIGH',
          tasks: [
            { label: 'Deepnote setup: Core concepts', estMinutes: 90 },
            { label: 'Deepnote setup: Implementation', estMinutes: 75 },
            { label: 'Deepnote setup: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Deepnote setup help?'
        },
        {
          globalDay: 46,
          week: 7,
          title: 'Weekly logs',
          priority: 'HIGH',
          tasks: [
            { label: 'Weekly logs: Core concepts', estMinutes: 90 },
            { label: 'Weekly logs: Implementation', estMinutes: 75 },
            { label: 'Weekly logs: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Weekly logs help?'
        },
        {
          globalDay: 47,
          week: 7,
          title: 'Structure',
          priority: 'HIGH',
          tasks: [
            { label: 'Structure: Core concepts', estMinutes: 90 },
            { label: 'Structure: Implementation', estMinutes: 75 },
            { label: 'Structure: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Structure help?'
        },
        {
          globalDay: 48,
          week: 7,
          title: 'Buffer',
          priority: 'HIGH',
          tasks: [
            { label: 'Buffer: Core concepts', estMinutes: 90 },
            { label: 'Buffer: Implementation', estMinutes: 75 },
            { label: 'Buffer: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Buffer help?'
        },
        {
          globalDay: 49,
          week: 7,
          title: 'Review',
          priority: 'HIGH',
          tasks: [
            { label: 'Review: Core concepts', estMinutes: 90 },
            { label: 'Review: Implementation', estMinutes: 75 },
            { label: 'Review: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Review help?'
        }
      ]
    },
    {
      id: 'classical-ml',
      title: 'Phase 3: Classical ML Fundamentals',
      description: 'Master sklearn, metrics, cross-validation, and learning curves.',
      duration: '21 days (Weeks 8-10)',
      weeks: [8, 9, 10],
      days: [
        {
          globalDay: 50,
          week: 8,
          title: 'Sklearn Introduction & First Classifier',
          priority: 'HIGH',
          tasks: [
            { label: 'DataCamp: Introduction to Machine Learning with scikit-learn Chapter 1', estMinutes: 90 },
            { label: 'Create notebooks/classical_ml/day50_sklearn_intro.ipynb', estMinutes: 90 },
            { label: 'Train first LogisticRegression on Iris dataset', estMinutes: 60 },
            { label: 'Visualize decision boundaries', estMinutes: 45 },
            { label: 'Write docs/notes/day50_sklearn.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'How does sklearn abstract away the math we learned in foundations?'
        },
                {
          globalDayglobalDay: 51,
          week: 8,
          title: 'Classification',
          priority: 'HIGH',
          tasks: [
            { label: 'Classification: Core concepts', estMinutes: 90 },
            { label: 'Classification: Implementation', estMinutes: 75 },
            { label: 'Classification: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Classification help?'
        },
        {
          globalDay: 52,
          week: 8,
          title: 'Regression',
          priority: 'HIGH',
          tasks: [
            { label: 'Regression: Core concepts', estMinutes: 90 },
            { label: 'Regression: Implementation', estMinutes: 75 },
            { label: 'Regression: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Regression help?'
        },
        {
          globalDay: 53,
          week: 8,
          title: 'Cross-validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Cross-validation: Core concepts', estMinutes: 90 },
            { label: 'Cross-validation: Implementation', estMinutes: 75 },
            { label: 'Cross-validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Cross-validation help?'
        },
        {
          globalDay: 54,
          week: 8,
          title: 'Metrics',
          priority: 'HIGH',
          tasks: [
            { label: 'Metrics: Core concepts', estMinutes: 90 },
            { label: 'Metrics: Implementation', estMinutes: 75 },
            { label: 'Metrics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Metrics help?'
        },
        {
          globalDay: 55,
          week: 8,
          title: 'Learning curves',
          priority: 'HIGH',
          tasks: [
            { label: 'Learning curves: Core concepts', estMinutes: 90 },
            { label: 'Learning curves: Implementation', estMinutes: 75 },
            { label: 'Learning curves: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Learning curves help?'
        },
        {
          globalDay: 56,
          week: 8,
          title: 'Model selection',
          priority: 'HIGH',
          tasks: [
            { label: 'Model selection: Core concepts', estMinutes: 90 },
            { label: 'Model selection: Implementation', estMinutes: 75 },
            { label: 'Model selection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model selection help?'
        },
        {
          globalDay: 57,
          week: 8,
          title: 'Week 8 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 58,
          week: 9,
          title: 'Classification',
          priority: 'HIGH',
          tasks: [
            { label: 'Classification: Core concepts', estMinutes: 90 },
            { label: 'Classification: Implementation', estMinutes: 75 },
            { label: 'Classification: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Classification help?'
        },
        {
          globalDay: 59,
          week: 9,
          title: 'Regression',
          priority: 'HIGH',
          tasks: [
            { label: 'Regression: Core concepts', estMinutes: 90 },
            { label: 'Regression: Implementation', estMinutes: 75 },
            { label: 'Regression: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Regression help?'
        },
        {
          globalDay: 60,
          week: 9,
          title: 'Cross-validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Cross-validation: Core concepts', estMinutes: 90 },
            { label: 'Cross-validation: Implementation', estMinutes: 75 },
            { label: 'Cross-validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Cross-validation help?'
        },
        {
          globalDay: 61,
          week: 9,
          title: 'Metrics',
          priority: 'HIGH',
          tasks: [
            { label: 'Metrics: Core concepts', estMinutes: 90 },
            { label: 'Metrics: Implementation', estMinutes: 75 },
            { label: 'Metrics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Metrics help?'
        },
        {
          globalDay: 62,
          week: 9,
          title: 'Learning curves',
          priority: 'HIGH',
          tasks: [
            { label: 'Learning curves: Core concepts', estMinutes: 90 },
            { label: 'Learning curves: Implementation', estMinutes: 75 },
            { label: 'Learning curves: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Learning curves help?'
        },
        {
          globalDay: 63,
          week: 9,
          title: 'Model selection',
          priority: 'HIGH',
          tasks: [
            { label: 'Model selection: Core concepts', estMinutes: 90 },
            { label: 'Model selection: Implementation', estMinutes: 75 },
            { label: 'Model selection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model selection help?'
        },
        {
          globalDay: 64,
          week: 9,
          title: 'Week 9 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 65,
          week: 10,
          title: 'Classification',
          priority: 'HIGH',
          tasks: [
            { label: 'Classification: Core concepts', estMinutes: 90 },
            { label: 'Classification: Implementation', estMinutes: 75 },
            { label: 'Classification: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Classification help?'
        },
        {
          globalDay: 66,
          week: 10,
          title: 'Regression',
          priority: 'HIGH',
          tasks: [
            { label: 'Regression: Core concepts', estMinutes: 90 },
            { label: 'Regression: Implementation', estMinutes: 75 },
            { label: 'Regression: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Regression help?'
        },
        {
          globalDay: 67,
          week: 10,
          title: 'Cross-validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Cross-validation: Core concepts', estMinutes: 90 },
            { label: 'Cross-validation: Implementation', estMinutes: 75 },
            { label: 'Cross-validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Cross-validation help?'
        },
        {
          globalDay: 68,
          week: 10,
          title: 'Metrics',
          priority: 'HIGH',
          tasks: [
            { label: 'Metrics: Core concepts', estMinutes: 90 },
            { label: 'Metrics: Implementation', estMinutes: 75 },
            { label: 'Metrics: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Metrics help?'
        },
        {
          globalDay: 69,
          week: 10,
          title: 'Learning curves',
          priority: 'HIGH',
          tasks: [
            { label: 'Learning curves: Core concepts', estMinutes: 90 },
            { label: 'Learning curves: Implementation', estMinutes: 75 },
            { label: 'Learning curves: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Learning curves help?'
        },
        {
          globalDay: 70,
          week: 10,
          title: 'Model selection',
          priority: 'HIGH',
          tasks: [
            { label: 'Model selection: Core concepts', estMinutes: 90 },
            { label: 'Model selection: Implementation', estMinutes: 75 },
            { label: 'Model selection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model selection help?'
        }
      ]
    },
    {
      id: 'deep-learning',
      title: 'Phase 4: Deep Learning Core',
      description: 'PyTorch fundamentals, MLP/CNN architectures, training stability, and CIFAR-10.',
      duration: '49 days (Weeks 11-17)',
      weeks: [11, 12, 13, 14, 15, 16, 17],
      days: [
        {
          globalDay: 71,
          week: 11,
          title: 'PyTorch Tensors & Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete PyTorch 60-minute blitz tutorial', estMinutes: 90 },
            { label: 'Create notebooks/deep_learning/day71_pytorch_intro.ipynb', estMinutes: 90 },
            { label: 'Experiment with torch.autograd on simple functions', estMinutes: 60 },
            { label: 'Implement gradient descent manually with autograd', estMinutes: 75 },
            { label: 'Write docs/notes/day71_pytorch.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'How does autograd differ from manual gradient computation?'
        },
                {
          globalDayglobalDay: 72,
          week: 11,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 73,
          week: 11,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 74,
          week: 11,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 75,
          week: 11,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 76,
          week: 11,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 77,
          week: 11,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 78,
          week: 11,
          title: 'Week 11 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 79,
          week: 12,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 80,
          week: 12,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 81,
          week: 12,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 82,
          week: 12,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 83,
          week: 12,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 84,
          week: 12,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 85,
          week: 12,
          title: 'Week 12 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 86,
          week: 13,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 87,
          week: 13,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 88,
          week: 13,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 89,
          week: 13,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 90,
          week: 13,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 91,
          week: 13,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 92,
          week: 13,
          title: 'Week 13 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 93,
          week: 14,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 94,
          week: 14,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 95,
          week: 14,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 96,
          week: 14,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 97,
          week: 14,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 98,
          week: 14,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 99,
          week: 14,
          title: 'Week 14 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 100,
          week: 15,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 101,
          week: 15,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 102,
          week: 15,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 103,
          week: 15,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 104,
          week: 15,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 105,
          week: 15,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 106,
          week: 15,
          title: 'Week 15 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 107,
          week: 16,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 108,
          week: 16,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 109,
          week: 16,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 110,
          week: 16,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 111,
          week: 16,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 112,
          week: 16,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        },
        {
          globalDay: 113,
          week: 16,
          title: 'Week 16 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 114,
          week: 17,
          title: 'PyTorch',
          priority: 'HIGH',
          tasks: [
            { label: 'PyTorch: Core concepts', estMinutes: 90 },
            { label: 'PyTorch: Implementation', estMinutes: 75 },
            { label: 'PyTorch: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does PyTorch help?'
        },
        {
          globalDay: 115,
          week: 17,
          title: 'Autograd',
          priority: 'HIGH',
          tasks: [
            { label: 'Autograd: Core concepts', estMinutes: 90 },
            { label: 'Autograd: Implementation', estMinutes: 75 },
            { label: 'Autograd: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Autograd help?'
        },
        {
          globalDay: 116,
          week: 17,
          title: 'MLP',
          priority: 'HIGH',
          tasks: [
            { label: 'MLP: Core concepts', estMinutes: 90 },
            { label: 'MLP: Implementation', estMinutes: 75 },
            { label: 'MLP: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MLP help?'
        },
        {
          globalDay: 117,
          week: 17,
          title: 'CNN',
          priority: 'HIGH',
          tasks: [
            { label: 'CNN: Core concepts', estMinutes: 90 },
            { label: 'CNN: Implementation', estMinutes: 75 },
            { label: 'CNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CNN help?'
        },
        {
          globalDay: 118,
          week: 17,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 119,
          week: 17,
          title: 'Optimization',
          priority: 'HIGH',
          tasks: [
            { label: 'Optimization: Core concepts', estMinutes: 90 },
            { label: 'Optimization: Implementation', estMinutes: 75 },
            { label: 'Optimization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Optimization help?'
        }
      ]
    },
    {
      id: 'nlp-warmup',
      title: 'Phase 5: Buffer & NLP Warmup',
      description: 'Light week with character-level dataset exploration and optional RNN.',
      duration: '7 days (Week 18)',
      weeks: [18],
      days: [
        {
          globalDay: 120,
          week: 18,
          title: 'Character-Level Dataset Prep',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Download tiny text corpus (Shakespeare or similar)', estMinutes: 15 },
            { label: 'Create notebooks/nlp/day120_char_data.ipynb', estMinutes: 90 },
            { label: 'Build character tokenizer and vocab', estMinutes: 60 },
            { label: 'Create train/val splits', estMinutes: 30 },
            { label: 'Write docs/notes/day120_char_tokenization.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'How does character-level differ from word-level tokenization?'
        },
                {
          globalDayglobalDay: 121,
          week: 18,
          title: 'Char data',
          priority: 'HIGH',
          tasks: [
            { label: 'Char data: Core concepts', estMinutes: 90 },
            { label: 'Char data: Implementation', estMinutes: 75 },
            { label: 'Char data: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char data help?'
        },
        {
          globalDay: 122,
          week: 18,
          title: 'RNN',
          priority: 'HIGH',
          tasks: [
            { label: 'RNN: Core concepts', estMinutes: 90 },
            { label: 'RNN: Implementation', estMinutes: 75 },
            { label: 'RNN: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does RNN help?'
        },
        {
          globalDay: 123,
          week: 18,
          title: 'Sequences',
          priority: 'HIGH',
          tasks: [
            { label: 'Sequences: Core concepts', estMinutes: 90 },
            { label: 'Sequences: Implementation', estMinutes: 75 },
            { label: 'Sequences: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sequences help?'
        },
        {
          globalDay: 124,
          week: 18,
          title: 'Text gen',
          priority: 'HIGH',
          tasks: [
            { label: 'Text gen: Core concepts', estMinutes: 90 },
            { label: 'Text gen: Implementation', estMinutes: 75 },
            { label: 'Text gen: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Text gen help?'
        },
        {
          globalDay: 125,
          week: 18,
          title: 'Eval',
          priority: 'HIGH',
          tasks: [
            { label: 'Eval: Core concepts', estMinutes: 90 },
            { label: 'Eval: Implementation', estMinutes: 75 },
            { label: 'Eval: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Eval help?'
        },
        {
          globalDay: 126,
          week: 18,
          title: 'Buffer',
          priority: 'HIGH',
          tasks: [
            { label: 'Buffer: Core concepts', estMinutes: 90 },
            { label: 'Buffer: Implementation', estMinutes: 75 },
            { label: 'Buffer: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Buffer help?'
        }
      ]
    },
    {
      id: 'transformers',
      title: 'Phase 6: Transformer Fundamentals',
      description: 'Attention mechanism, Multi-Head Attention, positional encoding, and Pre-LN blocks.',
      duration: '28 days (Weeks 19-22)',
      weeks: [19, 20, 21, 22],
      days: [
        {
          globalDay: 127,
          week: 19,
          title: 'Attention Mechanism Introduction',
          priority: 'HIGH',
          tasks: [
            { label: 'Read "Attention Is All You Need" paper - pass 1 (skim)', estMinutes: 60 },
            { label: 'Watch Yannic Kilcher explanation video', estMinutes: 45, resourceLinks: ['https://www.youtube.com/watch?v=iDulhoQ2pro'] },
            { label: 'Create notebooks/transformers/day127_attention_intro.ipynb', estMinutes: 120 },
            { label: 'Implement scaled dot-product attention from scratch', estMinutes: 90 },
            { label: 'Write docs/notes/day127_attention.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'Why is scaling by sqrt(d_k) necessary?'
        },
                {
          globalDayglobalDay: 128,
          week: 19,
          title: 'Attention',
          priority: 'HIGH',
          tasks: [
            { label: 'Attention: Core concepts', estMinutes: 90 },
            { label: 'Attention: Implementation', estMinutes: 75 },
            { label: 'Attention: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Attention help?'
        },
        {
          globalDay: 129,
          week: 19,
          title: 'MHA',
          priority: 'HIGH',
          tasks: [
            { label: 'MHA: Core concepts', estMinutes: 90 },
            { label: 'MHA: Implementation', estMinutes: 75 },
            { label: 'MHA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MHA help?'
        },
        {
          globalDay: 130,
          week: 19,
          title: 'Positional encoding',
          priority: 'HIGH',
          tasks: [
            { label: 'Positional encoding: Core concepts', estMinutes: 90 },
            { label: 'Positional encoding: Implementation', estMinutes: 75 },
            { label: 'Positional encoding: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Positional encoding help?'
        },
        {
          globalDay: 131,
          week: 19,
          title: 'LayerNorm',
          priority: 'HIGH',
          tasks: [
            { label: 'LayerNorm: Core concepts', estMinutes: 90 },
            { label: 'LayerNorm: Implementation', estMinutes: 75 },
            { label: 'LayerNorm: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LayerNorm help?'
        },
        {
          globalDay: 132,
          week: 19,
          title: 'Transformer blocks',
          priority: 'HIGH',
          tasks: [
            { label: 'Transformer blocks: Core concepts', estMinutes: 90 },
            { label: 'Transformer blocks: Implementation', estMinutes: 75 },
            { label: 'Transformer blocks: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Transformer blocks help?'
        },
        {
          globalDay: 133,
          week: 19,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 134,
          week: 19,
          title: 'Week 19 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 135,
          week: 20,
          title: 'Attention',
          priority: 'HIGH',
          tasks: [
            { label: 'Attention: Core concepts', estMinutes: 90 },
            { label: 'Attention: Implementation', estMinutes: 75 },
            { label: 'Attention: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Attention help?'
        },
        {
          globalDay: 136,
          week: 20,
          title: 'MHA',
          priority: 'HIGH',
          tasks: [
            { label: 'MHA: Core concepts', estMinutes: 90 },
            { label: 'MHA: Implementation', estMinutes: 75 },
            { label: 'MHA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MHA help?'
        },
        {
          globalDay: 137,
          week: 20,
          title: 'Positional encoding',
          priority: 'HIGH',
          tasks: [
            { label: 'Positional encoding: Core concepts', estMinutes: 90 },
            { label: 'Positional encoding: Implementation', estMinutes: 75 },
            { label: 'Positional encoding: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Positional encoding help?'
        },
        {
          globalDay: 138,
          week: 20,
          title: 'LayerNorm',
          priority: 'HIGH',
          tasks: [
            { label: 'LayerNorm: Core concepts', estMinutes: 90 },
            { label: 'LayerNorm: Implementation', estMinutes: 75 },
            { label: 'LayerNorm: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LayerNorm help?'
        },
        {
          globalDay: 139,
          week: 20,
          title: 'Transformer blocks',
          priority: 'HIGH',
          tasks: [
            { label: 'Transformer blocks: Core concepts', estMinutes: 90 },
            { label: 'Transformer blocks: Implementation', estMinutes: 75 },
            { label: 'Transformer blocks: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Transformer blocks help?'
        },
        {
          globalDay: 140,
          week: 20,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 141,
          week: 20,
          title: 'Week 20 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 142,
          week: 21,
          title: 'Attention',
          priority: 'HIGH',
          tasks: [
            { label: 'Attention: Core concepts', estMinutes: 90 },
            { label: 'Attention: Implementation', estMinutes: 75 },
            { label: 'Attention: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Attention help?'
        },
        {
          globalDay: 143,
          week: 21,
          title: 'MHA',
          priority: 'HIGH',
          tasks: [
            { label: 'MHA: Core concepts', estMinutes: 90 },
            { label: 'MHA: Implementation', estMinutes: 75 },
            { label: 'MHA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MHA help?'
        },
        {
          globalDay: 144,
          week: 21,
          title: 'Positional encoding',
          priority: 'HIGH',
          tasks: [
            { label: 'Positional encoding: Core concepts', estMinutes: 90 },
            { label: 'Positional encoding: Implementation', estMinutes: 75 },
            { label: 'Positional encoding: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Positional encoding help?'
        },
        {
          globalDay: 145,
          week: 21,
          title: 'LayerNorm',
          priority: 'HIGH',
          tasks: [
            { label: 'LayerNorm: Core concepts', estMinutes: 90 },
            { label: 'LayerNorm: Implementation', estMinutes: 75 },
            { label: 'LayerNorm: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LayerNorm help?'
        },
        {
          globalDay: 146,
          week: 21,
          title: 'Transformer blocks',
          priority: 'HIGH',
          tasks: [
            { label: 'Transformer blocks: Core concepts', estMinutes: 90 },
            { label: 'Transformer blocks: Implementation', estMinutes: 75 },
            { label: 'Transformer blocks: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Transformer blocks help?'
        },
        {
          globalDay: 147,
          week: 21,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 148,
          week: 21,
          title: 'Week 21 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 149,
          week: 22,
          title: 'Attention',
          priority: 'HIGH',
          tasks: [
            { label: 'Attention: Core concepts', estMinutes: 90 },
            { label: 'Attention: Implementation', estMinutes: 75 },
            { label: 'Attention: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Attention help?'
        },
        {
          globalDay: 150,
          week: 22,
          title: 'MHA',
          priority: 'HIGH',
          tasks: [
            { label: 'MHA: Core concepts', estMinutes: 90 },
            { label: 'MHA: Implementation', estMinutes: 75 },
            { label: 'MHA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does MHA help?'
        },
        {
          globalDay: 151,
          week: 22,
          title: 'Positional encoding',
          priority: 'HIGH',
          tasks: [
            { label: 'Positional encoding: Core concepts', estMinutes: 90 },
            { label: 'Positional encoding: Implementation', estMinutes: 75 },
            { label: 'Positional encoding: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Positional encoding help?'
        },
        {
          globalDay: 152,
          week: 22,
          title: 'LayerNorm',
          priority: 'HIGH',
          tasks: [
            { label: 'LayerNorm: Core concepts', estMinutes: 90 },
            { label: 'LayerNorm: Implementation', estMinutes: 75 },
            { label: 'LayerNorm: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LayerNorm help?'
        },
        {
          globalDay: 153,
          week: 22,
          title: 'Transformer blocks',
          priority: 'HIGH',
          tasks: [
            { label: 'Transformer blocks: Core concepts', estMinutes: 90 },
            { label: 'Transformer blocks: Implementation', estMinutes: 75 },
            { label: 'Transformer blocks: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Transformer blocks help?'
        },
        {
          globalDay: 154,
          week: 22,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        }
      ]
    },
    {
      id: 'gpt-from-scratch',
      title: 'Phase 7: GPT from Scratch (Character-Level)',
      description: 'Full training loop with gradient accumulation, mixed precision, and sampling strategies.',
      duration: '42 days (Weeks 23-28)',
      weeks: [23, 24, 25, 26, 27, 28],
      days: [
        {
          globalDay: 155,
          week: 23,
          title: 'GPT Architecture Design',
          priority: 'HIGH',
          tasks: [
            { label: 'Read GPT-2 paper - pass 1', estMinutes: 75, resourceLinks: ['https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf'] },
            { label: 'Study nanoGPT architecture', estMinutes: 90, resourceLinks: ['https://github.com/karpathy/nanoGPT'] },
            { label: 'Create notebooks/gpt/day155_gpt_design.ipynb', estMinutes: 120 },
            { label: 'Design GPT config (n_layers, n_heads, d_model, vocab_size)', estMinutes: 60 },
            { label: 'Write docs/notes/day155_gpt_arch.md', estMinutes: 45 }
          ],
          reflectionPrompt: 'What are the key differences between GPT and BERT architectures?'
        },
                {
          globalDayglobalDay: 156,
          week: 23,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 157,
          week: 23,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 158,
          week: 23,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 159,
          week: 23,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 160,
          week: 23,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 161,
          week: 23,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        },
        {
          globalDay: 162,
          week: 23,
          title: 'Week 23 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 163,
          week: 24,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 164,
          week: 24,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 165,
          week: 24,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 166,
          week: 24,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 167,
          week: 24,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 168,
          week: 24,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        },
        {
          globalDay: 169,
          week: 24,
          title: 'Week 24 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 170,
          week: 25,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 171,
          week: 25,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 172,
          week: 25,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 173,
          week: 25,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 174,
          week: 25,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 175,
          week: 25,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        },
        {
          globalDay: 176,
          week: 25,
          title: 'Week 25 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 177,
          week: 26,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 178,
          week: 26,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 179,
          week: 26,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 180,
          week: 26,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 181,
          week: 26,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 182,
          week: 26,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        },
        {
          globalDay: 183,
          week: 26,
          title: 'Week 26 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 184,
          week: 27,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 185,
          week: 27,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 186,
          week: 27,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 187,
          week: 27,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 188,
          week: 27,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 189,
          week: 27,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        },
        {
          globalDay: 190,
          week: 27,
          title: 'Week 27 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 191,
          week: 28,
          title: 'Architecture',
          priority: 'HIGH',
          tasks: [
            { label: 'Architecture: Core concepts', estMinutes: 90 },
            { label: 'Architecture: Implementation', estMinutes: 75 },
            { label: 'Architecture: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Architecture help?'
        },
        {
          globalDay: 192,
          week: 28,
          title: 'Training',
          priority: 'HIGH',
          tasks: [
            { label: 'Training: Core concepts', estMinutes: 90 },
            { label: 'Training: Implementation', estMinutes: 75 },
            { label: 'Training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Training help?'
        },
        {
          globalDay: 193,
          week: 28,
          title: 'Sampling',
          priority: 'HIGH',
          tasks: [
            { label: 'Sampling: Core concepts', estMinutes: 90 },
            { label: 'Sampling: Implementation', estMinutes: 75 },
            { label: 'Sampling: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Sampling help?'
        },
        {
          globalDay: 194,
          week: 28,
          title: 'Mixed precision',
          priority: 'HIGH',
          tasks: [
            { label: 'Mixed precision: Core concepts', estMinutes: 90 },
            { label: 'Mixed precision: Implementation', estMinutes: 75 },
            { label: 'Mixed precision: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Mixed precision help?'
        },
        {
          globalDay: 195,
          week: 28,
          title: 'Char-level',
          priority: 'HIGH',
          tasks: [
            { label: 'Char-level: Core concepts', estMinutes: 90 },
            { label: 'Char-level: Implementation', estMinutes: 75 },
            { label: 'Char-level: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Char-level help?'
        },
        {
          globalDay: 196,
          week: 28,
          title: 'Validation',
          priority: 'HIGH',
          tasks: [
            { label: 'Validation: Core concepts', estMinutes: 90 },
            { label: 'Validation: Implementation', estMinutes: 75 },
            { label: 'Validation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Validation help?'
        }
      ]
    },
    {
      id: 'tokenizer-scaling',
      title: 'Phase 8: BPE Tokenizer + Data Curation + Scaling Laws',
      description: 'Train BPE tokenizer with 16k vocab, curate datasets, and run small-scale scaling experiments.',
      duration: '35 days (Weeks 29-33)',
      weeks: [29, 30, 31, 32, 33],
      days: [
        {
          globalDay: 197,
          week: 29,
          title: 'BPE Algorithm Study',
          priority: 'HIGH',
          tasks: [
            { label: 'Read "Neural Machine Translation of Rare Words with Subword Units"', estMinutes: 60 },
            { label: 'Study tokenizers library documentation', estMinutes: 45, resourceLinks: ['https://huggingface.co/docs/tokenizers/'] },
            { label: 'Create notebooks/tokenizer/day197_bpe_study.ipynb', estMinutes: 90 },
            { label: 'Implement toy BPE on small corpus (100 merges)', estMinutes: 120 },
            { label: 'Write docs/notes/day197_bpe.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'Why does BPE handle rare words better than word-level tokenization?'
        },
                {
          globalDayglobalDay: 198,
          week: 29,
          title: 'BPE',
          priority: 'HIGH',
          tasks: [
            { label: 'BPE: Core concepts', estMinutes: 90 },
            { label: 'BPE: Implementation', estMinutes: 75 },
            { label: 'BPE: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does BPE help?'
        },
        {
          globalDay: 199,
          week: 29,
          title: 'Data curation',
          priority: 'HIGH',
          tasks: [
            { label: 'Data curation: Core concepts', estMinutes: 90 },
            { label: 'Data curation: Implementation', estMinutes: 75 },
            { label: 'Data curation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data curation help?'
        },
        {
          globalDay: 200,
          week: 29,
          title: 'Scaling laws',
          priority: 'HIGH',
          tasks: [
            { label: 'Scaling laws: Core concepts', estMinutes: 90 },
            { label: 'Scaling laws: Implementation', estMinutes: 75 },
            { label: 'Scaling laws: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Scaling laws help?'
        },
        {
          globalDay: 201,
          week: 29,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 202,
          week: 29,
          title: 'Compute tracking',
          priority: 'HIGH',
          tasks: [
            { label: 'Compute tracking: Core concepts', estMinutes: 90 },
            { label: 'Compute tracking: Implementation', estMinutes: 75 },
            { label: 'Compute tracking: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Compute tracking help?'
        },
        {
          globalDay: 203,
          week: 29,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 204,
          week: 29,
          title: 'Week 29 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 205,
          week: 30,
          title: 'Data curation',
          priority: 'HIGH',
          tasks: [
            { label: 'Data curation: Core concepts', estMinutes: 90 },
            { label: 'Data curation: Implementation', estMinutes: 75 },
            { label: 'Data curation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data curation help?'
        },
        {
          globalDay: 206,
          week: 30,
          title: 'Scaling laws',
          priority: 'HIGH',
          tasks: [
            { label: 'Scaling laws: Core concepts', estMinutes: 90 },
            { label: 'Scaling laws: Implementation', estMinutes: 75 },
            { label: 'Scaling laws: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Scaling laws help?'
        },
        {
          globalDay: 207,
          week: 30,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 208,
          week: 30,
          title: 'Compute tracking',
          priority: 'HIGH',
          tasks: [
            { label: 'Compute tracking: Core concepts', estMinutes: 90 },
            { label: 'Compute tracking: Implementation', estMinutes: 75 },
            { label: 'Compute tracking: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Compute tracking help?'
        },
        {
          globalDay: 209,
          week: 30,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 210,
          week: 30,
          title: 'BPE',
          priority: 'HIGH',
          tasks: [
            { label: 'BPE: Core concepts', estMinutes: 90 },
            { label: 'BPE: Implementation', estMinutes: 75 },
            { label: 'BPE: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does BPE help?'
        },
        {
          globalDay: 211,
          week: 30,
          title: 'Week 30 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 212,
          week: 31,
          title: 'Scaling laws',
          priority: 'HIGH',
          tasks: [
            { label: 'Scaling laws: Core concepts', estMinutes: 90 },
            { label: 'Scaling laws: Implementation', estMinutes: 75 },
            { label: 'Scaling laws: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Scaling laws help?'
        },
        {
          globalDay: 213,
          week: 31,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 214,
          week: 31,
          title: 'Compute tracking',
          priority: 'HIGH',
          tasks: [
            { label: 'Compute tracking: Core concepts', estMinutes: 90 },
            { label: 'Compute tracking: Implementation', estMinutes: 75 },
            { label: 'Compute tracking: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Compute tracking help?'
        },
        {
          globalDay: 215,
          week: 31,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 216,
          week: 31,
          title: 'BPE',
          priority: 'HIGH',
          tasks: [
            { label: 'BPE: Core concepts', estMinutes: 90 },
            { label: 'BPE: Implementation', estMinutes: 75 },
            { label: 'BPE: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does BPE help?'
        },
        {
          globalDay: 217,
          week: 31,
          title: 'Data curation',
          priority: 'HIGH',
          tasks: [
            { label: 'Data curation: Core concepts', estMinutes: 90 },
            { label: 'Data curation: Implementation', estMinutes: 75 },
            { label: 'Data curation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data curation help?'
        },
        {
          globalDay: 218,
          week: 31,
          title: 'Week 31 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 219,
          week: 32,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 220,
          week: 32,
          title: 'Compute tracking',
          priority: 'HIGH',
          tasks: [
            { label: 'Compute tracking: Core concepts', estMinutes: 90 },
            { label: 'Compute tracking: Implementation', estMinutes: 75 },
            { label: 'Compute tracking: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Compute tracking help?'
        },
        {
          globalDay: 221,
          week: 32,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 222,
          week: 32,
          title: 'BPE',
          priority: 'HIGH',
          tasks: [
            { label: 'BPE: Core concepts', estMinutes: 90 },
            { label: 'BPE: Implementation', estMinutes: 75 },
            { label: 'BPE: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does BPE help?'
        },
        {
          globalDay: 223,
          week: 32,
          title: 'Data curation',
          priority: 'HIGH',
          tasks: [
            { label: 'Data curation: Core concepts', estMinutes: 90 },
            { label: 'Data curation: Implementation', estMinutes: 75 },
            { label: 'Data curation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data curation help?'
        },
        {
          globalDay: 224,
          week: 32,
          title: 'Scaling laws',
          priority: 'HIGH',
          tasks: [
            { label: 'Scaling laws: Core concepts', estMinutes: 90 },
            { label: 'Scaling laws: Implementation', estMinutes: 75 },
            { label: 'Scaling laws: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Scaling laws help?'
        },
        {
          globalDay: 225,
          week: 32,
          title: 'Week 32 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 226,
          week: 33,
          title: 'Compute tracking',
          priority: 'HIGH',
          tasks: [
            { label: 'Compute tracking: Core concepts', estMinutes: 90 },
            { label: 'Compute tracking: Implementation', estMinutes: 75 },
            { label: 'Compute tracking: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Compute tracking help?'
        },
        {
          globalDay: 227,
          week: 33,
          title: 'Papers',
          priority: 'HIGH',
          tasks: [
            { label: 'Papers: Core concepts', estMinutes: 90 },
            { label: 'Papers: Implementation', estMinutes: 75 },
            { label: 'Papers: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Papers help?'
        },
        {
          globalDay: 228,
          week: 33,
          title: 'BPE',
          priority: 'HIGH',
          tasks: [
            { label: 'BPE: Core concepts', estMinutes: 90 },
            { label: 'BPE: Implementation', estMinutes: 75 },
            { label: 'BPE: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does BPE help?'
        },
        {
          globalDay: 229,
          week: 33,
          title: 'Data curation',
          priority: 'HIGH',
          tasks: [
            { label: 'Data curation: Core concepts', estMinutes: 90 },
            { label: 'Data curation: Implementation', estMinutes: 75 },
            { label: 'Data curation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data curation help?'
        },
        {
          globalDay: 230,
          week: 33,
          title: 'Scaling laws',
          priority: 'HIGH',
          tasks: [
            { label: 'Scaling laws: Core concepts', estMinutes: 90 },
            { label: 'Scaling laws: Implementation', estMinutes: 75 },
            { label: 'Scaling laws: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Scaling laws help?'
        },
        {
          globalDay: 231,
          week: 33,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        }
      ]
    },
    {
      id: 'serving-safety',
      title: 'Phase 9: Ethics, Safety & MVP Serving',
      description: 'Safety filters, red-teaming, FastAPI, Docker, HTTPS, and minimal UI.',
      duration: '21 days (Weeks 34-36)',
      weeks: [34, 35, 36],
      days: [
        {
          globalDay: 232,
          week: 34,
          title: 'AI Safety Fundamentals',
          priority: 'HIGH',
          tasks: [
            { label: 'Read "Concrete Problems in AI Safety" paper', estMinutes: 90 },
            { label: 'Create docs/safety.md document', estMinutes: 60 },
            { label: 'List potential failure modes for your model', estMinutes: 45 },
            { label: 'Design safety filter architecture', estMinutes: 60 },
            { label: 'Write docs/notes/day232_safety.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'What are the most critical safety concerns for a student LLM project?'
        },
                {
          globalDayglobalDay: 233,
          week: 34,
          title: 'Safety',
          priority: 'HIGH',
          tasks: [
            { label: 'Safety: Core concepts', estMinutes: 90 },
            { label: 'Safety: Implementation', estMinutes: 75 },
            { label: 'Safety: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Safety help?'
        },
        {
          globalDay: 234,
          week: 34,
          title: 'FastAPI',
          priority: 'HIGH',
          tasks: [
            { label: 'FastAPI: Core concepts', estMinutes: 90 },
            { label: 'FastAPI: Implementation', estMinutes: 75 },
            { label: 'FastAPI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does FastAPI help?'
        },
        {
          globalDay: 235,
          week: 34,
          title: 'Docker',
          priority: 'HIGH',
          tasks: [
            { label: 'Docker: Core concepts', estMinutes: 90 },
            { label: 'Docker: Implementation', estMinutes: 75 },
            { label: 'Docker: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Docker help?'
        },
        {
          globalDay: 236,
          week: 34,
          title: 'HTTPS',
          priority: 'HIGH',
          tasks: [
            { label: 'HTTPS: Core concepts', estMinutes: 90 },
            { label: 'HTTPS: Implementation', estMinutes: 75 },
            { label: 'HTTPS: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does HTTPS help?'
        },
        {
          globalDay: 237,
          week: 34,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        },
        {
          globalDay: 238,
          week: 34,
          title: 'UI',
          priority: 'HIGH',
          tasks: [
            { label: 'UI: Core concepts', estMinutes: 90 },
            { label: 'UI: Implementation', estMinutes: 75 },
            { label: 'UI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does UI help?'
        },
        {
          globalDay: 239,
          week: 34,
          title: 'Week 34 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 240,
          week: 35,
          title: 'Safety',
          priority: 'HIGH',
          tasks: [
            { label: 'Safety: Core concepts', estMinutes: 90 },
            { label: 'Safety: Implementation', estMinutes: 75 },
            { label: 'Safety: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Safety help?'
        },
        {
          globalDay: 241,
          week: 35,
          title: 'FastAPI',
          priority: 'HIGH',
          tasks: [
            { label: 'FastAPI: Core concepts', estMinutes: 90 },
            { label: 'FastAPI: Implementation', estMinutes: 75 },
            { label: 'FastAPI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does FastAPI help?'
        },
        {
          globalDay: 242,
          week: 35,
          title: 'Docker',
          priority: 'HIGH',
          tasks: [
            { label: 'Docker: Core concepts', estMinutes: 90 },
            { label: 'Docker: Implementation', estMinutes: 75 },
            { label: 'Docker: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Docker help?'
        },
        {
          globalDay: 243,
          week: 35,
          title: 'HTTPS',
          priority: 'HIGH',
          tasks: [
            { label: 'HTTPS: Core concepts', estMinutes: 90 },
            { label: 'HTTPS: Implementation', estMinutes: 75 },
            { label: 'HTTPS: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does HTTPS help?'
        },
        {
          globalDay: 244,
          week: 35,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        },
        {
          globalDay: 245,
          week: 35,
          title: 'UI',
          priority: 'HIGH',
          tasks: [
            { label: 'UI: Core concepts', estMinutes: 90 },
            { label: 'UI: Implementation', estMinutes: 75 },
            { label: 'UI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does UI help?'
        },
        {
          globalDay: 246,
          week: 35,
          title: 'Week 35 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 247,
          week: 36,
          title: 'Safety',
          priority: 'HIGH',
          tasks: [
            { label: 'Safety: Core concepts', estMinutes: 90 },
            { label: 'Safety: Implementation', estMinutes: 75 },
            { label: 'Safety: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Safety help?'
        },
        {
          globalDay: 248,
          week: 36,
          title: 'FastAPI',
          priority: 'HIGH',
          tasks: [
            { label: 'FastAPI: Core concepts', estMinutes: 90 },
            { label: 'FastAPI: Implementation', estMinutes: 75 },
            { label: 'FastAPI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does FastAPI help?'
        },
        {
          globalDay: 249,
          week: 36,
          title: 'Docker',
          priority: 'HIGH',
          tasks: [
            { label: 'Docker: Core concepts', estMinutes: 90 },
            { label: 'Docker: Implementation', estMinutes: 75 },
            { label: 'Docker: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Docker help?'
        },
        {
          globalDay: 250,
          week: 36,
          title: 'HTTPS',
          priority: 'HIGH',
          tasks: [
            { label: 'HTTPS: Core concepts', estMinutes: 90 },
            { label: 'HTTPS: Implementation', estMinutes: 75 },
            { label: 'HTTPS: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does HTTPS help?'
        },
        {
          globalDay: 251,
          week: 36,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        },
        {
          globalDay: 252,
          week: 36,
          title: 'UI',
          priority: 'HIGH',
          tasks: [
            { label: 'UI: Core concepts', estMinutes: 90 },
            { label: 'UI: Implementation', estMinutes: 75 },
            { label: 'UI: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does UI help?'
        }
      ]
    },
    {
      id: 'peft-optimization',
      title: 'Phase 10: PEFT & Inference Optimization',
      description: 'LoRA/QLoRA fine-tuning, quantization (8/4-bit), and KV-cache implementation.',
      duration: '28 days (Weeks 37-40)',
      weeks: [37, 38, 39, 40],
      days: [
        {
          globalDay: 253,
          week: 37,
          title: 'LoRA Paper Study & Theory',
          priority: 'HIGH',
          tasks: [
            { label: 'Read "LoRA: Low-Rank Adaptation" paper - 3 passes', estMinutes: 120, resourceLinks: ['https://arxiv.org/abs/2106.09685'] },
            { label: 'Create notebooks/peft/day253_lora_theory.ipynb', estMinutes: 90 },
            { label: 'Derive math for low-rank updates (W + AB)', estMinutes: 75 },
            { label: 'Estimate parameter reduction for different ranks', estMinutes: 45 },
            { label: 'Write docs/notes/day253_lora.md', estMinutes: 45 }
          ],
          reflectionPrompt: 'Why does low-rank adaptation work so well for fine-tuning?'
        },
                {
          globalDayglobalDay: 254,
          week: 37,
          title: 'LoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'LoRA: Core concepts', estMinutes: 90 },
            { label: 'LoRA: Implementation', estMinutes: 75 },
            { label: 'LoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LoRA help?'
        },
        {
          globalDay: 255,
          week: 37,
          title: 'QLoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'QLoRA: Core concepts', estMinutes: 90 },
            { label: 'QLoRA: Implementation', estMinutes: 75 },
            { label: 'QLoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does QLoRA help?'
        },
        {
          globalDay: 256,
          week: 37,
          title: 'Quantization',
          priority: 'HIGH',
          tasks: [
            { label: 'Quantization: Core concepts', estMinutes: 90 },
            { label: 'Quantization: Implementation', estMinutes: 75 },
            { label: 'Quantization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Quantization help?'
        },
        {
          globalDay: 257,
          week: 37,
          title: 'KV-cache',
          priority: 'HIGH',
          tasks: [
            { label: 'KV-cache: Core concepts', estMinutes: 90 },
            { label: 'KV-cache: Implementation', estMinutes: 75 },
            { label: 'KV-cache: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does KV-cache help?'
        },
        {
          globalDay: 258,
          week: 37,
          title: 'Inference opt',
          priority: 'HIGH',
          tasks: [
            { label: 'Inference opt: Core concepts', estMinutes: 90 },
            { label: 'Inference opt: Implementation', estMinutes: 75 },
            { label: 'Inference opt: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Inference opt help?'
        },
        {
          globalDay: 259,
          week: 37,
          title: 'Fine-tuning',
          priority: 'HIGH',
          tasks: [
            { label: 'Fine-tuning: Core concepts', estMinutes: 90 },
            { label: 'Fine-tuning: Implementation', estMinutes: 75 },
            { label: 'Fine-tuning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Fine-tuning help?'
        },
        {
          globalDay: 260,
          week: 37,
          title: 'Week 37 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 261,
          week: 38,
          title: 'LoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'LoRA: Core concepts', estMinutes: 90 },
            { label: 'LoRA: Implementation', estMinutes: 75 },
            { label: 'LoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LoRA help?'
        },
        {
          globalDay: 262,
          week: 38,
          title: 'QLoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'QLoRA: Core concepts', estMinutes: 90 },
            { label: 'QLoRA: Implementation', estMinutes: 75 },
            { label: 'QLoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does QLoRA help?'
        },
        {
          globalDay: 263,
          week: 38,
          title: 'Quantization',
          priority: 'HIGH',
          tasks: [
            { label: 'Quantization: Core concepts', estMinutes: 90 },
            { label: 'Quantization: Implementation', estMinutes: 75 },
            { label: 'Quantization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Quantization help?'
        },
        {
          globalDay: 264,
          week: 38,
          title: 'KV-cache',
          priority: 'HIGH',
          tasks: [
            { label: 'KV-cache: Core concepts', estMinutes: 90 },
            { label: 'KV-cache: Implementation', estMinutes: 75 },
            { label: 'KV-cache: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does KV-cache help?'
        },
        {
          globalDay: 265,
          week: 38,
          title: 'Inference opt',
          priority: 'HIGH',
          tasks: [
            { label: 'Inference opt: Core concepts', estMinutes: 90 },
            { label: 'Inference opt: Implementation', estMinutes: 75 },
            { label: 'Inference opt: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Inference opt help?'
        },
        {
          globalDay: 266,
          week: 38,
          title: 'Fine-tuning',
          priority: 'HIGH',
          tasks: [
            { label: 'Fine-tuning: Core concepts', estMinutes: 90 },
            { label: 'Fine-tuning: Implementation', estMinutes: 75 },
            { label: 'Fine-tuning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Fine-tuning help?'
        },
        {
          globalDay: 267,
          week: 38,
          title: 'Week 38 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 268,
          week: 39,
          title: 'LoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'LoRA: Core concepts', estMinutes: 90 },
            { label: 'LoRA: Implementation', estMinutes: 75 },
            { label: 'LoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LoRA help?'
        },
        {
          globalDay: 269,
          week: 39,
          title: 'QLoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'QLoRA: Core concepts', estMinutes: 90 },
            { label: 'QLoRA: Implementation', estMinutes: 75 },
            { label: 'QLoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does QLoRA help?'
        },
        {
          globalDay: 270,
          week: 39,
          title: 'Quantization',
          priority: 'HIGH',
          tasks: [
            { label: 'Quantization: Core concepts', estMinutes: 90 },
            { label: 'Quantization: Implementation', estMinutes: 75 },
            { label: 'Quantization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Quantization help?'
        },
        {
          globalDay: 271,
          week: 39,
          title: 'KV-cache',
          priority: 'HIGH',
          tasks: [
            { label: 'KV-cache: Core concepts', estMinutes: 90 },
            { label: 'KV-cache: Implementation', estMinutes: 75 },
            { label: 'KV-cache: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does KV-cache help?'
        },
        {
          globalDay: 272,
          week: 39,
          title: 'Inference opt',
          priority: 'HIGH',
          tasks: [
            { label: 'Inference opt: Core concepts', estMinutes: 90 },
            { label: 'Inference opt: Implementation', estMinutes: 75 },
            { label: 'Inference opt: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Inference opt help?'
        },
        {
          globalDay: 273,
          week: 39,
          title: 'Fine-tuning',
          priority: 'HIGH',
          tasks: [
            { label: 'Fine-tuning: Core concepts', estMinutes: 90 },
            { label: 'Fine-tuning: Implementation', estMinutes: 75 },
            { label: 'Fine-tuning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Fine-tuning help?'
        },
        {
          globalDay: 274,
          week: 39,
          title: 'Week 39 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 275,
          week: 40,
          title: 'LoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'LoRA: Core concepts', estMinutes: 90 },
            { label: 'LoRA: Implementation', estMinutes: 75 },
            { label: 'LoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does LoRA help?'
        },
        {
          globalDay: 276,
          week: 40,
          title: 'QLoRA',
          priority: 'HIGH',
          tasks: [
            { label: 'QLoRA: Core concepts', estMinutes: 90 },
            { label: 'QLoRA: Implementation', estMinutes: 75 },
            { label: 'QLoRA: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does QLoRA help?'
        },
        {
          globalDay: 277,
          week: 40,
          title: 'Quantization',
          priority: 'HIGH',
          tasks: [
            { label: 'Quantization: Core concepts', estMinutes: 90 },
            { label: 'Quantization: Implementation', estMinutes: 75 },
            { label: 'Quantization: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Quantization help?'
        },
        {
          globalDay: 278,
          week: 40,
          title: 'KV-cache',
          priority: 'HIGH',
          tasks: [
            { label: 'KV-cache: Core concepts', estMinutes: 90 },
            { label: 'KV-cache: Implementation', estMinutes: 75 },
            { label: 'KV-cache: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does KV-cache help?'
        },
        {
          globalDay: 279,
          week: 40,
          title: 'Inference opt',
          priority: 'HIGH',
          tasks: [
            { label: 'Inference opt: Core concepts', estMinutes: 90 },
            { label: 'Inference opt: Implementation', estMinutes: 75 },
            { label: 'Inference opt: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Inference opt help?'
        },
        {
          globalDay: 280,
          week: 40,
          title: 'Fine-tuning',
          priority: 'HIGH',
          tasks: [
            { label: 'Fine-tuning: Core concepts', estMinutes: 90 },
            { label: 'Fine-tuning: Implementation', estMinutes: 75 },
            { label: 'Fine-tuning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Fine-tuning help?'
        }
      ]
    },
    {
      id: 'buffer-refactor',
      title: 'Phase 11: Buffer & Refactoring',
      description: 'Cleanup, refactoring, and testing for tokenizer/sampling.',
      duration: '7 days (Week 41)',
      weeks: [41],
      days: [
        {
          globalDay: 281,
          week: 41,
          title: 'Code Refactoring Day',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all src/ modules for code smells', estMinutes: 90 },
            { label: 'Refactor duplicated code into utils', estMinutes: 120 },
            { label: 'Add type hints to key functions', estMinutes: 60 },
            { label: 'Run black formatter on all files', estMinutes: 15 },
            { label: 'Update README with current status', estMinutes: 30 }
          ],
          reflectionPrompt: 'What patterns emerged that could be abstracted?'
        },
                {
          globalDayglobalDay: 282,
          week: 41,
          title: 'Code cleanup',
          priority: 'HIGH',
          tasks: [
            { label: 'Code cleanup: Core concepts', estMinutes: 90 },
            { label: 'Code cleanup: Implementation', estMinutes: 75 },
            { label: 'Code cleanup: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Code cleanup help?'
        },
        {
          globalDay: 283,
          week: 41,
          title: 'Testing',
          priority: 'HIGH',
          tasks: [
            { label: 'Testing: Core concepts', estMinutes: 90 },
            { label: 'Testing: Implementation', estMinutes: 75 },
            { label: 'Testing: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Testing help?'
        },
        {
          globalDay: 284,
          week: 41,
          title: 'Type hints',
          priority: 'HIGH',
          tasks: [
            { label: 'Type hints: Core concepts', estMinutes: 90 },
            { label: 'Type hints: Implementation', estMinutes: 75 },
            { label: 'Type hints: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Type hints help?'
        },
        {
          globalDay: 285,
          week: 41,
          title: 'Documentation',
          priority: 'HIGH',
          tasks: [
            { label: 'Documentation: Core concepts', estMinutes: 90 },
            { label: 'Documentation: Implementation', estMinutes: 75 },
            { label: 'Documentation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Documentation help?'
        },
        {
          globalDay: 286,
          week: 41,
          title: 'Buffer',
          priority: 'HIGH',
          tasks: [
            { label: 'Buffer: Core concepts', estMinutes: 90 },
            { label: 'Buffer: Implementation', estMinutes: 75 },
            { label: 'Buffer: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Buffer help?'
        },
        {
          globalDay: 287,
          week: 41,
          title: 'Review',
          priority: 'HIGH',
          tasks: [
            { label: 'Review: Core concepts', estMinutes: 90 },
            { label: 'Review: Implementation', estMinutes: 75 },
            { label: 'Review: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Review help?'
        }
      ]
    },
    {
      id: 'mlops',
      title: 'Phase 12: MLOps Essentials',
      description: 'Pytest, black, CI, YAML configs, JSONL logging, cleanup scripts.',
      duration: '21 days (Weeks 42-44)',
      weeks: [42, 43, 44],
      days: [
        {
          globalDay: 288,
          week: 42,
          title: 'Comprehensive Testing Setup',
          priority: 'HIGH',
          tasks: [
            { label: 'Write tests/test_tokenizer.py with 10+ test cases', estMinutes: 120 },
            { label: 'Write tests/test_attention.py', estMinutes: 90 },
            { label: 'Write tests/test_model.py', estMinutes: 90 },
            { label: 'Achieve >80% code coverage', estMinutes: 60 },
            { label: 'Document testing strategy in docs/mlops/testing.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'Which components are hardest to test? Why?'
        },
                {
          globalDayglobalDay: 289,
          week: 42,
          title: 'Pytest',
          priority: 'HIGH',
          tasks: [
            { label: 'Pytest: Core concepts', estMinutes: 90 },
            { label: 'Pytest: Implementation', estMinutes: 75 },
            { label: 'Pytest: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Pytest help?'
        },
        {
          globalDay: 290,
          week: 42,
          title: 'Black',
          priority: 'HIGH',
          tasks: [
            { label: 'Black: Core concepts', estMinutes: 90 },
            { label: 'Black: Implementation', estMinutes: 75 },
            { label: 'Black: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Black help?'
        },
        {
          globalDay: 291,
          week: 42,
          title: 'CI/CD',
          priority: 'HIGH',
          tasks: [
            { label: 'CI/CD: Core concepts', estMinutes: 90 },
            { label: 'CI/CD: Implementation', estMinutes: 75 },
            { label: 'CI/CD: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CI/CD help?'
        },
        {
          globalDay: 292,
          week: 42,
          title: 'YAML',
          priority: 'HIGH',
          tasks: [
            { label: 'YAML: Core concepts', estMinutes: 90 },
            { label: 'YAML: Implementation', estMinutes: 75 },
            { label: 'YAML: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does YAML help?'
        },
        {
          globalDay: 293,
          week: 42,
          title: 'Logging',
          priority: 'HIGH',
          tasks: [
            { label: 'Logging: Core concepts', estMinutes: 90 },
            { label: 'Logging: Implementation', estMinutes: 75 },
            { label: 'Logging: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Logging help?'
        },
        {
          globalDay: 294,
          week: 42,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        },
        {
          globalDay: 295,
          week: 42,
          title: 'Week 42 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 296,
          week: 43,
          title: 'Pytest',
          priority: 'HIGH',
          tasks: [
            { label: 'Pytest: Core concepts', estMinutes: 90 },
            { label: 'Pytest: Implementation', estMinutes: 75 },
            { label: 'Pytest: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Pytest help?'
        },
        {
          globalDay: 297,
          week: 43,
          title: 'Black',
          priority: 'HIGH',
          tasks: [
            { label: 'Black: Core concepts', estMinutes: 90 },
            { label: 'Black: Implementation', estMinutes: 75 },
            { label: 'Black: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Black help?'
        },
        {
          globalDay: 298,
          week: 43,
          title: 'CI/CD',
          priority: 'HIGH',
          tasks: [
            { label: 'CI/CD: Core concepts', estMinutes: 90 },
            { label: 'CI/CD: Implementation', estMinutes: 75 },
            { label: 'CI/CD: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CI/CD help?'
        },
        {
          globalDay: 299,
          week: 43,
          title: 'YAML',
          priority: 'HIGH',
          tasks: [
            { label: 'YAML: Core concepts', estMinutes: 90 },
            { label: 'YAML: Implementation', estMinutes: 75 },
            { label: 'YAML: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does YAML help?'
        },
        {
          globalDay: 300,
          week: 43,
          title: 'Logging',
          priority: 'HIGH',
          tasks: [
            { label: 'Logging: Core concepts', estMinutes: 90 },
            { label: 'Logging: Implementation', estMinutes: 75 },
            { label: 'Logging: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Logging help?'
        },
        {
          globalDay: 301,
          week: 43,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        },
        {
          globalDay: 302,
          week: 43,
          title: 'Week 43 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 303,
          week: 44,
          title: 'Pytest',
          priority: 'HIGH',
          tasks: [
            { label: 'Pytest: Core concepts', estMinutes: 90 },
            { label: 'Pytest: Implementation', estMinutes: 75 },
            { label: 'Pytest: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Pytest help?'
        },
        {
          globalDay: 304,
          week: 44,
          title: 'Black',
          priority: 'HIGH',
          tasks: [
            { label: 'Black: Core concepts', estMinutes: 90 },
            { label: 'Black: Implementation', estMinutes: 75 },
            { label: 'Black: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Black help?'
        },
        {
          globalDay: 305,
          week: 44,
          title: 'CI/CD',
          priority: 'HIGH',
          tasks: [
            { label: 'CI/CD: Core concepts', estMinutes: 90 },
            { label: 'CI/CD: Implementation', estMinutes: 75 },
            { label: 'CI/CD: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does CI/CD help?'
        },
        {
          globalDay: 306,
          week: 44,
          title: 'YAML',
          priority: 'HIGH',
          tasks: [
            { label: 'YAML: Core concepts', estMinutes: 90 },
            { label: 'YAML: Implementation', estMinutes: 75 },
            { label: 'YAML: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does YAML help?'
        },
        {
          globalDay: 307,
          week: 44,
          title: 'Logging',
          priority: 'HIGH',
          tasks: [
            { label: 'Logging: Core concepts', estMinutes: 90 },
            { label: 'Logging: Implementation', estMinutes: 75 },
            { label: 'Logging: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Logging help?'
        },
        {
          globalDay: 308,
          week: 44,
          title: 'Monitoring',
          priority: 'HIGH',
          tasks: [
            { label: 'Monitoring: Core concepts', estMinutes: 90 },
            { label: 'Monitoring: Implementation', estMinutes: 75 },
            { label: 'Monitoring: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Monitoring help?'
        }
      ]
    },
    {
      id: 'capstone',
      title: 'Phase 13: Capstone Project Build & Iterate',
      description: 'Choose Math Study Assistant OR Hebrew-English Code Assistant and build.',
      duration: '28 days (Weeks 45-48)',
      weeks: [45, 46, 47, 48],
      days: [
        {
          globalDay: 309,
          week: 45,
          title: 'Capstone Project Selection & Planning',
          priority: 'HIGH',
          tasks: [
            { label: 'Review both capstone options (Math Assistant vs Code Assistant)', estMinutes: 45 },
            { label: 'Choose ONE capstone project', estMinutes: 30 },
            { label: 'Write capstone proposal in docs/capstone/proposal.md', estMinutes: 90 },
            { label: 'Define success metrics and evaluation plan', estMinutes: 60 },
            { label: 'Create project timeline (weeks 45-48)', estMinutes: 45 }
          ],
          reflectionPrompt: 'Why did you choose this capstone? What excites you most?'
        },
                {
          globalDayglobalDay: 310,
          week: 45,
          title: 'Planning',
          priority: 'HIGH',
          tasks: [
            { label: 'Planning: Core concepts', estMinutes: 90 },
            { label: 'Planning: Implementation', estMinutes: 75 },
            { label: 'Planning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Planning help?'
        },
        {
          globalDay: 311,
          week: 45,
          title: 'Data collection',
          priority: 'HIGH',
          tasks: [
            { label: 'Data collection: Core concepts', estMinutes: 90 },
            { label: 'Data collection: Implementation', estMinutes: 75 },
            { label: 'Data collection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data collection help?'
        },
        {
          globalDay: 312,
          week: 45,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 313,
          week: 45,
          title: 'Evaluation',
          priority: 'HIGH',
          tasks: [
            { label: 'Evaluation: Core concepts', estMinutes: 90 },
            { label: 'Evaluation: Implementation', estMinutes: 75 },
            { label: 'Evaluation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Evaluation help?'
        },
        {
          globalDay: 314,
          week: 45,
          title: 'Iteration',
          priority: 'HIGH',
          tasks: [
            { label: 'Iteration: Core concepts', estMinutes: 90 },
            { label: 'Iteration: Implementation', estMinutes: 75 },
            { label: 'Iteration: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Iteration help?'
        },
        {
          globalDay: 315,
          week: 45,
          title: 'Testing',
          priority: 'HIGH',
          tasks: [
            { label: 'Testing: Core concepts', estMinutes: 90 },
            { label: 'Testing: Implementation', estMinutes: 75 },
            { label: 'Testing: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Testing help?'
        },
        {
          globalDay: 316,
          week: 45,
          title: 'Week 45 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 317,
          week: 46,
          title: 'Planning',
          priority: 'HIGH',
          tasks: [
            { label: 'Planning: Core concepts', estMinutes: 90 },
            { label: 'Planning: Implementation', estMinutes: 75 },
            { label: 'Planning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Planning help?'
        },
        {
          globalDay: 318,
          week: 46,
          title: 'Data collection',
          priority: 'HIGH',
          tasks: [
            { label: 'Data collection: Core concepts', estMinutes: 90 },
            { label: 'Data collection: Implementation', estMinutes: 75 },
            { label: 'Data collection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data collection help?'
        },
        {
          globalDay: 319,
          week: 46,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 320,
          week: 46,
          title: 'Evaluation',
          priority: 'HIGH',
          tasks: [
            { label: 'Evaluation: Core concepts', estMinutes: 90 },
            { label: 'Evaluation: Implementation', estMinutes: 75 },
            { label: 'Evaluation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Evaluation help?'
        },
        {
          globalDay: 321,
          week: 46,
          title: 'Iteration',
          priority: 'HIGH',
          tasks: [
            { label: 'Iteration: Core concepts', estMinutes: 90 },
            { label: 'Iteration: Implementation', estMinutes: 75 },
            { label: 'Iteration: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Iteration help?'
        },
        {
          globalDay: 322,
          week: 46,
          title: 'Testing',
          priority: 'HIGH',
          tasks: [
            { label: 'Testing: Core concepts', estMinutes: 90 },
            { label: 'Testing: Implementation', estMinutes: 75 },
            { label: 'Testing: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Testing help?'
        },
        {
          globalDay: 323,
          week: 46,
          title: 'Week 46 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 324,
          week: 47,
          title: 'Planning',
          priority: 'HIGH',
          tasks: [
            { label: 'Planning: Core concepts', estMinutes: 90 },
            { label: 'Planning: Implementation', estMinutes: 75 },
            { label: 'Planning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Planning help?'
        },
        {
          globalDay: 325,
          week: 47,
          title: 'Data collection',
          priority: 'HIGH',
          tasks: [
            { label: 'Data collection: Core concepts', estMinutes: 90 },
            { label: 'Data collection: Implementation', estMinutes: 75 },
            { label: 'Data collection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data collection help?'
        },
        {
          globalDay: 326,
          week: 47,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 327,
          week: 47,
          title: 'Evaluation',
          priority: 'HIGH',
          tasks: [
            { label: 'Evaluation: Core concepts', estMinutes: 90 },
            { label: 'Evaluation: Implementation', estMinutes: 75 },
            { label: 'Evaluation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Evaluation help?'
        },
        {
          globalDay: 328,
          week: 47,
          title: 'Iteration',
          priority: 'HIGH',
          tasks: [
            { label: 'Iteration: Core concepts', estMinutes: 90 },
            { label: 'Iteration: Implementation', estMinutes: 75 },
            { label: 'Iteration: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Iteration help?'
        },
        {
          globalDay: 329,
          week: 47,
          title: 'Testing',
          priority: 'HIGH',
          tasks: [
            { label: 'Testing: Core concepts', estMinutes: 90 },
            { label: 'Testing: Implementation', estMinutes: 75 },
            { label: 'Testing: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Testing help?'
        },
        {
          globalDay: 330,
          week: 47,
          title: 'Week 47 Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review week materials', estMinutes: 75 },
            { label: 'Practice exercises', estMinutes: 60 },
            { label: 'Write weekly log', estMinutes: 30 }
          ],
          reflectionPrompt: 'What progress this week?'
        },
        {
          globalDay: 331,
          week: 48,
          title: 'Planning',
          priority: 'HIGH',
          tasks: [
            { label: 'Planning: Core concepts', estMinutes: 90 },
            { label: 'Planning: Implementation', estMinutes: 75 },
            { label: 'Planning: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Planning help?'
        },
        {
          globalDay: 332,
          week: 48,
          title: 'Data collection',
          priority: 'HIGH',
          tasks: [
            { label: 'Data collection: Core concepts', estMinutes: 90 },
            { label: 'Data collection: Implementation', estMinutes: 75 },
            { label: 'Data collection: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Data collection help?'
        },
        {
          globalDay: 333,
          week: 48,
          title: 'Model training',
          priority: 'HIGH',
          tasks: [
            { label: 'Model training: Core concepts', estMinutes: 90 },
            { label: 'Model training: Implementation', estMinutes: 75 },
            { label: 'Model training: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Model training help?'
        },
        {
          globalDay: 334,
          week: 48,
          title: 'Evaluation',
          priority: 'HIGH',
          tasks: [
            { label: 'Evaluation: Core concepts', estMinutes: 90 },
            { label: 'Evaluation: Implementation', estMinutes: 75 },
            { label: 'Evaluation: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Evaluation help?'
        },
        {
          globalDay: 335,
          week: 48,
          title: 'Iteration',
          priority: 'HIGH',
          tasks: [
            { label: 'Iteration: Core concepts', estMinutes: 90 },
            { label: 'Iteration: Implementation', estMinutes: 75 },
            { label: 'Iteration: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Iteration help?'
        },
        {
          globalDay: 336,
          week: 48,
          title: 'Testing',
          priority: 'HIGH',
          tasks: [
            { label: 'Testing: Core concepts', estMinutes: 90 },
            { label: 'Testing: Implementation', estMinutes: 75 },
            { label: 'Testing: Practice', estMinutes: 60 }
          ],
          reflectionPrompt: 'How does Testing help?'
        }
      ]
    },
    {
      id: 'portfolio',
      title: 'Phase 14: Portfolio & Final Polish',
      description: 'Bilingual blogs, architecture diagrams, documentation, and public demos.',
      duration: '28 days (Weeks 49-52)',
      weeks: [49, 50, 51, 52],
      days: [
        {
          globalDay: 337,
          week: 49,
          title: 'Portfolio Website Design',
          priority: 'HIGH',
          tasks: [
            { label: 'Design portfolio website structure', estMinutes: 90 },
            { label: 'Choose static site generator (Hugo/Jekyll/plain HTML)', estMinutes: 45 },
            { label: 'Create wireframes for main pages', estMinutes: 60 },
            { label: 'Set up GitHub Pages or custom domain', estMinutes: 60 },
            { label: 'Write docs/portfolio/design.md', estMinutes: 30 }
          ],
          reflectionPrompt: 'What story do you want your portfolio to tell?'
        },
        {
          globalDay: 338,
          week: 49,
          title: 'First Blog Post: Scaling Lessons (English)',
          priority: 'HIGH',
          tasks: [
            { label: 'Outline blog post structure', estMinutes: 30 },
            { label: 'Write first draft (800+ words)', estMinutes: 120 },
            { label: 'Create 3 visualizations/diagrams', estMinutes: 90 },
            { label: 'Edit and polish', estMinutes: 60 },
            { label: 'Publish and share on Twitter/HF Discord', estMinutes: 20 }
          ],
          reflectionPrompt: 'What surprised you most about scaling laws?'
        },
        {
          globalDay: 339,
          week: 49,
          title: 'First Blog Post: Scaling Lessons (Hebrew)',
          priority: 'HIGH',
          tasks: [
            { label: 'Translate English blog post to Hebrew', estMinutes: 90 },
            { label: 'Adapt cultural references for Israeli audience', estMinutes: 45 },
            { label: 'Review with native speaker if possible', estMinutes: 30 },
            { label: 'Publish Hebrew version', estMinutes: 20 },
            { label: 'Share in Israeli tech communities', estMinutes: 20 }
          ],
          reflectionPrompt: 'How does writing in Hebrew change your technical communication?'
        },
        {
          globalDay: 340,
          week: 49,
          title: 'Architecture Diagram: End-to-End System',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Sketch system architecture on paper', estMinutes: 45 },
            { label: 'Create diagram with draw.io or similar', estMinutes: 90 },
            { label: 'Add component descriptions and data flows', estMinutes: 60 },
            { label: 'Export high-quality PNG/SVG', estMinutes: 15 },
            { label: 'Add to portfolio and relevant repos', estMinutes: 30 }
          ],
          reflectionPrompt: 'Does your architecture diagram tell a clear story?'
        },
        {
          globalDay: 341,
          week: 49,
          title: 'Repository Documentation Audit',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all repo READMEs', estMinutes: 60 },
            { label: 'Add missing setup instructions', estMinutes: 45 },
            { label: 'Create CONTRIBUTING.md for main repos', estMinutes: 45 },
            { label: 'Add badges (build status, coverage, etc.)', estMinutes: 30 },
            { label: 'Verify all links work', estMinutes: 30 }
          ],
          reflectionPrompt: 'Can a stranger clone and run your projects?'
        },
        {
          globalDay: 342,
          week: 49,
          title: 'Second Blog Post: BPE Tokenizer Pitfalls (English)',
          priority: 'HIGH',
          tasks: [
            { label: 'Outline blog post on tokenizer challenges', estMinutes: 30 },
            { label: 'Write first draft (800+ words)', estMinutes: 120 },
            { label: 'Include code examples and gotchas', estMinutes: 75 },
            { label: 'Edit and polish', estMinutes: 60 },
            { label: 'Publish and share', estMinutes: 20 }
          ],
          reflectionPrompt: 'What tokenizer mistake cost you the most time?'
        },
        {
          globalDay: 343,
          week: 49,
          title: 'Second Blog Post: BPE Tokenizer Pitfalls (Hebrew)',
          priority: 'HIGH',
          tasks: [
            { label: 'Translate BPE blog post to Hebrew', estMinutes: 90 },
            { label: 'Adapt technical terminology', estMinutes: 45 },
            { label: 'Review and polish Hebrew version', estMinutes: 30 },
            { label: 'Publish and share in Israeli communities', estMinutes: 20 }
          ],
          reflectionPrompt: 'What Hebrew technical terms felt awkward? Why?'
        },
        {
          globalDay: 344,
          week: 50,
          title: 'Demo Video Recording',
          priority: 'HIGH',
          tasks: [
            { label: 'Write demo script (3-5 minutes)', estMinutes: 45 },
            { label: 'Set up recording environment (OBS/Zoom)', estMinutes: 30 },
            { label: 'Record demo video (multiple takes)', estMinutes: 90 },
            { label: 'Edit video (cuts, captions)', estMinutes: 75 },
            { label: 'Upload to YouTube with description', estMinutes: 30 }
          ],
          reflectionPrompt: 'Does your demo showcase your best work?'
        },
        {
          globalDay: 345,
          week: 50,
          title: 'Third Blog Post: MVP Shipping Process (English)',
          priority: 'HIGH',
          tasks: [
            { label: 'Outline blog post on deployment journey', estMinutes: 30 },
            { label: 'Write first draft (800+ words)', estMinutes: 120 },
            { label: 'Include deployment architecture diagram', estMinutes: 60 },
            { label: 'Edit and polish', estMinutes: 60 },
            { label: 'Publish and share', estMinutes: 20 }
          ],
          reflectionPrompt: 'What surprised you most about production deployment?'
        },
        {
          globalDay: 346,
          week: 50,
          title: 'Third Blog Post: MVP Shipping Process (Hebrew)',
          priority: 'HIGH',
          tasks: [
            { label: 'Translate MVP blog post to Hebrew', estMinutes: 90 },
            { label: 'Adapt for Israeli tech context', estMinutes: 45 },
            { label: 'Review and polish', estMinutes: 30 },
            { label: 'Publish and share', estMinutes: 20 }
          ],
          reflectionPrompt: 'How do Israeli deployment practices differ from global standards?'
        },
        {
          globalDay: 347,
          week: 50,
          title: 'LinkedIn Profile Update',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Update LinkedIn headline and summary', estMinutes: 45 },
            { label: 'Add all projects with descriptions', estMinutes: 60 },
            { label: 'Upload project images/demos', estMinutes: 30 },
            { label: 'Add skills and endorsements', estMinutes: 30 },
            { label: 'Connect with mentors and peers', estMinutes: 30 }
          ],
          reflectionPrompt: 'Does your LinkedIn profile reflect your growth?'
        },
        {
          globalDay: 348,
          week: 50,
          title: 'GitHub Profile README',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Create github.com/DovJNash/DovJNash repo', estMinutes: 15 },
            { label: 'Write profile README with bio and projects', estMinutes: 90 },
            { label: 'Add GitHub stats widgets', estMinutes: 30 },
            { label: 'Pin best repositories', estMinutes: 15 },
            { label: 'Add contact information and social links', estMinutes: 15 }
          ],
          reflectionPrompt: 'What first impression does your GitHub profile make?'
        },
        {
          globalDay: 349,
          week: 50,
          title: 'Code Quality Final Pass',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Run black on all repositories', estMinutes: 30 },
            { label: 'Fix any linting errors', estMinutes: 60 },
            { label: 'Update all requirements.txt files', estMinutes: 30 },
            { label: 'Verify all tests pass', estMinutes: 45 },
            { label: 'Tag stable releases (v1.0)', estMinutes: 30 }
          ],
          reflectionPrompt: 'Is your code ready for others to read and use?'
        },
        {
          globalDay: 350,
          week: 50,
          title: 'Documentation Final Review',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all markdown files for typos', estMinutes: 60 },
            { label: 'Ensure consistent formatting', estMinutes: 45 },
            { label: 'Add table of contents where needed', estMinutes: 30 },
            { label: 'Verify all code examples work', estMinutes: 60 },
            { label: 'Add "last updated" dates', estMinutes: 15 }
          ],
          reflectionPrompt: 'Would a beginner understand your documentation?'
        },
        {
          globalDay: 351,
          week: 51,
          title: 'Resume/CV Update for IDF & University',
          priority: 'HIGH',
          tasks: [
            { label: 'Update technical skills section', estMinutes: 45 },
            { label: 'Add all projects with quantified impact', estMinutes: 75 },
            { label: 'Tailor one version for IDF (security focus)', estMinutes: 60 },
            { label: 'Tailor one version for university (research focus)', estMinutes: 60 },
            { label: 'Get feedback from mentor', estMinutes: 30 }
          ],
          reflectionPrompt: 'How do you quantify your learning achievements?'
        },
        {
          globalDay: 352,
          week: 51,
          title: 'Portfolio Presentation Prep',
          priority: 'HIGH',
          tasks: [
            { label: 'Create slide deck (15-20 slides)', estMinutes: 120 },
            { label: 'Include problem, solution, results for each project', estMinutes: 90 },
            { label: 'Practice 10-minute presentation', estMinutes: 60 },
            { label: 'Record practice run for self-review', estMinutes: 30 },
            { label: 'Refine based on feedback', estMinutes: 45 }
          ],
          reflectionPrompt: 'Can you explain your work to a non-technical audience?'
        },
        {
          globalDay: 353,
          week: 51,
          title: 'Community Presentation: PyData TLV Meetup Prep',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Research PyData TLV previous talks', estMinutes: 45 },
            { label: 'Propose talk topic (email organizers)', estMinutes: 30 },
            { label: 'Prepare lightning talk (5 min) on scaling experiments', estMinutes: 90 },
            { label: 'Create simple slides with key results', estMinutes: 60 },
            { label: 'Practice delivery', estMinutes: 45 }
          ],
          reflectionPrompt: 'What aspect of your work would interest the PyData community?'
        },
        {
          globalDay: 354,
          week: 51,
          title: 'Master Summary Document',
          priority: 'HIGH',
          tasks: [
            { label: 'Create docs/master_summary.txt', estMinutes: 30 },
            { label: 'Summarize each phase (2-3 paragraphs each)', estMinutes: 150 },
            { label: 'List key achievements and metrics', estMinutes: 60 },
            { label: 'Document lessons learned', estMinutes: 75 },
            { label: 'Add future directions section', estMinutes: 30 }
          ],
          reflectionPrompt: 'What would you do differently if starting over?'
        },
        {
          globalDay: 355,
          week: 51,
          title: 'Future Learning Plan (Months 13-24)',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Reflect on current skill gaps', estMinutes: 45 },
            { label: 'Research advanced topics (RL, multimodal, agents)', estMinutes: 75 },
            { label: 'Draft next 6-month learning plan', estMinutes: 90 },
            { label: 'Identify potential mentors for advanced topics', estMinutes: 30 },
            { label: 'Write docs/future_plan.md', estMinutes: 45 }
          ],
          reflectionPrompt: 'What excites you most about continuing this journey?'
        },
        {
          globalDay: 356,
          week: 51,
          title: 'Thank You Notes & Relationship Building',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Write thank you emails to mentors', estMinutes: 45 },
            { label: 'Share final portfolio with community supporters', estMinutes: 30 },
            { label: 'Schedule follow-up calls with key connections', estMinutes: 30 },
            { label: 'Join advanced Discord channels or Slack groups', estMinutes: 30 },
            { label: 'Offer to help other learners', estMinutes: 45 }
          ],
          reflectionPrompt: 'Who had the biggest impact on your journey? Have you thanked them?'
        },
        {
          globalDay: 357,
          week: 52,
          title: 'Final Portfolio Polish Day 1',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review portfolio website on mobile devices', estMinutes: 45 },
            { label: 'Optimize images for web (compress, lazy load)', estMinutes: 60 },
            { label: 'Test all links and forms', estMinutes: 30 },
            { label: 'Add analytics (Google Analytics or Plausible)', estMinutes: 30 },
            { label: 'Set up custom domain if not already done', estMinutes: 45 }
          ],
          reflectionPrompt: 'Does your portfolio load fast and look professional?'
        },
        {
          globalDay: 358,
          week: 52,
          title: 'Final Portfolio Polish Day 2',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Add testimonials or endorsements if available', estMinutes: 45 },
            { label: 'Create project showcase GIFs/videos', estMinutes: 90 },
            { label: 'Write compelling project descriptions', estMinutes: 75 },
            { label: 'Add "What I Learned" section to each project', estMinutes: 60 },
            { label: 'Final proofread of all content', estMinutes: 45 }
          ],
          reflectionPrompt: 'Would you hire yourself based on this portfolio?'
        },
        {
          globalDay: 359,
          week: 52,
          title: 'Launch Portfolio & Announce',
          priority: 'HIGH',
          tasks: [
            { label: 'Final portfolio review with mentor', estMinutes: 60 },
            { label: 'Write launch announcement post', estMinutes: 45 },
            { label: 'Share on Twitter, LinkedIn, HF Discord', estMinutes: 30 },
            { label: 'Submit to Hacker News / Reddit r/MachineLearning', estMinutes: 30 },
            { label: 'Email university programs with portfolio link', estMinutes: 30 }
          ],
          reflectionPrompt: 'What are you most proud to share with the world?'
        },
        {
          globalDay: 360,
          week: 52,
          title: 'IDF Application Preparation',
          priority: 'HIGH',
          tasks: [
            { label: 'Research 8200 and other tech units requirements', estMinutes: 60 },
            { label: 'Prepare portfolio presentation for IDF interview', estMinutes: 90 },
            { label: 'Emphasize security, systems thinking, and reliability', estMinutes: 45 },
            { label: 'Practice explaining projects in Hebrew', estMinutes: 60 },
            { label: 'Prepare questions about unit missions', estMinutes: 30 }
          ],
          reflectionPrompt: 'How does your work demonstrate IDF-relevant skills?'
        },
        {
          globalDay: 361,
          week: 52,
          title: 'University Application Preparation',
          priority: 'HIGH',
          tasks: [
            { label: 'Research HUJI Mahar and TAU Alpha programs', estMinutes: 75 },
            { label: 'Prepare university application essays', estMinutes: 120 },
            { label: 'Highlight research potential and curiosity', estMinutes: 45 },
            { label: 'Get recommendation letters from mentors', estMinutes: 60 },
            { label: 'Submit applications with portfolio link', estMinutes: 30 }
          ],
          reflectionPrompt: 'What research questions do you want to explore in university?'
        },
        {
          globalDay: 362,
          week: 52,
          title: 'Final Reflection & Goal Setting',
          priority: 'HIGH',
          tasks: [
            { label: 'Write comprehensive reflection on entire 12-month journey', estMinutes: 120 },
            { label: 'List top 10 achievements', estMinutes: 30 },
            { label: 'List top 10 lessons learned', estMinutes: 30 },
            { label: 'Set concrete goals for next 6 months', estMinutes: 60 },
            { label: 'Create accountability plan for continued growth', estMinutes: 45 }
          ],
          reflectionPrompt: 'How have you changed as a learner and builder in 12 months?'
        },
        {
          globalDay: 363,
          week: 52,
          title: 'Celebration & Gratitude',
          priority: 'LOW',
          tasks: [
            { label: 'Review all weekly logs from Week 1 to Week 52', estMinutes: 90 },
            { label: 'Create "Year in Review" infographic or video', estMinutes: 120 },
            { label: 'Share celebration post with community', estMinutes: 30 },
            { label: 'Treat yourself to something special', estMinutes: 60 },
            { label: 'Plan celebration with family/friends', estMinutes: 30 }
          ],
          reflectionPrompt: 'What are you most grateful for on this journey?'
        },
        {
          globalDay: 364,
          week: 52,
          title: 'Rest & Recharge',
          priority: 'LOW',
          tasks: [
            { label: 'Take the day off—no coding or studying', estMinutes: 0 },
            { label: 'Reflect on personal growth (journal)', estMinutes: 30 },
            { label: 'Plan next week with renewed energy', estMinutes: 30 },
            { label: 'Reach out to one person who inspired you', estMinutes: 15 },
            { label: 'Dream about what comes next', estMinutes: 0 }
          ],
          reflectionPrompt: 'You did it. What\'s next?'
        }
      ]
    }
  ]
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLAN };
}
