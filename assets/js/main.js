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

  // === Daily Breakdown Collapsible Phases ===
  function initDailyBreakdown() {
    const phaseHeaders = document.querySelectorAll('.phase-header');
    
    phaseHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const phaseId = this.getAttribute('data-phase');
        const content = document.getElementById(phaseId);
        
        // Toggle collapsed state
        this.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
        
        // Update ARIA attribute for accessibility
        const isCollapsed = this.classList.contains('collapsed');
        this.setAttribute('aria-expanded', !isCollapsed);
      });
      
      // Initialize all phases as collapsed except the first one
      const phaseId = header.getAttribute('data-phase');
      if (phaseId !== 'phase1') {
        header.classList.add('collapsed');
        const content = document.getElementById(phaseId);
        if (content) {
          content.classList.add('collapsed');
        }
        header.setAttribute('aria-expanded', 'false');
      } else {
        header.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // === Phase Page Functionality ===
  
  // Initialize phase page with checkbox persistence
  function initPhasePage() {
    const phaseTable = document.querySelector('.daily-table[data-phase]');
    if (!phaseTable) return;
    
    const phaseId = phaseTable.getAttribute('data-phase');
    
    // Load all task states from localStorage
    loadTasks(phaseId);
    
    // Add event listeners to all checkboxes
    const checkboxes = phaseTable.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        saveTaskState(this);
        updateProgress();
      });
    });
    
    // Initialize control bar buttons
    initControlBar(phaseId);
    
    // Initial progress calculation
    updateProgress();
  }
  
  // Load task states from localStorage
  function loadTasks(phaseId) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
    checkboxes.forEach(checkbox => {
      const taskId = checkbox.getAttribute('data-task-id');
      const storageKey = `llmPlan_${taskId}`;
      const isChecked = localStorage.getItem(storageKey) === 'true';
      checkbox.checked = isChecked;
    });
  }
  
  // Save individual task state to localStorage
  function saveTaskState(checkbox) {
    const taskId = checkbox.getAttribute('data-task-id');
    const storageKey = `llmPlan_${taskId}`;
    localStorage.setItem(storageKey, checkbox.checked);
  }
  
  // Calculate and update progress display
  function updateProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
    const totalTasks = checkboxes.length;
    const completedTasks = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentComplete = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Count fully completed days
    const dayRows = document.querySelectorAll('.day-row');
    let daysCompleted = 0;
    dayRows.forEach(row => {
      const rowCheckboxes = row.querySelectorAll('input[type="checkbox"]');
      const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
      if (allChecked && rowCheckboxes.length > 0) {
        daysCompleted++;
      }
    });
    
    // Update UI
    const completedEl = document.getElementById('completed-tasks');
    const totalEl = document.getElementById('total-tasks');
    const percentEl = document.getElementById('completion-percent');
    const daysEl = document.getElementById('days-completed');
    const progressBar = document.getElementById('progress-bar');
    
    if (completedEl) completedEl.textContent = completedTasks;
    if (totalEl) totalEl.textContent = totalTasks;
    if (percentEl) percentEl.textContent = `${percentComplete}%`;
    if (daysEl) daysEl.textContent = daysCompleted;
    if (progressBar) progressBar.style.width = `${percentComplete}%`;
  }
  
  // Debounced progress update
  let progressUpdateTimer;
  function debouncedProgressUpdate() {
    clearTimeout(progressUpdateTimer);
    progressUpdateTimer = setTimeout(updateProgress, 100);
  }
  
  // Initialize control bar buttons
  function initControlBar(phaseId) {
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    const markAllBtn = document.getElementById('mark-all');
    const clearAllBtn = document.getElementById('clear-all');
    const exportBtn = document.getElementById('export-status');
    
    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', function() {
        // Future: implement collapsible day rows if needed
        console.log('Expand all days');
      });
    }
    
    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', function() {
        // Future: implement collapsible day rows if needed
        console.log('Collapse all days');
      });
    }
    
    if (markAllBtn) {
      markAllBtn.addEventListener('click', function() {
        if (confirm('Mark all tasks in this phase as complete?')) {
          const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
          checkboxes.forEach(checkbox => {
            checkbox.checked = true;
            saveTaskState(checkbox);
          });
          updateProgress();
        }
      });
    }
    
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', function() {
        if (confirm('Clear all tasks in this phase? This cannot be undone.')) {
          const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
          checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            saveTaskState(checkbox);
          });
          updateProgress();
        }
      });
    }
    
    if (exportBtn) {
      exportBtn.addEventListener('click', function() {
        exportPhaseStatus(phaseId);
      });
    }
  }
  
  // Export phase status as JSON
  function exportPhaseStatus(phaseId) {
    const dayRows = document.querySelectorAll('.day-row');
    const statusData = {
      phase: phaseId,
      exportDate: new Date().toISOString(),
      days: []
    };
    
    dayRows.forEach(row => {
      const dayNum = row.getAttribute('data-day');
      const checkboxes = row.querySelectorAll('input[type="checkbox"]');
      const totalTasks = checkboxes.length;
      const completedTasks = Array.from(checkboxes).filter(cb => cb.checked).length;
      const isComplete = totalTasks > 0 && completedTasks === totalTasks;
      
      statusData.days.push({
        day: parseInt(dayNum),
        totalTasks: totalTasks,
        completedTasks: completedTasks,
        complete: isComplete,
        progress: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
      });
    });
    
    // Download as JSON file
    const dataStr = JSON.stringify(statusData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${phaseId}_status_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }
  
  // Compute global progress across all phases
  function computeGlobalProgress() {
    const allKeys = Object.keys(localStorage);
    const taskKeys = allKeys.filter(key => key.startsWith('llmPlan_tbl'));
    
    const totalTasks = taskKeys.length;
    const completedTasks = taskKeys.filter(key => localStorage.getItem(key) === 'true').length;
    const percentComplete = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    return {
      total: totalTasks,
      completed: completedTasks,
      percent: percentComplete
    };
  }
  
  // Reset all progress
  function resetProgress() {
    if (!confirm('Reset ALL progress across ALL phases? This cannot be undone!')) {
      return;
    }
    
    const allKeys = Object.keys(localStorage);
    const taskKeys = allKeys.filter(key => key.startsWith('llmPlan_tbl'));
    
    taskKeys.forEach(key => {
      localStorage.removeItem(key);
    });
    
    // Uncheck all checkboxes on current page
    const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Update progress display if on phase page
    if (typeof updateProgress === 'function') {
      updateProgress();
    }
    
    alert('All progress has been reset.');
  }
  
  // Initialize global progress on index page
  function initGlobalProgress() {
    const globalProgressEl = document.getElementById('global-progress');
    if (!globalProgressEl) return;
    
    const progress = computeGlobalProgress();
    globalProgressEl.innerHTML = `
      <div class="progress-stat">
        <span class="stat-value">${progress.completed}</span>
        <span class="stat-label">Tasks Completed</span>
      </div>
      <div class="progress-stat">
        <span class="stat-value">${progress.total}</span>
        <span class="stat-label">Total Tasks</span>
      </div>
      <div class="progress-stat">
        <span class="stat-value">${progress.percent}%</span>
        <span class="stat-label">Overall Progress</span>
      </div>
    `;
  }
  
  // Initialize reset button on index page
  function initResetButton() {
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetProgress);
    }
  }

  // === Initialize Everything When DOM is Ready ===
  function init() {
    initMobileNav();
    initSmoothScrolling();
    initScrollspy();
    initAnchorLinks();
    initTabs();
    initBackToTop();
    initDailyBreakdown();
    handleInitialHash();
    
    // Phase page specific initialization
    if (document.body.classList.contains('phase-page')) {
      initPhasePage();
    }
    
    // Index page specific initialization
    if (document.getElementById('global-progress')) {
      initGlobalProgress();
      initResetButton();
    }
    
    console.log('AI & ML Mastery Plan site initialized');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
