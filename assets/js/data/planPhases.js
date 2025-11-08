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
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 1 only', estMinutes: 90, resourceLinks: ['https://datacamp.com'], notebook: 'foundations/day01_vectors_intro.ipynb', artifact: 'day01_vectors_plot.png', successCriteria: 'Environment script passes; notebook renders plots', details: '<strong>Action:</strong> Work through <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science" target="_blank" rel="noopener">DataCamp Introduction to NumPy</a> Chapter 1, focusing on array creation and basic operations. <strong>Boundaries:</strong> Stop after Chapter 1—don\'t proceed to advanced indexing yet. Take notes on np.array(), shape, dtype, and basic arithmetic. <strong>Deliverable:</strong> Create a Jupyter notebook (foundations/day01_vectors_intro.ipynb) with working examples of each concept covered. <strong>Verification:</strong> Notebook should run without errors and display output for all cells. Common pitfall: confusing Python lists with NumPy arrays—remember arrays are homogeneous and support vectorized operations. Success check: Can you create a 3×3 array and perform element-wise multiplication? Estimated time: 90 minutes including note-taking. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/user/absolute_beginners.html" target="_blank" rel="noopener">NumPy Absolute Beginners Guide</a>' },
            { label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 1 "Vectors" (full episode)', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=fNk_zzaMoSs'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=fNk_zzaMoSs" target="_blank" rel="noopener">3Blue1Brown\'s "Vectors" episode</a> (12 minutes) focusing on the geometric intuition of vectors as arrows in space. <strong>Boundaries:</strong> Don\'t worry about formal mathematical notation yet—focus on the visual understanding of vectors as directed quantities with magnitude and direction. <strong>Deliverable:</strong> Mental model of vectors as geometric objects that can be added tip-to-tail and scaled. <strong>Verification:</strong> After watching, can you explain why vectors are more than just lists of numbers? Common pitfall: treating vectors purely as algebraic objects without geometric intuition. Success check: Can you visualize vector addition geometrically? This video is foundational—the geometric perspective will help throughout ML, especially when understanding gradients and optimization. Pause and replay sections as needed. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>' },
            { label: 'Run scripts/test_env_setup.py to verify Python environment', estMinutes: 15, details: '<strong>Action:</strong> Execute the environment verification script to ensure Python 3.8+, NumPy, Matplotlib, and Jupyter are properly installed. <strong>Boundaries:</strong> If tests fail, debug one dependency at a time—don\'t reinstall everything at once. Check Python version with <code>python --version</code>, verify pip with <code>pip --version</code>, then test imports individually in a Python shell. <strong>Deliverable:</strong> All environment tests passing, confirming a working setup for the entire plan. <strong>Verification:</strong> Script should output "All checks passed" or similar success message. Common pitfall: mixing system Python with virtual environment—use <code>python -m venv env</code> to create an isolated environment. Success check: Can you import numpy, matplotlib.pyplot, and jupyter without errors? Estimated time: 15 minutes for clean install, up to 45 minutes if troubleshooting is needed. <strong>Resources:</strong> <a href="https://docs.python.org/3/tutorial/venv.html" target="_blank" rel="noopener">Python Virtual Environments</a>, <a href="https://numpy.org/install/" target="_blank" rel="noopener">NumPy Installation Guide</a>' },
            { label: 'Create notebooks/foundations/day01_vectors_intro.ipynb with vector visualization', estMinutes: 60, details: '<strong>Action:</strong> Create a new Jupyter notebook with sections for: (1) Creating NumPy vectors, (2) Vector addition visualization, (3) Scalar multiplication demonstration, (4) 2D and 3D vector plots. Use <code>matplotlib.pyplot</code> with <code>quiver()</code> for 2D arrows and <code>mpl_toolkits.mplot3d</code> for 3D visualization. <strong>Boundaries:</strong> Keep vectors simple (2D and 3D only), focus on clarity over complexity. Include markdown cells explaining each code section. <strong>Deliverable:</strong> A well-commented notebook showing at least 3 vector visualizations with clear labels and axes. <strong>Verification:</strong> Notebook renders properly in Jupyter, plots are readable, code cells run in sequence without errors. Common pitfall: forgetting to set equal aspect ratios in plots, making unit vectors appear non-unit. Use <code>plt.axis(\'equal\')</code>. Success check: Can a beginner follow your notebook and understand vector basics? Estimated time: 60 minutes for creation and testing. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.quiver.html" target="_blank" rel="noopener">Matplotlib quiver documentation</a>' },
            { label: 'Generate artifacts/day01_vectors_plot.png showing 2D/3D vector examples', estMinutes: 30, details: '<strong>Action:</strong> Export your best vector visualization from the notebook as a high-quality PNG image (300 DPI recommended). Create a figure showing vector addition in 2D (left subplot) and a 3D vector example (right subplot) using <code>fig.savefig(\'artifacts/day01_vectors_plot.png\', dpi=300, bbox_inches=\'tight\')</code>. <strong>Boundaries:</strong> Image should be clear and publication-ready but doesn\'t need to be artistic—focus on educational clarity. Include axis labels, grid, and a legend if multiple vectors are shown. <strong>Deliverable:</strong> A single PNG file demonstrating your understanding of vector visualization techniques. <strong>Verification:</strong> Image file exists, is viewable, and clearly shows labeled vectors with proper scaling. Common pitfall: saving plots with default low resolution—always specify dpi parameter. Success check: Could you use this image in a presentation to explain vectors to someone else? Estimated time: 30 minutes including iterations for clarity. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/gallery/subplots_axes_and_figures/index.html" target="_blank" rel="noopener">Matplotlib Subplots Gallery</a>' },
            { label: 'Write docs/notes/day01_vectors.md summarizing vectors as geometric objects', estMinutes: 30, details: '<strong>Action:</strong> Create a markdown document summarizing today\'s learning in your own words. Include: (1) Definition of vectors, (2) Geometric interpretation (arrows in space), (3) Algebraic representation (arrays of numbers), (4) Why vectors matter for ML (represent features, weights, gradients), (5) Key operations covered (addition, scaling). <strong>Boundaries:</strong> Keep it concise (300-500 words max), focus on concepts not code. Write as if teaching a peer who missed today\'s lessons. <strong>Deliverable:</strong> A clear, well-structured markdown file in docs/notes/ directory. <strong>Verification:</strong> Document renders properly in a markdown viewer, contains no spelling errors, explains concepts clearly. Common pitfall: copying definitions verbatim instead of rephrasing in your own words—true understanding comes from translation. Success check: Can you explain vectors without looking at your notes afterward? Estimated time: 30 minutes for writing and review. <strong>Resources:</strong> <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener">Markdown Syntax Guide</a>, <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener">Markdown Cheatsheet</a>' }
          ],
          reflectionPrompt: 'Consider: How do vectors differ from scalars? Why are they fundamental to ML?'
        },
        {
          globalDay: 2,
          week: 1,
          title: 'Vector Operations & Community Intro',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 2', estMinutes: 90, details: '<strong>Action:</strong> Progress to <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science" target="_blank" rel="noopener">DataCamp NumPy Chapter 2</a>, focusing on array indexing, slicing, and boolean indexing. <strong>Boundaries:</strong> Master 1D and 2D array access patterns before moving to higher dimensions. Practice with exercises until indexing feels intuitive. <strong>Deliverable:</strong> Complete all Chapter 2 exercises with correct solutions, understanding each indexing technique. <strong>Verification:</strong> Can you extract any row, column, or subarray from a 2D array without looking up syntax? Common pitfall: confusion between row-first vs column-first indexing—NumPy uses [row, column] ordering. Success check: Solve this: given a 5×5 array, extract the center 3×3 subarray using slicing. Estimated time: 90 minutes with practice problems. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/user/basics.indexing.html" target="_blank" rel="noopener">NumPy Indexing Guide</a>' },
            { label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 2 "Linear combinations, span, and basis vectors"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=k7RM-ot2NWY'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=k7RM-ot2NWY" target="_blank" rel="noopener">Episode 2: Linear Combinations, Span, and Basis Vectors</a> (10 minutes). Focus on understanding how any vector can be built from basis vectors through scaling and addition. <strong>Boundaries:</strong> Concentrate on 2D examples shown in the video—3D generalization comes naturally later. Pay attention to the concept of "span" as all possible destinations reachable by scaling and adding basis vectors. <strong>Deliverable:</strong> Intuitive understanding that basis vectors are like coordinate axes and linear combinations are like recipes for reaching any point. <strong>Verification:</strong> Can you explain why two parallel vectors cannot span a 2D plane? Common pitfall: memorizing definitions without visualizing—pause the video and sketch examples on paper. Success check: Explain in your own words what "span" means and why it matters. This concept is crucial for understanding neural network representations. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces" target="_blank" rel="noopener">Khan Academy: Vectors and Spaces</a>' },
            { label: 'Create notebooks/foundations/day02_vector_ops.ipynb with addition, scaling, dot product', estMinutes: 90, details: '<strong>Action:</strong> Build a comprehensive notebook covering: (1) Vector addition with tip-to-tail visualization, (2) Scalar multiplication showing direction preservation and magnitude scaling, (3) Dot product computation and geometric interpretation (projection), (4) Interactive examples where you can change values and see results update. Use NumPy for computations and Matplotlib for visualizations. <strong>Boundaries:</strong> Include both 2D visual examples and numerical output. Add markdown explanations between code cells describing what each operation does geometrically and algebraically. <strong>Deliverable:</strong> A tutorial-style notebook that someone else could learn from, with at least 4 complete examples and visualizations. <strong>Verification:</strong> Notebook runs top-to-bottom without errors, visualizations are clear and labeled, code is commented. Common pitfall: computing dot products without understanding they measure alignment—dot product is large when vectors point same direction, zero when perpendicular. Success check: Can you predict the dot product sign before computing it? Estimated time: 90 minutes for thorough implementation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/routines.linalg.html" target="_blank" rel="noopener">NumPy Linear Algebra</a>' },
            { label: 'Join Hugging Face Discord and introduce yourself in #introductions', estMinutes: 20, details: '<strong>Action:</strong> Navigate to <a href="https://discord.gg/hugging-face-879548962464493619" target="_blank" rel="noopener">Hugging Face Discord</a>, join the server, and post a brief introduction in the #introductions channel. <strong>Boundaries:</strong> Keep introduction concise but genuine: mention your background (9th grade, Israel), your learning goal (LLM mastery over 12 months), and ask one thoughtful question to start engagement. <strong>Deliverable:</strong> An introduction post that invites helpful responses and potential study partners. <strong>Verification:</strong> Post is live, appropriately friendly, and represents you authentically. Common pitfall: being too generic or too detailed—aim for 3-5 sentences that show personality and seriousness. Success check: Did you get any welcoming responses or connections? Example: "Hi! I\'m DovJNash, 9th grade student in Israel starting a 12-month journey to master LLM systems from foundations to deployment. Currently on Day 2 learning linear algebra basics. What resource did you find most helpful when starting with transformers?" Estimated time: 20 minutes including reading server rules. <strong>Resources:</strong> <a href="https://huggingface.co/community" target="_blank" rel="noopener">Hugging Face Community</a>' },
            { label: 'Write docs/notes/day02_span.md explaining span and linear combinations', estMinutes: 30, details: '<strong>Action:</strong> Create a markdown document explaining: (1) What a linear combination is (scaling + adding vectors), (2) The concept of span (all possible points reachable via linear combinations), (3) Why linear independence matters (whether vectors add new dimensions to the span), (4) Connection to ML (feature combinations, neural network activations). <strong>Boundaries:</strong> Use 2D examples for clarity—draw simple diagrams using ASCII art or describe verbally. Keep mathematical notation minimal, focus on intuition. <strong>Deliverable:</strong> A 400-600 word document that clearly explains these interconnected concepts with examples. <strong>Verification:</strong> Someone reading your document should understand why three vectors in 2D space cannot all be linearly independent. Common pitfall: treating span as abstract math instead of practical tool—emphasize that span tells us what\'s expressible with our basis. Success check: Can you explain why a neural network layer\'s span determines what patterns it can represent? Estimated time: 30 minutes for thoughtful writing. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/linear-combinations/v/linear-combinations-and-span" target="_blank" rel="noopener">Khan Academy: Linear Combinations</a>' }
          ],
          reflectionPrompt: 'Post in HF Discord about your learning journey start.'
        },
        {
          globalDay: 3,
          week: 1,
          title: 'Linear Combinations & Span',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete DataCamp "Introduction to NumPy" Chapter 3', estMinutes: 90, details: '<strong>Action:</strong> Complete <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science" target="_blank" rel="noopener">DataCamp NumPy Chapter 3</a> on advanced array operations, broadcasting, and universal functions. <strong>Boundaries:</strong> Focus on understanding broadcasting rules: how NumPy handles operations between arrays of different shapes. Practice with at least 5 different broadcasting scenarios. <strong>Deliverable:</strong> Completed exercises demonstrating mastery of broadcasting and ufuncs. <strong>Verification:</strong> Can you predict output shapes before running operations? Common pitfall: broadcasting failures due to incompatible dimensions—remember the trailing dimensions must match or be 1. Success check: Multiply a (3,1) array by a (1,4) array and predict the result shape (3,4). Estimated time: 90 minutes with experimentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/user/basics.broadcasting.html" target="_blank" rel="noopener">NumPy Broadcasting Rules</a>' },
            { label: 'Complete Khan Academy linear algebra: vector intro and span pages', estMinutes: 60, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces" target="_blank" rel="noopener">Khan Academy Linear Algebra: Vectors and Spaces</a> unit, specifically the vector introduction and span sections. <strong>Boundaries:</strong> Complete all practice exercises, aim for 100% mastery. Don\'t skip the intuition-building exercises even if they seem simple. <strong>Deliverable:</strong> Green checkmarks on all vector intro and span exercises in your Khan Academy profile. <strong>Verification:</strong> Can you solve any linear combination problem presented? Common pitfall: rushing through without solving problems by hand—computational fluency comes from manual practice. Success check: Given vectors v₁=[2,1] and v₂=[1,3], can you determine if [7,10] is in their span? Calculate by hand first, verify with NumPy second. Estimated time: 60 minutes including all practice problems. <strong>Resources:</strong> <a href="https://www.youtube.com/playlist?list=PLHXZ9OQGMqxfUl0tcqPNTJsb7R6BqSLo6" target="_blank" rel="noopener">Khan Academy Linear Algebra Playlist</a>' },
            { label: 'Create notebooks/foundations/day03_linear_combinations.ipynb exploring span', estMinutes: 75, details: '<strong>Action:</strong> Build an interactive notebook demonstrating: (1) Linear combinations with different coefficients, (2) Visualizing span of two 2D vectors (plot all integer linear combinations in a grid), (3) Demonstrating linear dependence (what happens when vectors are parallel), (4) Exploring span of three 2D vectors (over-constrained case). Use color gradients or scatter plots to show reachable points. <strong>Boundaries:</strong> Keep visualizations in 2D for clarity, use interactive sliders if using plotly/ipywidgets. Include at least 3 distinct examples showing different span scenarios. <strong>Deliverable:</strong> A comprehensive notebook that visually proves key span concepts through code. <strong>Verification:</strong> Notebook demonstrates clear understanding of when vectors span a subspace vs full space. Common pitfall: plotting only a few linear combinations instead of showing the complete span region. Success check: Your visualization should clearly show that two non-parallel 2D vectors span the entire plane. Estimated time: 75 minutes for implementation and testing. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/tutorials/colors/colormaps.html" target="_blank" rel="noopener">Matplotlib Colormaps</a>' },
            { label: 'Generate artifacts/day03_span_coverage.png visualizing 2D span', estMinutes: 30, details: '<strong>Action:</strong> Create a publication-quality visualization showing: (1) Two basis vectors as arrows, (2) A filled region or dense scatter plot showing their span, (3) Several example linear combinations highlighted, (4) Labels and legend explaining the concept. Use professional color schemes and ensure high contrast for readability. <strong>Boundaries:</strong> Image should be self-explanatory to someone who hasn\'t taken linear algebra yet. Include a caption or title within the image. <strong>Deliverable:</strong> A clear, educational PNG file demonstrating span visually. <strong>Verification:</strong> Show the image to someone unfamiliar with linear algebra—can they grasp the basic idea? Common pitfall: cluttered visualizations with too much information—keep it simple and focused on one key insight. Success check: The span region should be visually obvious, and basis vectors should be clearly distinguishable. Save with <code>dpi=300</code> and appropriate figure size. Estimated time: 30 minutes including refinement. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/gallery/color/named_colors.html" target="_blank" rel="noopener">Matplotlib Colors Reference</a>' },
            { label: 'Start docs/questions/week_01.md with any unclear concepts', estMinutes: 20, details: '<strong>Action:</strong> Create a markdown document listing any concepts from Week 1 that remain unclear or confusing. Format as bullet points with specific questions, not vague concerns. For each unclear concept, note: (1) what you understand so far, (2) exactly what\'s confusing, (3) what you\'ve tried to clarify it. <strong>Boundaries:</strong> Be specific—instead of "vectors are confusing," write "I understand vector addition geometrically but don\'t see why we add components element-wise algebraically." This document is for your benefit and potential mentor discussions. <strong>Deliverable:</strong> A structured list of 3-10 specific questions or unclear concepts. <strong>Verification:</strong> Each question should be answerable by someone with expertise (i.e., not too vague). Common pitfall: not writing down questions because they seem "too basic"—if you\'re confused, document it! Success check: Questions are specific enough that researching or asking for help would give clear answers. Estimated time: 20 minutes for reflection and documentation. <strong>Resources:</strong> <a href="https://stackoverflow.com/help/how-to-ask" target="_blank" rel="noopener">How to Ask Good Questions</a>' }
          ],
          reflectionPrompt: 'What happens when vectors are parallel? How does this relate to linear independence?'
        },
        {
          globalDay: 4,
          week: 1,
          title: 'Matrix Basics & Transformations',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 3 "Linear transformations and matrices"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=kYB8IZa5AuE'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=kYB8IZa5AuE" target="_blank" rel="noopener">3Blue1Brown Episode 3: Linear transformations and matrices</a> (10 minutes). Focus on understanding matrices as functions that transform space. <strong>Boundaries:</strong> Pay special attention to the column perspective: each matrix column shows where the corresponding basis vector lands after transformation. Pause to visualize how the grid transforms. <strong>Deliverable:</strong> Mental model of matrices as transformation machines that move every point in space systematically. <strong>Verification:</strong> Can you explain what the matrix [[1,2],[3,4]] does to the point (1,0)? Common pitfall: thinking of matrices as just arrays of numbers instead of geometric transformations. Success check: Can you predict the effect of a transformation matrix by looking at its columns? This perspective is fundamental for understanding neural network layers as transformations of representation space. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/matrix-transformations" target="_blank" rel="noopener">Khan Academy: Matrix Transformations</a>' },
            { label: 'Complete Khan Academy: matrix intro and matrix-vector multiplication', estMinutes: 60, details: '<strong>Action:</strong> Complete <a href="https://www.khanacademy.org/math/linear-algebra/matrix-transformations" target="_blank" rel="noopener">Khan Academy matrix introduction and matrix-vector multiplication</a> exercises. <strong>Boundaries:</strong> Work through all practice problems until achieving mastery level. Focus on both algebraic computation and geometric interpretation. Practice manually computing matrix-vector products before using calculators. <strong>Deliverable:</strong> Mastery badges on Khan Academy for matrix basics and matrix-vector multiplication sections. <strong>Verification:</strong> Can you compute a 3×3 matrix times a 3D vector by hand accurately? Can you explain what happens geometrically? Common pitfall: mechanical computation without understanding the geometric transformation. Success check: Given matrix A and vector v, predict how the transformation moves v before calculating. Estimated time: 60 minutes including all exercises. <strong>Resources:</strong> <a href="https://www.youtube.com/watch?v=kYB8IZa5AuE" target="_blank" rel="noopener">3Blue1Brown: Linear Transformations</a>' },
            { label: 'Create notebooks/foundations/day04_matrices.ipynb with transformation examples', estMinutes: 90, details: '<strong>Action:</strong> Build a comprehensive Jupyter notebook demonstrating matrix transformations: (1) Identity matrix (no change), (2) Rotation matrices (90°, 45°, arbitrary angle), (3) Scaling matrices (uniform and non-uniform), (4) Shear transformations, (5) Combined transformations. Visualize each with before/after grid plots showing how the transformation distorts space. Use matplotlib to plot transformed shapes and grid lines. <strong>Boundaries:</strong> Include both code for computation and visual output showing transformed grids. Add markdown cells explaining each transformation type and its matrix form. <strong>Deliverable:</strong> A tutorial-quality notebook with at least 5 different transformation examples, each with clear visualization and explanation. <strong>Verification:</strong> Notebook should run without errors, visualizations should clearly show the transformation effect, and explanations should be understandable to someone learning matrices for the first time. Common pitfall: creating visualizations without clear before/after comparison. Success check: Can someone else learn about matrix transformations from your notebook? Estimated time: 90 minutes for thorough implementation. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/tutorials/intermediate/transforms_tutorial.html" target="_blank" rel="noopener">Matplotlib Transforms Tutorial</a>' },
            { label: 'Generate artifacts/day04_transformation.png showing rotation/scaling transformations', estMinutes: 45, details: '<strong>Action:</strong> Create a publication-quality figure showing multiple transformations: (1) Original grid in one subplot, (2) Rotation transformation in second subplot, (3) Scaling transformation in third subplot, (4) Combined rotation+scaling in fourth subplot. Use a 2×2 subplot layout. Clearly label each transformation with its matrix. Show both the grid lines and a distinctive shape (like an "L" or arrow) being transformed. <strong>Boundaries:</strong> Use consistent colors: original in blue, transformed in red. Include the transformation matrix as text annotation on each subplot. Save as high-resolution PNG (300 DPI). <strong>Deliverable:</strong> A clear, educational visualization showing how different matrices transform space differently. <strong>Verification:</strong> Image should be self-explanatory with proper labels, axis labels, and transformation matrices visible. Common pitfall: cluttered visuals with too much information—keep it clean and focused. Success check: Could this image be used in a presentation about linear transformations? Estimated time: 45 minutes including design iterations. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/gallery/subplots_axes_and_figures/subplot.html" target="_blank" rel="noopener">Matplotlib Subplots Guide</a>' },
            { label: 'Add to docs/notes/day04_matrices.md explaining matrices as transformations', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive markdown document (500-700 words) explaining: (1) Matrices as linear transformations, (2) The column perspective (columns = where basis vectors land), (3) Why transformations must be linear (preserves lines and origin), (4) Common transformation types (rotation, scaling, shear, reflection), (5) Connection to ML (neural network layers as learned transformations). Include examples and intuitive explanations. <strong>Boundaries:</strong> Write in your own words, avoiding copy-paste from sources. Use concrete examples like "rotating a square" rather than abstract language. Include at least one hand-drawn or described diagram concept. <strong>Deliverable:</strong> A well-structured markdown document that could help a peer understand matrix transformations conceptually. <strong>Verification:</strong> Document should be readable, accurate, and insightful. Check for spelling and grammar. Common pitfall: being too abstract without concrete examples. Success check: Can you explain to someone verbally what you wrote without looking at notes? Estimated time: 30 minutes for thoughtful writing. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>' }
          ],
          reflectionPrompt: 'Why is the column perspective for matrix-vector multiplication useful?'
        },
        {
          globalDay: 5,
          week: 1,
          title: 'Matrix Multiplication & Composition',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 4 "Matrix multiplication as composition"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=XkY2DOUCWMU'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=XkY2DOUCWMU" target="_blank" rel="noopener">3Blue1Brown Episode 4: Matrix multiplication as composition</a> (10 minutes). Focus on understanding that multiplying matrices means composing their transformations—applying one transformation after another. <strong>Boundaries:</strong> Pay attention to the right-to-left reading order: AB means "first apply B, then apply A." This is counterintuitive but crucial. Pause when Grant shows the grid transformations to really see how compositions work. <strong>Deliverable:</strong> Clear mental model of matrix multiplication as transformation composition, not just number crunching. <strong>Verification:</strong> Can you explain why matrix multiplication is not commutative (AB ≠ BA) using transformation logic? Common pitfall: treating matrix mult as just multiplying numbers without geometric understanding. Success check: Explain why rotating then scaling gives different results than scaling then rotating. This concept is fundamental for understanding deep neural networks as compositions of learned transformations. <strong>Resources:</strong> <a href="https://www.youtube.com/watch?v=XkY2DOUCWMU" target="_blank" rel="noopener">3Blue1Brown Video</a>' },
            { label: 'DataCamp: Intermediate Python - functions and loops (refresher)', estMinutes: 60, details: '<strong>Action:</strong> Complete <a href="https://www.datacamp.com/courses/intermediate-python" target="_blank" rel="noopener">DataCamp Intermediate Python</a> sections on functions and loops as a refresher. <strong>Boundaries:</strong> Focus on writing clean, readable functions with proper documentation. Practice loops with enumerate() and zip(). Review list comprehensions. <strong>Deliverable:</strong> Completed exercises demonstrating proficiency with Python functions, loops, and functional programming patterns. <strong>Verification:</strong> Can you write a function that takes arguments, has a docstring, and returns values correctly? Can you choose between for loops and comprehensions appropriately? Common pitfall: writing overly complex nested loops—practice breaking problems into functions. Success check: Write a function that transposes a matrix (list of lists) using nested loops, then rewrite it with a list comprehension. Both should work correctly. Estimated time: 60 minutes for thorough review. <strong>Resources:</strong> <a href="https://docs.python.org/3/tutorial/controlflow.html#defining-functions" target="_blank" rel="noopener">Python Functions Documentation</a>' },
            { label: 'Create notebooks/foundations/day05_mat_mult.ipynb with composition examples', estMinutes: 90, details: '<strong>Action:</strong> Build a notebook demonstrating matrix multiplication as composition: (1) Define two transformation matrices (e.g., rotation and scaling), (2) Show their individual effects on a shape, (3) Show their composition AB (rotate then scale), (4) Show their composition BA (scale then rotate), (5) Visualize how order matters with side-by-side comparisons. Include the actual matrix multiplication computation with step-by-step annotation. <strong>Boundaries:</strong> Make it highly visual—every transformation should have a before/after plot. Use different colors for different stages. Add markdown explaining why order matters geometrically. <strong>Deliverable:</strong> A comprehensive notebook proving through visualization that matrix multiplication is non-commutative and represents transformation composition. <strong>Verification:</strong> Someone reading your notebook should understand both how to compute matrix products AND why order matters geometrically. Common pitfall: showing computation without geometric intuition. Success check: Your visualizations clearly demonstrate that AB ≠ BA. Estimated time: 90 minutes including multiple examples. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.matmul.html" target="_blank" rel="noopener">NumPy matmul documentation</a>' },
            { label: 'Implement matrix multiplication from scratch (no NumPy matmul)', estMinutes: 60, details: '<strong>Action:</strong> Write a Python function <code>def matmul(A, B)</code> that multiplies two matrices using only basic Python (no NumPy matmul or dot). Use nested loops following the mathematical definition: C[i][j] = sum(A[i][k] * B[k][j] for k). Add error checking for incompatible dimensions. Include docstring with examples. Test thoroughly with known cases. <strong>Boundaries:</strong> Implement the algorithm yourself to understand what matrix multiplication really does. Don\'t look up implementations—derive it from the mathematical definition. After implementing, verify against NumPy for correctness. <strong>Deliverable:</strong> A working matmul function with tests showing it matches NumPy results for various matrix sizes. <strong>Verification:</strong> Your function should handle 2×2, 3×3, and non-square matrices correctly. Test edge cases like identity matrices. Common pitfall: index confusion in nested loops (i,j,k)—draw out the loops on paper first. Success check: Your implementation matches NumPy output exactly for at least 5 test cases of varying dimensions. Estimated time: 60 minutes including testing and debugging. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Matrix_multiplication#Definition" target="_blank" rel="noopener">Matrix Multiplication Definition</a>' },
            { label: 'Write docs/notes/day05_composition.md on why order matters', estMinutes: 30, details: '<strong>Action:</strong> Write a focused document (400-600 words) explaining why matrix multiplication order matters, using: (1) Concrete transformation examples (rotate then scale vs scale then rotate), (2) The mathematical reason (matrices represent functions, function composition is not commutative), (3) Practical implications for ML (network layer order matters), (4) When order doesn\'t matter (commuting matrices like diagonal matrices). <strong>Boundaries:</strong> Make it intuitive with real-world analogies—perhaps "putting on socks then shoes" vs "putting on shoes then socks". Avoid heavy mathematical notation, focus on understanding. <strong>Deliverable:</strong> A clear, insightful explanation that someone could reference when wondering about matrix multiplication order. <strong>Verification:</strong> Document should answer "why does AB ≠ BA?" in multiple complementary ways. Common pitfall: just stating the fact without explaining why it\'s true. Success check: After reading, someone should have geometric, algebraic, and intuitive reasons for non-commutativity. Estimated time: 30 minutes for clear writing. <strong>Resources:</strong> <a href="https://betterexplained.com/articles/matrix-multiplication/" target="_blank" rel="noopener">Better Explained: Matrix Multiplication</a>' }
          ],
          reflectionPrompt: 'Try composing rotation + scaling vs scaling + rotation. What changes?'
        },
        {
          globalDay: 6,
          week: 1,
          title: 'Determinants & Inverses',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 5 "The determinant"', estMinutes: 10, resourceLinks: ['https://www.youtube.com/watch?v=Ip3X9LOh2dk'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=Ip3X9LOh2dk" target="_blank" rel="noopener">3Blue1Brown Episode 5: The determinant</a> (10 minutes). Focus on the geometric meaning: determinant measures how much a transformation scales areas (or volumes in higher dimensions). <strong>Boundaries:</strong> Understand the three key cases: det > 1 (expands area), 0 < det < 1 (shrinks area), det < 0 (flips orientation). Pay attention to what det = 0 means (squishes space to lower dimension). <strong>Deliverable:</strong> Geometric intuition for determinants as area/volume scaling factors. <strong>Verification:</strong> Can you explain what it means if a transformation has determinant 2? What about -1? What about 0? Common pitfall: memorizing the formula without understanding the geometric meaning. Success check: Given a 2×2 matrix, predict whether it expands or shrinks areas before calculating. This concept is crucial for understanding when transformations are invertible and for change-of-variables in probability. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/matrix-transformations/determinant-depth/v/linear-algebra-determinant-as-scaling-factor" target="_blank" rel="noopener">Khan Academy: Determinant as Scaling Factor</a>' },
            { label: 'Watch 3Blue1Brown Ep. 6 "Inverse matrices, column space and null space"', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=uQhTuRlWMxw'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=uQhTuRlWMxw" target="_blank" rel="noopener">3Blue1Brown Episode 6: Inverse matrices, column space and null space</a> (12 minutes). Focus on understanding: (1) Inverse as "undoing" a transformation, (2) Column space as the span of the columns (where things can land), (3) Null space as what gets squished to zero. <strong>Boundaries:</strong> Connect these concepts: a matrix is invertible if and only if det ≠ 0, which means it doesn\'t squish to lower dimension, which means its null space is just {0}. Pause to visualize column space and null space geometrically. <strong>Deliverable:</strong> Clear mental models connecting determinants, invertibility, column space, and null space. <strong>Verification:</strong> Can you explain why a matrix with det = 0 has no inverse? Why does such a matrix have a non-trivial null space? Common pitfall: treating these as separate unrelated concepts instead of seeing how they interconnect. Success check: Explain the relationship between determinant, invertibility, and null space in one coherent explanation. Estimated time: 12 minutes, may want to watch twice for full understanding. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/matrix-transformations/inverse-of-matrices/v/linear-algebra-inverse-matrix-introduction" target="_blank" rel="noopener">Khan Academy: Inverse Matrices</a>' },
            { label: 'Create notebooks/foundations/day06_determinants.ipynb with det calculations', estMinutes: 75, details: '<strong>Action:</strong> Build a comprehensive notebook covering: (1) Computing 2×2 determinants by hand and with NumPy, (2) Visualizing how transformations with different determinants affect area (show unit square transforming), (3) Computing 3×3 determinants, (4) Exploring special cases (identity: det=1, zero matrix: det=0, rotation: det=1), (5) Demonstrating that det(AB) = det(A)×det(B). Include both computational examples and geometric visualizations. <strong>Boundaries:</strong> For each determinant you compute, create a visualization showing how that transformation scales area. Use color-coding to show before and after areas. <strong>Deliverable:</strong> A tutorial notebook that teaches determinants through both computation and visualization, with at least 6 worked examples. <strong>Verification:</strong> Notebook should clearly demonstrate the geometric meaning of determinants, not just the computation. Common pitfall: computing determinants without showing what they mean visually. Success check: Someone should be able to develop geometric intuition for determinants from your notebook. Estimated time: 75 minutes for thorough implementation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html" target="_blank" rel="noopener">NumPy Determinant Function</a>' },
            { label: 'Generate artifacts/day06_det_visual.png showing area scaling', estMinutes: 30, details: '<strong>Action:</strong> Create a compelling visualization showing: (1) Original unit square, (2-4) The same square after transformations with det=2, det=0.5, and det=-1, (5) Calculate and display the actual area after each transformation. Use a 2×2 subplot layout. Annotate each subplot with the transformation matrix and its determinant. Use semi-transparent fill to show area clearly. <strong>Boundaries:</strong> Make the area scaling visually obvious—perhaps fill with different color intensities proportional to area. For det=-1, show that orientation flips (e.g., with arrows showing clockwise vs counterclockwise). <strong>Deliverable:</strong> A publication-quality figure that makes the "determinant = area scaling" concept immediately obvious. <strong>Verification:</strong> Image should be self-explanatory with clear labels showing how determinant relates to area change. Common pitfall: not making the area scaling visually prominent enough. Success check: Someone unfamiliar with determinants should immediately understand the connection to area scaling from your visualization. Save at 300 DPI. Estimated time: 30 minutes including design iteration. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.patches.Polygon.html" target="_blank" rel="noopener">Matplotlib Polygon Patches</a>' },
            { label: 'Write docs/notes/day06_determinants.md on geometric meaning', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive document (500-700 words) explaining: (1) Determinant as area/volume scaling factor, (2) Sign indicating orientation (flip or not), (3) Zero determinant meaning squishing to lower dimension, (4) Connection to invertibility (det ≠ 0 ↔ invertible), (5) Determinant properties (det(AB) = det(A)×det(B), det(A⁻¹) = 1/det(A)), (6) Why this matters for ML (checking if data transformations are information-preserving, understanding when systems have unique solutions). <strong>Boundaries:</strong> Emphasize geometric meaning over computational formulas. Use concrete examples like "a transformation that doubles all areas has det=2." <strong>Deliverable:</strong> A well-structured document that could serve as a reference for understanding determinants geometrically. <strong>Verification:</strong> Should explain both what determinants are and why they\'re useful. Common pitfall: listing properties without explaining why they\'re true or useful. Success check: After reading, someone should understand determinants intuitively, not just algorithmically. Estimated time: 30 minutes for thoughtful exposition. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Determinant#Geometric_meaning" target="_blank" rel="noopener">Wikipedia: Determinant Geometric Meaning</a>' }
          ],
          reflectionPrompt: 'What does det=0 mean for invertibility? Why?'
        },
        {
          globalDay: 7,
          week: 1,
          title: 'Week 1 Review & Reflection',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all Week 1 notebooks and notes', estMinutes: 60, details: '<strong>Action:</strong> Systematically review all materials from Days 1-6: open each notebook, re-run all cells, review all notes documents. Look for: (1) Incomplete sections, (2) Confusing explanations, (3) Code that doesn\'t run anymore, (4) Concepts that felt unclear. <strong>Boundaries:</strong> This is active review, not passive reading—re-run code, modify examples to test understanding, add clarifying comments where needed. Spend about 10 minutes per day\'s materials. <strong>Deliverable:</strong> Refreshed understanding of Week 1 content, with any gaps or questions identified. <strong>Verification:</strong> You should feel confident you could explain any concept from Week 1 to someone else. Common pitfall: passive skimming instead of active engagement. Success check: Can you solve a random linear algebra problem (matrix multiplication, determinant calculation, vector projection) without looking up the formula? Estimated time: 60 minutes for thorough review across 6 days of content. <strong>Resources:</strong> Your own Week 1 notebooks and notes' },
            { label: 'Update docs/questions/week_01.md with remaining questions', estMinutes: 20, details: '<strong>Action:</strong> Review your Week 1 questions document and update it: (1) Mark which questions you can now answer, (2) Add any new questions that arose during review, (3) Note which concepts still feel shaky, (4) Identify topics needing more practice. Format clearly so you can discuss with mentors or research further. <strong>Boundaries:</strong> Be honest about what\'s still unclear—it\'s better to acknowledge confusion now than carry it forward. No question is too basic to document. <strong>Deliverable:</strong> An updated questions document showing your current understanding status after Week 1. <strong>Verification:</strong> Document should clearly distinguish between "answered" and "still unclear" questions. Common pitfall: pretending to understand everything—confusion is part of learning! Success check: You have a clear list of what to research further or ask about. Estimated time: 20 minutes for reflection and documentation. <strong>Resources:</strong> <a href="https://www.coursera.org/learn/learning-how-to-learn" target="_blank" rel="noopener">Learning How to Learn (Coursera)</a>' },
            { label: 'Write docs/weekly_logs/week_01.md summarizing key learnings', estMinutes: 45, details: '<strong>Action:</strong> Create a comprehensive week summary (800-1200 words) covering: (1) Main topics covered (vectors, matrices, transformations, determinants), (2) Key insights that clicked for you, (3) Hardest concepts and how you approached them, (4) Artifacts created (notebooks, visualizations, notes), (5) Skills developed (Python, NumPy, Jupyter, mathematical thinking), (6) Community engagement (Discord, questions asked/answered), (7) Time management lessons, (8) Plans for Week 2. <strong>Boundaries:</strong> Write reflectively in first person—this is your learning journal, not a formal report. Be specific about what worked and what didn\'t. Include challenges and how you overcame them. <strong>Deliverable:</strong> A thoughtful weekly log that captures your learning journey and serves as future reference. <strong>Verification:</strong> Log should read as honest reflection, not a checklist. It should help you recognize patterns in how you learn best. Common pitfall: writing generic summaries without personal insight. Success check: Rereading this log in 6 months should remind you of your experience and growth. Estimated time: 45 minutes for thoughtful writing. <strong>Resources:</strong> <a href="https://www.edutopia.org/article/powerful-benefits-reflective-journaling" target="_blank" rel="noopener">Benefits of Reflective Journaling</a>' },
            { label: 'Complete 5 practice problems from Khan Academy linear algebra', estMinutes: 60, details: '<strong>Action:</strong> Complete 5 practice problems from <a href="https://www.khanacademy.org/math/linear-algebra" target="_blank" rel="noopener">Khan Academy Linear Algebra</a> covering Week 1 topics: (1) Matrix-vector multiplication, (2) Matrix multiplication, (3) Determinant calculation, (4) Inverse matrix, (5) Transformation interpretation. Choose problems that challenge you—pick ones marked "Hard" or that you previously struggled with. <strong>Boundaries:</strong> Do problems by hand first, then verify with calculator/code. If you get stuck, review the concept rather than just looking at the answer. <strong>Deliverable:</strong> 5 correctly solved problems demonstrating Week 1 competency. <strong>Verification:</strong> You should get correct answers confidently, understanding each step. If struggling with more than 2 problems, you may need more review before Week 2. Common pitfall: rushing through problems without understanding—slow down and understand each step. Success check: Can you explain why your answer is correct, not just compute it? Estimated time: 60 minutes for 5 substantial problems including reflection. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/matrix-transformations" target="_blank" rel="noopener">Khan Academy: Matrix Transformations</a>' },
            { label: 'Post Week 1 progress update in HF Discord or Twitter', estMinutes: 15, details: '<strong>Action:</strong> Share your Week 1 journey publicly on <a href="https://discord.gg/hugging-face-879548962464493619" target="_blank" rel="noopener">Hugging Face Discord</a> or Twitter. Include: (1) Brief summary of what you learned (vectors, matrices, transformations), (2) One cool visualization or insight you created, (3) One challenge you overcame, (4) One question you\'re pondering, (5) Your plan for Week 2. Keep it genuine and conversational—people appreciate authentic learning stories. <strong>Boundaries:</strong> Don\'t oversell or undersell your progress—be authentic. Share something visual if possible (a plot or notebook screenshot). Keep it concise (150-300 words or a thread). <strong>Deliverable:</strong> A public post sharing your learning progress and engaging with the ML community. <strong>Verification:</strong> Post should represent your journey honestly and invite engagement (questions or discussion). Common pitfall: waiting until you\'re "expert enough" to share—share the learning process itself! Success check: Did you get any responses, encouragement, or new connections? Did sharing help solidify your learning? Estimated time: 15 minutes for drafting and posting. <strong>Resources:</strong> <a href="https://www.swyx.io/learn-in-public/" target="_blank" rel="noopener">Learn in Public Philosophy</a>' }
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
            { label: 'Watch 3Blue1Brown Ep. 7 "Dot products and duality"', estMinutes: 15, resourceLinks: ['https://www.youtube.com/watch?v=LyGKycYT2v0'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=LyGKycYT2v0" target="_blank" rel="noopener">3Blue1Brown Episode 7: Dot products and duality</a> (15 minutes), focusing on two interpretations: the algebraic definition (multiply corresponding components and sum) and the geometric meaning (projection of one vector onto another, scaled by the second vector\'s length). <strong>Boundaries:</strong> Pay special attention to the duality concept—how we can think of dot products as either projecting vectors or as linear transformations from vectors to numbers. Pause when Grant shows the connection between these views. Don\'t worry about memorizing formulas; focus on the geometric intuition of dot products measuring "how much two vectors align." <strong>Deliverable:</strong> Clear understanding that dot product combines two key ideas: alignment (via projection) and magnitude. Mental model connecting algebraic computation to geometric meaning. <strong>Verification:</strong> Can you explain why perpendicular vectors have dot product zero? Why parallel vectors have maximum dot product? Can you visualize what a dot product represents geometrically? Common pitfall: treating dot product as just a computation without geometric understanding. Success check: Explain why cosine similarity (used everywhere in ML for measuring vector similarity) is essentially a normalized dot product. This concept is fundamental for understanding attention mechanisms in transformers. Estimated time: 15 minutes, watch twice if needed for full clarity. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>, <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length" target="_blank" rel="noopener">Khan Academy: Dot Product</a>' },
            { label: 'Complete Khan Academy: dot product and projections', estMinutes: 60, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products" target="_blank" rel="noopener">Khan Academy dot product and vector projections</a> exercises, completing all practice problems until achieving mastery. Focus on: (1) Computing dot products algebraically, (2) Understanding the geometric interpretation, (3) Using dot products to find vector projections, (4) Recognizing when vectors are orthogonal (perpendicular). <strong>Boundaries:</strong> Work through problems by hand first, then verify with calculator. If stuck on a problem for more than 10 minutes, review the concept video rather than just checking the answer. Aim for 100% mastery on each subtopic before moving forward. Practice both 2D and 3D examples. <strong>Deliverable:</strong> Mastery badges on Khan Academy for dot product computation, geometric interpretation, and vector projection sections. Ability to compute dot products quickly and accurately for vectors of any dimension. <strong>Verification:</strong> Can you compute a dot product in your head for simple vectors? Given two vectors, can you immediately tell if they\'re orthogonal by computing their dot product? Can you project one vector onto another and explain what this means geometrically? Common pitfall: memorizing the formula without understanding what you\'re computing or why it matters. Success check: Solve this problem confidently: given vectors a=[3,4] and b=[4,-3], compute their dot product and explain why the result tells you they\'re perpendicular. Understand that orthogonality (dot product = 0) is crucial in ML for feature independence and principal component analysis. Estimated time: 60 minutes including all practice problems and review. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products" target="_blank" rel="noopener">Khan Academy: Dot Products</a>, <a href="https://www.youtube.com/watch?v=LyGKycYT2v0" target="_blank" rel="noopener">3Blue1Brown: Dot Products</a>' },
            { label: 'Create notebooks/foundations/day08_dot_product.ipynb exploring orthogonality', estMinutes: 90, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day08_dot_product.ipynb) demonstrating: (1) Dot product computation using NumPy\'s np.dot() and @ operator, (2) Visualizing dot products geometrically with vector plots, (3) Computing and visualizing vector projections, (4) Exploring orthogonality by checking when dot products equal zero, (5) Demonstrating the connection between dot product and angle (using np.arccos and the formula: dot(a,b) = ||a|| ||b|| cos(θ)). Include both 2D and 3D examples with clear matplotlib visualizations. <strong>Boundaries:</strong> Create at least 5 distinct examples: (1) parallel vectors (max dot product), (2) perpendicular vectors (zero dot product), (3) vectors at various angles, (4) projecting one vector onto another with visual representation, (5) checking orthogonality of multiple vectors. Add markdown cells explaining each concept before the code. Make visualizations publication-quality with proper labels and colors. <strong>Deliverable:</strong> A tutorial-style notebook that clearly demonstrates dot products, projections, and orthogonality through both computation and visualization. Should include at least 5 visualizations showing different scenarios and relationships. <strong>Verification:</strong> Notebook runs top-to-bottom without errors. Visualizations clearly show the geometric relationships. Code is well-commented. Markdown explanations connect the code to the concepts. Someone learning about dot products should gain both computational and geometric understanding from your notebook. Common pitfall: creating code without adequate visual representation or explanation—remember, this is about building geometric intuition. Success check: Your visualizations should clearly show why perpendicular vectors have zero dot product and how projection works geometrically. Can you use your notebook to explain these concepts to someone else? Estimated time: 90 minutes for thorough implementation and documentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.dot.html" target="_blank" rel="noopener">NumPy dot function</a>, <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.quiver.html" target="_blank" rel="noopener">Matplotlib quiver for vector plots</a>, <a href="https://jakevdp.github.io/PythonDataScienceHandbook/02.02-the-basics-of-numpy-arrays.html" target="_blank" rel="noopener">Python Data Science Handbook: NumPy</a>' },
            { label: 'Generate artifacts/day08_projection.png showing vector projection', estMinutes: 30, details: '<strong>Action:</strong> Create a high-quality publication-ready visualization (artifacts/day08_projection.png) demonstrating vector projection. Show: (1) Two vectors a and b as arrows from the origin, (2) The projection of a onto b (shown as a vector along b\'s direction), (3) The perpendicular component (from the projection to a\'s tip), (4) Right angle indicator showing orthogonality of the perpendicular component, (5) Labels and annotations explaining each component. Use clear colors: perhaps blue for a, red for b, green for the projection, and dotted lines for construction. <strong>Boundaries:</strong> Make this didactic—someone should understand projection from this image alone. Include a title like "Vector Projection: a onto b" and add text annotations explaining what\'s shown. Save at 300 DPI with <code>bbox_inches=\'tight\'</code> to avoid whitespace. Use a clean, professional color scheme with sufficient contrast. Consider showing a concrete example like projecting [3,2] onto [1,0] so viewers can verify the math. <strong>Deliverable:</strong> A clear, well-labeled PNG file that effectively teaches the concept of vector projection through visualization. Image should be self-contained—viewable without the notebook context. <strong>Verification:</strong> Image file exists and is viewable. Resolution is sufficient for projection use (300+ DPI). Labels are readable and accurate. The geometric relationship is immediately clear. Could this image be used in a presentation about vector projections? Common pitfall: creating cluttered visualizations with poor labeling or low resolution. Success check: Show this image to someone unfamiliar with projections—can they grasp the basic concept? The projection should visually appear as the "shadow" of vector a falling on vector b\'s direction. This visualization technique is important because projection is the geometric basis of many ML operations, including least squares regression and principal component analysis. Estimated time: 30 minutes including design iterations and quality checks. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/gallery/text_labels_and_annotations/annotation_demo.html" target="_blank" rel="noopener">Matplotlib Annotations</a>, <a href="https://matplotlib.org/stable/tutorials/colors/colors.html" target="_blank" rel="noopener">Matplotlib Color Specification</a>' },
            { label: 'Write docs/notes/day08_duality.md on dual interpretation of dot product', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive markdown document (docs/notes/day08_duality.md) explaining the dual nature of dot products—the two seemingly different but equivalent interpretations. Cover: (1) Algebraic view: multiply corresponding components and sum (a·b = a₁b₁ + a₂b₂ + ...), (2) Geometric view: projection and scaling (a·b = ||a|| ||b|| cos θ), (3) The duality concept: how these two views are really the same thing, (4) Why this matters for ML: dot products appear everywhere (similarity measures, matrix operations, attention mechanisms), (5) Connection to linear transformations: dot product with a fixed vector is a linear transformation from vectors to scalars. Use examples and avoid heavy mathematical notation—focus on understanding. <strong>Boundaries:</strong> Aim for 500-700 words. Write in your own words, not copying from sources. Include at least one concrete numerical example showing both interpretations give the same answer. Explain the intuition: dot product measures "how much two vectors point in the same direction" and the angle between them determines this. <strong>Deliverable:</strong> A clear, well-structured markdown document that could serve as a reference for understanding dot product duality. Should help someone see that the algebraic formula and geometric interpretation aren\'t separate facts but two views of the same operation. <strong>Verification:</strong> Document accurately explains both interpretations. Includes concrete examples. Makes the connection explicit between the two views. No spelling or grammar errors. Could someone read this and understand why dot product is so fundamental? Common pitfall: treating the two interpretations as unrelated formulas instead of explaining their deep connection. Success check: After writing, can you explain to someone (or yourself aloud) why multiplying components and summing is the same as ||a|| ||b|| cos θ? Understanding this duality is crucial because it lets you switch between computational and geometric thinking in ML contexts. Estimated time: 30 minutes for thoughtful writing and examples. <strong>Resources:</strong> <a href="https://betterexplained.com/articles/vector-calculus-understanding-the-dot-product/" target="_blank" rel="noopener">Better Explained: Dot Product</a>, <a href="https://www.youtube.com/watch?v=LyGKycYT2v0" target="_blank" rel="noopener">3Blue1Brown: Dot Products and Duality</a>, <a href="https://en.wikipedia.org/wiki/Dot_product#Geometric_definition" target="_blank" rel="noopener">Wikipedia: Dot Product Geometric Definition</a>' }
          ],
          reflectionPrompt: 'How does dot product relate to cosine similarity in ML?'
        },
        {
          globalDay: 9,
          week: 2,
          title: 'Cross Product & 3D Geometry',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 8 "Cross products"', estMinutes: 8, resourceLinks: ['https://www.youtube.com/watch?v=eu6i7WJeinw'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=eu6i7WJeinw" target="_blank" rel="noopener">3Blue1Brown Episode 8: Cross products</a> (8 minutes), focusing on understanding the geometric meaning: the cross product of two 3D vectors produces a third vector perpendicular to both, with magnitude equal to the parallelogram area formed by the original vectors. <strong>Boundaries:</strong> Pay attention to the right-hand rule for determining direction and the connection between cross product magnitude and the area interpretation. Note that cross products are specific to 3D (and 7D in pure math, but we won\'t use that). Unlike dot products which produce scalars, cross products produce vectors. Don\'t worry about memorizing the component formula yet—focus on the geometric intuition first. <strong>Deliverable:</strong> Clear mental model of cross products as producing perpendicular vectors with magnitude related to area. Understanding of the right-hand rule for direction. <strong>Verification:</strong> Can you explain why the cross product of parallel vectors is zero (they form no area)? Why the result is always perpendicular to both input vectors? Can you use your right hand to determine the direction? Common pitfall: treating cross product as an arbitrary formula without geometric meaning. Success check: Explain why cross product magnitude ||a × b|| = ||a|| ||b|| sin θ relates to the area of the parallelogram formed by a and b. While cross products are less common in ML than dot products, they appear in computer graphics (which relates to vision tasks), physics simulations, and understanding rotations in 3D space—relevant for robotics and 3D scene understanding. Estimated time: 8 minutes, consider watching twice for full clarity on the geometric meaning. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>, <a href="https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/cross-products-mvc" target="_blank" rel="noopener">Khan Academy: Cross Product Introduction</a>' },
            { label: 'Complete Khan Academy: cross product intro', estMinutes: 45, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices" target="_blank" rel="noopener">Khan Academy cross product introduction</a> exercises, focusing on: (1) Computing cross products using the determinant formula, (2) Understanding the geometric interpretation (perpendicular vector with magnitude = area), (3) Practicing the right-hand rule for direction, (4) Recognizing properties like anti-commutativity (a × b = -(b × a)). <strong>Boundaries:</strong> Work through problems systematically. The determinant method for computing cross products involves: a × b = (a₂b₃ - a₃b₂)i - (a₁b₃ - a₃b₁)j + (a₁b₂ - a₂b₁)k. Practice this formula but always connect it back to the geometric meaning. Try both ways: computing by formula and checking with geometric intuition. <strong>Deliverable:</strong> Completed Khan Academy exercises with ability to compute cross products accurately and interpret results geometrically. Mastery of the right-hand rule for determining direction. <strong>Verification:</strong> Can you compute a × b given numerical vectors? Can you verify that the result is perpendicular to both inputs (by checking dot products equal zero)? Can you predict whether ||a × b|| will be large or small based on the angle between vectors? Common pitfall: getting lost in the formula without checking that your result makes geometric sense (perpendicularity and magnitude). Success check: Given a=[1,0,0] and b=[0,1,0], compute a × b and verify it equals [0,0,1] (pointing along z-axis by right-hand rule), and check it\'s perpendicular to both a and b. Understanding cross products helps with normal vectors in graphics and understanding orientation in 3D spaces. Estimated time: 45 minutes including all practice problems and verification checks. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/multivariable-calculus" target="_blank" rel="noopener">Khan Academy: Multivariable Calculus</a>, <a href="https://tutorial.math.lamar.edu/Classes/CalcII/CrossProduct.aspx" target="_blank" rel="noopener">Paul\'s Online Math: Cross Product</a>' },
            { label: 'Create notebooks/foundations/day09_cross_product.ipynb with 3D examples', estMinutes: 90, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day09_cross_product.ipynb) demonstrating cross products in 3D with: (1) Computing cross products using NumPy\'s np.cross(), (2) Visualizing input vectors and their cross product in 3D using matplotlib\'s mplot3d, (3) Verifying perpendicularity by computing dot products, (4) Demonstrating the right-hand rule with labeled examples, (5) Showing how cross product magnitude relates to parallelogram area, (6) Exploring anti-commutativity (a × b vs b × a). <strong>Boundaries:</strong> Create at least 4 distinct 3D visualizations showing different vector pairs and their cross products. Use different colors for input vectors (blue and red) and the result (green). Include axes labels and grid for spatial context. Add interactive 3D rotation if using plotly, or multiple viewing angles if using matplotlib. Verify perpendicularity numerically for each example. <strong>Deliverable:</strong> A tutorial-style notebook with clear 3D visualizations demonstrating cross products. Should include both computation and geometric verification. Visualizations should clearly show the perpendicular relationship and use the right-hand rule. <strong>Verification:</strong> Notebook runs without errors. All 3D plots render correctly and are readable. Code computes cross products and verifies properties (perpendicularity, magnitude, anti-commutativity). Markdown cells explain each concept. Someone learning cross products should gain geometric intuition from your visualizations. Common pitfall: poor 3D visualizations that don\'t clearly show the spatial relationships—use good camera angles and clear colors. Success check: Your notebook should demonstrate that a × b points in the direction your thumb points when fingers curl from a to b (right-hand rule), and that ||a × b|| equals the area of the parallelogram formed by a and b. Can you use your notebook to explain cross products to someone visually? Estimated time: 90 minutes for implementation, visualization, and documentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.cross.html" target="_blank" rel="noopener">NumPy cross function</a>, <a href="https://matplotlib.org/stable/gallery/mplot3d/quiver3d.html" target="_blank" rel="noopener">Matplotlib 3D quiver plots</a>, <a href="https://jakevdp.github.io/PythonDataScienceHandbook/04.12-three-dimensional-plotting.html" target="_blank" rel="noopener">Python Data Science Handbook: 3D Plotting</a>' },
            { label: 'Generate artifacts/day09_cross_3d.png showing perpendicular result', estMinutes: 30, details: '<strong>Action:</strong> Create a publication-quality 3D visualization (artifacts/day09_cross_3d.png) showing a clear example of cross product with vectors a and b (in blue and red) and their cross product a × b (in green), all drawn from the origin. Choose vectors that make the perpendicularity obvious, like a=[2,0,0], b=[0,3,0], giving a × b=[0,0,6]. Include: (1) Clear axis labels (x,y,z), (2) Grid for spatial reference, (3) Arrows with proper scaling, (4) Labels on each vector, (5) A title explaining what\'s shown. Optionally show the parallelogram formed by a and b to illustrate the area relationship. <strong>Boundaries:</strong> Choose a camera angle that clearly shows the 3D relationships—avoid angles where vectors appear to overlap. Save at 300 DPI. Use professional colors with good contrast against a white or light background. Make sure the perpendicular relationship is visually obvious. Consider adding text annotations explaining "a × b is perpendicular to both a and b" and "||a × b|| = area of parallelogram." <strong>Deliverable:</strong> A clear, self-contained PNG image that effectively demonstrates cross product geometry in 3D. Should be suitable for presentations or educational materials. <strong>Verification:</strong> Image is high resolution (300+ DPI). The three vectors are clearly visible and properly labeled. The perpendicular relationship is visually apparent. Axes and grid provide spatial context. Could this image teach cross products to someone unfamiliar with them? Common pitfall: poor viewing angle making the 3D structure unclear, or cluttered visualization. Success check: The green result vector should clearly appear perpendicular to the blue and red input vectors. Someone viewing this should immediately grasp that cross products produce perpendicular vectors. While less common in ML than dot products, understanding 3D geometry is valuable for computer vision and robotics applications. Estimated time: 30 minutes including angle selection and quality checks. <strong>Resources:</strong> <a href="https://matplotlib.org/stable/gallery/mplot3d/view_planes_3d.html" target="_blank" rel="noopener">Matplotlib 3D View Angles</a>, <a href="https://matplotlib.org/stable/tutorials/colors/colors.html" target="_blank" rel="noopener">Matplotlib Colors</a>' },
            { label: 'Write docs/notes/day09_cross.md on right-hand rule', estMinutes: 25, details: '<strong>Action:</strong> Write a focused markdown document (docs/notes/day09_cross.md) explaining the right-hand rule for determining cross product direction. Cover: (1) What the right-hand rule is: point fingers along first vector, curl toward second vector, thumb points in result direction, (2) Why we need it: the cross product direction isn\'t obvious from the formula alone, (3) How to apply it consistently: always go from first vector to second vector in order, (4) The anti-commutativity property: a × b = -(b × a) because swapping order reverses direction, (5) Practical examples with standard basis vectors: i × j = k, j × k = i, k × i = j. <strong>Boundaries:</strong> Aim for 400-500 words. Make it practical and visual—describe how to physically use your hand. Include ASCII art or describe a simple diagram showing hand position. Emphasize that the rule is a convention (we could have chosen left-hand rule) but right-hand rule is the standard. Explain that this matters for ensuring consistent orientation in calculations. <strong>Deliverable:</strong> A clear, practical guide to using the right-hand rule that someone could follow to determine cross product directions. Should demystify this geometric rule with concrete instructions. <strong>Verification:</strong> Document gives step-by-step instructions for applying the right-hand rule. Includes examples with basis vectors. Explains why the rule matters (consistency in direction). No errors in the examples. Could someone read this and correctly apply the right-hand rule? Common pitfall: being too abstract without giving concrete, physical instructions. Success check: After reading, someone should be able to use their actual right hand to determine that i × j = k (not -k). Practice this yourself: point fingers along x-axis, curl toward y-axis, thumb points up along z-axis. Understanding orientation conventions is important in 3D graphics and computer vision. Estimated time: 25 minutes for clear, practical writing. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Right-hand_rule" target="_blank" rel="noopener">Wikipedia: Right-hand Rule</a>, <a href="https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/cross-products-mvc" target="_blank" rel="noopener">Khan Academy: Cross Products</a>' }
          ],
          reflectionPrompt: 'Cross product is less common in ML—when might it appear?'
        },
        {
          globalDay: 10,
          week: 2,
          title: 'Change of Basis',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 9 "Change of basis"', estMinutes: 12, resourceLinks: ['https://www.youtube.com/watch?v=P2LTAUO1TdA'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=P2LTAUO1TdA" target="_blank" rel="noopener">3Blue1Brown Episode 9: Change of basis</a> (12 minutes), focusing on understanding that the same vector can be represented differently depending on which basis (coordinate system) you use. The key insight: coordinates are instructions for how to scale and combine basis vectors to reach a point. <strong>Boundaries:</strong> Pay attention to the change-of-basis matrix construction: columns are where the new basis vectors land in the old coordinate system (or vice versa, depending on direction). Understand that changing basis is like translating between different "languages" for describing the same geometric object. Pause when Grant shows how to convert coordinates between bases—this involves matrix multiplication with the change-of-basis matrix. <strong>Deliverable:</strong> Clear mental model that vector coordinates depend on basis choice, and understanding how to construct and use change-of-basis matrices to translate between coordinate systems. <strong>Verification:</strong> Can you explain why the standard basis vectors i=[1,0] and j=[0,1] are just one possible choice? Why might we want to use a different basis? Can you describe what a change-of-basis matrix does geometrically? Common pitfall: thinking coordinates are absolute rather than relative to a chosen basis. Success check: Understand that if Jennifer uses different basis vectors than you, she describes the same vector with different coordinates, and you can translate between your descriptions using a change-of-basis matrix. This concept is fundamental for eigendecomposition (finding the "right" basis where transformations become simple) and PCA (finding the basis that best captures variance). Estimated time: 12 minutes, may want to watch twice as this is conceptually rich. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>, <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases" target="_blank" rel="noopener">Khan Academy: Change of Basis</a>' },
            { label: 'Complete Khan Academy: change of basis exercises', estMinutes: 60, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases" target="_blank" rel="noopener">Khan Academy change of basis exercises</a>, practicing: (1) Expressing vectors in different bases, (2) Constructing change-of-basis matrices, (3) Converting coordinates from one basis to another using matrix multiplication, (4) Understanding the inverse relationship (basis A to B, then B back to A). <strong>Boundaries:</strong> Start with 2D examples to build intuition before moving to higher dimensions. For each problem, verify your answer makes sense: converting to a new basis and back should give the original coordinates. Practice both directions: expressing a vector in a new basis, and converting basis-specific coordinates back to standard form. Don\'t just memorize the formula—understand what you\'re computing. <strong>Deliverable:</strong> Mastery of change-of-basis computations with clear understanding of what the mathematics represents geometrically. Ability to construct change-of-basis matrices and use them correctly. <strong>Verification:</strong> Can you take a vector in standard basis, express it in a new basis, then convert back and get the original? Can you construct the change-of-basis matrix given two sets of basis vectors? Can you explain why we need inverse matrices for certain basis conversions? Common pitfall: confusion about which direction the transformation goes (basis A to B vs B to A) and which matrix to use. Success check: Given basis vectors b₁=[2,1] and b₂=[1,2], express standard vector v=[5,4] in the new basis, then convert back to verify. Understanding basis changes is crucial because many ML algorithms (PCA, ICA, eigendecomposition) are fundamentally about finding the "right" basis for a problem. Estimated time: 60 minutes for thorough practice and understanding. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases" target="_blank" rel="noopener">Khan Academy: Alternate Bases</a>, <a href="https://tutorial.math.lamar.edu/Classes/LinAlg/ChangeOfBasis.aspx" target="_blank" rel="noopener">Paul\'s Online Math: Change of Basis</a>' },
            { label: 'Create notebooks/foundations/day10_basis_change.ipynb', estMinutes: 90, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day10_basis_change.ipynb) demonstrating change of basis with: (1) Defining multiple basis sets (standard basis and custom bases), (2) Constructing change-of-basis matrices using NumPy, (3) Converting vectors between bases using matrix multiplication, (4) Visualizing the same vector in different coordinate systems, (5) Verifying round-trip conversions (change basis and change back), (6) Showing how transformations look simpler in certain bases (preview of eigendecomposition). <strong>Boundaries:</strong> Create clear visualizations showing: the same geometric vector with coordinates labeled in different bases, grid lines showing each basis system, and how the change-of-basis matrix acts. Use at least 3 different basis choices to demonstrate the concept thoroughly. Include both 2D visualizations (clear and intuitive) and code that works in any dimension. Verify all conversions by checking inverse operations. <strong>Deliverable:</strong> A tutorial-style notebook that clearly demonstrates change of basis through both computation and visualization. Should include at least 3 complete examples with different basis choices and visual representations showing the same vector in different coordinate systems. <strong>Verification:</strong> Notebook runs without errors. Visualizations clearly show the same vector represented in multiple coordinate systems. Code correctly constructs change-of-basis matrices and performs conversions. Verification checks confirm round-trip accuracy. Markdown explanations connect computations to geometric meaning. Common pitfall: treating change of basis as pure algebra without showing the geometric picture—your visualizations should make it clear that the vector hasn\'t changed, only its coordinate representation. Success check: Your notebook should demonstrate that choosing a basis is like choosing units (meters vs feet): the physical reality doesn\'t change, only the numbers we use to describe it. Can someone learn change of basis from your notebook? Estimated time: 90 minutes for thorough implementation and visualization. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/routines.linalg.html" target="_blank" rel="noopener">NumPy Linear Algebra</a>, <a href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" target="_blank" rel="noopener">Matplotlib PyPlot Tutorial</a>, <a href="https://jakevdp.github.io/PythonDataScienceHandbook/02.00-introduction-to-numpy.html" target="_blank" rel="noopener">Python Data Science Handbook: NumPy</a>' },
            { label: 'Implement basis transformation matrices', estMinutes: 60, details: '<strong>Action:</strong> Implement functions to work with basis transformations: (1) <code>construct_change_of_basis_matrix(old_basis, new_basis)</code> that creates the transformation matrix, (2) <code>change_to_basis(vector, basis)</code> that converts a vector from standard basis to the specified basis, (3) <code>change_from_basis(coords, basis)</code> that converts coordinates in a custom basis back to standard basis, (4) <code>verify_roundtrip(vector, basis)</code> that checks conversions work correctly in both directions. Include comprehensive docstrings with examples and type hints. <strong>Boundaries:</strong> Implement from mathematical principles, not just calling high-level functions. The change-of-basis matrix is constructed by taking the basis vectors as columns (or rows, depending on convention—document your choice clearly). Include error checking for invalid inputs (non-invertible basis matrices). Write unit tests for each function with multiple test cases including edge cases. <strong>Deliverable:</strong> A clean, well-tested implementation of basis transformation utilities. Code should be reusable and well-documented. Include at least 5 test cases per function verifying correct behavior. <strong>Verification:</strong> All functions run without errors. Unit tests pass. Functions handle edge cases appropriately. Docstrings clearly explain inputs, outputs, and usage. Code follows Python best practices (PEP 8). Can these functions be used reliably in future projects? Common pitfall: inconsistent conventions about row vs column vectors or inverse matrix usage. Success check: Your <code>verify_roundtrip</code> function should confirm that changing to a basis and back returns the original vector (within numerical precision). Test with standard basis (should be identity operations), orthogonal bases, and non-orthogonal bases. Understanding how to implement these operations reinforces the mathematical concepts and provides tools for future work with PCA and eigenvectors. Estimated time: 60 minutes for implementation, documentation, and testing. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html" target="_blank" rel="noopener">NumPy matrix inverse</a>, <a href="https://docs.python.org/3/library/typing.html" target="_blank" rel="noopener">Python Type Hints</a>, <a href="https://realpython.com/documenting-python-code/" target="_blank" rel="noopener">Python Documentation Guide</a>' },
            { label: 'Write docs/notes/day10_basis.md', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive markdown document (docs/notes/day10_basis.md) explaining change of basis conceptually. Cover: (1) What a basis is: a set of linearly independent vectors that span the space, (2) Why coordinates depend on basis choice: the same geometric vector has different numerical representations in different bases, (3) The analogy to language translation: same meaning, different words, (4) How to construct change-of-basis matrices, (5) Why this matters for ML: PCA finds the basis where data variance is maximized, eigendecomposition finds the basis where transformations become simple (diagonal matrices), (6) Connection to upcoming topics: eigenvectors are special basis vectors that don\'t change direction under transformation. <strong>Boundaries:</strong> Aim for 500-700 words. Use concrete examples, perhaps the standard basis vs a rotated basis for 2D vectors. Explain intuitively—coordinates are just "instructions" for how to combine basis vectors, so different bases give different instructions for reaching the same point. Avoid heavy notation; focus on conceptual understanding. <strong>Deliverable:</strong> A clear, conceptual document that explains change of basis and previews why it matters for upcoming topics (eigendecomposition, PCA). Should help someone understand this is not just an abstract mathematical concept but a practical tool. <strong>Verification:</strong> Document clearly explains basis concept and coordinates\' dependence on basis choice. Includes concrete examples or analogies. Connects to ML applications. No errors. Could someone read this before tackling eigenvectors and have useful context? Common pitfall: being too mathematical without building intuition—emphasize that this is about different perspectives on the same geometric reality. Success check: Can you explain to someone why PCA "rotates" your data into a new basis where the axes align with maximum variance directions? Your document should provide the foundation for understanding this. The insight that we can choose convenient bases is powerful: in the "right" basis, many problems become much simpler. Estimated time: 30 minutes for thoughtful writing with examples. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Change_of_basis" target="_blank" rel="noopener">Wikipedia: Change of Basis</a>, <a href="https://www.youtube.com/watch?v=P2LTAUO1TdA" target="_blank" rel="noopener">3Blue1Brown: Change of Basis</a>, <a href="https://math.stackexchange.com/questions/184863/what-is-the-importance-of-the-change-of-basis-in-linear-algebra" target="_blank" rel="noopener">Math StackExchange: Importance of Change of Basis</a>' }
          ],
          reflectionPrompt: 'Why is change of basis important for understanding eigenvalues?'
        },
        {
          globalDay: 11,
          week: 2,
          title: 'Eigenvalues & Eigenvectors Introduction',
          priority: 'HIGH',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 10 "Eigenvectors and eigenvalues"', estMinutes: 17, resourceLinks: ['https://www.youtube.com/watch?v=PFDu9oVAE-g'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=PFDu9oVAE-g" target="_blank" rel="noopener">3Blue1Brown Episode 10: Eigenvectors and eigenvalues</a> (17 minutes), focusing on the key insight: eigenvectors are special vectors that don\'t change direction when a transformation is applied—they only get scaled. The scaling factor is the eigenvalue. <strong>Boundaries:</strong> Pay close attention to the geometric interpretation: most vectors get knocked off their span during a transformation, but eigenvectors "stay on their span" (they might flip or stretch, but keep the same direction). Watch the examples of rotations (no real eigenvectors in 2D since all vectors change direction) vs. stretching transformations (clear eigenvector directions). Pause when Grant shows the characteristic polynomial—this is how we find eigenvalues algebraically. Understanding this visually is crucial before diving into computations. <strong>Deliverable:</strong> Clear geometric intuition that eigenvectors are the "axis" directions that a transformation preserves, and eigenvalues tell you the scaling along those axes. <strong>Verification:</strong> Can you explain why a 90-degree rotation in 2D has no real eigenvectors? Why a pure scaling transformation has eigenvectors along all directions? Can you predict qualitatively where eigenvectors might be for a given transformation by looking at its geometric effect? Common pitfall: treating eigenvectors as just solutions to an equation without understanding the geometric meaning. Success check: Understand that eigenvectors reveal the "natural axes" of a transformation—the directions it treats simply. This is foundational for PCA (finding axes of maximum variance), understanding neural network dynamics, and diagonalization. Estimated time: 17 minutes, this is conceptually rich so consider watching twice. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>, <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy: Eigenvectors and Eigenvalues</a>' },
            { label: 'Complete Khan Academy: eigenvectors intro', estMinutes: 60, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy eigenvectors and eigenvalues introduction</a>, practicing: (1) Finding eigenvalues by solving det(A - λI) = 0, (2) Finding eigenvectors by solving (A - λI)v = 0 for each eigenvalue, (3) Verifying that Av = λv holds for your solutions, (4) Understanding geometric interpretation of what eigenvalues and eigenvectors mean. <strong>Boundaries:</strong> Start with 2×2 matrices to build computational fluency before attempting larger matrices. For each problem: compute eigenvalues first, then find corresponding eigenvectors, then verify by checking Av = λv. Understand that eigenvalues can be complex (for rotations) or repeated. Practice until the process feels systematic. Don\'t skip verification—it catches errors and reinforces understanding. <strong>Deliverable:</strong> Mastery of the computational process for finding eigenvalues and eigenvectors. Ability to solve characteristic equations and null space problems accurately. <strong>Verification:</strong> Can you find eigenvalues and eigenvectors for a 2×2 matrix by hand in under 5 minutes? Can you verify your answers by computing Av and checking it equals λv? Can you explain what it means geometrically when you find an eigenvalue λ=2 with eigenvector v=[1,1]? Common pitfall: making algebraic errors in the characteristic polynomial or null space solving—careful arithmetic is essential. Success check: Given matrix A=[[3,1],[0,2]], find eigenvalues (should get λ=3 and λ=2) and corresponding eigenvectors, then verify. Understanding this computation is essential because eigenvectors appear throughout ML: in PCA, spectral clustering, PageRank, and understanding optimization landscapes. Estimated time: 60 minutes for thorough practice with multiple examples. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy: Eigeneverything</a>, <a href="https://tutorial.math.lamar.edu/Classes/DE/LA_Eigen.aspx" target="_blank" rel="noopener">Paul\'s Online Math: Eigenvalues and Eigenvectors</a>' },
            { label: 'Create notebooks/foundations/day11_eigenvalues_intro.ipynb', estMinutes: 90, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day11_eigenvalues_intro.ipynb) demonstrating eigenvalues and eigenvectors with: (1) Computing eigenvalues and eigenvectors using NumPy\'s np.linalg.eig(), (2) Visualizing how transformations act on eigenvectors vs. regular vectors, (3) Verifying the eigenvalue equation Av = λv numerically, (4) Showing examples of different matrix types (stretching, rotation, shear) and their eigenvectors, (5) Exploring geometric interpretation with animated or multi-frame visualizations. <strong>Boundaries:</strong> Create clear 2D visualizations showing: original vectors, the transformed vectors, and highlighting that eigenvectors maintain direction (only scale). Use color coding: regular vectors that change direction in one color, eigenvectors that stay on their span in another color. Include at least 4 examples: (1) diagonal matrix (eigenvectors along axes), (2) symmetric matrix (orthogonal eigenvectors), (3) rotation matrix (complex eigenvalues, or show why there are none in 2D reals), (4) general matrix. Add code comments explaining each step. <strong>Deliverable:</strong> A tutorial-style notebook with clear visualizations demonstrating eigenvalue/eigenvector concepts geometrically and computationally. Should include verification code and multiple examples with different matrix types. <strong>Verification:</strong> Notebook runs without errors. Visualizations clearly show which vectors are eigenvectors (preserved direction). NumPy computations match hand calculations for simple examples. Verification code confirms Av = λv for all computed eigenpairs. Markdown explanations connect computation to geometry. Common pitfall: showing only the computation without geometric visualization—the visual insight is crucial. Success check: Your notebook should make it visually obvious why eigenvectors are special and what eigenvalues represent. Can someone learn eigenvalue intuition from your visualizations? Estimated time: 90 minutes for implementation, visualization, and documentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.eig.html" target="_blank" rel="noopener">NumPy eig function</a>, <a href="https://matplotlib.org/stable/gallery/images_contours_and_fields/quiver_demo.html" target="_blank" rel="noopener">Matplotlib quiver demo</a>, <a href="https://jakevdp.github.io/PythonDataScienceHandbook/05.09-principal-component-analysis.html" target="_blank" rel="noopener">Python Data Science Handbook: PCA</a>' },
            { label: 'Find eigenvalues for 2×2 matrices by hand', estMinutes: 45, details: '<strong>Action:</strong> Practice finding eigenvalues and eigenvectors for 2×2 matrices entirely by hand (no calculator or NumPy) to build computational fluency. Work through at least 5 different matrices: (1) A diagonal matrix (easy: eigenvalues on diagonal), (2) A symmetric matrix, (3) An upper triangular matrix, (4) A general 2×2 matrix, (5) A matrix with repeated eigenvalues. For each: compute det(A - λI) = 0, solve for λ, then solve (A - λI)v = 0 for eigenvectors, verify Av = λv. <strong>Boundaries:</strong> Show all work step-by-step. For 2×2 matrices, the characteristic polynomial is quadratic: det([[a-λ, b],[c, d-λ]]) = (a-λ)(d-λ) - bc = λ² - (a+d)λ + (ad-bc). Use the quadratic formula to find eigenvalues. For eigenvectors, substitute each λ back and solve the resulting system. Check your work by computing Av and verifying it equals λv. <strong>Deliverable:</strong> Complete hand-written solutions for 5 different 2×2 matrices, showing all steps: characteristic polynomial, eigenvalue computation, eigenvector finding, and verification. <strong>Verification:</strong> All verifications should confirm Av = λv. Your arithmetic should be accurate. Can you complete a 2×2 eigenvalue/eigenvector problem in 5-8 minutes? Do you understand each step\'s purpose? Common pitfall: arithmetic errors in expanding determinants or solving systems—work carefully and check each step. Success check: You should be able to find eigenvalues and eigenvectors for matrix [[1,2],[2,1]] and get λ₁=3 with v₁∝[1,1], λ₂=-1 with v₂∝[1,-1]. Building computational fluency by hand ensures you understand what NumPy is doing and helps you catch errors in code. This skill is valuable for homework, exams, and debugging eigenvalue code. Estimated time: 45 minutes for 5 complete problems with verification. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything/v/linear-algebra-introduction-to-eigenvalues-and-eigenvectors" target="_blank" rel="noopener">Khan Academy: Eigenvalues Introduction</a>, <a href="https://tutorial.math.lamar.edu/Classes/DE/LA_Eigen.aspx" target="_blank" rel="noopener">Paul\'s Online Math: Eigenvalues</a>' },
            { label: 'Write docs/notes/day11_eigen.md explaining geometric intuition', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive markdown document (docs/notes/day11_eigen.md) explaining eigenvalues and eigenvectors with emphasis on geometric intuition. Cover: (1) The definition: Av = λv means vector v only gets scaled (not rotated) by transformation A, (2) Geometric meaning: eigenvectors are the "axis" directions that A treats simply, (3) Why they\'re called "eigen" (German for "own" or "characteristic")—they characterize the transformation, (4) Examples: stretching along axes has axis-aligned eigenvectors, rotation has no real eigenvectors (all vectors change direction), (5) Why they matter for ML: PCA finds eigenvectors of covariance matrix (directions of maximum variance), graph algorithms use eigenvectors of adjacency matrices, understanding neural network dynamics involves eigenvalues of weight matrices. <strong>Boundaries:</strong> Aim for 600-800 words. Focus on understanding over formulas. Use analogies: eigenvectors are like "preferred directions" of a transformation—directions that don\'t get "mixed" with other directions. Include concrete 2D examples you can visualize. Explain why finding eigenvectors is like finding the "natural coordinate system" for a transformation. <strong>Deliverable:</strong> A clear, intuitive explanation of eigenvalues/eigenvectors that builds geometric understanding and previews ML applications. Should help someone see why this abstraction is powerful and worth mastering. <strong>Verification:</strong> Document clearly explains the geometric meaning, not just the algebra. Includes concrete examples. Connects to ML applications. No errors. Could someone read this and understand why eigenvectors matter beyond being homework problems? Common pitfall: being too abstract or algebraic without building intuition. Success check: Can you explain why PCA\'s principal components are eigenvectors of the covariance matrix? Your document should provide the conceptual foundation for understanding this. Eigenvectors reveal structure: they show us the "natural" directions in our data or the "fundamental modes" of a system. Estimated time: 30 minutes for thoughtful, intuitive writing. <strong>Resources:</strong> <a href="https://www.youtube.com/watch?v=PFDu9oVAE-g" target="_blank" rel="noopener">3Blue1Brown: Eigenvectors</a>, <a href="https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors#Geometric_meaning" target="_blank" rel="noopener">Wikipedia: Eigenvalues Geometric Meaning</a>, <a href="https://math.stackexchange.com/questions/243533/what-is-the-importance-of-eigenvalues-eigenvectors" target="_blank" rel="noopener">Math StackExchange: Importance of Eigenvalues</a>' }
          ],
          reflectionPrompt: 'What does it mean for a vector to "stay on its span" after transformation?'
        },
        {
          globalDay: 12,
          week: 2,
          title: 'Eigendecomposition & Diagonalization',
          priority: 'HIGH',
          tasks: [
            { label: 'Complete Khan Academy: eigendecomposition and diagonalization', estMinutes: 75, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy eigendecomposition and diagonalization</a> exercises, learning how to decompose a matrix A into A = PDP⁻¹ where P contains eigenvectors as columns and D is a diagonal matrix of eigenvalues. <strong>Boundaries:</strong> Understand the key insight: if we have enough linearly independent eigenvectors, we can decompose any square matrix into this form. Practice constructing P (eigenvectors as columns) and D (eigenvalues on diagonal), then verifying A = PDP⁻¹. Understand that not all matrices are diagonalizable (need n independent eigenvectors for n×n matrix). Work through problems systematically: find eigenvalues, find eigenvectors, construct P and D, verify the decomposition. <strong>Deliverable:</strong> Mastery of eigendecomposition process with ability to construct and verify A = PDP⁻¹ decompositions. Understanding of when diagonalization is possible and what it means geometrically. <strong>Verification:</strong> Can you take a matrix A, find its eigendecomposition, and verify by computing PDP⁻¹ that you get A back? Can you explain geometrically what eigendecomposition means (change to eigenvector basis, apply diagonal scaling, change back)? Common pitfall: not verifying your work—always compute PDP⁻¹ to check. Success check: Eigendecompose matrix A=[[3,1],[0,2]], get P (eigenvectors) and D (diagonal with 3 and 2), verify PDP⁻¹=A. Understanding eigendecomposition is crucial: it\'s how PCA works (eigendecompose covariance matrix), how we efficiently compute matrix powers (A^n = PD^nP⁻¹), and how we understand dynamical systems. This is one of the most important concepts in applied linear algebra. Estimated time: 75 minutes for thorough practice with multiple examples. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy: Eigendecomposition</a>, <a href="https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix" target="_blank" rel="noopener">Wikipedia: Eigendecomposition</a>' },
            { label: 'Create notebooks/foundations/day12_eigendecomp.ipynb', estMinutes: 120, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day12_eigendecomp.ipynb) demonstrating eigendecomposition in depth: (1) Computing eigendecomposition using NumPy (np.linalg.eig), (2) Manually constructing P and D matrices from eigenpairs, (3) Verifying A = PDP⁻¹ numerically, (4) Visualizing what eigendecomposition means geometrically (change of basis to eigenvector coordinates where transformation becomes simple diagonal scaling), (5) Computing matrix powers efficiently using eigendecomposition (A^n = PD^nP⁻¹), (6) Exploring examples: symmetric matrices (orthogonal eigenvectors), defective matrices (can\'t be diagonalized), applications to Markov chains or difference equations. <strong>Boundaries:</strong> This is a substantial notebook—spend time making it thorough and clear. Include: detailed code comments, markdown explanations connecting algebra to geometry, visualizations showing how a transformation looks in standard basis vs eigenvector basis, numerical verification of all claims, at least 4 different matrix examples with different properties. Show both the computational process and the geometric interpretation. Demonstrate the power of eigendecomposition for computing A^100 efficiently. <strong>Deliverable:</strong> A comprehensive, tutorial-quality notebook that could serve as a definitive reference for eigendecomposition. Should include theory, computation, visualization, and practical applications. <strong>Verification:</strong> Notebook runs without errors (may take a minute due to extensive computations). All eigendecompositions are verified by reconstructing A from PDP⁻¹. Visualizations clearly show the geometric meaning. Code is well-documented. Someone could learn eigendecomposition thoroughly from this notebook. Common pitfall: treating eigendecomposition as pure mechanics without showing its geometric meaning and practical power. Success check: Your notebook should demonstrate both HOW to eigendecompose (computational steps) and WHY it\'s useful (matrix powers, understanding transformations, simplifying problems). Can you explain eigendecomposition from your notebook to someone else? Estimated time: 120 minutes for thorough, high-quality implementation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.eig.html" target="_blank" rel="noopener">NumPy eig</a>, <a href="https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html" target="_blank" rel="noopener">NumPy matrix_power</a>, <a href="https://matplotlib.org/stable/gallery/index.html" target="_blank" rel="noopener">Matplotlib Gallery</a>' },
            { label: 'Implement eigendecomposition verification (A = PDP^-1)', estMinutes: 60, details: '<strong>Action:</strong> Implement a complete eigendecomposition verification system: (1) <code>eigendecompose(A)</code> that returns P (eigenvector matrix) and D (diagonal eigenvalue matrix), (2) <code>verify_eigendecomp(A, P, D)</code> that checks if A = PDP⁻¹ holds within numerical tolerance, (3) <code>compute_matrix_power(A, n)</code> that uses eigendecomposition to efficiently compute A^n, (4) <code>is_diagonalizable(A)</code> that checks if A has enough independent eigenvectors. Include comprehensive error handling, type hints, docstrings with examples, and unit tests. <strong>Boundaries:</strong> Build from NumPy\'s eig function but add verification layers. Handle edge cases: complex eigenvalues, defective matrices, numerical precision issues. For matrix power computation, show the speedup vs naive multiplication for large n. Your verification function should check np.allclose(A, P @ D @ np.linalg.inv(P)) accounting for floating-point precision. Document the mathematical background in docstrings. <strong>Deliverable:</strong> Production-quality eigendecomposition utilities with thorough testing and documentation. Code should be reusable for future projects. <strong>Verification:</strong> All functions run correctly. Unit tests pass for multiple test cases including edge cases. Verification function correctly identifies valid eigendecompositions. Matrix power function produces correct results faster than naive methods for large powers. Code follows best practices. Common pitfall: not handling numerical precision issues (eigenvalues/eigenvectors computed numerically have small errors). Success check: Your code should correctly decompose matrix [[3,1],[0,2]], verify the decomposition, and efficiently compute its 100th power. Test with symmetric matrices (should have real eigenvalues and orthogonal eigenvectors) and see that verification passes. These utilities will be valuable when you implement PCA from scratch or work with graph algorithms. Estimated time: 60 minutes for implementation, testing, and documentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/routines.linalg.html" target="_blank" rel="noopener">NumPy Linear Algebra</a>, <a href="https://docs.python.org/3/library/typing.html" target="_blank" rel="noopener">Python Type Hints</a>, <a href="https://realpython.com/python-testing/" target="_blank" rel="noopener">Python Testing Guide</a>' },
            { label: 'Test matrix powers using diagonalization', estMinutes: 45, details: '<strong>Action:</strong> Demonstrate the power of eigendecomposition for computing matrix powers by comparing: (1) Naive method: multiply A by itself n times, (2) Eigendecomposition method: compute A^n = PD^nP⁻¹ where D^n is trivial (raise diagonal elements to power n). Test with different matrices and different values of n (10, 100, 1000) to see the computational benefit. Time both approaches. Explore applications: Fibonacci numbers via matrix powers, Markov chain convergence (what happens as n→∞), difference equations, population dynamics models. <strong>Boundaries:</strong> Choose several test matrices: (1) a 2×2 matrix (fast enough to see large powers), (2) the Fibonacci matrix [[1,1],[1,0]], (3) a Markov transition matrix (rows sum to 1), (4) a symmetric matrix. For each, compute various powers using both methods, time them, and verify they give the same results. Show that D^n is instant (just raise diagonal elements) while repeated multiplication is slow. Explore what A^∞ means (steady-state behavior). <strong>Deliverable:</strong> Comprehensive comparison showing eigendecomposition makes matrix powers tractable. Concrete applications demonstrating why this matters beyond mathematical curiosity. Timing data showing the computational advantage. <strong>Verification:</strong> Both methods produce same results (within numerical precision). Eigendecomposition method is faster for large n. Applications (Fibonacci, Markov chains) work correctly and provide insight. Code is clear and well-commented. Common pitfall: not exploring real applications—matrix powers appear in many practical contexts. Success check: Show that computing the 100th power of the Fibonacci matrix using eigendecomposition gives you Fibonacci(100) instantly, while naive multiplication would take many operations. Demonstrate that a Markov chain\'s long-run behavior is determined by eigenvectors corresponding to eigenvalue 1. Understanding matrix powers via eigendecomposition is crucial for understanding dynamical systems, recurrent neural networks, and graph algorithms. Estimated time: 45 minutes for implementation, testing, and exploration of applications. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Matrix_function#Powers" target="_blank" rel="noopener">Wikipedia: Matrix Powers</a>, <a href="https://math.stackexchange.com/questions/1482866/fibonacci-sequence-using-matrix-exponentiation" target="_blank" rel="noopener">Fibonacci via Matrix Powers</a>' },
            { label: 'Write docs/notes/day12_diagonalization.md', estMinutes: 30, details: '<strong>Action:</strong> Write a comprehensive markdown document (docs/notes/day12_diagonalization.md) explaining diagonalization conceptually. Cover: (1) What A = PDP⁻¹ means: transform to eigenvector basis (P⁻¹), apply simple diagonal scaling (D), transform back (P), (2) Geometric interpretation: in the eigenvector basis, the transformation is just stretching along axes, (3) Why it\'s powerful: makes matrix powers trivial (A^n = PD^nP⁻¹ and D^n is easy), simplifies differential equations, reveals long-term behavior of systems, (4) Connection to PCA: diagonalizing covariance matrix finds axes of maximum variance, (5) When it\'s possible: need n linearly independent eigenvectors for n×n matrix (not all matrices are diagonalizable), (6) Special cases: symmetric matrices are always diagonalizable with orthogonal eigenvectors. <strong>Boundaries:</strong> Aim for 700-900 words. Focus on understanding the power of diagonalization: it\'s about finding the "right" coordinate system where the transformation becomes simple. Use analogies: it\'s like choosing to measure a rectangle\'s dimensions along its sides rather than at an angle—the natural coordinates make everything simpler. Connect to upcoming applications in ML. <strong>Deliverable:</strong> A clear, insightful document that explains why diagonalization matters and previews its applications. Should build intuition about finding natural coordinate systems. <strong>Verification:</strong> Document clearly explains the concept and its importance. Includes geometric interpretation. Connects to ML applications. No errors. Could someone read this and understand why eigendecomposition is a fundamental tool in data science? Common pitfall: explaining the formula without conveying why it\'s useful—emphasize the power of simplification. Success check: Can you explain why PCA works: it finds the eigenvectors of the covariance matrix, which are the directions of maximum variance, and transforms data into these coordinates where dimensions are uncorrelated. Your document should provide the foundation for this understanding. Diagonalization is about finding simplicity: in the right basis, complex transformations become simple. Estimated time: 30 minutes for clear, conceptual writing. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Diagonalizable_matrix" target="_blank" rel="noopener">Wikipedia: Diagonalizable Matrix</a>, <a href="https://www.youtube.com/watch?v=PFDu9oVAE-g" target="_blank" rel="noopener">3Blue1Brown: Eigenvectors</a>, <a href="https://math.stackexchange.com/questions/3053388/intuition-behind-diagonalization" target="_blank" rel="noopener">Math StackExchange: Intuition Behind Diagonalization</a>' }
          ],
          reflectionPrompt: 'Why does diagonalization make matrix powers easy to compute?'
        },
        {
          globalDay: 13,
          week: 2,
          title: 'Abstract Vector Spaces & Basis',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Watch 3Blue1Brown Ep. 11 "Abstract vector spaces"', estMinutes: 16, resourceLinks: ['https://www.youtube.com/watch?v=TgKwz5Ikpc8'], details: '<strong>Action:</strong> Watch <a href="https://www.youtube.com/watch?v=TgKwz5Ikpc8" target="_blank" rel="noopener">3Blue1Brown Episode 11: Abstract vector spaces</a> (16 minutes), discovering that "vectors" aren\'t just arrows—they\'re anything that satisfies certain axioms (addition and scalar multiplication with specific properties). Functions, polynomials, even audio signals can be vectors! <strong>Boundaries:</strong> Pay attention to the axioms that define a vector space: closure under addition and scalar multiplication, associativity, commutativity, existence of zero vector and additive inverses, distributive properties. The key insight: if something satisfies these rules, all linear algebra tools apply—dot products, linear transformations, eigenvalues, everything. Watch Grant explore polynomial space and function space as examples. This abstraction is powerful: it means linear algebra applies far beyond geometric arrows. <strong>Deliverable:</strong> Understanding that "vector space" is an abstract structure defined by axioms, and many mathematical objects qualify as vectors under this definition. <strong>Verification:</strong> Can you explain why polynomials form a vector space? Why functions do? What are the "vectors," "addition," and "scalar multiplication" in these spaces? Can you verify the axioms for a non-standard example? Common pitfall: staying too concrete, thinking vectors must be arrows or lists of numbers. Success check: Understand that a polynomial like 3x² + 2x - 1 is a "vector" in polynomial space, and all linear algebra concepts apply. This abstraction is crucial for ML: feature spaces, function spaces, kernel methods, and reproducing kernel Hilbert spaces all rely on this generalization. Neural networks transform input spaces (vectors) to output spaces (vectors), and the theory applies regardless of what those "vectors" represent. Estimated time: 16 minutes, may want to watch twice to absorb the abstraction. <strong>Resources:</strong> <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown Linear Algebra Series</a>, <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/abstract-vector-spaces/v/vector-space-introduction" target="_blank" rel="noopener">Khan Academy: Abstract Vector Spaces</a>' },
            { label: 'Complete Khan Academy: vector spaces exercises', estMinutes: 60, details: '<strong>Action:</strong> Work through <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/abstract-vector-spaces" target="_blank" rel="noopener">Khan Academy abstract vector spaces</a> exercises, learning to: (1) Verify axioms for different structures (do they form vector spaces?), (2) Identify basis vectors for different spaces (standard polynomial basis: 1, x, x², ...), (3) Understand subspaces (sets within a vector space that are themselves vector spaces), (4) Apply linear algebra concepts to non-geometric contexts. <strong>Boundaries:</strong> Practice with diverse examples: polynomial spaces, function spaces, solution spaces of differential equations, even matrix spaces. For each, identify: What are the "vectors"? What is "addition"? What is "scalar multiplication"? Does it satisfy all axioms? Don\'t rush—this abstraction takes time to internalize. Work through problems verifying axioms systematically. <strong>Deliverable:</strong> Ability to recognize and work with abstract vector spaces. Understanding of subspaces and basis concepts in non-standard contexts. <strong>Verification:</strong> Can you verify that the set of all polynomials of degree ≤2 forms a vector space? Can you identify a basis for this space (e.g., {1, x, x²})? Can you explain why the set of all invertible 2×2 matrices does NOT form a vector space (zero matrix isn\'t invertible)? Common pitfall: mechanically checking axioms without understanding the structure\'s meaning. Success check: Understand that functions form a vector space where "addition" is pointwise addition: (f+g)(x) = f(x) + g(x), and "scalar multiplication" is c·f where (c·f)(x) = c·f(x). Verify this satisfies all vector space axioms. This abstraction enables Fourier analysis (functions as vectors in a space with sine/cosine basis), kernel methods in ML (implicit feature spaces), and functional analysis foundations for neural networks. Estimated time: 60 minutes for conceptual understanding and practice. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/abstract-vector-spaces" target="_blank" rel="noopener">Khan Academy: Vector Spaces</a>, <a href="https://en.wikipedia.org/wiki/Vector_space#Definition" target="_blank" rel="noopener">Wikipedia: Vector Space Definition</a>' },
            { label: 'Create notebooks/foundations/day13_vector_spaces.ipynb', estMinutes: 90, details: '<strong>Action:</strong> Create a comprehensive Jupyter notebook (notebooks/foundations/day13_vector_spaces.ipynb) exploring abstract vector spaces: (1) Demonstrating polynomial space with basis {1, x, x²,...}, (2) Representing polynomials as coefficient vectors, (3) Showing addition and scalar multiplication in polynomial space, (4) Exploring function spaces (e.g., continuous functions on [0,1]), (5) Demonstrating that matrix spaces (all n×n matrices) form vector spaces, (6) Implementing inner products for abstract spaces (e.g., function inner product via integration). <strong>Boundaries:</strong> Make the abstraction concrete through code. For polynomials, use NumPy polynomial class or represent as coefficient arrays. Show that operations in abstract space correspond to familiar operations on representations. Create visualizations: plot polynomial "vectors" and their sums, show function addition, visualize subspaces. Include at least 3 different vector space examples with clear demonstrations that axioms hold. <strong>Deliverable:</strong> A tutorial-style notebook that makes abstract vector spaces concrete through code examples. Should demonstrate multiple non-standard vector spaces and operations within them. <strong>Verification:</strong> Notebook runs without errors. Code correctly implements operations in abstract spaces. Visualizations help build intuition. Examples clearly demonstrate vector space axioms. Markdown explanations connect abstract concepts to concrete implementations. Common pitfall: staying too abstract without concrete examples—use code to make the abstraction tangible. Success check: Your notebook should demonstrate that polynomials p(x) = 2x²+3x+1 and q(x) = x²-x+2 can be added like vectors (coefficient-wise), and show this geometrically by plotting. Someone should understand abstract vector spaces better after working through your examples. Estimated time: 90 minutes for implementation, visualization, and documentation. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/routines.polynomials.polynomial.html" target="_blank" rel="noopener">NumPy Polynomials</a>, <a href="https://scipy.org/

/" target="_blank" rel="noopener">SciPy</a>, <a href="https://matplotlib.org/stable/tutorials/index.html" target="_blank" rel="noopener">Matplotlib Tutorials</a>' },
            { label: 'Explore polynomial space as vector space example', estMinutes: 45, details: '<strong>Action:</strong> Deep dive into polynomial space as a concrete example of an abstract vector space. Work with the space P₂ of all polynomials of degree ≤2: (1) Identify the "vectors" (polynomials like 3x²+2x-1), (2) Define addition (add coefficients), (3) Define scalar multiplication (scale coefficients), (4) Verify all vector space axioms hold, (5) Identify a basis {1, x, x²}, (6) Represent polynomials as coordinate vectors [a₀, a₁, a₂], (7) Compute an inner product (e.g., integrate product over [0,1]), (8) Find orthogonal polynomials using Gram-Schmidt process. <strong>Boundaries:</strong> Be thorough—this is your concrete example to deeply understand abstract spaces. Verify each axiom explicitly: commutativity of addition, associativity, distributive property, etc. Show that changing from polynomial representation to coefficient vector representation is a coordinate system choice (isomorphism). Demonstrate that all linear algebra tools apply: linear combinations, span, linear independence, change of basis. <strong>Deliverable:</strong> Complete exploration of polynomial space demonstrating it\'s a legitimate vector space where linear algebra fully applies. Should include axiom verification, basis identification, coordinate representations, and inner product calculations. <strong>Verification:</strong> All axioms verified with examples. Basis correctly identified and proven linearly independent. Coordinate representations work correctly. Inner product calculations are accurate. Can you apply concepts like projection and orthogonality in polynomial space? Common pitfall: not actually verifying the axioms, just assuming they hold. Success check: Show that polynomials p(x)=x and q(x)=x² are orthogonal under the inner product ⟨p,q⟩ = ∫₀¹ p(x)q(x)dx (compute and show result is zero). Understanding polynomial spaces is preparation for understanding feature spaces in kernel methods and function approximation in neural networks. Estimated time: 45 minutes for thorough exploration and verification. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Polynomial_space" target="_blank" rel="noopener">Wikipedia: Polynomial Space</a>, <a href="https://mathworld.wolfram.com/OrthogonalPolynomials.html" target="_blank" rel="noopener">Wolfram: Orthogonal Polynomials</a>' },
            { label: 'Write docs/notes/day13_abstract_spaces.md', estMinutes: 25, details: '<strong>Action:</strong> Write a focused markdown document (docs/notes/day13_abstract_spaces.md) explaining abstract vector spaces and why the abstraction matters. Cover: (1) The axioms defining vector spaces (list them clearly), (2) Examples beyond geometric vectors: polynomials, functions, matrices, solution sets, (3) Why this abstraction is powerful: any theorem proven for abstract vector spaces applies to ALL these examples, (4) Connection to ML: feature spaces (data points as vectors in ℝⁿ), kernel methods (implicit high-dimensional spaces), function approximation (neural networks as function space transformations), (5) The insight: linear algebra is about structure, not specific representations. <strong>Boundaries:</strong> Aim for 500-600 words. Make this conceptual and motivational. Explain that the power of abstraction is generality: prove something once for abstract vectors, apply it everywhere. Use accessible language—avoid excessive formalism while maintaining accuracy. <strong>Deliverable:</strong> A clear explanation of abstract vector spaces that builds appreciation for the generalization and previews ML connections. <strong>Verification:</strong> Document clearly explains axioms and provides diverse examples. Motivates the abstraction convincingly. Connects to ML applications. No errors. Would someone understand why "abstract" vector spaces are worth studying? Common pitfall: listing axioms without explaining why this abstraction matters. Success check: Explain that kernel trick in SVMs works by implicitly mapping data into a high-dimensional feature space (abstract vector space) where linear methods become powerful. Your document should help someone understand why this mathematical abstraction enables practical ML techniques. Vector spaces are the fundamental structure of linear algebra; understanding them abstractly unlocks their power. Estimated time: 25 minutes for clear, motivational writing. <strong>Resources:</strong> <a href="https://en.wikipedia.org/wiki/Vector_space" target="_blank" rel="noopener">Wikipedia: Vector Space</a>, <a href="https://www.youtube.com/watch?v=TgKwz5Ikpc8" target="_blank" rel="noopener">3Blue1Brown: Abstract Vector Spaces</a>' }
          ],
          reflectionPrompt: 'How does thinking of functions as vectors help in ML?'
        },
        {
          globalDay: 14,
          week: 2,
          title: 'Week 2 Review & Linear Algebra Consolidation',
          priority: 'MEDIUM',
          tasks: [
            { label: 'Review all Week 2 notebooks (eigen focus)', estMinutes: 75, details: '<strong>Action:</strong> Systematically review all Week 2 materials with emphasis on eigenvalue concepts (Days 8-13). Open each notebook, re-run all cells to ensure they still work, review visualizations, read through notes. Focus on: dot products/projections, cross products, change of basis, eigenvalues/eigenvectors, eigendecomposition, abstract vector spaces. <strong>Boundaries:</strong> This is active review—test your understanding by trying to explain concepts without looking at notes first, then verify. Pay special attention to eigenvalue topics since they\'re conceptually dense. For each day, ask: What was the main concept? How does it connect to other topics? Where will I use this in ML? Spend extra time on areas that felt difficult during the week. Re-work key problems to verify fluency. <strong>Deliverable:</strong> Solid understanding of all Week 2 concepts with eigenvalues/eigenvectors as the centerpiece. Clear mental model of how topics interconnect (e.g., eigendecomposition uses change of basis, abstract spaces show where linear algebra applies). <strong>Verification:</strong> Can you explain each major topic from Week 2 without notes? Can you solve representative problems from each day? Do you see the connections between topics? Are there any remaining confusions that need addressing before Week 3? Common pitfall: passive re-reading without active testing of understanding. Success check: Explain the relationship between these Week 2 concepts: eigenvectors are special directions (Day 11), eigendecomposition is changing to eigenvector basis (Day 12, using Day 10\'s change of basis), and this applies beyond arrows because vectors are abstract (Day 13). Can you articulate these connections? Eigenvalues will reappear throughout your ML journey—in PCA, spectral clustering, graph algorithms, optimization analysis, RNN dynamics—so ensure solid understanding now. Estimated time: 75 minutes for thorough review across all days. <strong>Resources:</strong> Your Week 2 notebooks and notes, <a href="https://www.3blue1brown.com/topics/linear-algebra" target="_blank" rel="noopener">3Blue1Brown playlist for quick visual review</a>' },
            { label: 'Solve 10 practice problems on eigenvalues/eigenvectors', estMinutes: 90, details: '<strong>Action:</strong> Complete 10 substantial practice problems focusing on eigenvalues and eigenvectors to build mastery: (1-2) Find eigenvalues and eigenvectors for 2×2 matrices by hand, (3-4) Verify eigendecompositions: given A, P, D, check if A=PDP⁻¹, (5-6) Compute matrix powers using eigendecomposition, (7) Diagonalize a symmetric matrix and verify eigenvectors are orthogonal, (8) Determine if a given matrix is diagonalizable, (9) Find eigenvalues for a 3×3 matrix, (10) Application problem (Markov chain long-run behavior or Fibonacci via matrix powers). <strong>Boundaries:</strong> Choose challenging problems—this is mastery practice, not review. Work independently; only check solutions after completing your attempt. Show all work: characteristic polynomial, solving for eigenvalues, finding eigenvectors, verification steps. For any mistakes, understand exactly where you went wrong and what concept needs reinforcement. Time yourself on some problems to build fluency. <strong>Deliverable:</strong> 10 complete problem solutions demonstrating eigenvalue/eigenvector mastery. Should include a mix of computational, conceptual, and application problems. <strong>Verification:</strong> Aim for 90%+ accuracy. For computational problems, verify answers (check Av=λv, verify decompositions). For conceptual problems, ensure your reasoning is sound. Can you solve eigenvalue problems confidently and relatively quickly? Are any types of problems still difficult? Common pitfall: doing problems mechanically without learning from mistakes. Success check: You should comfortably find eigenvalues and eigenvectors for most 2×2 matrices in 5-10 minutes, and understand when eigendecomposition is possible and useful. Problems should reveal any remaining gaps in understanding—if you struggle with certain types, that indicates areas needing more study. This practice cements computational fluency essential for implementing ML algorithms that use eigenvectors (PCA, spectral methods). Estimated time: 90 minutes for focused problem-solving. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/linear-algebra/alternate-bases/eigen-everything" target="_blank" rel="noopener">Khan Academy eigenvalue exercises</a>, <a href="https://tutorial.math.lamar.edu/Problems/LA/EigenStuff.aspx" target="_blank" rel="noopener">Paul\'s Online Math: Eigenvalue Problems</a>' },
            { label: 'Write docs/weekly_logs/week_02.md', estMinutes: 45, details: '<strong>Action:</strong> Write a comprehensive weekly log for Week 2 (docs/weekly_logs/week_02.md) reflecting on your learning journey. Include: (1) Main topics covered (dot products, cross products, change of basis, eigenvalues/eigenvectors, eigendecomposition, diagonalization, abstract vector spaces), (2) Key insights and breakthrough moments (what clicked?), (3) Most challenging concepts and how you tackled them, (4) Eigenvalues deep dive—why they\'re important and how you understand them now, (5) Artifacts created (notebooks, visualizations, problem sets), (6) Skills developed (geometric intuition, computational fluency with eigenvalues, abstraction), (7) Connections between topics you discovered, (8) Time management and study approach reflections, (9) Plans for Week 3 (calculus preview). <strong>Boundaries:</strong> Write 700-900 words in first person. Be honest about challenges and successes. Include specific examples: particular problems that were hard, visualizations that helped understanding, moments when concepts connected. This is your learning narrative, not just a checklist. Reflect on meta-learning: what study techniques worked well? What would you adjust? <strong>Deliverable:</strong> A thoughtful, detailed weekly log capturing your complete Week 2 experience. Should read as a story of your learning, with struggles, insights, and growth. <strong>Verification:</strong> Log tells a coherent story of the week. Includes specific examples and genuine reflection. Shows both content learning and metacognitive awareness. Would future you find this log useful for remembering the week? Common pitfall: generic summaries without personal insight or specific examples. Success check: Your log should convey what it was actually like to learn eigenvalues—the initial confusion, the moment they clicked, why they matter. Rereading this in 6 months should transport you back to this week\'s experience and lessons. Reflective journaling strengthens learning by consolidating understanding and identifying patterns in how you learn best. Estimated time: 45 minutes for thoughtful writing. <strong>Resources:</strong> <a href="https://www.edutopia.org/article/powerful-benefits-reflective-journaling" target="_blank" rel="noopener">Reflective Journaling Benefits</a>, <a href="https://fs.blog/feynman-technique/" target="_blank" rel="noopener">Feynman Technique</a>' },
            { label: 'Update docs/questions/week_02.md', estMinutes: 20, details: '<strong>Action:</strong> Create or update your questions document for Week 2 (docs/questions/week_02.md). List: (1) Any concepts still unclear or confusing, (2) Questions that arose during learning (even if partially answered), (3) Connections you\'re curious about but haven\'t fully explored, (4) Topics you want to revisit or study more deeply. For each item, note: what you understand so far, what\'s unclear, what you\'ve tried to clarify it, and where you might find answers. <strong>Boundaries:</strong> Be specific and honest. Instead of "eigenvalues are confusing," write "I understand how to compute eigenvalues algebraically but don\'t fully grasp why the characteristic polynomial det(A-λI)=0 works geometrically—need to explore the connection between determinant zero and eigenvalue definition." Well-formulated questions are halfway to answers. Include questions about applications: "How exactly do eigenvalues determine neural network training stability?" <strong>Deliverable:</strong> A structured list of 3-10 specific, well-formulated questions or areas needing clarification. Should be actionable—you or a mentor could work on answering them. <strong>Verification:</strong> Questions are specific and clear. Each includes context about current understanding. Questions are neither too trivial nor too broad. Could you give this list to a mentor and have a productive discussion? Common pitfall: being vague or not writing down confusion because it seems "basic"—document everything unclear! Success check: Your questions should be specific enough to guide further study. Example: "Why do symmetric matrices always have orthogonal eigenvectors? I know it\'s true from practice, but what\'s the geometric or algebraic reason?" Maintaining a questions document helps identify knowledge gaps and guides focused study. Week 2 was conceptually dense; it\'s normal to have lingering questions. Estimated time: 20 minutes for reflection and documentation. <strong>Resources:</strong> <a href="https://stackoverflow.com/help/how-to-ask" target="_blank" rel="noopener">How to Ask Good Questions</a>' },
            { label: 'Post week 2 progress in HF Discord', estMinutes: 15, details: '<strong>Action:</strong> Share your Week 2 learning journey in the <a href="https://discord.gg/hugging-face-879548962464493619" target="_blank" rel="noopener">Hugging Face Discord</a>. Post in #introductions or relevant learning channel: (1) Brief summary of Week 2 topics (eigenvalues focus), (2) One cool insight or visualization you created, (3) One challenge you overcame or are working through, (4) A question for the community (about eigenvalues, ML applications, or learning strategies), (5) Your Week 3 plans. Keep it conversational and genuine—aim for 200-300 words or a short thread. <strong>Boundaries:</strong> Share authentically without overselling or underselling your progress. Include a visualization or code snippet if possible (e.g., an eigenvalue animation or interesting notebook output). Engage with any responses—learning in public builds community and accountability. Don\'t just post and disappear; participate in the discussion your post generates. <strong>Deliverable:</strong> A genuine, engaging post sharing your learning journey and inviting community interaction. Should represent your authentic experience and contribute to the community. <strong>Verification:</strong> Post is live and well-received. Did you get responses, advice, or encouragement? Did sharing help clarify your own understanding (teaching effect)? Did you make any new connections or learn from others\' responses? Common pitfall: waiting until you\'re "expert enough" to share—share the learning process itself, including struggles! Success check: Your post should invite engagement. Example: "Week 2 down! Deep dove into eigenvalues—they\'re like the \'natural frequencies\' of a transformation. Created this visualization [link] showing how eigenvectors stay on their span. Still wrapping my head around why this matters for PCA—any intuitive explanations?" Learning in public builds accountability, gets feedback, creates a network, and reinforces understanding through teaching. It also documents your journey. Estimated time: 15 minutes for composing and posting. <strong>Resources:</strong> <a href="https://www.swyx.io/learn-in-public/" target="_blank" rel="noopener">Learn in Public Philosophy</a>, <a href="https://discord.gg/hugging-face-879548962464493619" target="_blank" rel="noopener">Hugging Face Discord</a>' }
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
          globalDay: 44,
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
          globalDay: 51,
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
          globalDay: 72,
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
          globalDay: 121,
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
          globalDay: 128,
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
          globalDay: 156,
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
          globalDay: 198,
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
          globalDay: 233,
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
          globalDay: 254,
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
          globalDay: 282,
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
          globalDay: 289,
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
          globalDay: 310,
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
