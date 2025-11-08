const PHASE_FOUNDATIONS = {
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
    };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHASE_FOUNDATIONS;
}
