# 7.1.4 Explain How Static Analysis Can Aid Test Automation Code Quality

Part of [7 Verifying the Test Automation Solution](7-verifying-the-test-automation-solution.md), [7.1 Verification of the Test Automation Infrastructure](7-1-verification-of-the-test-automation-infrastructure.md).

**Learning objective:** TAE-7.1.4 (K2).

## In short

Scan test code, not just product code, with **static analysis**: it finds defects, poor practice, and security problems, such as passwords written in plain text, before they cause harm.

## Key ideas

- Static code analysis finds vulnerabilities and defects in code, in the SUT and in the framework, without running it.
- Automated scans in pipelines give early feedback, and are central to **DevSecOps**: DevOps with an emphasis on security.
- Findings are usually graded critical, high, medium, or low, so teams can prioritise. Some tools suggest fixes.
- For test automation engineers, these tools also measure quality, suggest where to comment code, improve resource handling (such as `try` and `catch`, and better loops), and flag poor library calls.
- **Test code is a security risk too.** A common mistake is writing a test account's password in plain text in a test script. Even though test code is not deployed with the product, a leaked password is still a vulnerability. Scan test code with the same tools and rules.

## In this programme

The practice repository runs ESLint and gitleaks, a secret scanner, on every pull request, so a password or token in a test fails the pipeline before it is merged. [Module 14 Safe and lawful test automation](../../module-14-safe-and-lawful-automation/index.md) explains why secrets and personal data never belong in test code.

## Teach it (30 minutes)

Plant three problems in a copy of a test file: an unused variable, a missing `await`, and a fake password. Pairs run the linter and a secret scanner, and see which tool finds which problem.

## Check yourself

1. What does static analysis find, and when does it run?
2. Why should test automation code be scanned as well as product code?
3. Give an example of a security problem static analysis can find in test code.

---

Previous: [7.1.3 Identify Where Test Automation Produces Unexpected Results](7-1-3-identify-where-test-automation-produces-unexpected-results.md) · [Contents](index.md) · Next: [8 Continuous Improvement](8-continuous-improvement.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 7.1.4. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
