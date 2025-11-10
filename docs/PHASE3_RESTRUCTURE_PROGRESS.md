# Phase 3 Restructure - Progress Summary

**PR Branch:** `copilot/update-cs50ai-phase-3-structure`  
**Goal:** Replace 7-day compressed CS50AI survey with expanded 2-day modules + Bridge Sprint, enabling early Deep Learning start at Day 68.

## What's Been Completed ✅

### 1. Archive & Documentation Structure
- ✅ Created `docs/archive/classical_ml_original.md` documenting the original Phase 3 structure
- ✅ Created `docs/bridge/` directory with 4 stub markdown files:
  - `ml_to_transformer_rationale.md`
  - `reproducibility_checklist.md`  
  - `environment_setup.md`
  - `git_workflow.md`
- ✅ Created `notebooks/bridge/README.md` describing notebook structure

### 2. Phase Data Structure (`assets/js/data/planPhases.js`)
- ✅ Updated classical-ml phase metadata:
  - Title: "Phase 3B: CS50AI Survey & Bridge Sprint"
  - Duration: "18 days (Days 50-67, enabling Phase 4 early start at Day 68)"
  - Weeks: [8, 9, 10]
- ✅ Implemented CS50AI days 50-63 (14 days):
  - Each module split into 2 days (Lecture + Problem Set/Extension)
  - All marked with `minimalDetails: true` flag
  - Modules: Search, Knowledge, Uncertainty, Optimization, Learning, Neural Networks, Language
- ✅ Implemented Bridge Sprint days 64-65 with full details:
  - Day 64: ML to Transformer Conceptual
  - Day 65: Reproducibility & Environment
- ✅ Removed 86 lines of duplicate/incorrect days
- ✅ File now has clean 21-day structure (Days 50-70) with no duplicates

## What Remains 🔄

### Critical: Days 66-70 Content
**Current State:** Days 66-70 exist but are marked as `inactive: true, supersededBy` (leftover from old structure)

**Required Changes:**
- **Days 66-67**: Replace with active Bridge Sprint content (full details):
  - Day 66: Data Pipeline Skeleton (char-level Dataset, DataLoader, integration test)
  - Day 67: Attention Math & Masking (scaled dot-product, causal masking, sanity tests)
- **Days 68-70**: Replace with active Early Start placeholders:
  - Day 68: "Early Phase 4 Start (Optional)" - recommend beginning DL Core
  - Day 69-70: "Continue Phase 4 if started early" - buffer days

**Location in File:** Lines 862-921 in `assets/js/data/planPhases.js`

### HTML & Documentation Updates
1. **`phases/classical-ml.html`**:
   - Update title to "Phase 3B: CS50AI Survey & Bridge Sprint"
   - Update duration line to "18 days"
   - Add callout explaining structure and early start option
   - Verify rendering of minimalDetails tasks vs full-detail Bridge tasks

2. **`README.md`**:
   - Replace Classical ML references with CS50AI structure  
   - Add rationale for change (efficiency, reduced redundancy)
   - Update phase list (line 42)

3. **`index.html`**:
   - Update timeline and weekly plan sections
   - Add footnote about Day 68 early start option

4. **`docs/cs50ai/`**:
   - Update `mapping.md` with new two-day structure table
   - Update `summary.md` headings for 2-day format
   - Ensure `notes.md` has placeholder sections for all 7 modules

### Validation & Testing
- Verify site loads without console errors
- Test task details toggle (minimalDetails vs full details)
- Verify localStorage persistence
- Check export JSON includes `minimalDetails` property
- Manual browser test of Phase 3 tab
- Screenshot Phase 3 tab showing new structure

## File Statistics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total lines | 4718 | 4632 | -86 |
| Phase 3 days | 28 (with duplicates) | 21 (clean) | Fixed |
| Days 50-63 | Missing/compressed | 14 days (2-day modules) | Added |
| Days 64-67 | Compressed (4 days) | Days 64-65 done, 66-67 pending | In Progress |
| Days 68-70 | Missing | Placeholders (need activation) | Pending |

## Implementation Approach

The restructure was done incrementally:
1. Created archive and documentation stubs
2. Updated phase metadata
3. Added CS50AI days 50-63 with proper structure
4. Added Bridge Sprint days 64-65
5. Removed duplicate days (3 commits, surgical fixes)
6. **NEXT**: Replace days 66-70 content

## Testing Strategy

Once days 66-70 are fixed:
1. Open `index.html` in browser
2. Navigate to Phase 3 tab
3. Verify days 50-70 display correctly
4. Check that minimalDetails tasks show "Show details" toggle
5. Check that Bridge Sprint days (64-67) show full details immediately
6. Verify early start days (68-70) display appropriate guidance
7. Test checkbox persistence with localStorage
8. Export JSON and verify structure

## Notes for Completion

- The core data structure is correct and clean
- Days 66-70 just need content replacement (lines 862-921)
- All other changes are straightforward HTML/text updates
- The `minimalDetails` flag is already recognized by the site JS
- Total remaining work: ~2-3 hours for careful implementation and testing

---

**Last Updated:** 2025-11-10  
**Commits:** 4 (initial exploration, stubs, duplicate removal, fix)  
**Status:** ~75% complete, data structure foundation solid
