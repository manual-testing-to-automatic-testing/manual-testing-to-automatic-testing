# 7.1.3 Identify Where Test Automation Produces Unexpected Results

Part of [7 Verifying the Test Automation Solution](7-verifying-the-test-automation-solution.md), [7.1 Verification of the Test Automation Infrastructure](7-1-verification-of-the-test-automation-infrastructure.md).

**Learning objective:** TAE-7.1.3 (K2).

## In short

When a test fails, or passes, unexpectedly, find the root cause: it may be in the test, the system, the framework, the hardware, or the network.

## Key ideas

- **Unexpected passes matter as much as unexpected failures.** A test that passes when it should not is hiding a defect.
- **Root cause analysis** looks at test logs, performance data, and the test's set-up and tear-down.
- **Isolate:** run a few tests on their own.
- **Intermittent failures** are the hardest. The defect can be in the test case, the SUT, the framework, the hardware, or the network. Monitoring system resources can give clues; debugging may be needed; and a test analyst, business analyst, developer, or system engineer may need to help.
- **Check the assertions.** A test with missing assertions gives an inconclusive result: it can pass without checking anything.

## In this programme

A walkthrough that only prints, like the original testingexamples demos, always "passes", which is why [Module 11 From walkthrough to real test](../../module-11-walkthrough-to-real-test/index.md) adds real assertions, and why every exercise asks you to change an expected value and watch the test fail.

## Teach it (30 minutes)

Give pairs four tests: one with no assertions, one with a fixed sleep, one that depends on another test's data, and one that is correct. Pairs predict which can give unexpected results, and why, then run them to check.

## Check yourself

1. Why does an unexpected pass need investigating?
2. Name four places where the defect behind an intermittent failure can be.
3. What happens when a test is missing its assertions?

---

Previous: [7.1.2 Explain the Correct Behavior for a Given Automated Test Script and/or Test Suite](7-1-2-explain-the-correct-behavior-for-a-given-automated-test-script-and-or-test-suite.md) · [Contents](index.md) · Next: [7.1.4 Explain How Static Analysis Can Aid Test Automation Code Quality](7-1-4-explain-how-static-analysis-can-aid-test-automation-code-quality.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 7.1.3. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
