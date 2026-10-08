# 2.1.2 Explain How Test Automation is Leveraged within Different Environments

Part of [2 Preparing for Test Automation](2-preparing-for-test-automation.md), [2.1 Understand the Configuration of an Infrastructure to Enable Test Automation](2-1-understand-the-configuration-of-an-infrastructure-to-enable-test-automation.md).

**Learning objective:** TAE-2.1.2 (K2).

## In short

Each environment, from a developer's machine to production, runs different automated tests for a different purpose.

## Key ideas

| Environment | What it is for | Typical automated tests |
| --- | --- | --- |
| **Local development** | Where code is first written and checked | Component, GUI, and API tests; white-box checks in the IDE |
| **Build** | Building the software and checking the build, locally or on a CI agent | Component and component integration tests, and static analysis, without deploying |
| **Integration** | A release candidate, integrated with other systems | Full UI or API suites, black-box only; the first environment with monitoring |
| **Preproduction** | As close to production as possible | Mainly non-functional tests, such as performance; user acceptance testing; monitored |
| **Production** | Real users | Monitoring, and practices that allow testing in production: canary releases, blue/green deployment, and A/B testing |

Environments can be built with containers, virtual machines, or other approaches.

## In this programme

Your practice repository has the first two: you run katas and browser tests locally, and GitHub Actions is the build environment that runs them on every pull request. [Module 13 Continuous integration and DevOps](../../module-13-continuous-integration/index.md) adds the rest of the picture for your team's real product.

## Teach it (25 minutes)

Give each pair a card for each environment. Ask them to place their team's real environments against the cards, and to write which automated tests run in each today. Gaps become ideas for the team's automation strategy.

## Check yourself

1. Which environment is the first to have monitoring, and why does that help?
2. Why are non-functional tests concentrated in preproduction?
3. Name two practices that make testing in production safer.

---

Previous: [2.1.1 Describe the Configuration Needs of an Infrastructure that Enable Implementation of Test Automation](2-1-1-describe-the-configuration-needs-of-an-infrastructure-that-enable-implementation-of-test-automation.md) · [Contents](index.md) · Next: [2.2 Evaluation Process for Selecting the Right Tools and Strategies](2-2-evaluation-process-for-selecting-the-right-tools-and-strategies.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 2.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
