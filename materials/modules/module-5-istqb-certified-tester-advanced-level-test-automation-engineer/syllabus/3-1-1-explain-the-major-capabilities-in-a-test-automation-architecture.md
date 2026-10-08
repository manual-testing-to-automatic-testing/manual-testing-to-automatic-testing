# 3.1.1 Explain the Major Capabilities in a Test Automation Architecture

Part of [3 Test Automation Architecture](3-test-automation-architecture.md), [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md).

**Learning objective:** TAE-3.1.1 (K2).

## In short

The **generic test automation architecture (gTAA)** is a map of what test automation connects to and what it must be able to do: generate, define, execute, and adapt tests.

## Key ideas

**Four interfaces** connect test automation to the world around it:

- the **SUT interface**: between the system under test and the test automation framework
- the **project management interface**: progress of the automation work
- the **test management interface**: which test case definitions map to which automated tests
- the **configuration management interface**: CI/CD pipelines, environments, and testware.

**Four capabilities** that tools and libraries provide:

| Capability | What it does |
| --- | --- |
| **Test generation** (optional) | Designs test cases automatically from a model, as in model-based testing |
| **Test definition** | Defines test cases and suites, separate from the SUT and the tools |
| **Test execution** | Runs tests, and logs and reports the results |
| **Test adaptation** | Adapts tests to the SUT's interfaces, through adaptors for APIs, protocols, and services |

## In this programme

The practice repository has all four, except generation: test definitions are the `*.test.js` files and their `spec/index.md`; Mocha executes and reports; Selenium WebDriver and Node's `fetch` are the adaptors to the browser and the FHIR API; and GitHub Actions is the configuration management interface.

## Teach it (1 hour)

Draw the gTAA as four boxes around a central "test automation" box. Ask pairs to label each part with the tool or file that plays that role in the practice repository.

## Check yourself

1. Name the four interfaces of the gTAA.
2. Which capability is optional, and why?
3. What does the test adaptation capability do?

---

Previous: [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md) · [Contents](index.md) · Next: [3.1.2 Explain How to Design a Test Automation Solution](3-1-2-explain-how-to-design-a-test-automation-solution.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 3.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
