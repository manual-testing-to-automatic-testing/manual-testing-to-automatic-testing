# 3.1.3 Apply Layering of Test Automation Frameworks

Part of [3 Test Automation Architecture](3-test-automation-architecture.md), [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md).

**Learning objective:** TAE-3.1.3 (K3).

## In short

Organise test code in a few layers, typically **test scripts**, **business logic**, and **core libraries**, so that each change happens in one place and core code can be reused across projects.

## Key ideas

The **test automation framework (TAF)** is the foundation of a TAS: a **test harness** (the test runner), test libraries, test scripts, and test suites. Layers group code with the same purpose. Keep the number of layers low: one layer per purpose makes the design complicated.

| Layer | Holds | Rule |
| --- | --- | --- |
| **Test scripts** | The test cases and suite annotations | Calls the business logic layer only, never the core libraries directly |
| **Business logic** | Everything specific to the SUT: test steps, user flows, API calls, SUT configuration | Builds on the core libraries, by inheritance or through their facades |
| **Core libraries** | Everything independent of any SUT | Reusable by any project on the same technology |

**Scaling.** Shared core libraries let several frameworks, and several teams, build on the same base.

## In this programme

```text
tests/ui/referral.test.js        test scripts: describe/it blocks, with assertions
tests/support/referral-page.js   business logic: the referral page and its user flows
tests/support/driver.js          core library: start and stop the browser, explicit waits
```

A test script calls `referralPage.submit(patient)`, never `driver.findElement(...)` directly.

## Teach it (45 minutes)

Take a linear Selenium script from Module 10. In pairs, split it into three files, one per layer, so that the test script contains no locators. Run it again to check it still passes.

## Check yourself

1. Name the three layers and what each holds.
2. Why should test scripts not call core libraries directly?
3. Why is it recommended to keep the number of layers low?

---

Previous: [3.1.2 Explain How to Design a Test Automation Solution](3-1-2-explain-how-to-design-a-test-automation-solution.md) · [Contents](index.md) · Next: [3.1.4 Apply Different Approaches for Automating Test Cases](3-1-4-apply-different-approaches-for-automating-test-cases.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 3.1.3. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
