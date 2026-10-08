# 7.1.2 Explain the Correct Behavior for a Given Automated Test Script and/or Test Suite

Part of [7 Verifying the Test Automation Solution](7-verifying-the-test-automation-solution.md), [7.1 Verification of the Test Automation Infrastructure](7-1-verification-of-the-test-automation-infrastructure.md).

**Learning objective:** TAE-7.1.2 (K2).

## In short

Check that test suites are complete, consistent, repeatable, and do not change the behaviour of the system they test.

## Key ideas

- **Check the composition of the suite:** every test has expected results, its test data is present, and the versions of the framework and the SUT are the right ones.
- **Verify new framework features** the first time tests use them, and watch them closely.
- **Repeatability:** a test run again must give the same result. Tests that do not, for example because of race conditions, should be moved out of the active suite and analysed separately, or they waste everyone's time.
- **Intrusiveness:** a TAS tightly coupled to the SUT can change how it behaves, or how fast it runs, compared with manual use. Failures that only happen under automation reduce trust in it; developers may ask for failures to be reproduced manually.

## In this programme

The practice repository's `tests/flaky/` folder holds a deliberately flaky test, kept apart from the main suite, which is how the syllabus says to treat unreliable tests until their cause is found ([Module 15](../../module-15-quality-engineering/index.md)).

## Teach it (1 hour)

Run one browser test ten times in a row, in a loop. Pairs record the results, and, if any run differs, find what made it unrepeatable.

## Check yourself

1. What does checking the composition of a suite involve?
2. What should happen to a test that does not give reliable results?
3. What is the intrusiveness of a test tool, and why does it matter?

---

Previous: [7.1.1 Plan to Verify the Test Automation Environment Including Test Tool Setup](7-1-1-plan-to-verify-the-test-automation-environment-including-test-tool-setup.md) · [Contents](index.md) · Next: [7.1.3 Identify Where Test Automation Produces Unexpected Results](7-1-3-identify-where-test-automation-produces-unexpected-results.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 7.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
