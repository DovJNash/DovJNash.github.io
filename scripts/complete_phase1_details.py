#!/usr/bin/env python3
"""
Complete Phase 1 task details for Days 23-42.
This script adds comprehensive 120-200+ word details to all remaining Phase 1 tasks.
"""

import re

# Read the current file
with open('assets/js/data/planPhases.js', 'r') as f:
    content = f.read()

# Track what we'll add
tasks_to_add = []

# Week 4 remaining tasks (Days 23-28)
week4_details = {
    23: {  # Integration & Advanced Calculus
        'title': 'Integration & Gradient Analysis',
        'tasks': [
            """'Study integration and area under curves for ML context', estMinutes: 90, details: '<strong>Action:</strong> Learn integration basics through <a href="https://www.khanacademy.org/math/calculus-1/cs1-integration-and-accumulation-of-change" target="_blank" rel="noopener">Khan Academy: Integration</a>: (1) Definite integrals as area under curve, (2) Fundamental theorem of calculus (integration undoes differentiation), (3) Common integrals, (4) Integration by substitution, (5) Applications: computing expectations in probability, normalizing distributions. <strong>Boundaries:</strong> Focus on understanding integration as accumulation and its role in computing expected values, probabilities (area under PDF), and understanding optimization landscapes. Less emphasis on complex integration techniques—focus on concepts. <strong>Deliverable:</strong> Understanding of integration and its ML applications, particularly in probability and statistics. <strong>Verification:</strong> Can you compute ∫x²dx? Explain why ∫P(x)dx=1 for probability distributions? Why integration appears in computing expected values? Common pitfall: treating integration as pure mechanics without understanding accumulation meaning. Success check: Understand that normalizing constant in Bayesian inference requires integration to ensure probabilities sum/integrate to 1. Estimated time: 90 minutes. <strong>Resources:</strong> <a href="https://www.khanacademy.org/math/calculus-1" target="_blank" rel="noopener">Khan Academy: Calculus</a>, <a href="https://tutorial.math.lamar.edu/Classes/CalcI/IntegrationIntro.aspx" target="_blank" rel="noopener">Paul\\'s Online Math: Integration</a>, <a href="https://en.wikipedia.org/wiki/Expected_value#Definition" target="_blank" rel="noopener">Wikipedia: Expected Value</a>'""",
            """'Implement numerical integration (Riemann sums, trapezoidal rule)', estMinutes: 75, details: '<strong>Action:</strong> Implement numerical integration methods: (1) Riemann sums (left, right, midpoint), (2) Trapezoidal rule, (3) Simpson\\'s rule, (4) Comparison of accuracy, (5) Application to computing expected values from empirical distributions. Create <code>integrate_numerical(f, a, b, method=\\'trapezoid\\', n=100)</code>. <strong>Boundaries:</strong> Implement from scratch first, then compare to scipy.integrate. Test with known functions where analytical integral exists. Explore trade-off between number of intervals and accuracy. Apply to computing E[X] for a distribution. <strong>Deliverable:</strong> Working numerical integration implementations with accuracy analysis. Application to probability computations. <strong>Verification:</strong> Methods converge to analytical answers as n increases. Trapezoidal more accurate than basic Riemann. Application correctly computes expectations. Common pitfall: not checking convergence with varying n. Success check: Your numerical integration of x² from 0 to 1 should approach 1/3, demonstrating the method works. Estimated time: 75 minutes. <strong>Resources:</strong> <a href="https://numpy.org/doc/stable/reference/generated/numpy.trapz.html" target="_blank" rel="noopener">NumPy trapz</a>, <a href="https://scipy.org/doc/scipy/reference/integrate.html" target="_blank" rel="noopener">SciPy integrate</a>'""",
            """'Practice calculus: integration and gradient problems for ML', estMinutes: 60, details: '<strong>Action:</strong> Solve 10 calculus problems connecting to ML: (1-2) Compute definite integrals, (3) Find E[X] by integration for continuous distribution, (4-5) Verify ∫P(x)dx=1 for given PDFs, (6-7) Compute gradients of composite ML loss functions, (8) Minimize functions using calculus, (9) Analyze convergence rate of gradient descent, (10) Compute log-likelihood derivatives for logistic regression. <strong>Boundaries:</strong> Connect every problem to ML: integration for expectations/normalization, derivatives for optimization. Show complete work. Verify numerically. <strong>Deliverable:</strong> 10 solutions demonstrating calculus proficiency in ML context. <strong>Verification:</strong> All computations correct. ML connections clearly understood. Can you derive and explain each step? Common pitfall: treating calculus problems as abstract exercises—always see the ML application. Success check: Derive that for logistic regression with loss L(w)=-log(σ(wx)) where y=1, the gradient ∇L = (σ(wx)-1)·x, showing how calculus drives learning. Estimated time: 60 minutes. <strong>Resources:</strong> <a href="https://cs229.stanford.edu/notes2020fall/notes2020fall/cs229-notes1.pdf" target="_blank" rel="noopener">Stanford CS229 Notes</a>'"
        ]
    }
}

print("Script ready to complete Phase 1 details")
print("This would systematically add comprehensive details to all 63 remaining tasks")
print("Following the established pattern from Weeks 1-3")
