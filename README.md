# AI & Machine Learning Mastery Plan

**Version 4** — LLM-Focused Learning Roadmap  
**Student:** DovJNash (9th grade, Israel)  
**Duration:** 12 months (52 weeks)  
**Last Updated:** 2025-11-08

## About This Site

This is a comprehensive 12-month learning plan focused on mastering Large Language Model (LLM) systems from fundamentals to production deployment. The plan covers:

- **Foundations:** Mathematics, Python, and classical machine learning
- **Deep Learning:** PyTorch, CNNs, training stability, and optimization
- **Transformers & LLMs:** Attention mechanisms, GPT architecture, pretraining
- **Advanced Topics:** Tokenization (BPE), scaling laws, PEFT (LoRA/QLoRA)
- **Production:** FastAPI serving, Docker, safety filters, inference optimization
- **Portfolio:** Bilingual (Hebrew/English) blog posts and public demos

## Site Structure

This is a **static site** with **multi-page architecture** and no build step required:

- **`/index.html`** — Main page with high-level plan overview, outcomes, tooling, and timeline
- **`/phases/*.html`** — 14 individual phase pages with detailed daily task breakdowns
- **`/assets/css/main.css`** — Styles for layout, typography, components, and responsive design
- **`/assets/js/main.js`** — JavaScript for navigation, checkbox persistence, and progress tracking
- **`/.nojekyll`** — Disables Jekyll processing on GitHub Pages
- **`/CNAME`** — Custom domain configuration (dovnash.me)

### Phase Pages

Each of the 14 phases has its own dedicated HTML page with:
- Day-by-day task breakdown
- Interactive checkboxes for each task
- Progress tracking with completion percentage
- Control buttons (Mark All, Clear All, Export Status)
- localStorage persistence across browser sessions

**Phase Files:**
1. `/phases/foundations.html` — Math + Python-for-Data (42 days)
2. `/phases/buffer-setup.html` — Buffer & Structure Setup (7 days)
3. `/phases/classical-ml.html` — Classical ML Fundamentals (21 days)
4. `/phases/deep-learning.html` — Deep Learning Core (49 days)
5. `/phases/nlp-warmup.html` — Buffer & NLP Warmup (7 days)
6. `/phases/transformers.html` — Transformer Fundamentals (28 days)
7. `/phases/gpt-from-scratch.html` — GPT from Scratch (42 days)
8. `/phases/tokenizer-scaling.html` — BPE Tokenizer + Scaling Laws (35 days)
9. `/phases/serving-safety.html` — Ethics, Safety & MVP Serving (21 days)
10. `/phases/peft-optimization.html` — PEFT & Inference Optimization (28 days)
11. `/phases/buffer-refactor.html` — Buffer & Refactoring (7 days)
12. `/phases/mlops.html` — MLOps Essentials (21 days)
13. `/phases/capstone.html` — Capstone Project (28 days)
14. `/phases/portfolio.html` — Portfolio & Polish (28 days)

## Progress Tracking

### How It Works

The site uses **localStorage** to persist task completion across browser sessions:

- Each task has a unique ID like `llmPlan_tbl1_day1_task1`
- When you check a task, it's saved to localStorage
- Progress is automatically calculated and displayed
- Your progress persists even after closing the browser

### localStorage Key Pattern

```
llmPlan_{tableId}_day{dayNumber}_task{taskNumber}
```

Examples:
- `llmPlan_tbl1_day1_task1` — Phase 1, Day 1, Task 1
- `llmPlan_tbl4_day15_task2` — Phase 4, Day 15, Task 2
- `llmPlan_tbl14_day28_task3` — Phase 14, Day 28, Task 3

### Reset Progress

To reset all progress:
1. Visit the main page (`/index.html`)
2. Scroll to the "Daily Breakdown" section
3. Click the "Reset All Progress" button
4. Confirm the action

This will clear all `llmPlan_tbl*` keys from localStorage.

## How to Update Content

### Editing Main Page Sections

High-level content is in `/index.html`. Each section is wrapped in a `<section>` tag with an `id` attribute:

