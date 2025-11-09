# Classical ML → CS50AI Survey + Bridge Sprint Mapping (Compressed)

This document maps the original 21-day Classical ML phase (Days 50–70) to the new **compressed** CS50AI Survey + Bridge Sprint structure.

## Overview

**Decision Rationale (Option D: Compressed CS50AI + Bridge Sprint):**  
The original Phase 3 (Classical ML Fundamentals) consisted of 21 days of sklearn-focused content. After evaluation, we chose to **compress** CS50AI from 21 days to 7 days + add a 4-day Bridge Sprint (11 days total). This achieves:
- **Maximum efficiency**: One CS50AI module per day, eliminating deep dives
- **Breadth over depth**: Survey of Search, Knowledge, Uncertainty, Optimization, Learning, Neural Networks, Language
- **Early Phase 4 start**: Deep Learning Core begins at Day 61 (10 days earlier)
- **Focused preparation**: 4-day bridge specifically targets Transformer readiness

## New Phase 3B Structure (11 Days Total)

### Part 1: CS50AI Survey (Days 50–56, 7 days)
Compressed one-module-per-day format. Each day: lecture + problem set + brief reflection. Uses `minimalDetails: true` with ~50-80 word task descriptions.

| Day | CS50AI Module | Topics | Notes |
|-----|---------------|--------|-------|
| 50 | Search | DFS, BFS, A*, minimax, alpha-beta | CS50AI Lecture 0 + problem set |
| 51 | Knowledge | Propositional logic, inference, model checking | CS50AI Lecture 1 + problem set |
| 52 | Uncertainty | Probability, Bayes' rule, Bayesian networks | CS50AI Lecture 2 + problem set |
| 53 | Optimization | Hill climbing, simulated annealing, CSP | CS50AI Lecture 3 + problem set |
| 54 | Learning | k-NN, perceptron, SVM, overfitting | CS50AI Lecture 4 + problem set |
| 55 | Neural Networks | Backprop, CNNs, TensorFlow/Keras intro | CS50AI Lecture 5 + problem set |
| 56 | Language | NLP, n-grams, word2vec, attention (+RL brief) | CS50AI Lecture 6 + problem set + survey completion |

**Deliverable**: `docs/cs50ai/notes.md` (consolidated notes file for all 7 modules)

### Part 2: Bridge Sprint (Days 57–60, 4 days)
Full 120-180 word details. Prepares for Phase 4 Transformer implementation.

| Day | Bridge Topic | Key Activities | Deliverables |
|-----|--------------|----------------|--------------|
| 57 | Conceptual Bridge | ML→Transformer rationale, task selection, retrospective | `docs/bridge/ml_to_transformer_rationale.md`, `baseline_task.md`, `phase3_retrospective.md` |
| 58 | Reproducibility & Environment | Seeds, determinism, environment setup, git workflow | `docs/bridge/reproducibility_checklist.md`, `environment_setup.md`, `git_workflow.md` |
| 59 | Data Pipeline | PyTorch Dataset/DataLoader, character-level tokenization | `notebooks/bridge/char_dataset.ipynb`, `pipeline_test.ipynb` |
| 60 | Attention Math | Scaled dot-product, causal masking, sanity tests | `notebooks/bridge/attention_math.ipynb`, `attention_tests.ipynb` |

**Bridge Artifacts Folder**: `docs/bridge/` + `notebooks/bridge/`

### Days 61–70: Superseded (Early Phase 4 Start)
All marked as `inactive: true` with `supersededBy: 'Phase 4: Deep Learning Core (early start)'`.  
Phase 4 begins at Day 61 instead of Day 71 (**10-day acceleration**).

## Comparison: Old vs New

| Aspect | Old Phase 3 (21 days) | New Phase 3B (11 days) |
|--------|----------------------|------------------------|
| **Duration** | Days 50-70 | Days 50-60 (+early Phase 4 at 61) |
| **Focus** | sklearn classical ML, repetitive exercises | CS50AI AI survey + Transformer bridge |
| **Content** | Classification, regression, CV, metrics × 21 days | 7-day CS50AI + 4-day bridge sprint |
| **Depth** | Deep sklearn practice | Broad AI survey, targeted bridge |
| **Overlap with Phase 4** | High (ML fundamentals repeated) | Low (complementary breadth) |
| **Phase 4 Start** | Day 71 | Day 61 (**10 days earlier**) |

## Learning Objectives Mapping

### What Was Preserved
- Fundamentals of supervised learning (Day 54: CS50AI Learning)
- Neural network basics (Day 55: CS50AI Neural Networks)
- Practical implementation experience (CS50AI problem sets)

### What Was Replaced
- Repetitive sklearn workflows → CS50AI survey modules
- Deep classification/regression practice → Broader AI fundamentals
- Week-long ML topics → Compressed daily modules

### What Was Added
- Search algorithms and heuristics (Day 50)
- Logical reasoning and inference (Day 51)
- Probabilistic reasoning (Day 52)
- Optimization and CSP (Day 53)
- NLP and attention introduction (Day 56)
- 4-day bridge sprint (Days 57-60) for Phase 4 preparation

## Notes File Structure

### `docs/cs50ai/notes.md`
Single consolidated notes file for all 7 CS50AI modules:
```markdown
# CS50AI Survey Notes

## Module 0: Search (Day 50)
[lecture notes, key concepts, problem set insights]

## Module 1: Knowledge (Day 51)
...

## Module 6: Language (Day 56)
...

## Survey Completion Checklist
- [ ] All 7 lectures watched
- [ ] All 7 problem sets completed
- [ ] Notes consolidated
- [ ] Gaps identified for Phase 4
```

### Bridge Documentation
Separate files in `docs/bridge/`:
- `ml_to_transformer_rationale.md` (Day 57)
- `baseline_task.md` (Day 57)
- `phase3_retrospective.md` (Day 57)
- `reproducibility_checklist.md` (Day 58)
- `environment_setup.md` (Day 58)
- `git_workflow.md` (Day 58)

## Implementation Notes

- **minimalDetails Flag**: Days 50-56 use `minimalDetails: true` for ~50-80 word task descriptions
- **Full Details**: Days 57-60 use standard 120-180 word details with Action/Boundaries/Deliverables/Verification/Pitfalls/Sources
- **Inactive Days**: Days 61-70 have `inactive: true` flag
- **Links**: All external links use `target="_blank" rel="noreferrer"`
- **Global Day Numbering**: Preserved unchanged (50-70)

## Success Metrics

### Phase 3B Completion Criteria
- **CS50AI Survey**: 7/7 lectures watched, 7/7 problem sets completed
- **Bridge Sprint**: All 11 artifacts created (7 docs + 4 notebooks)
- **Readiness**: Phase 3 retrospective completed, Phase 4 environment set up
- **Timeline**: Completed by end of Week 9 (enabling Day 61 Phase 4 start)

### Readiness Assessment for Phase 4
- [ ] CS50AI attention mechanism understood
- [ ] PyTorch Dataset/DataLoader implemented
- [ ] Scaled dot-product attention coded from scratch
- [ ] Causal masking working correctly
- [ ] Baseline task selected and documented
- [ ] Development environment ready

