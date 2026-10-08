# 1.2.1 Explain How Test Automation is Applied Across Different Software Development Lifecycle Models

Part of [1 Introduction and Objectives for Test Automation](1-introduction-and-objectives-for-test-automation.md), [1.2 Test Automation in the Software Development Lifecycle](1-2-test-automation-in-the-software-development-lifecycle.md).

**Learning objective:** TAE-1.2.1 (K2).

## In short

When and how much you automate depends on the lifecycle: late and in one block in waterfall, at every test level in the V-model, and continuously, inside each sprint, in Agile.

## Key ideas

**Waterfall** is linear: requirements, design, implementation, verification, and maintenance, each phase signed off. Automation is usually built alongside or after implementation, and runs in the verification phase, because there is nothing to test until then.

**The V-model** pairs each development stage with a test level: component, component integration, system, system integration, and acceptance testing. A test automation framework can, and should, exist for each level.

**Agile** gives the most room. Test automation engineers and business representatives plan the automation roadmap together. Code review, pair programming, and frequent automated runs are normal. When developers, testers, and other people work together rather than in silos, the team can automate at every test level within the sprint that builds the feature: this is called **in-sprint automation**.

## In this programme

Most teams in this programme work in sprints, so the target is in-sprint automation: a story is not done until its automated checks are merged and running in CI. [Module 13 Continuous integration and DevOps](../../module-13-continuous-integration/index.md) builds the pipeline that makes this possible.

## Teach it (20 minutes)

Draw the three models on a whiteboard. For each, ask: when is the first automated test written, and when does it first run? Then ask each person which model their own team is closest to, and what that means for when they automate.

## Check yourself

1. Why does automation run late in a waterfall project?
2. In the V-model, which test levels can have a test automation framework?
3. What is in-sprint automation, and what does it need from the team?

---

Previous: [1.2 Test Automation in the Software Development Lifecycle](1-2-test-automation-in-the-software-development-lifecycle.md) · [Contents](index.md) · Next: [1.2.2 Select Suitable Test Automation Tools For a Given System Under Test](1-2-2-select-suitable-test-automation-tools-for-a-given-system-under-test.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 1.2.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