```html
<section id="section-name" class="content-section">
  <div class="section-header">
    <h2>Section Title</h2>
    <button class="anchor-link" aria-label="Copy link to this section" title="Copy link">#</button>
  </div>
  <!-- Content here -->
</section>
```

To update a section:

1. Find the section by its `id` attribute (e.g., `id="outcomes"` for Outcomes)
2. Edit the HTML content inside the section
3. Maintain semantic HTML structure (`<h3>`, `<ul>`, `<p>`, etc.)
4. Commit and push changes — GitHub Pages will automatically deploy

### Editing Phase Pages

Each phase page in `/phases/*.html` has the same structure. To add or modify daily tasks:

1. Open the phase file you want to edit (e.g., `/phases/foundations.html`)
2. Find the `<tbody>` section containing all day rows
3. Each day is a `<tr class="day-row" data-day="X">` element

**Example Day Row:**

```html
<tr class="day-row" data-day="1">
  <td class="day-cell">
    <strong>1</strong>
  </td>
  <td>Week 1</td>
  <td class="tasks-cell">
    <div class="task-item">
      <input type="checkbox" id="tbl1_day1_task1" data-task-id="tbl1_day1_task1">
      <label for="tbl1_day1_task1">Complete DataCamp: Intro to Python - Chapter 1</label>
    </div>
    <div class="task-item">
      <input type="checkbox" id="tbl1_day1_task2" data-task-id="tbl1_day1_task2">
      <label for="tbl1_day1_task2">Setup development environment</label>
    </div>
    <div class="task-item">
      <input type="checkbox" id="tbl1_day1_task3" data-task-id="tbl1_day1_task3">
      <label for="tbl1_day1_task3">Create first Python notebook</label>
    </div>
  </td>
  <td class="details-cell">
    <strong>Deliverable:</strong> Python basics notebook<br>
    <strong>Priority:</strong> <span class="pri-high">High</span>
  </td>
</tr>
```

**Key Points:**
- Each checkbox must have a unique `id` and `data-task-id` following the pattern: `{tableId}_day{N}_task{M}`
- The `label` `for` attribute must match the checkbox `id`
- Priority badges: `pri-high` (red), `pri-med` (amber), `pri-low` (gray)

### Adding New Tasks to a Day

To add a new task to an existing day:

1. Copy an existing `<div class="task-item">` block
2. Update the checkbox `id` and `data-task-id` (increment task number)
3. Update the `label` `for` attribute to match the new id
4. Change the label text to describe the new task

Example adding a 4th task:

```html
<div class="task-item">
  <input type="checkbox" id="tbl1_day1_task4" data-task-id="tbl1_day1_task4">
  <label for="tbl1_day1_task4">Write unit tests for Python functions</label>
</div>
```

### Adding a New Day

To add a new day to a phase:

1. Copy an entire `<tr class="day-row" data-day="X">` block
2. Update the `data-day` attribute with the new day number
3. Update all checkbox IDs to use the new day number
4. Update task labels and deliverable
5. Choose appropriate priority badge

### Adding a New Section

1. Copy an existing `<section>` block in `index.html`
2. Give it a unique `id` (e.g., `id="new-section"`)
3. Update the content
4. Add a navigation link in the header:
   ```html
   <li><a href="#new-section">New Section</a></li>
   ```

### Styling Components

The site uses several pre-built components defined in `/assets/css/main.css`:

- **Cards:** `<div class="card">` — Container with border and shadow
- **Card Grid:** `<div class="card-grid">` — Responsive grid of cards
- **Callouts:** `<div class="callout callout-info">` — Highlighted information boxes
  - Types: `callout-info`, `callout-success`, `callout-warning`
- **Timeline:** `<div class="timeline">` with `<div class="timeline-item">` — Visual timeline
- **Code Blocks:** `<pre><code>` — Formatted code with syntax highlighting background
- **Tables:** Standard `<table>` with responsive styling

### Color Palette

The site uses a blue-to-purple gradient theme:

- **Primary Blue:** `#2563eb`
- **Primary Purple:** `#7c3aed`
- **Slate Neutrals:** `#f8fafc` (light) to `#020617` (dark)

