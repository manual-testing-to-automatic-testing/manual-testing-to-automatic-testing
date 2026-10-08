# 8.1.1 Discover Opportunities for Improving Test Cases Through Data Collection and Analysis

Part of [8 Continuous Improvement](8-continuous-improvement.md), [8.1 Continuous Improvement Opportunities for Test Automation](8-1-continuous-improvement-opportunities-for-test-automation.md).

**Learning objective:** TAE-8.1.1 (K3).

## In short

Use data about test runs to find which tests to improve: **test histograms** show fragile tests, **AI** can repair broken locators, and **schema validation** replaces many small API assertions.

## Key ideas

**Test histograms** show test results and their data over time (exception logs, error messages, screenshots). They reveal fragile tests, which can then be refactored or rethought.

**Artificial intelligence.** Some tools now detect when a user interface locator has changed and, using machine learning and image recognition, find the new locator, fix the test (**self-healing**), and report the change. This speeds up maintenance, but every change should still be reviewed.

**Schema validation** checks an API response, or database fields, against a schema: mandatory elements are present, and of the right type. Instead of writing an assertion for every field, one schema check does it, and reports exactly what broke. For example, if a response has six mandatory string fields, a schema replaces at least six assertions, plus the null checks.

## In this programme

A FHIR `Patient` resource has a published structure, so an API test against the sandbox in [Module 12](../../module-12-api-integration-fhir/index.md) can validate the whole response against it, rather than checking fields one by one. The flaky-test exercise in [Module 15](../../module-15-quality-engineering/index.md) uses run history the way a test histogram does.

## Teach it (45 minutes)

Give groups the results of twenty runs of a ten-test suite. Groups draw a histogram of failures per test, pick the two most fragile tests, and propose an improvement for each.

## Check yourself

1. What does a test histogram help you find?
2. What is a self-healing test, and why should its changes still be reviewed?
3. How does schema validation make API tests shorter?

---

Previous: [8.1 Continuous Improvement Opportunities for Test Automation](8-1-continuous-improvement-opportunities-for-test-automation.md) · [Contents](index.md) · Next: [8.1.2 Analyze the Technical Aspects of a Deployed Test Automation Solution and Provide Recommendations for Improvement](8-1-2-analyze-the-technical-aspects-of-a-deployed-test-automation-solution-and-provide-recommendations-for-improvement.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 8.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
