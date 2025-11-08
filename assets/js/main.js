// AI & Machine Learning Mastery Plan - Main JavaScript
// Handles navigation, smooth scrolling, scrollspy, and mobile menu

(function() {
  'use strict';

  // === Mobile Navigation Toggle ===
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!navToggle || !mainNav) return;
    
    navToggle.addEventListener('click', function() {
      const isOpen = mainNav.classList.contains('open');
      mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', !isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    });
    
    // Close mobile nav when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target) && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // === Smooth Scrolling for Anchor Links ===
  function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors
        if (href === '#' || href === '#!') return;
        
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          
          // Smooth scroll to target
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
          
          // Focus the target for accessibility
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // === Scrollspy - Highlight Active Section in Nav ===
  function initScrollspy() {
    const sections = document.querySelectorAll('.content-section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const activeClass = 'active';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Remove active class from all links
          navLinks.forEach(link => {
            link.classList.remove(activeClass);
          });
          
          // Add active class to current link
          const activeLink = document.querySelector(`.main-nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add(activeClass);
          }
        }
      });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // === Copy Anchor Link to Clipboard ===
  function initAnchorLinks() {
    const anchorLinks = document.querySelectorAll('.anchor-link');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const sectionId = this.closest('.content-section').getAttribute('id');
        const url = window.location.origin + window.location.pathname + '#' + sectionId;
        
        // Copy to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            // Visual feedback
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
            // Fallback: just show the link
            alert('Link: ' + url);
          });
        } else {
          // Fallback for older browsers
          alert('Link: ' + url);
        }
      });
    });
  }

  // === Handle Hash on Page Load ===
  function handleInitialHash() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        // Wait for page to render
        setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }

  // === Tab Component (if needed for content) ===
  function initTabs() {
    const tabGroups = document.querySelectorAll('[data-tabs]');
    
    tabGroups.forEach(group => {
      const buttons = group.querySelectorAll('[data-tab-button]');
      const panels = group.querySelectorAll('[data-tab-panel]');
      
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          const targetId = this.getAttribute('data-tab-button');
          
          // Deactivate all buttons and panels in this group
          buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
          });
          panels.forEach(panel => {
            panel.classList.remove('active');
            panel.setAttribute('hidden', '');
          });
          
          // Activate clicked button and corresponding panel
          this.classList.add('active');
          this.setAttribute('aria-selected', 'true');
          
          const targetPanel = group.querySelector(`[data-tab-panel="${targetId}"]`);
          if (targetPanel) {
            targetPanel.classList.add('active');
            targetPanel.removeAttribute('hidden');
          }
        });
      });
    });
  }

  // === Back to Top Button (optional enhancement) ===
  function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // === Initialize Everything When DOM is Ready ===
  function init() {
    initMobileNav();
    initSmoothScrolling();
    initScrollspy();
    initAnchorLinks();
    initTabs();
    initBackToTop();
    handleInitialHash();
    
    console.log('AI & ML Mastery Plan site initialized');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

// ========================================================================
// Daily Breakdown Interactive Features
// ========================================================================

/**
 * Initialize daily breakdown tables with localStorage persistence
 */
function initDailyTables() {
  console.log('Initializing daily breakdown tables...');
  
  // Restore checkbox states from localStorage
  const checkboxes = document.querySelectorAll('.task-box');
  checkboxes.forEach(checkbox => {
    const key = getCheckboxKey(checkbox);
    const saved = localStorage.getItem(key);
    if (saved === 'true') {
      checkbox.checked = true;
    }
  });
  
  // Update progress summary
  updateProgressSummary();
  
  // Setup event listeners
  setupDailyBreakdownListeners();
  
  console.log(`Loaded ${checkboxes.length} task checkboxes`);
}

/**
 * Generate localStorage key for a checkbox
 */
function getCheckboxKey(checkbox) {
  const table = checkbox.dataset.table;
  const day = checkbox.dataset.day;
  const task = checkbox.dataset.task;
  return `dailyTbl_${table}_day_${day}_${task}`;
}

/**
 * Setup event listeners for daily breakdown controls
 */
function setupDailyBreakdownListeners() {
  // Event delegation for all checkboxes
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-box')) {
      handleCheckboxChange(e);
    }
  });
  
  // Event delegation for control buttons
  document.addEventListener('click', (e) => {
    const button = e.target.closest('.btn-control');
    if (!button) return;
    
    const action = button.dataset.action;
    const tableId = button.dataset.table;
    
    if (action === 'toggle') {
      toggleTable(tableId, button);
    } else if (action === 'markAll') {
      markAll(tableId);
    } else if (action === 'clearAll') {
      clearAll(tableId);
    }
  });
}

/**
 * Handle checkbox state change
 */
function handleCheckboxChange(e) {
  const checkbox = e.target;
  const key = getCheckboxKey(checkbox);
  
  // Save to localStorage
  localStorage.setItem(key, checkbox.checked);
  
  // Update day completion status
  updateDayCompletionStatus(checkbox);
  
  // Update progress summary
  updateProgressSummary();
  
  console.log(`Task ${key}: ${checkbox.checked ? 'completed' : 'uncompleted'}`);
}

/**
 * Update day completion status (all tasks checked = day completed)
 */
function updateDayCompletionStatus(checkbox) {
  const row = checkbox.closest('tr[data-day]');
  if (!row) return;
  
  const dayCheckboxes = row.querySelectorAll('.task-box');
  const allChecked = Array.from(dayCheckboxes).every(cb => cb.checked);
  
  if (allChecked) {
    row.classList.add('day-completed');
  } else {
    row.classList.remove('day-completed');
  }
}

/**
 * Update progress summary with current statistics
 */
function updateProgressSummary() {
  const allCheckboxes = document.querySelectorAll('.task-box');
  const checkedCheckboxes = document.querySelectorAll('.task-box:checked');
  
  const totalTasks = allCheckboxes.length;
  const completedTasks = checkedCheckboxes.length;
  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  // Count completed days (days where all tasks are checked)
  const allRows = document.querySelectorAll('tr[data-day]');
  let completedDays = 0;
  
  allRows.forEach(row => {
    const dayCheckboxes = row.querySelectorAll('.task-box');
    if (dayCheckboxes.length > 0) {
      const allChecked = Array.from(dayCheckboxes).every(cb => cb.checked);
      if (allChecked) {
        completedDays++;
        row.classList.add('day-completed');
      } else {
        row.classList.remove('day-completed');
      }
    }
  });
  
  // Update DOM elements
  const daysCompletedEl = document.getElementById('days-completed');
  const tasksCompletedEl = document.getElementById('tasks-completed');
  const tasksTotalEl = document.getElementById('tasks-total');
  const percentageEl = document.getElementById('overall-percentage');
  const progressBar = document.getElementById('overall-progress-bar');
  
  if (daysCompletedEl) daysCompletedEl.textContent = completedDays;
  if (tasksCompletedEl) tasksCompletedEl.textContent = completedTasks;
  if (tasksTotalEl) tasksCompletedEl.textContent = `${completedTasks} / ${totalTasks}`;
  if (percentageEl) percentageEl.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;
  
  console.log(`Progress: ${completedDays} days, ${completedTasks}/${totalTasks} tasks (${percentage}%)`);
}

/**
 * Toggle table visibility (expand/collapse)
 */
function toggleTable(tableId, button) {
  const tableBody = document.querySelector(`[data-table-body="${tableId}"]`);
  if (!tableBody) return;
  
  const isCollapsed = tableBody.classList.contains('collapsed');
  
  if (isCollapsed) {
    tableBody.classList.remove('collapsed');
    button.classList.remove('collapsed');
  } else {
    tableBody.classList.add('collapsed');
    button.classList.add('collapsed');
  }
  
  console.log(`Table ${tableId}: ${isCollapsed ? 'expanded' : 'collapsed'}`);
}

/**
 * Mark all checkboxes in a table
 */
function markAll(tableId) {
  const checkboxes = document.querySelectorAll(`.task-box[data-table="${tableId}"]`);
  
  checkboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      checkbox.checked = true;
      const key = getCheckboxKey(checkbox);
      localStorage.setItem(key, 'true');
      updateDayCompletionStatus(checkbox);
    }
  });
  
  updateProgressSummary();
  console.log(`Marked all tasks in table ${tableId}`);
}

/**
 * Clear all checkboxes in a table
 */
function clearAll(tableId) {
  const checkboxes = document.querySelectorAll(`.task-box[data-table="${tableId}"]`);
  
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.checked = false;
      const key = getCheckboxKey(checkbox);
      localStorage.setItem(key, 'false');
      updateDayCompletionStatus(checkbox);
    }
  });
  
  updateProgressSummary();
  console.log(`Cleared all tasks in table ${tableId}`);
}

// Initialize daily tables when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all other init functions run first
    setTimeout(initDailyTables, 100);
  });
} else {
  setTimeout(initDailyTables, 100);
}