Dark mode is automatically supported via `prefers-color-scheme: dark`.

## Typography

- **Font:** Inter (via Google Fonts) with system UI fallback
- **Headings:** Bold, clear hierarchy
- **Body Text:** Comfortable line-height (1.7) for readability
- **Code:** Monospace font family with styled background

## Responsive Design

The site is fully responsive and tested at:

- **Desktop:** ≥1200px
- **Tablet:** 768px–1199px
- **Mobile:** 375px–767px
- **Small Mobile:** ≤375px

Mobile navigation collapses into a hamburger menu.

## Accessibility

The site follows accessibility best practices:

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link for keyboard navigation
- Proper heading hierarchy
- ARIA labels on interactive elements
- Sufficient color contrast (WCAG AA compliant)
- Focus indicators on interactive elements

## Local Development

To preview the site locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. No build step or server required (it's static HTML/CSS/JS)

For live reload during development, use any simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server package)
npx http-server

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

## Deployment

The site is automatically deployed via **GitHub Pages** when you push to the repository:

1. Make changes to `index.html`, CSS, or JS files
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push origin main`
4. GitHub Pages will rebuild and deploy automatically
5. Visit [https://dovnash.me](https://dovnash.me) to see changes (may take 1–2 minutes)

The `.nojekyll` file ensures GitHub Pages serves the files directly without processing.

## Maintenance Checklist

### Weekly
- [ ] Update progress in relevant sections
- [ ] Add new entries to weekly logs (if tracking)
- [ ] Test anchor links and navigation

### Monthly
- [ ] Review and update timeline/milestones
- [ ] Check for broken links
- [ ] Verify mobile responsiveness

### As Needed
- [ ] Add new blog post links
- [ ] Update success criteria with actual results
- [ ] Add new sections for emerging topics

## Files Overview

```
DovJNash.github.io/
├── index.html              # Main overview page with phase grid
├── README.md               # This file (documentation)
├── CNAME                   # Custom domain (dovnash.me)
├── .nojekyll               # Disable Jekyll processing
├── .gitignore              # Git ignore rules
├── phases/                 # Phase-specific daily breakdown pages
│   ├── foundations.html           # Phase 1: Math + Python (42 days)
│   ├── buffer-setup.html          # Phase 2: Buffer & Setup (7 days)
│   ├── classical-ml.html          # Phase 3: Classical ML (21 days)
│   ├── deep-learning.html         # Phase 4: Deep Learning (49 days)
│   ├── nlp-warmup.html            # Phase 5: NLP Warmup (7 days)
│   ├── transformers.html          # Phase 6: Transformers (28 days)
│   ├── gpt-from-scratch.html      # Phase 7: GPT (42 days)
│   ├── tokenizer-scaling.html     # Phase 8: Tokenizer (35 days)
│   ├── serving-safety.html        # Phase 9: Serving (21 days)
│   ├── peft-optimization.html     # Phase 10: PEFT (28 days)
│   ├── buffer-refactor.html       # Phase 11: Refactor (7 days)
│   ├── mlops.html                 # Phase 12: MLOps (21 days)
│   ├── capstone.html              # Phase 13: Capstone (28 days)
│   └── portfolio.html             # Phase 14: Portfolio (28 days)
└── assets/
    ├── css/
    │   └── main.css        # All styles (includes phase page styles)
    └── js/
        └── main.js         # All JavaScript (navigation, localStorage, progress)
```

## Task Details Field

### Overview

The plan data structure (`assets/js/data/planPhases.js`) supports rich, paragraph-level task details that are displayed in collapsible sections. These details provide comprehensive guidance for each learning task.

### Details Field Structure

Each task can include a `details` field containing HTML-formatted educational content (120-220 words recommended):

```javascript
{
  label: 'Complete DataCamp "Introduction to NumPy" Chapter 1',
  estMinutes: 90,
  resourceLinks: ['https://datacamp.com', 'https://numpy.org/docs'],
  details: '<strong>Action:</strong> Work through the chapter... <strong>Boundaries:</strong> Stop after Chapter 1... <strong>Deliverable:</strong> Create a notebook... <strong>Verification:</strong> Run tests...'
}
```

### Required Components

Well-structured task details should include:

1. **Action** — What to do, how to approach it, key focus areas
2. **Boundaries** — What NOT to do, scope limitations, stopping points
3. **Deliverable** — Concrete artifacts to create (notebooks, docs, implementations)
4. **Verification** — Success criteria, self-tests, common pitfalls to avoid  
5. **Resources** — 2-4 linked references (DataCamp courses, documentation, papers, videos)

### Example Pattern (Week 1 Style)

```html
<strong>Action:</strong> [Detailed instructions on what to do and how]

