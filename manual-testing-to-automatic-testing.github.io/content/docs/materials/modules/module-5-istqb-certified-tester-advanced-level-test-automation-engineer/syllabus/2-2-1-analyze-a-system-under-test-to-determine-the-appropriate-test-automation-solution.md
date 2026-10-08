# 2.2.1 Analyze a System Under Test to Determine the Appropriate Test Automation Solution

Part of [2 Preparing for Test Automation](2-preparing-for-test-automation.md), [2.2 Evaluation Process for Selecting the Right Tools and Strategies](2-2-evaluation-process-for-selecting-the-right-tools-and-strategies.md).

**Learning objective:** TAE-2.2.1 (K4).

## In short

Before choosing an approach, gather the requirements for the test automation solution, with other stakeholders, so that it fits the SUT for its whole life.

## Key ideas

Different kinds of applications (web, mobile, web services) need different automation. Investigate with manual testers, business stakeholders, and business analysts, to find as many risks and mitigations as possible. The requirements should answer:

- Which **test process activities** to automate: test management, test design, test generation, or test execution?
- Which **test levels** and **test types** to support?
- Which **roles and skills** will use the solution?
- Which **products, product lines, or families** it must support, which sets its span and lifetime.
- Which **kinds of SUT** it must be compatible with.
- Whether **test data** is available, and how good it is.
- How to **emulate what you cannot reach**, such as a third-party system.

## In this programme

This is a K4 objective: *analyse*. In the capstone ([Module 16](../../module-16-capstone/index.md)), Band 6 and Band 7 participants write this analysis for their own team's product before they build. A typical health care answer to "what can we not reach?" is the national patient lookup service: tests use the practice repository's FHIR sandbox, or a stub, instead.

## Teach it (45 minutes)

Give small groups a one-page description of a referral system: a web front end, a FHIR API, and a link to a national lookup service. Each group answers the seven questions above in a table, then compares its answers with another group's.

## Check yourself

1. Name four questions the requirements for a test automation solution should answer.
2. Why involve manual testers and business analysts in the analysis?
3. How can automation test a system that depends on a third party it cannot reach?

---

Previous: [2.2 Evaluation Process for Selecting the Right Tools and Strategies](2-2-evaluation-process-for-selecting-the-right-tools-and-strategies.md) · [Contents](index.md) · Next: [2.2.2 Illustrate the Technical Findings of a Tool Evaluation](2-2-2-illustrate-the-technical-findings-of-a-tool-evaluation.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 2.2.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
