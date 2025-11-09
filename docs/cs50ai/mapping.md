# CS50AI Integration Module Mapping

This document maps the old Classical ML phase (Days 50-70) to the new CS50AI Integration Module structure, showing how CS50AI course units align with depth extensions.

## Overview

The CS50AI Integration Module replaces the repetitive classical ML curriculum with Harvard's CS50 Introduction to AI course, supplemented by custom depth extensions. This provides broader AI survey coverage while maintaining hands-on implementation requirements.

## Week-by-Week Mapping

### Week A: Search Algorithms (Days 50-53)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 50 | Search 0 | DFS, BFS basics | Heuristic benchmark suite |
| 51 | Search 1 | Greedy best-first, A* | Custom heuristic design |
| 52 | Search 2 | Minimax algorithm | Alpha-beta optimization |
| 53 | Search 3 | Depth-limited minimax | Game tree visualization |

**Old Classical ML Days 50-53:** sklearn introduction, logistic regression, classification metrics, confusion matrices

**Rationale for Change:** CS50AI's search algorithms provide foundational AI concepts (state space, heuristics, adversarial search) that are more broadly applicable than repetitive sklearn exercises.

### Week B: Knowledge & Inference (Days 54-56)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 54 | Knowledge 0 | Propositional logic | SAT solver implementation |
| 55 | Knowledge 1 | Model checking | Custom inference engine |
| 56 | Knowledge 2 | Resolution, first-order logic | Logic puzzle solver |

**Old Classical ML Days 54-56:** Precision/recall/F1, ROC-AUC curves, stratified k-fold

**Rationale for Change:** Logical reasoning and inference are fundamental to AI systems and provide better preparation for understanding LLM reasoning capabilities than additional sklearn metrics.

### Week C: Optimization & CSP (Days 57-59)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 57 | Optimization 0 | Hill climbing, simulated annealing | Hyperparameter tuning demo |
| 58 | Optimization 1 | Constraint satisfaction problems | Sudoku/scheduling solver |
| 59 | Optimization 2 | Backtracking, arc consistency | CSP visualization tool |

**Old Classical ML Days 57-59:** Learning curves, model selection, Week 8 review

**Rationale for Change:** Optimization algorithms are directly relevant to ML training, and CSP provides clearer problem-solving skills than learning curve analysis alone.

### Week D: Supervised Learning & Metrics (Days 60-64)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 60 | Learning 0 | SVM, regression basics | Compare with sklearn implementation |
| 61 | Learning 1 | Overfitting, regularization | Regularization strength sweep |
| 62 | Learning 2 | Train/val/test splits, metrics | Calibration curves |
| 63 | Learning 3 | Cross-validation | Precision-recall curve analysis |
| 64 | Learning 4 | Ensemble methods intro | ROC curve comparison across models |

**Old Classical ML Days 60-64:** SVM concepts, decision trees, random forests, gradient boosting, bias-variance

**Rationale for Change:** CS50AI covers these topics more efficiently, allowing time for depth extensions on calibration and precision-recall analysis that are more relevant to LLM evaluation.

### Week E: Neural Networks Bridge (Days 65-67)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 65 | Neural Networks 0 | Perceptron, activation functions | Raw PyTorch MLP from scratch |
| 66 | Neural Networks 1 | Backpropagation intuition | Manual gradient computation |
| 67 | Neural Networks 2 | Deep learning overview | Bridge to Phase 4 (PyTorch tensors) |

**Old Classical ML Days 65-67:** Unsupervised learning (K-Means), PCA application, dimensionality reduction

**Rationale for Change:** Neural network fundamentals provide a more natural bridge to Phase 4 (Deep Learning Core) than unsupervised methods, which are less central to the LLM-focused curriculum.

### Week F: Optional/Buffer (Days 68-70)

| Day | CS50AI Unit | Topics Covered | Depth Extension |
|-----|-------------|----------------|-----------------|
| 68 | RL 0 (optional) | Q-learning basics | OpenAI Gym environment |
| 69 | NLP 0 (optional) | Language models preview | Markov chain text generation |
| 70 | Review/Buffer | Phase 3 retrospective | Complete unfinished tasks, polish artifacts |

**Old Classical ML Days 68-70:** Classical ML mini-project, project report, model selection justification

**Rationale for Change:** Optional RL/NLP units preview Phase 6+ topics, and buffer day allows completion and integration of Phase 3 learning.

## Deliverables Comparison

### Old Classical ML Phase Deliverables
- `classical_ml_report.md`: sklearn pipelines, model comparison tables
- Jupyter notebooks: classification metrics, ensemble methods, clustering
- Artifact images: confusion matrices, ROC curves, learning curves

### New CS50AI Module Deliverables
- `docs/cs50ai/summary.md`: Comprehensive module completion summary
- `docs/cs50ai/mapping.md`: This file (mapping old to new structure)
- Depth Extension notebooks: Heuristic benchmarks, SAT solver, calibration curves, PyTorch MLP, etc.
- CS50AI problem set solutions (external links to CS50 platform)
- Reflection documents for each week

## Learning Objectives Preserved

Despite the curriculum change, these classical ML learning objectives are **preserved**:

1. **Supervised Learning:** Covered in Days 60-64 (SVM, regression, overfitting, regularization)
2. **Model Evaluation:** Covered comprehensively in Days 62-64 (metrics, cross-validation, calibration)
3. **Ensemble Methods:** Introduced in Day 64 (CS50AI Learning 4)
4. **Neural Network Basics:** Covered in Days 65-67 with better PyTorch bridge

## Learning Objectives Enhanced

These objectives are **enhanced** by the CS50AI integration:

1. **AI Fundamentals:** Search, logic, and optimization provide broader AI understanding
2. **Problem-Solving Skills:** Heuristic design, constraint satisfaction improve algorithm design
3. **Bridge to Advanced Topics:** NN fundamentals and optional RL/NLP preview Phase 6+
4. **Hands-On Implementation:** Depth extensions require custom implementations beyond course materials

## Time Allocation

- **CS50AI Course Content:** ~40% of time (lectures, problem sets)
- **Depth Extensions:** ~40% of time (custom notebooks, implementations)
- **Reflection & Integration:** ~20% of time (notes, retrospective, artifact polish)

Total: 21 days × 3-4 hours/day = 63-84 hours of focused work

## Success Criteria

Phase 3B completion requires:

1. All CS50AI problem sets submitted (Search, Knowledge, Optimization, Learning)
2. All Depth Extension notebooks completed with artifacts
3. `docs/cs50ai/summary.md` filled out (≥5 pages)
4. Phase 3 retrospective document with baseline metrics
5. At least 80% of tasks checked off in daily tracking

## References

- [CS50 AI Course](https://cs50.harvard.edu/ai/)
- [CS50 AI Syllabus](https://cs50.harvard.edu/ai/2024/syllabus/)
- Original Classical ML curriculum: See `assets/js/data/planPhases.js` (git history)

---

**Created:** 2025-11-09  
**Last Updated:** 2025-11-09
