const PHASE_BUFFER_SETUP = {
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
    };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHASE_BUFFER_SETUP;
}
