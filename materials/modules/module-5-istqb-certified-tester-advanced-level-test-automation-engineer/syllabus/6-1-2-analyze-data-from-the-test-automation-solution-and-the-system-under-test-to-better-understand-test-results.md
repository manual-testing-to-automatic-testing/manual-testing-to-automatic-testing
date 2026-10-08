# 6.1.2 Analyze Data from the Test Automation Solution and the System Under Test to Better Understand Test Results

Part of [6 Test Automation Reporting and Metrics](6-test-automation-reporting-and-metrics.md), [6.1 Collection, Analysis and Reporting of Test Automation Data](6-1-collection-analysis-and-reporting-of-test-automation-data.md).

**Learning objective:** TAE-6.1.2 (K4).

## In short

When a test fails, work through a fixed sequence to decide whether the defect is in the system, in the automation, or in the environment, using the automation's data first and the system's second.

## Key ideas

**Analyse the environment, too:** resources such as CPU and memory, single or cross-browser runs, results of previous runs, and web logs of how the software is used.

**Five steps for a failure:**

1. **Seen before?** Check previous runs: it may be a known defect in the SUT or the TAS.
2. **What is the test?** Identify the test case and what it checks, using its id.
3. **Which step failed?** The test logs show this.
4. **What state was the SUT in?** Use screenshots, API and network logs, and other logs, and compare with the expected state.
5. **Unexpected state?** Log a defect, with the evidence.

**Watch for traps:**

- **Actual and expected match, but the test failed:** most likely a defect in the automation, or a mismatch you cannot see.
- **Many tests fail at once:** the environment may have been down; SUT logs show outages.
- **Correlation ids** (or trace ids), carried through every call of one interaction, let you trace a request through the whole system. Log them in your tests.

## In this programme

[Module 15 Quality engineering practice](../../module-15-quality-engineering/index.md) asks you to investigate a flaky test with exactly this sequence, and to classify its cause as the test, the system, or the environment.

## Teach it (45 minutes)

Give groups three failure reports with logs and screenshots: a real defect, a broken locator, and an environment outage. Each group follows the five steps and classifies each failure, with its evidence.

## Check yourself

1. List the five steps for analysing a failure.
2. A test failed, but actual and expected results match. What is the likely cause?
3. What is a correlation id, and how does it help?

---

Previous: [6.1.1 Apply Data Collection Methods from the Test Automation Solution and the System Under Test](6-1-1-apply-data-collection-methods-from-the-test-automation-solution-and-the-system-under-test.md) · [Contents](index.md) · Next: [6.1.3 Explain How a Test Progress Report is Constructed and Published](6-1-3-explain-how-a-test-progress-report-is-constructed-and-published.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 6.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