<strong>Boundaries:</strong> [Clear scope limits and what not to do]

<strong>Deliverable:</strong> [Specific artifacts to create with file names]

<strong>Verification:</strong> [How to know you succeeded, common pitfalls]

Success check: [Specific test or self-assessment]
Estimated time: [Realistic time estimate]

<strong>Resources:</strong> <a href="[url]" target="_blank" rel="noopener">[Link Text]</a>
```

### UI Rendering

- Tasks with a `details` field show a "Show details" button
- Clicking toggles a collapsible section with the rich content
- `resourceLinks` array creates badge links (DataCamp, YouTube, Khan Academy, etc.)
- ARIA attributes ensure keyboard accessibility
- Details are lazy-loaded to keep DOM performant

### Adding Details to Tasks

1. Locate the task in `assets/js/data/planPhases.js`
2. Add a `details` property with HTML-formatted string
3. Optionally add `resourceLinks` array with URLs
4. Follow the Week 1 pattern for consistency (see Days 1-7 for examples)

### Best Practices

- **Length:** 120-220 words provides enough detail without overwhelming
- **Specificity:** Use concrete examples, file names, and commands
- **Resources:** Link to official docs, quality tutorials, and papers
- **Verification:** Include self-tests and success criteria
- **HTML:** Use `<strong>` for labels, `<a>` for links with `target="_blank" rel="noopener"`

### Coverage Status

- **Phase 1 Foundations (Days 1-42):** ✅ Complete with comprehensive details (≥120 words each)
  - Week 1 (Days 1-7): ✅ Complete (36 tasks)
  - Week 2 (Days 8-14): ✅ Complete
  - Week 3 (Days 15-22): ✅ Complete  
  - Week 4 (Days 23-28): ✅ Complete - Calculus for ML (convexity, GD variants), Probability (Bayes), Statistics (variance/entropy), Pandas & Plotting, ML Math Integration
  - Week 5 (Days 29-35): ✅ Complete - Linear Regression from scratch (normal eq + GD), L2 Regularization, PCA from scratch (SVD/eigendecomp), Distributions & Hypothesis Testing
  - Week 6 (Days 36-42): ✅ Complete - Foundations Capstone: LR achieving R² ≥ 0.90, PCA reconstruction demo, foundations_summary.md (≥5 pages), 20-question quiz (≥16/20)
- **Phase 2 Buffer & Setup (Days 43-49):** ✅ Complete with comprehensive details (≥120 words each)
  - Day 43: ✅ Pytest setup (failing→passing test, coverage basics)
  - Day 44: ✅ Black and pre-commit; formatting CI
  - Day 45: ✅ Deepnote migration checklist and environment parity
  - Day 46: ✅ Weekly logs process (templates and cadence)
  - Day 47: ✅ Repo structure audit & housekeeping (README sections, LICENSE)
  - Day 48: ✅ Buffer day plan with light tasks
  - Day 49: ✅ Week 7 review + readiness checklist for Classical ML
- **Remaining Phases:** Structure in place, ready for detail expansion following established pattern

## Browser Support

The site works in all modern browsers:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This learning plan and site content are personal and educational in nature. Feel free to use the site structure and code as inspiration for your own projects.

## Contact

- **GitHub:** [@DovJNash](https://github.com/DovJNash)
- **Site:** [https://dovnash.me](https://dovnash.me)

---

**Last Updated:** 2025-11-08  
**Version:** 4.0 (LLM-Focused)
