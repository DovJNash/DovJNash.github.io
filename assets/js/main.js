// AI & Machine Learning Mastery Plan - Enhanced Main JavaScript
// Full 12-month tabbed interface with Progress HUD and search functionality

(function() {
  'use strict';

  // === Configuration ===
  const STORAGE_PREFIX = 'llmPlan';
  const STORAGE_KEYS = {
    ACTIVE_TAB: `${STORAGE_PREFIX}.ui.activeTab`,
    TASKS: `${STORAGE_PREFIX}.tasks`,
    TIME: `${STORAGE_PREFIX}.time`,
    PHASE_RENDERED: `${STORAGE_PREFIX}.rendered`
  };

  // === State Management ===
  let state = {
    activePhase: null,
    renderedPhases: new Set(),
    tasks: {},
    timeTracking: {},
    searchActive: false
  };

  // === Utility Functions ===
  
  function getFromStorage(key, defaultValue = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.error('Error reading from localStorage:', e);
      return defaultValue;
    }
  }

  function setToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error writing to localStorage:', e);
    }
  }

  function generateTaskId(phaseId, globalDay, taskIndex) {
    return `${STORAGE_PREFIX}_${phaseId}_day${globalDay}_task${taskIndex}`;
  }

  function generateTimeId(globalDay) {
    return `${STORAGE_PREFIX}.time.day.${globalDay}`;
  }

  // === Task Management ===
  
  function isTaskComplete(taskId) {
    const tasks = getFromStorage(STORAGE_KEYS.TASKS, {});
    return tasks[taskId] === true;
  }

  function setTaskComplete(taskId, complete) {
    const tasks = getFromStorage(STORAGE_KEYS.TASKS, {});
    if (complete) {
      tasks[taskId] = true;
    } else {
      delete tasks[taskId];
    }
    setToStorage(STORAGE_KEYS.TASKS, tasks);
    updateProgress();
  }

  function getActualTime(globalDay) {
    const timeId = generateTimeId(globalDay);
    return getFromStorage(timeId, 0);
  }

  function setActualTime(globalDay, minutes) {
    const timeId = generateTimeId(globalDay);
    setToStorage(timeId, parseInt(minutes) || 0);
  }

  // === Progress Calculation ===
  
  function calculateProgress() {
    const tasks = getFromStorage(STORAGE_KEYS.TASKS, {});
    const completedTasks = Object.keys(tasks).filter(k => tasks[k]).length;
    
    // Calculate total tasks across all phases
    let totalTasks = 0;
    let totalDays = 0;
    let completedDays = 0;
    
    if (typeof PLAN !== 'undefined' && PLAN.phases) {
      PLAN.phases.forEach(phase => {
        if (phase.days) {
          totalDays += phase.days.length;
          phase.days.forEach(day => {
            if (day.tasks) {
              totalTasks += day.tasks.length;
              // Check if all tasks for this day are complete
              const allTasksComplete = day.tasks.every((_, idx) => {
                const taskId = generateTaskId(phase.id, day.globalDay, idx);
                return isTaskComplete(taskId);
              });
              if (allTasksComplete) {
                completedDays++;
              }
            }
          });
        }
      });
    }
    
    // Calculate phase-specific progress
    let phaseCompleted = 0;
    let phaseTotal = 0;
    
    if (state.activePhase && typeof PLAN !== 'undefined' && PLAN.phases) {
      const phase = PLAN.phases.find(p => p.id === state.activePhase);
      if (phase && phase.days) {
        phase.days.forEach(day => {
          if (day.tasks) {
            phaseTotal += day.tasks.length;
            day.tasks.forEach((_, idx) => {
              const taskId = generateTaskId(phase.id, day.globalDay, idx);
              if (isTaskComplete(taskId)) {
                phaseCompleted++;
              }
            });
          }
        });
      }
    }
    
    return {
      global: {
        completed: completedTasks,
        total: totalTasks,
        percent: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
      },
      phase: {
        completed: phaseCompleted,
        total: phaseTotal,
        percent: phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0
      },
      days: {
        completed: completedDays,
        total: totalDays
      }
    };
  }

  function updateProgress() {
    const progress = calculateProgress();
    
    // Update main progress section (if exists)
    const globalCompleted = document.getElementById('global-completed');
    const globalTotal = document.getElementById('global-total');
    const globalDays = document.getElementById('global-days');
    const progressRingPercent = document.getElementById('progress-ring-percent');
    const progressRingValue = document.getElementById('progress-ring-value');
    
    if (globalCompleted) globalCompleted.textContent = progress.global.completed;
    if (globalTotal) globalTotal.textContent = progress.global.total;
    if (globalDays) globalDays.textContent = progress.days.completed;
    if (progressRingPercent) progressRingPercent.textContent = `${progress.global.percent}%`;
    
    // Update progress ring
    if (progressRingValue) {
      const radius = 90;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress.global.percent / 100) * circumference;
      progressRingValue.style.strokeDasharray = `${circumference} ${circumference}`;
      progressRingValue.style.strokeDashoffset = offset;
    }
    
    // Update HUD
    const hudGlobalProgress = document.getElementById('hudGlobalProgress');
    const hudPhaseProgress = document.getElementById('hudPhaseProgress');
    const hudTasksComplete = document.getElementById('hudTasksComplete');
    const hudDaysComplete = document.getElementById('hudDaysComplete');
    
    if (hudGlobalProgress) hudGlobalProgress.textContent = `${progress.global.percent}%`;
    if (hudPhaseProgress) hudPhaseProgress.textContent = `${progress.phase.percent}%`;
    if (hudTasksComplete) hudTasksComplete.textContent = `${progress.global.completed}/${progress.global.total}`;
    if (hudDaysComplete) hudDaysComplete.textContent = `${progress.days.completed}/${progress.days.total}`;
  }

  // === Tab Management ===
  
  function initTabs() {
    if (typeof PLAN === 'undefined' || !PLAN.phases) {
      console.error('PLAN data not found');
      return;
    }
    
    const tabsNav = document.querySelector('.tabs-nav');
    if (!tabsNav) return;
    
    // Create tabs
    PLAN.phases.forEach((phase, index) => {
      const tab = document.createElement('button');
      tab.role = 'tab';
      tab.id = `tab-${phase.id}`;
      tab.setAttribute('aria-controls', `panel-${phase.id}`);
      tab.setAttribute('aria-selected', 'false');
      tab.classList.add('tab');
      tab.textContent = `${index + 1}. ${phase.title.split(':')[0]}`;
      tab.title = phase.title;
      
      tab.addEventListener('click', () => activateTab(phase.id));
      
      tabsNav.appendChild(tab);
    });
    
    // Keyboard navigation
    tabsNav.addEventListener('keydown', handleTabKeydown);
    
    // Load saved active tab or default to first
    const savedTab = getFromStorage(STORAGE_KEYS.ACTIVE_TAB, null);
    const initialTab = savedTab || PLAN.phases[0].id;
    activateTab(initialTab);
  }

  function handleTabKeydown(e) {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const currentIndex = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
    
    let nextIndex = currentIndex;
    
    switch(e.key) {
      case 'ArrowLeft':
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        e.preventDefault();
        break;
      case 'ArrowRight':
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        e.preventDefault();
        break;
      case 'Home':
        nextIndex = 0;
        e.preventDefault();
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        e.preventDefault();
        break;
      default:
        return;
    }
    
    if (nextIndex !== currentIndex) {
      tabs[nextIndex].click();
      tabs[nextIndex].focus();
    }
  }

  function activateTab(phaseId) {
    if (typeof PLAN === 'undefined') return;
    
    const phase = PLAN.phases.find(p => p.id === phaseId);
    if (!phase) return;
    
    // Update tab states
    document.querySelectorAll('.tab').forEach(tab => {
      const isActive = tab.id === `tab-${phaseId}`;
      tab.setAttribute('aria-selected', isActive.toString());
      if (isActive) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
    
    // Update state
    state.activePhase = phaseId;
    setToStorage(STORAGE_KEYS.ACTIVE_TAB, phaseId);
    
    // Render panel (lazy)
    renderPanel(phase);
    
    // Show active panel
    document.querySelectorAll('.tab-panel').forEach(panel => {
      panel.style.display = panel.id === `panel-${phaseId}` ? 'block' : 'none';
    });
    
    // Update progress to reflect current phase
    updateProgress();
  }

  function renderPanel(phase) {
    // Check if already rendered
    if (state.renderedPhases.has(phase.id)) return;
    
    const tabsContent = document.querySelector('.tabs-content');
    if (!tabsContent) return;
    
    // Create panel
    const panel = document.createElement('div');
    panel.role = 'tabpanel';
    panel.id = `panel-${phase.id}`;
    panel.setAttribute('aria-labelledby', `tab-${phase.id}`);
    panel.classList.add('tab-panel');
    
    // Phase header
    const header = document.createElement('div');
    header.classList.add('phase-header');
    header.innerHTML = `
      <h3>${phase.title}</h3>
      <p class="phase-meta">${phase.duration} | ${phase.description}</p>
    `;
    panel.appendChild(header);
    
    // Days container
    const daysContainer = document.createElement('div');
    daysContainer.classList.add('days-container');
    
    if (phase.days && phase.days.length > 0) {
      phase.days.forEach(day => {
        const dayCard = createDayCard(phase, day);
        daysContainer.appendChild(dayCard);
      });
    } else {
      const placeholder = document.createElement('div');
      placeholder.classList.add('placeholder');
      placeholder.textContent = 'Detailed day breakdown coming soon...';
      daysContainer.appendChild(placeholder);
    }
    
    panel.appendChild(daysContainer);
    tabsContent.appendChild(panel);
    
    // Mark as rendered
    state.renderedPhases.add(phase.id);
  }

  function createDayCard(phase, day) {
    const card = document.createElement('div');
    card.classList.add('day-card');
    card.dataset.globalDay = day.globalDay;
    
    // Calculate estimated time
    const estTime = day.tasks ? day.tasks.reduce((sum, task) => sum + (task.estMinutes || 0), 0) : 0;
    const actualTime = getActualTime(day.globalDay);
    
    // Check if all tasks complete
    const allTasksComplete = day.tasks ? day.tasks.every((_, idx) => {
      const taskId = generateTaskId(phase.id, day.globalDay, idx);
      return isTaskComplete(taskId);
    }) : false;
    
    if (allTasksComplete) {
      card.classList.add('complete');
    }
    
    // Card header
    const header = document.createElement('div');
    header.classList.add('day-card-header');
    header.innerHTML = `
      <div class="day-card-title">
        <h4>Day ${day.globalDay}: ${day.title}</h4>
        <span class="priority-badge priority-${day.priority.toLowerCase()}">${day.priority}</span>
      </div>
      <div class="day-card-meta">
        <span class="time-estimate">Est: ${estTime} min</span>
        <span class="time-separator">|</span>
        <span class="time-actual">
          Actual: <input 
            type="number" 
            min="0" 
            step="1" 
            value="${actualTime}" 
            class="time-input"
            data-global-day="${day.globalDay}"
            aria-label="Actual time in minutes"
          /> min
        </span>
      </div>
    `;
    card.appendChild(header);
    
    // Tasks list
    if (day.tasks && day.tasks.length > 0) {
      const tasksList = document.createElement('div');
      tasksList.classList.add('tasks-list');
      
      day.tasks.forEach((task, idx) => {
        const taskId = generateTaskId(phase.id, day.globalDay, idx);
        const detailsId = `${taskId}_details`;
        const isComplete = isTaskComplete(taskId);
        
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        if (isComplete) taskItem.classList.add('complete');
        
        // Build task header with checkbox and label
        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');
        taskHeader.innerHTML = `
          <input 
            type="checkbox" 
            id="${taskId}" 
            ${isComplete ? 'checked' : ''}
            data-task-id="${taskId}"
            aria-label="Task: ${task.label}"
          />
          <label for="${taskId}">
            <span class="task-label">${task.label}</span>
            ${task.estMinutes ? `<span class="task-time">${task.estMinutes}min</span>` : ''}
          </label>
        `;
        
        // Add details toggle button if details exist
        if (task.details) {
          const toggleBtn = document.createElement('button');
          toggleBtn.classList.add('task-details-toggle');
          toggleBtn.setAttribute('aria-expanded', 'false');
          toggleBtn.setAttribute('aria-controls', detailsId);
          toggleBtn.innerHTML = '<span class="toggle-icon">▶</span> Show details';
          toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const detailsContainer = taskItem.querySelector('.task-details-container');
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
              toggleBtn.setAttribute('aria-expanded', 'false');
              toggleBtn.innerHTML = '<span class="toggle-icon">▶</span> Show details';
              detailsContainer.style.display = 'none';
            } else {
              toggleBtn.setAttribute('aria-expanded', 'true');
              toggleBtn.innerHTML = '<span class="toggle-icon">▼</span> Hide details';
              detailsContainer.style.display = 'block';
            }
          });
          taskHeader.appendChild(toggleBtn);
        }
        
        taskItem.appendChild(taskHeader);
        
        // Add details container if details exist
        if (task.details) {
          const detailsContainer = document.createElement('div');
          detailsContainer.classList.add('task-details-container');
          detailsContainer.id = detailsId;
          detailsContainer.style.display = 'none';
          
          const detailsContent = document.createElement('div');
          detailsContent.classList.add('task-details-content');
          detailsContent.innerHTML = task.details;
          
          // Extract and display source badges if resourceLinks exist
          if (task.resourceLinks && task.resourceLinks.length > 0) {
            const sourceBadges = document.createElement('div');
            sourceBadges.classList.add('task-source-badges');
            sourceBadges.innerHTML = '<strong>Quick Links:</strong> ';
            
            task.resourceLinks.forEach((link, linkIdx) => {
              const badge = document.createElement('a');
              badge.classList.add('source-badge');
              badge.href = link;
              badge.target = '_blank';
              badge.rel = 'noopener noreferrer';
              
              // Extract domain name for badge label
              let domain = 'Link';
              try {
                const url = new URL(link);
                const hostname = url.hostname.replace('www.', '');
                // Check exact match or subdomain (ends with the domain)
                if (hostname === 'datacamp.com' || hostname.endsWith('.datacamp.com')) domain = 'DataCamp';
                else if (hostname === 'youtube.com' || hostname.endsWith('.youtube.com') || hostname === 'youtu.be') domain = 'YouTube';
                else if (hostname === 'khanacademy.org' || hostname.endsWith('.khanacademy.org')) domain = 'Khan Academy';
                else if (hostname === 'numpy.org' || hostname.endsWith('.numpy.org')) domain = 'NumPy Docs';
                else if (hostname === 'pytorch.org' || hostname.endsWith('.pytorch.org')) domain = 'PyTorch Docs';
                else if (hostname === 'huggingface.co' || hostname.endsWith('.huggingface.co')) domain = 'Hugging Face';
                else if (hostname === '3blue1brown.com' || hostname === 'www.3blue1brown.com' || hostname.endsWith('.3blue1brown.com')) domain = '3Blue1Brown';
                else if (hostname === 'arxiv.org' || hostname.endsWith('.arxiv.org')) domain = 'arXiv';
                else domain = hostname; // Use actual hostname if no match
              } catch (e) {
                // Invalid URL, use generic label
              }
              
              badge.textContent = domain;
              badge.title = link;
              sourceBadges.appendChild(badge);
            });
            
            detailsContent.appendChild(sourceBadges);
          }
          
          detailsContainer.appendChild(detailsContent);
          taskItem.appendChild(detailsContainer);
        }
        
        tasksList.appendChild(taskItem);
      });
      
      card.appendChild(tasksList);
    }
    
    // Reflection prompt
    if (day.reflectionPrompt) {
      const reflection = document.createElement('div');
      reflection.classList.add('reflection-prompt');
      reflection.innerHTML = `<strong>💭 Reflection:</strong> ${day.reflectionPrompt}`;
      card.appendChild(reflection);
    }
    
    // Event listeners
    const timeInput = card.querySelector('.time-input');
    if (timeInput) {
      timeInput.addEventListener('change', (e) => {
        setActualTime(day.globalDay, e.target.value);
      });
    }
    
    const checkboxes = card.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const taskId = e.target.dataset.taskId;
        setTaskComplete(taskId, e.target.checked);
        
        // Update card complete state
        const allComplete = Array.from(checkboxes).every(cb => cb.checked);
        if (allComplete) {
          card.classList.add('complete');
        } else {
          card.classList.remove('complete');
        }
        
        // Update task item state
        const taskItem = e.target.closest('.task-item');
        if (taskItem) {
          if (e.target.checked) {
            taskItem.classList.add('complete');
          } else {
            taskItem.classList.remove('complete');
          }
        }
      });
    });
    
    return card;
  }

  // === Search Functionality ===
  
  function toggleSearch() {
    const searchModal = document.getElementById('searchModal');
    if (!searchModal) return;
    
    state.searchActive = !state.searchActive;
    
    if (state.searchActive) {
      searchModal.style.display = 'flex';
      searchModal.setAttribute('aria-hidden', 'false');
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    } else {
      searchModal.style.display = 'none';
      searchModal.setAttribute('aria-hidden', 'true');
      clearSearch();
    }
  }

  function performSearch(query) {
    if (!query || !state.activePhase || typeof PLAN === 'undefined') return;
    
    const phase = PLAN.phases.find(p => p.id === state.activePhase);
    if (!phase || !phase.days) return;
    
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    phase.days.forEach(day => {
      if (day.tasks) {
        day.tasks.forEach((task, idx) => {
          if (task.label.toLowerCase().includes(lowerQuery)) {
            results.push({
              day: day.globalDay,
              dayTitle: day.title,
              task: task.label,
              taskId: generateTaskId(phase.id, day.globalDay, idx)
            });
          }
        });
      }
    });
    
    displaySearchResults(results, query);
    highlightSearchMatches(query);
  }

  function displaySearchResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    
    if (results.length === 0) {
      searchResults.innerHTML = `<div class="search-no-results">No tasks found matching "${escapeHtml(query)}"</div>`;
      return;
    }
    
    searchResults.innerHTML = `
      <div class="search-results-header">
        Found ${results.length} task${results.length !== 1 ? 's' : ''}
      </div>
      ${results.map(result => `
        <div class="search-result-item" data-day="${result.day}">
          <div class="search-result-day">Day ${result.day}: ${result.dayTitle}</div>
          <div class="search-result-task">${highlightText(result.task, query)}</div>
        </div>
      `).join('')}
    `;
    
    // Add click handlers
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const day = item.dataset.day;
        const dayCard = document.querySelector(`[data-global-day="${day}"]`);
        if (dayCard) {
          dayCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          dayCard.classList.add('highlighted');
          setTimeout(() => dayCard.classList.remove('highlighted'), 2000);
        }
        toggleSearch();
      });
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function highlightText(text, query) {
    const escapedText = escapeHtml(text);
    const escapedQuery = escapeHtml(query);
    const regex = new RegExp(`(${escapeRegex(escapedQuery)})`, 'gi');
    return escapedText.replace(regex, '<mark>$1</mark>');
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightSearchMatches(query) {
    if (!query) return clearHighlights();
    
    const activePanel = document.querySelector('.tab-panel[style*="display: block"]');
    if (!activePanel) return;
    
    const taskLabels = activePanel.querySelectorAll('.task-label');
    const lowerQuery = query.toLowerCase();
    
    taskLabels.forEach(label => {
      const originalText = label.textContent;
      if (originalText.toLowerCase().includes(lowerQuery)) {
        label.innerHTML = highlightText(originalText, query);
        label.closest('.day-card').classList.add('search-match');
      }
    });
  }

  function clearHighlights() {
    document.querySelectorAll('.task-label mark').forEach(mark => {
      const text = mark.textContent;
      mark.replaceWith(text);
    });
    document.querySelectorAll('.day-card.search-match').forEach(card => {
      card.classList.remove('search-match');
    });
  }

  function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
    
    clearHighlights();
  }

  // === Reset Functions ===
  
  function resetAllProgress() {
    if (!confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
      return;
    }
    
    localStorage.removeItem(STORAGE_KEYS.TASKS);
    
    // Reset all time tracking
    for (let i = 1; i <= 364; i++) {
      localStorage.removeItem(generateTimeId(i));
    }
    
    // Refresh UI
    location.reload();
  }

  function resetPhaseProgress() {
    if (!state.activePhase) return;
    
    if (!confirm(`Are you sure you want to reset progress for the current phase? This cannot be undone.`)) {
      return;
    }
    
    const phase = PLAN.phases.find(p => p.id === state.activePhase);
    if (!phase || !phase.days) return;
    
    const tasks = getFromStorage(STORAGE_KEYS.TASKS, {});
    
    phase.days.forEach(day => {
      if (day.tasks) {
        day.tasks.forEach((_, idx) => {
          const taskId = generateTaskId(phase.id, day.globalDay, idx);
          delete tasks[taskId];
        });
      }
      localStorage.removeItem(generateTimeId(day.globalDay));
    });
    
    setToStorage(STORAGE_KEYS.TASKS, tasks);
    
    // Refresh panel
    state.renderedPhases.delete(state.activePhase);
    const panel = document.getElementById(`panel-${state.activePhase}`);
    if (panel) panel.remove();
    
    activateTab(state.activePhase);
  }

  // === Export Functions ===
  
  function exportProgress() {
    const progress = calculateProgress();
    const tasks = getFromStorage(STORAGE_KEYS.TASKS, {});
    
    const exportData = {
      timestamp: new Date().toISOString(),
      summary: progress,
      tasks: tasks,
      timeTracking: {}
    };
    
    // Collect time tracking
    for (let i = 1; i <= 364; i++) {
      const time = getActualTime(i);
      if (time > 0) {
        exportData.timeTracking[`day${i}`] = time;
      }
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `llm-plan-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // === HUD Functions ===
  
  function initHUD() {
    const hudToggle = document.getElementById('hudToggle');
    const hudExport = document.getElementById('hudExport');
    const hudResetAll = document.getElementById('hudResetAll');
    const hudResetPhase = document.getElementById('hudResetPhase');
    const hudSearch = document.getElementById('hudSearch');
    
    if (hudToggle) {
      hudToggle.addEventListener('click', () => {
        const hud = document.getElementById('progressHUD');
        const content = hud.querySelector('.hud-content');
        const icon = hudToggle.querySelector('.hud-toggle-icon');
        const isExpanded = hudToggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          content.style.display = 'none';
          icon.textContent = '+';
          hudToggle.setAttribute('aria-expanded', 'false');
        } else {
          content.style.display = 'block';
          icon.textContent = '−';
          hudToggle.setAttribute('aria-expanded', 'true');
        }
      });
    }
    
    if (hudExport) hudExport.addEventListener('click', exportProgress);
    if (hudResetAll) hudResetAll.addEventListener('click', resetAllProgress);
    if (hudResetPhase) hudResetPhase.addEventListener('click', resetPhaseProgress);
    if (hudSearch) hudSearch.addEventListener('click', toggleSearch);
  }

  // === Search Modal Functions ===
  
  function initSearchModal() {
    const searchModal = document.getElementById('searchModal');
    const searchModalClose = document.getElementById('searchModalClose');
    const searchInput = document.getElementById('searchInput');
    
    if (searchModalClose) {
      searchModalClose.addEventListener('click', toggleSearch);
    }
    
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
          toggleSearch();
        }
      });
    }
    
    if (searchInput) {
      let searchTimeout;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          performSearch(e.target.value);
        }, 300);
      });
      
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          toggleSearch();
        }
      });
    }
  }

  // === Legacy Functions (for compatibility) ===
  
  function initSidebar() {
    // Existing sidebar functionality
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    // Highlight active section on scroll
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    function highlightNavigation() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation();
  }

  function initAnchorLinks() {
    const anchorLinks = document.querySelectorAll('.anchor-link');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = this.closest('.content-section');
        if (section) {
          const url = `${window.location.origin}${window.location.pathname}#${section.id}`;
          
          // Copy to clipboard
          navigator.clipboard.writeText(url).then(() => {
            // Show feedback
            const originalText = this.textContent;
            this.textContent = '✓';
            setTimeout(() => {
              this.textContent = originalText;
            }, 1000);
          }).catch(err => {
            console.error('Failed to copy link:', err);
          });
        }
      });
    });
  }

  function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      // Clear all llmPlan_ prefixed keys
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      location.reload();
    }
  }

  function exportProgressLegacy() {
    exportProgress();
  }

  // === Initialization ===
  
  function init() {
    console.log('Initializing AI & ML Mastery Plan (Tabbed Interface)...');
    
    // Initialize tabs
    initTabs();
    
    // Initialize HUD
    initHUD();
    
    // Initialize search
    initSearchModal();
    
    // Initialize sidebar and legacy features
    initSidebar();
    initAnchorLinks();
    
    // Initialize progress
    updateProgress();
    
    // Control buttons (legacy)
    const resetBtn = document.getElementById('reset-progress-btn');
    const exportBtn = document.getElementById('export-progress-btn');
    
    if (resetBtn) {
      resetBtn.addEventListener('click', resetProgress);
    }
    
    if (exportBtn) {
      exportBtn.addEventListener('click', exportProgressLegacy);
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
    if (progressRing && !progressRing.querySelector('defs')) {
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
    
    console.log('Initialization complete');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
