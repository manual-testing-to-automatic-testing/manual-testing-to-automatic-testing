# 1.2.2 Select Suitable Test Automation Tools For a Given System Under Test

Part of [1 Introduction and Objectives for Test Automation](1-introduction-and-objectives-for-test-automation.md), [1.2 Test Automation in the Software Development Lifecycle](1-2-test-automation-in-the-software-development-lifecycle.md).

**Learning objective:** TAE-1.2.2 (K2).

## In short

Choose tools by first analysing the system under test and the project's requirements, then the team's skills, and always the cost.

## Key ideas

1. **Analyse the SUT first.** Identify the project requirements that will be the baseline for choosing tools. A web user interface and a web service need different tool features, so understand what the project wants to achieve over time.
2. **Consider cost.** You can use as many tools as you like, but every one costs something. Choosing between a commercial off-the-shelf tool and a custom solution built on open-source parts can be complex.
3. **Consider the team.** If testers have little or no programming experience, a **low-code** or **no-code** tool may be the right choice.
4. **Match the language.** For technical testers, a tool in the same language as the SUT helps: developers can help debug test code, and people can cross-train between teams.

## In this programme

The programme's own choice is a worked example: JavaScript, Selenium, and Mocha (Decision 1 in the [decision log](../../../planning/decision-log.md)). The web products the teams test are built with JavaScript, Selenium is open source and standard, and the basics modules teach the language first, so the team can grow into a coded solution rather than a recorder.

## Teach it (30 minutes)

Give pairs a short description of two systems: a patient-facing web booking site, and a FHIR API with no user interface. Ask them to list three requirements for a tool for each, and say whether the same tool could serve both.

## Check yourself

1. What should you analyse before you choose a tool?
2. When is a low-code or no-code tool a sensible choice?
3. Why does it help to choose a tool in the same language as the SUT?

---

Previous: [1.2.1 Explain How Test Automation is Applied Across Different Software Development Lifecycle Models](1-2-1-explain-how-test-automation-is-applied-across-different-software-development-lifecycle-models.md) · [Contents](index.md) · Next: [2 Preparing for Test Automation](2-preparing-for-test-automation.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 1.2.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
