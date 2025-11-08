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

This is a **static site** with no build step required:

- **`/index.html`** — Single-page site with all 16 content sections
- **`/assets/css/main.css`** — Styles for layout, typography, components, and responsive design
- **`/assets/js/main.js`** — JavaScript for navigation, smooth scrolling, and scrollspy
- **`/.nojekyll`** — Disables Jekyll processing on GitHub Pages
- **`/CNAME`** — Custom domain configuration (dovnash.me)

## How to Update Content

### Editing Content Sections

All content is in `/index.html`. Each section is wrapped in a `<section>` tag with an `id` attribute:

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
├── index.html              # Main single-page site (all content)
├── README.md               # This file (documentation)
├── CNAME                   # Custom domain (dovnash.me)
├── .nojekyll               # Disable Jekyll processing
├── .gitignore              # Git ignore rules
└── assets/
    ├── css/
    │   └── main.css        # All styles
    └── js/
        └── main.js         # All JavaScript
```

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
