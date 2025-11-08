#!/usr/bin/env python3
"""
Generate comprehensive task details for Phases 1-3 (Days 1-70)
Following the Week 1 format: Action, Boundaries, Deliverable, Verification, Pitfalls, Resources
Target: 120-200+ words per task with 2-6 authoritative links
"""

import re
import json

# Read the original planPhases.js
with open('assets/js/data/planPhases.js', 'r') as f:
    content = f.read()

def extract_phase_data(content, phase_id, next_phase_id=None):
    """Extract a phase's data from the content"""
    start_pattern = f"id: '{phase_id}'"
    start_idx = content.find(start_pattern)
    
    if start_idx == -1:
        return None
    
    # Find the phase object start (go back to find opening brace)
    brace_start = content.rfind('{', 0, start_idx)
    
    # Find where this phase ends
    if next_phase_id:
        next_start = content.find(f"id: '{next_phase_id}'", start_idx)
        # Go back to find the comma before next phase
        end_idx = content.rfind('},', brace_start, next_start) + 1
    else:
        # Find the closing of phases array
        end_idx = content.find(']', start_idx)
        end_idx = content.rfind('}', start_idx, end_idx) + 1
    
    phase_text = content[brace_start:end_idx]
    return phase_text

# Extract phases
phase1_text = extract_phase_data(content, 'foundations', 'buffer-setup')
phase2_text = extract_phase_data(content, 'buffer-setup', 'classical-ml')
phase3_text = extract_phase_data(content, 'classical-ml', 'deep-learning')

print(f"Phase 1 extracted: {len(phase1_text)} chars")
print(f"Phase 2 extracted: {len(phase2_text)} chars")  
print(f"Phase 3 extracted: {len(phase3_text)} chars")

# Save to files
with open('assets/js/data/phase_foundations_raw.js', 'w') as f:
    f.write(f"const PHASE_FOUNDATIONS = {phase1_text};\n\n")
    f.write("if (typeof module !== 'undefined' && module.exports) {\n")
    f.write("  module.exports = PHASE_FOUNDATIONS;\n")
    f.write("}\n")

with open('assets/js/data/phase_buffer_setup_raw.js', 'w') as f:
    f.write(f"const PHASE_BUFFER_SETUP = {phase2_text};\n\n")
    f.write("if (typeof module !== 'undefined' && module.exports) {\n")
    f.write("  module.exports = PHASE_BUFFER_SETUP;\n")
    f.write("}\n")

with open('assets/js/data/phase_classical_ml_raw.js', 'w') as f:
    f.write(f"const PHASE_CLASSICAL_ML = {phase3_text};\n\n")
    f.write("if (typeof module !== 'undefined' && module.exports) {\n")
    f.write("  module.exports = PHASE_CLASSICAL_ML;\n")
    f.write("}\n")

print("\nPhase data extracted successfully!")
print("Raw files created (will be enhanced with details)")
