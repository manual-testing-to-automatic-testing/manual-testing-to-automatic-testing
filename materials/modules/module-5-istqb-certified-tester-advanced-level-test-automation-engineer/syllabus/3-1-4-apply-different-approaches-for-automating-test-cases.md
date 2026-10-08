# 3.1.4 Apply Different Approaches for Automating Test Cases

Part of [3 Test Automation Architecture](3-test-automation-architecture.md), [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md).

**Learning objective:** TAE-3.1.4 (K3).

## In short

There are several ways to write automated tests, from recording to data-, keyword-, and behaviour-driven approaches. Each trades ease of starting against ease of maintaining.

## Key ideas

| Approach | How it works | Main advantage | Main drawback |
| --- | --- | --- | --- |
| **Capture/playback** | Record manual actions; the tool writes the script (no-code or low-code) | Easy to start | Hard to maintain; tied to the SUT version recorded |
| **Linear scripting** | Write or edit scripts step by step, without custom libraries | Easy to start; easier to edit than recordings | Hard to maintain and scale |
| **Structured scripting** | Reusable libraries of test steps and user journeys | Easy to maintain, scale, and evolve; business logic separate from scripts | Needs programming skill and an initial investment |
| **Test-driven development (TDD)** | Write a failing test, make it pass, refactor: red, green, refactor | Better code quality, structure, testability, and coverage | Takes time to learn; done badly, gives false confidence |
| **Data-driven testing (DDT)** | Structured scripts fed by data files, such as CSV or spreadsheets | Many tests from one script; test analysts can add tests as data | Needs test data management |
| **Keyword-driven testing (KDT)** | Tests are tables of user-level keywords and their data | Analysts can write automated tests; also usable for manual testing | Building and maintaining keywords is complex; heavy for small systems |
| **Behaviour-driven development (BDD)** | Given-When-Then acceptance criteria in feature files, run by a BDD tool | Better communication; scenarios document and test the specification | Edge cases still need adding; often misused as "just natural language" |

TDD and BDD are development methods, but done properly they produce automated tests.

## In this programme

You meet several: the katas in [Module 8](../../module-8-programming-foundations/index.md) use TDD; [Module 11 From walkthrough to real test](../../module-11-walkthrough-to-real-test/index.md) turns a linear walkthrough into a structured suite, from Given-When-Then scenarios; and a Mocha test that loops over an array of synthetic patients is data-driven.

## Teach it (60 minutes)

Give groups one test case, such as "a patient books the first free appointment". Each group writes it in two approaches (for example, linear and data-driven), then lists what would change if the booking page's layout changed.

## Check yourself

1. What is the difference between linear and structured scripting?
2. What are the three steps of TDD?
3. Why is BDD more than writing tests in natural language?

---

Previous: [3.1.3 Apply Layering of Test Automation Frameworks](3-1-3-apply-layering-of-test-automation-frameworks.md) · [Contents](index.md) · Next: [3.1.5 Apply Design Principles and Design Patterns in Test Automation](3-1-5-apply-design-principles-and-design-patterns-in-test-automation.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 3.1.4. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
