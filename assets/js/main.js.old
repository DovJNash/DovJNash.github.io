// AI & Machine Learning Mastery Plan - Main JavaScript
// Single-page design with dynamic daily breakdown rendering

(function() {
  'use strict';

  // === PLAN Data Structure (Weeks 1-2) ===
  const PLAN = {
    week1: {
      id: 'week1',
      title: 'Week 1: Math + Python-for-Data Foundations',
      days: [
        {
          day: 1,
          globalDay: 1,
          title: 'Day 1: Environment Setup & Vectors Introduction',
          priority: 'HIGH',
          tasks: [
            { id: 'action1', label: 'Complete DataCamp "Introduction to NumPy" Chapter 1 only', type: 'action' },
            { id: 'video1', label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 1 "Vectors" (full episode)', type: 'action' },
            { id: 'setup', label: 'Run scripts/test_env_setup.py to verify Python environment', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day01_vectors_intro.ipynb with vector visualization', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day01_vectors_plot.png showing 2D/3D vector examples', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day01_vectors.md summarizing vectors as geometric objects', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to NumPy Ch.1', url: '#' },
            { name: '3Blue1Brown Ep.1', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs' },
            { name: 'Khan Academy: Vectors', url: '#' }
          ],
          outputs: ['notebooks/foundations/day01_vectors_intro.ipynb', 'artifacts/day01_vectors_plot.png', 'docs/notes/day01_vectors.md', 'scripts/test_env_setup.py (run successfully)'],
          verification: 'Environment script passes; notebook renders plots; notes explain vector magnitude and direction.',
          reflection: 'Consider: How do vectors differ from scalars? Why are they fundamental to ML?'
        },
        {
          day: 2,
          globalDay: 2,
          title: 'Day 2: Vector Operations & Community Intro',
          priority: 'HIGH',
          tasks: [
            { id: 'datacamp', label: 'Complete DataCamp "Introduction to NumPy" Chapter 2', type: 'action' },
            { id: 'video', label: 'Watch 3Blue1Brown Essence of Linear Algebra Ep. 2 "Linear combinations, span, and basis vectors"', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day02_vector_ops.ipynb with addition, scaling, dot product', type: 'deliverable' },
            { id: 'community', label: 'Join Hugging Face Discord and introduce yourself in #introductions', type: 'action' },
            { id: 'notes', label: 'Write docs/notes/day02_span.md explaining span and linear combinations', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to NumPy Ch.2', url: '#' },
            { name: '3Blue1Brown Ep.2', url: 'https://www.youtube.com/watch?v=k7RM-ot2NWY' }
          ],
          outputs: ['notebooks/foundations/day02_vector_ops.ipynb', 'docs/notes/day02_span.md'],
          verification: 'Notebook includes working examples of vector addition, scalar multiplication, and dot product with NumPy.',
          reflection: 'Post in HF Discord about your learning journey start.'
        },
        {
          day: 3,
          globalDay: 3,
          title: 'Day 3: Linear Combinations & Span',
          priority: 'HIGH',
          tasks: [
            { id: 'datacamp', label: 'Complete DataCamp "Introduction to NumPy" Chapter 3', type: 'action' },
            { id: 'khan', label: 'Complete Khan Academy linear algebra: vector intro and span pages', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day03_linear_combinations.ipynb exploring span', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day03_span_coverage.png visualizing 2D span', type: 'deliverable' },
            { id: 'questions', label: 'Start docs/questions/week_01.md with any unclear concepts', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to NumPy Ch.3', url: '#' },
            { name: 'Khan Academy: Vectors & Space', url: '#' }
          ],
          outputs: ['notebooks/foundations/day03_linear_combinations.ipynb', 'artifacts/day03_span_coverage.png', 'docs/questions/week_01.md'],
          verification: 'Visualization shows span of 2 vectors covering a plane; notes explain why 2 non-parallel vectors span R².',
          reflection: 'What happens when vectors are parallel? How does this relate to linear independence?'
        },
        {
          day: 4,
          globalDay: 4,
          title: 'Day 4: Matrix Basics & Transformations',
          priority: 'HIGH',
          tasks: [
            { id: 'video', label: 'Watch 3Blue1Brown Ep. 3 "Linear transformations and matrices"', type: 'action' },
            { id: 'khan', label: 'Complete Khan Academy: matrix intro and matrix-vector multiplication', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day04_matrices.ipynb with transformation examples', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day04_transformation.png showing rotation/scaling transformations', type: 'deliverable' },
            { id: 'notes', label: 'Add to docs/notes/day04_matrices.md explaining matrices as transformations', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.3', url: 'https://www.youtube.com/watch?v=kYB8IZa5AuE' },
            { name: 'Khan Academy: Matrices', url: '#' }
          ],
          outputs: ['notebooks/foundations/day04_matrices.ipynb', 'artifacts/day04_transformation.png', 'docs/notes/day04_matrices.md'],
          verification: 'Notebook applies 2×2 transformation matrices to vectors; visualization shows before/after.',
          reflection: 'Why is the column perspective for matrix-vector multiplication useful?'
        },
        {
          day: 5,
          globalDay: 5,
          title: 'Day 5: Matrix Multiplication & Composition',
          priority: 'HIGH',
          tasks: [
            { id: 'video', label: 'Watch 3Blue1Brown Ep. 4 "Matrix multiplication as composition"', type: 'action' },
            { id: 'datacamp', label: 'DataCamp: Intermediate Python - functions and loops (refresher)', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day05_mat_mult.ipynb with composition examples', type: 'deliverable' },
            { id: 'code', label: 'Implement matrix multiplication from scratch (no NumPy matmul)', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day05_composition.md on why order matters', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.4', url: 'https://www.youtube.com/watch?v=XkY2DOUCWMU' },
            { name: 'DataCamp: Intermediate Python', url: '#' }
          ],
          outputs: ['notebooks/foundations/day05_mat_mult.ipynb', 'docs/notes/day05_composition.md'],
          verification: 'From-scratch implementation matches NumPy results; notes explain AB ≠ BA in general.',
          reflection: 'Try composing rotation + scaling vs scaling + rotation. What changes?'
        },
        {
          day: 6,
          globalDay: 6,
          title: 'Day 6: Determinants & Inverses',
          priority: 'MEDIUM',
          tasks: [
            { id: 'video1', label: 'Watch 3Blue1Brown Ep. 5 "The determinant"', type: 'action' },
            { id: 'video2', label: 'Watch 3Blue1Brown Ep. 6 "Inverse matrices, column space and null space"', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day06_determinants.ipynb with det calculations', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day06_det_visual.png showing area scaling', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day06_determinants.md on geometric meaning', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.5', url: 'https://www.youtube.com/watch?v=Ip3X9LOh2dk' },
            { name: '3Blue1Brown Ep.6', url: 'https://www.youtube.com/watch?v=uQhTuRlWMxw' }
          ],
          outputs: ['notebooks/foundations/day06_determinants.ipynb', 'artifacts/day06_det_visual.png', 'docs/notes/day06_determinants.md'],
          verification: 'Notebook computes det for sample matrices; visualization shows how unit square transforms.',
          reflection: 'What does det=0 mean for invertibility? Why?'
        },
        {
          day: 7,
          globalDay: 7,
          title: 'Day 7: Week 1 Review & Reflection',
          priority: 'MEDIUM',
          tasks: [
            { id: 'review', label: 'Review all Week 1 notebooks and notes', type: 'action' },
            { id: 'questions', label: 'Update docs/questions/week_01.md with remaining questions', type: 'reflection' },
            { id: 'summary', label: 'Write docs/weekly_logs/week_01.md summarizing key learnings', type: 'deliverable' },
            { id: 'practice', label: 'Complete 5 practice problems from Khan Academy linear algebra', type: 'action' },
            { id: 'community', label: 'Post Week 1 progress update in HF Discord or Twitter', type: 'action' }
          ],
          resources: [{ name: 'Khan Academy Practice', url: '#' }],
          outputs: ['docs/weekly_logs/week_01.md', 'docs/questions/week_01.md (updated)'],
          verification: 'Weekly log is ≥300 words; questions list has ≥2 items.',
          reflection: 'What was hardest this week? What clicked? What still feels fuzzy?'
        }
      ]
    },
    week2: {
      id: 'week2',
      title: 'Week 2: Advanced Linear Algebra & Probability Intro',
      days: [
        {
          day: 8,
          globalDay: 8,
          title: 'Day 8: Dot Product & Duality',
          priority: 'HIGH',
          tasks: [
            { id: 'video', label: 'Watch 3Blue1Brown Ep. 7 "Dot products and duality"', type: 'action' },
            { id: 'khan', label: 'Complete Khan Academy: dot product and projections', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day08_dot_product.ipynb exploring orthogonality', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day08_projection.png showing vector projection', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day08_duality.md on dual interpretation of dot product', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.7', url: 'https://www.youtube.com/watch?v=LyGKycYT2v0' },
            { name: 'Khan Academy: Dot Product', url: '#' }
          ],
          outputs: ['notebooks/foundations/day08_dot_product.ipynb', 'artifacts/day08_projection.png', 'docs/notes/day08_duality.md'],
          verification: 'Notebook shows dot product = 0 for orthogonal vectors; projection formula implemented.',
          reflection: 'How does dot product relate to cosine similarity in ML?'
        },
        {
          day: 9,
          globalDay: 9,
          title: 'Day 9: Cross Product & 3D Geometry',
          priority: 'MEDIUM',
          tasks: [
            { id: 'video', label: 'Watch 3Blue1Brown Ep. 8 "Cross products"', type: 'action' },
            { id: 'khan', label: 'Complete Khan Academy: cross product intro', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day09_cross_product.ipynb with 3D examples', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day09_cross_3d.png showing perpendicular result', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day09_cross.md on right-hand rule', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.8', url: 'https://www.youtube.com/watch?v=eu6i7WJeinw' },
            { name: 'Khan Academy: Cross Product', url: '#' }
          ],
          outputs: ['notebooks/foundations/day09_cross_product.ipynb', 'artifacts/day09_cross_3d.png', 'docs/notes/day09_cross.md'],
          verification: 'Notebook computes cross product; 3D plot shows perpendicular result.',
          reflection: 'Cross product is less common in ML—when might it appear?'
        },
        {
          day: 10,
          globalDay: 10,
          title: 'Day 10: Eigenvalues & Eigenvectors Intro',
          priority: 'HIGH',
          tasks: [
            { id: 'video', label: 'Watch 3Blue1Brown Ep. 13 "Eigenvectors and eigenvalues"', type: 'action' },
            { id: 'khan', label: 'Complete Khan Academy: eigenvectors intro', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day10_eigen.ipynb with 2x2 examples', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day10_eigen_visual.png showing eigenvector direction preservation', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day10_eigen.md explaining "direction unchanged, only scaled"', type: 'reflection' }
          ],
          resources: [
            { name: '3Blue1Brown Ep.13', url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g' },
            { name: 'Khan Academy: Eigenvectors', url: '#' }
          ],
          outputs: ['notebooks/foundations/day10_eigen.ipynb', 'artifacts/day10_eigen_visual.png', 'docs/notes/day10_eigen.md'],
          verification: 'NumPy linalg.eig results match manual calculations for 2×2 matrix.',
          reflection: 'Why are eigenvalues critical for PCA and understanding matrix behavior?'
        },
        {
          day: 11,
          globalDay: 11,
          title: 'Day 11: Probability Basics',
          priority: 'HIGH',
          tasks: [
            { id: 'datacamp', label: 'DataCamp: Introduction to Statistics in Python - Chapter 1', type: 'action' },
            { id: 'khan', label: 'Khan Academy: Probability basics (sample spaces, events)', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day11_probability.ipynb with dice/coin simulations', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day11_prob_dist.png showing frequency distributions', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day11_probability.md on basic probability rules', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to Statistics', url: '#' },
            { name: 'Khan Academy: Probability', url: '#' }
          ],
          outputs: ['notebooks/foundations/day11_probability.ipynb', 'artifacts/day11_prob_dist.png', 'docs/notes/day11_probability.md'],
          verification: 'Simulation of 10,000 coin flips converges to ~50% heads.',
          reflection: 'How does probability connect to ML model uncertainty?'
        },
        {
          day: 12,
          globalDay: 12,
          title: 'Day 12: Random Variables & Distributions',
          priority: 'HIGH',
          tasks: [
            { id: 'datacamp', label: 'DataCamp: Introduction to Statistics in Python - Chapter 2', type: 'action' },
            { id: 'khan', label: 'Khan Academy: Random variables and probability distributions', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day12_distributions.ipynb with normal/uniform distributions', type: 'deliverable' },
            { id: 'artifact', label: 'Generate artifacts/day12_normal_dist.png showing Gaussian curve', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day12_distributions.md on mean, variance, std dev', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to Statistics Ch.2', url: '#' },
            { name: 'Khan Academy: Random Variables', url: '#' }
          ],
          outputs: ['notebooks/foundations/day12_distributions.ipynb', 'artifacts/day12_normal_dist.png', 'docs/notes/day12_distributions.md'],
          verification: 'Plot shows normal distribution with correct mean and std; code uses numpy.random.',
          reflection: 'Why is the normal distribution so common in ML?'
        },
        {
          day: 13,
          globalDay: 13,
          title: 'Day 13: Expectation & Variance',
          priority: 'MEDIUM',
          tasks: [
            { id: 'datacamp', label: 'DataCamp: Introduction to Statistics in Python - Chapter 3', type: 'action' },
            { id: 'khan', label: 'Khan Academy: Expected value and variance', type: 'action' },
            { id: 'notebook', label: 'Create notebooks/foundations/day13_expectation.ipynb calculating E[X] and Var[X]', type: 'deliverable' },
            { id: 'code', label: 'Implement expectation and variance from scratch (no .mean()/.var())', type: 'deliverable' },
            { id: 'notes', label: 'Write docs/notes/day13_expectation.md on why variance measures spread', type: 'reflection' }
          ],
          resources: [
            { name: 'DataCamp: Intro to Statistics Ch.3', url: '#' },
            { name: 'Khan Academy: Expectation', url: '#' }
          ],
          outputs: ['notebooks/foundations/day13_expectation.ipynb', 'docs/notes/day13_expectation.md'],
          verification: 'From-scratch calculations match NumPy; notebook explains formulas.',
          reflection: 'How do E[X] and Var[X] relate to model evaluation metrics?'
        },
        {
          day: 14,
          globalDay: 14,
          title: 'Day 14: Week 2 Review & Integration',
          priority: 'MEDIUM',
          tasks: [
            { id: 'review', label: 'Review all Week 2 notebooks and notes', type: 'action' },
            { id: 'questions', label: 'Create docs/questions/week_02.md with any unclear concepts', type: 'reflection' },
            { id: 'summary', label: 'Write docs/weekly_logs/week_02.md summarizing key learnings', type: 'deliverable' },
            { id: 'integration', label: 'Create notebooks/foundations/week_02_integration.ipynb connecting linear algebra + probability', type: 'deliverable' },
            { id: 'community', label: 'Post Week 2 progress update and one question to HF Discord or community', type: 'action' }
          ],
          resources: [{ name: 'Week 2 Review Materials', url: '#' }],
          outputs: ['docs/weekly_logs/week_02.md', 'docs/questions/week_02.md', 'notebooks/foundations/week_02_integration.ipynb'],
          verification: 'Weekly log is ≥300 words; integration notebook connects at least 2 concepts.',
          reflection: 'How do eigenvectors + probability both appear in PCA? Start thinking about connections.'
        }
      ]
    }
  };

  // === State Management ===
  let debounceTimer = null;

  // === Utility Functions ===
  function getTaskId(weekId, globalDay, taskIndex) {
    return `llmPlan.day.${globalDay}.task.${taskIndex}`;
  }

  function loadTaskState(taskId) {
    return localStorage.getItem(taskId) === 'true';
  }

  function saveTaskState(taskId, completed) {
    localStorage.setItem(taskId, completed.toString());
  }

  function debounce(func, wait) {
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(debounceTimer);
        func(...args);
      };
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(later, wait);
    };
  }

  function announceProgress(message) {
    const liveRegion = document.getElementById('progressLive');
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after 3 seconds
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 3000);
    }
  }

  // === Rendering Functions ===
  function renderDayCard(day, weekId) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.dataset.day = day.globalDay;
    
    const priorityBadgeClass = `pri-${day.priority.toLowerCase()}`;
    
    let tasksHtml = '';
    day.tasks.forEach((task, idx) => {
      const taskId = getTaskId(weekId, day.globalDay, idx);
      const isChecked = loadTaskState(taskId);
      tasksHtml += `
        <div class="task-row">
          <input type="checkbox" 
                 id="${taskId}" 
                 data-task-id="${taskId}"
                 ${isChecked ? 'checked' : ''}>
          <label for="${taskId}">${task.label}</label>
        </div>
      `;
    });
    
    let resourcesHtml = '';
    if (day.resources && day.resources.length > 0) {
      resourcesHtml = '<div class="pill-links">';
      day.resources.forEach(resource => {
        resourcesHtml += `<a href="${resource.url}" class="pill-link" target="_blank" rel="noopener">${resource.name}</a>`;
      });
      resourcesHtml += '</div>';
    }
    
    let outputsHtml = '';
    if (day.outputs && day.outputs.length > 0) {
      outputsHtml = '<ul class="artifact-list">';
      day.outputs.forEach(output => {
        outputsHtml += `<li>${output}</li>`;
      });
      outputsHtml += '</ul>';
    }
    
    card.innerHTML = `
      <div class="day-card-header">
        <div>
          <h3 class="day-card-title">Day ${day.day}: ${day.title}</h3>
          <span class="badge ${priorityBadgeClass}">${day.priority}</span>
        </div>
      </div>
      
      <div class="day-card-section">
        <h4>📋 Tasks</h4>
        ${tasksHtml}
      </div>
      
      ${day.resources ? `
        <div class="day-card-section">
          <h4>📚 Resources</h4>
          ${resourcesHtml}
        </div>
      ` : ''}
      
      ${day.outputs ? `
        <div class="day-card-section">
          <h4>📦 Outputs</h4>
          ${outputsHtml}
        </div>
      ` : ''}
      
      <div class="day-card-section">
        <h4>✅ Verification</h4>
        <p>${day.verification}</p>
      </div>
      
      <div class="day-card-section">
        <h4>💭 Reflection</h4>
        <p>${day.reflection}</p>
      </div>
    `;
    
    return card;
  }

  function renderWeekSection(week) {
    const section = document.createElement('div');
    section.className = 'week-section';
    section.dataset.weekId = week.id;
    
    const weekHeader = document.createElement('div');
    weekHeader.className = 'week-header';
    weekHeader.innerHTML = `
      <h3 class="week-title">${week.title}</h3>
      <span class="week-progress" id="week-${week.id}-progress">0%</span>
    `;
    section.appendChild(weekHeader);
    
    week.days.forEach(day => {
      const dayCard = renderDayCard(day, week.id);
      section.appendChild(dayCard);
    });
    
    return section;
  }

  function renderPhaseAccordion() {
    const accordion = document.createElement('div');
    accordion.className = 'phase-accordion';
    accordion.id = 'weeks-1-2-accordion';
    
    const header = document.createElement('div');
    header.className = 'phase-accordion-header';
    header.innerHTML = `
      <h2 class="phase-accordion-title">Weeks 1–2: Foundations (Days 1–14)</h2>
      <span class="phase-accordion-toggle">−</span>
    `;
    
    const content = document.createElement('div');
    content.className = 'phase-accordion-content';
    
    // Render both weeks
    content.appendChild(renderWeekSection(PLAN.week1));
    content.appendChild(renderWeekSection(PLAN.week2));
    
    accordion.appendChild(header);
    accordion.appendChild(content);
    
    // Toggle functionality
    header.addEventListener('click', () => {
      header.classList.toggle('collapsed');
      content.classList.toggle('collapsed');
    });
    
    return accordion;
  }

  // === Progress Calculation ===
  function computeGlobalProgress() {
    const allTaskKeys = [];
    
    // Collect all task IDs
    Object.keys(PLAN).forEach(weekKey => {
      const week = PLAN[weekKey];
      week.days.forEach(day => {
        day.tasks.forEach((task, idx) => {
          const taskId = getTaskId(week.id, day.globalDay, idx);
          allTaskKeys.push(taskId);
        });
      });
    });
    
    const totalTasks = allTaskKeys.length;
    const completedTasks = allTaskKeys.filter(key => loadTaskState(key)).length;
    const percent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Count completed days
    let completedDays = 0;
    Object.keys(PLAN).forEach(weekKey => {
      const week = PLAN[weekKey];
      week.days.forEach(day => {
        const dayTaskIds = day.tasks.map((task, idx) => getTaskId(week.id, day.globalDay, idx));
        const allDayTasksComplete = dayTaskIds.every(taskId => loadTaskState(taskId));
        if (allDayTasksComplete && dayTaskIds.length > 0) {
          completedDays++;
        }
      });
    });
    
    return { total: totalTasks, completed: completedTasks, percent, days: completedDays };
  }

  function computeWeekProgress(weekId) {
    const week = PLAN[weekId];
    if (!week) return 0;
    
    const allTaskIds = [];
    week.days.forEach(day => {
      day.tasks.forEach((task, idx) => {
        allTaskIds.push(getTaskId(week.id, day.globalDay, idx));
      });
    });
    
    const total = allTaskIds.length;
    const completed = allTaskIds.filter(id => loadTaskState(id)).length;
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  function updateGlobalProgress() {
    const progress = computeGlobalProgress();
    
    // Update stats
    const completedEl = document.getElementById('global-completed');
    const totalEl = document.getElementById('global-total');
    const daysEl = document.getElementById('global-days');
    
    if (completedEl) completedEl.textContent = progress.completed;
    if (totalEl) totalEl.textContent = progress.total;
    if (daysEl) daysEl.textContent = progress.days;
    
    // Update progress ring
    const ringText = document.getElementById('progress-ring-percent');
    const ringCircle = document.getElementById('progress-ring-value');
    
    if (ringText) ringText.textContent = `${progress.percent}%`;
    if (ringCircle) {
      const circumference = 2 * Math.PI * 90; // radius = 90
      const offset = circumference - (progress.percent / 100) * circumference;
      ringCircle.style.strokeDashoffset = offset;
    }
    
    // Update week progress
    Object.keys(PLAN).forEach(weekKey => {
      const weekPercent = computeWeekProgress(weekKey);
      const weekProgressEl = document.getElementById(`week-${weekKey}-progress`);
      if (weekProgressEl) {
        weekProgressEl.textContent = `${weekPercent}%`;
      }
    });
    
    // Announce to screen readers
    announceProgress(`Progress updated: ${progress.completed} of ${progress.total} tasks completed, ${progress.percent}%`);
  }

  const debouncedUpdateProgress = debounce(updateGlobalProgress, 300);

  // === Event Handlers ===
  function handleCheckboxChange(event) {
    const checkbox = event.target;
    if (checkbox.type === 'checkbox' && checkbox.dataset.taskId) {
      const taskId = checkbox.dataset.taskId;
      saveTaskState(taskId, checkbox.checked);
      debouncedUpdateProgress();
    }
  }

  function resetProgress() {
    const confirmed = confirm('Reset ALL progress? Type "RESET" in the next prompt to confirm.');
    if (!confirmed) return;
    
    const secondConfirm = prompt('Type RESET to confirm resetting all progress:');
    if (secondConfirm !== 'RESET') {
      alert('Reset cancelled.');
      return;
    }
    
    // Clear only llmPlan.* keys
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('llmPlan.')) {
        localStorage.removeItem(key);
      }
    });
    
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"][data-task-id]').forEach(cb => {
      cb.checked = false;
    });
    
    updateGlobalProgress();
    alert('All progress has been reset.');
  }

  function exportProgress() {
    const progress = computeGlobalProgress();
    
    const exportData = {
      exportDate: new Date().toISOString(),
      globalProgress: {
        totalTasks: progress.total,
        completedTasks: progress.completed,
        percent: progress.percent,
        daysComplete: progress.days
      },
      weeks: {}
    };
    
    Object.keys(PLAN).forEach(weekKey => {
      const week = PLAN[weekKey];
      const weekProgress = computeWeekProgress(weekKey);
      
      exportData.weeks[weekKey] = {
        title: week.title,
        progress: weekProgress,
        days: week.days.map(day => {
          const dayTaskIds = day.tasks.map((task, idx) => getTaskId(week.id, day.globalDay, idx));
          const completed = dayTaskIds.filter(id => loadTaskState(id)).length;
          const total = dayTaskIds.length;
          
          return {
            day: day.day,
            globalDay: day.globalDay,
            title: day.title,
            totalTasks: total,
            completedTasks: completed,
            percent: total > 0 ? Math.round((completed / total) * 100) : 0,
            complete: completed === total && total > 0
          };
        })
      };
    });
    
    // Download as JSON
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `llm-mastery-progress-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('Progress exported successfully!');
  }

  // === Sidebar & Scrollspy ===
  function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    const sidebarLinks = sidebar.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('.content-section[id]');
    
    if (sections.length === 0) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Smooth scrolling
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (history.pushState) {
              history.pushState(null, null, href);
            }
          }
        }
      });
    });
  }

  // === Anchor Links ===
  function initAnchorLinks() {
    const anchorLinks = document.querySelectorAll('.anchor-link');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.closest('.content-section').getAttribute('id');
        const url = window.location.origin + window.location.pathname + '#' + sectionId;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            const originalText = this.textContent;
            this.textContent = '✓';
            this.style.background = '#10b981';
            this.style.borderColor = '#10b981';
            this.style.color = 'white';
            
            setTimeout(() => {
              this.textContent = originalText;
              this.style.background = '';
              this.style.borderColor = '';
              this.style.color = '';
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy:', err);
          });
        }
      });
    });
  }

  // === Initialization ===
  function initPlan() {
    const dailyBreakdown = document.getElementById('dailyBreakdown');
    if (!dailyBreakdown) {
      console.error('dailyBreakdown container not found');
      return;
    }
    
    // Render the phase accordion with weeks 1-2
    const accordion = renderPhaseAccordion();
    dailyBreakdown.appendChild(accordion);
    
    // Add event delegation for checkboxes
    dailyBreakdown.addEventListener('change', handleCheckboxChange);
    
    // Initial progress update
    updateGlobalProgress();
    
    console.log('Daily breakdown initialized with Weeks 1-2');
  }

  function init() {
    // Initialize daily breakdown
    initPlan();
    
    // Initialize sidebar and scrollspy
    initSidebar();
    
    // Initialize anchor links
    initAnchorLinks();
    
    // Initialize control buttons
    const resetBtn = document.getElementById('reset-progress-btn');
    const exportBtn = document.getElementById('export-progress-btn');
    
    if (resetBtn) {
      resetBtn.addEventListener('click', resetProgress);
    }
    
    if (exportBtn) {
      exportBtn.addEventListener('click', exportProgress);
    }
    
    // Handle initial hash
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    
    // SVG gradient for progress ring
    const progressRing = document.querySelector('.progress-ring');
    if (progressRing) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', 'gradient');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');
      
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', '#2563eb');
      
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', '#7c3aed');
      
      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
      progressRing.insertBefore(defs, progressRing.firstChild);
    }
    
    console.log('AI & ML Mastery Plan (single-page) initialized');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
