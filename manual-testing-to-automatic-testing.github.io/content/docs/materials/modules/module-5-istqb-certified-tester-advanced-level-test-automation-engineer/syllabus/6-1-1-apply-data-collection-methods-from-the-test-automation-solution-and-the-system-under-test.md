# 6.1.1 Apply Data Collection Methods from the Test Automation Solution and the System Under Test

Part of [6 Test Automation Reporting and Metrics](6-test-automation-reporting-and-metrics.md), [6.1 Collection, Analysis and Reporting of Test Automation Data](6-1-collection-analysis-and-reporting-of-test-automation-data.md).

**Learning objective:** TAE-6.1.1 (K3).

## In short

Collect enough data, from both the test automation and the system under test, that every failure can be understood without running it again.

## Key ideas

**Sources:** SUT logs (UI, APIs, applications, web and database servers); test framework logs, as an audit trail; build and deployment logs; production monitoring; and screenshots and screen recordings.

**Build data collection into the testware**, so every test gets it: for example, recording each test's start and end time once, in shared code.

**Assertions decide the status.** The comparison of actual and expected results is best done with assertions, and the status (passed or failed) must be right. Comparisons can ignore expected differences, such as dates and times, while highlighting unexpected ones.

**What the test automation should log:**

- which test is running, with start and end times
- the status: passed, failed, or a **TAS failure** (a defect in the automation, not the SUT), with clear definitions, including inconclusive
- significant test steps, with timing
- random values used, so a run can be reproduced
- on failure: screenshots, crash dumps, stack traces, and copies of logs that might be overwritten.

**SUT logs** should carry timestamps, source locations, error messages, and start-up configuration, and be easy to match with the test logs by time.

**Share and show results:** export in formats other tools use, and show status visually, such as traffic lights, with detail available on request.

## In this programme

The practice repository's Mocha set-up writes a JUnit report for CI, and its browser hooks save a screenshot and the page source when a browser test fails ([Module 13](../../module-13-continuous-integration/index.md)).

## Teach it (45 minutes)

Make a test fail on purpose. Pairs list what they would need to know to explain the failure without rerunning it, then check which of those the current logs and artefacts already give them.

## Check yourself

1. Name five sources of data about a test run.
2. What is a TAS failure, and how is it different from a failed test?
3. Why log random values used by a test?

---

Previous: [6.1 Collection, Analysis and Reporting of Test Automation Data](6-1-collection-analysis-and-reporting-of-test-automation-data.md) · [Contents](index.md) · Next: [6.1.2 Analyze Data from the Test Automation Solution and the System Under Test to Better Understand Test Results](6-1-2-analyze-data-from-the-test-automation-solution-and-the-system-under-test-to-better-understand-test-results.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 6.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
