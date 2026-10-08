# 8.1.3 Restructure the Automated Testware to Align with System Under Test Updates

Part of [8 Continuous Improvement](8-continuous-improvement.md), [8.1 Continuous Improvement Opportunities for Test Automation](8-1-continuous-improvement-opportunities-for-test-automation.md).

**Learning objective:** TAE-8.1.3 (K3).

## In short

When the system changes, change the test automation with it, in small, measured steps, so that tests keep running reliably.

## Key ideas

- **Any change**, however small, can affect the reliability and performance of the TAS.
- **Identify what changes:** testware, custom function libraries, or the operating system.
- **Change incrementally**, with a minimum viable product mindset: measure the effect on a limited run of tests, then roll out fully, and finish with a full regression run. Find the root cause of any new failures, to make sure the improvement did not cause them.
- **Improve core libraries** with new, more efficient techniques, for this project and future ones.
- **Consolidate functions** that act on the same kind of control, such as several functions that each read one type of dropdown, into fewer, more general ones.
- **Refactor the architecture** to fit the changed SUT, rather than bolting new features on.
- **Keep naming consistent** with the standards already in place.
- **Review existing tests:** split tests that are complex and slow, and remove tests that rarely run or no longer add value.

## In this programme

When your team's product changes a page, the page object from [Module 11](../../module-11-walkthrough-to-real-test/index.md) is where you make the change: update its locator, run that page's tests, then the full regression suite in CI.

## Teach it (45 minutes)

Change one id on a copy of a page used by the suite. Pairs make the smallest change to the testware that fixes it, run a limited set of tests, then the full suite, and note how many files they had to touch.

## Check yourself

1. Why change test automation incrementally?
2. What is the final step that shows a change had no adverse effect?
3. When should an existing test be split, or removed?

---

Previous: [8.1.2 Analyze the Technical Aspects of a Deployed Test Automation Solution and Provide Recommendations for Improvement](8-1-2-analyze-the-technical-aspects-of-a-deployed-test-automation-solution-and-provide-recommendations-for-improvement.md) · [Contents](index.md) · Next: [8.1.4 Summarize Opportunities for Use of Test Automation Tools](8-1-4-summarize-opportunities-for-use-of-test-automation-tools.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 8.1.3. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
