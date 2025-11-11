#!/usr/bin/env node
/**
 * Analyze task structure and generate statistics
 */

const fs = require('fs');
const path = require('path');

// Read the planPhases.js file
const dataPath = path.join(__dirname, '../assets/js/data/planPhases.js');
const content = fs.readFileSync(dataPath, 'utf8');

// Extract PLAN object (simple regex approach)
const planMatch = content.match(/const PLAN = ({[\s\S]*});/);
if (!planMatch) {
  console.error('Could not extract PLAN object');
  process.exit(1);
}

// Use eval to parse (we control the input, so this is safe here)
const PLAN = eval(`(${planMatch[1]})`);

console.log('=== AI & ML Mastery Plan Analysis ===\n');
console.log(`Total Phases: ${PLAN.phases.length}`);
console.log(`Total Days: ${PLAN.phases.reduce((sum, p) => sum + (p.days?.length || 0), 0)}`);
console.log(`Total Tasks: ${PLAN.phases.reduce((sum, p) => sum + p.days?.reduce((s, d) => s + (d.tasks?.length || 0), 0) || 0, 0)}`);

console.log('\n=== Phase Breakdown ===\n');

PLAN.phases.forEach((phase, idx) => {
  const days = phase.days?.length || 0;
  const tasks = phase.days?.reduce((sum, d) => sum + (d.tasks?.length || 0), 0) || 0;
  const tasksWithDetails = phase.days?.reduce((sum, d) => {
    return sum + (d.tasks?.filter(t => t.details).length || 0);
  }, 0) || 0;
  
  console.log(`${idx + 1}. ${phase.id}`);
  console.log(`   Days: ${days}, Tasks: ${tasks}, With Details: ${tasksWithDetails} (${Math.round(tasksWithDetails/tasks*100)}%)`);
  
  if (phase.days && phase.days.length > 0) {
    const firstDay = phase.days[0].globalDay;
    const lastDay = phase.days[phase.days.length - 1].globalDay;
    console.log(`   Days ${firstDay}-${lastDay}`);
  }
  console.log('');
});

// Find tasks without details
let tasksNeedingDetails = [];
PLAN.phases.forEach(phase => {
  phase.days?.forEach(day => {
    day.tasks?.forEach((task, idx) => {
      if (!task.details) {
        tasksNeedingDetails.push({
          phase: phase.id,
          phaseTitle: phase.title,
          day: day.globalDay,
          dayTitle: day.title,
          taskIndex: idx,
          label: task.label,
          estMinutes: task.estMinutes || 0
        });
      }
    });
  });
});

console.log(`\n=== Tasks Needing Details: ${tasksNeedingDetails.length} ===\n`);

// Sample of tasks needing details
console.log('Sample of tasks needing details (first 20):');
tasksNeedingDetails.slice(0, 20).forEach(t => {
  console.log(`  Day ${t.day}: ${t.label}`);
});

console.log(`\n... and ${tasksNeedingDetails.length - 20} more tasks\n`);
