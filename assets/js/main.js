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
