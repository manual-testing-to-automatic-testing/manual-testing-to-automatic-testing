# 1.1.1 Explain the Advantages and Disadvantages of Test Automation

Part of [1 Introduction and Objectives for Test Automation](1-introduction-and-objectives-for-test-automation.md), [1.1 Purpose of Test Automation](1-1-purpose-of-test-automation.md).

**Learning objective:** TAE-1.1.1 (K2).

## In short

Test automation is worth it when its benefits (more tests, faster feedback, consistency) outweigh its costs (people, set-up, and maintenance), and only for the checks a machine can actually judge.

## Key ideas

**What test automation is.** One or more of: using tools to set up and control test suites; running tests automatically; and comparing actual results with expected results. It works on many kinds of system under test (SUT): with a user interface, without one (such as an API), mobile apps, and network protocols.

**Advantages.** Automation can:

- run many more tests per build than people can
- run tests that people cannot, such as measuring real-time response, testing remotely, or running in parallel
- run more complex tests, faster, with fewer human errors
- give quicker feedback on quality, and run the same way every time.

**Disadvantages.** Automation:

- costs money: people with the skills, hardware, and training
- needs an initial investment before it pays back
- takes time to build, and more time to maintain
- needs clear objectives, or it drifts
- can be rigid when the SUT changes
- can introduce its own defects: test code has bugs too.

**Limitations.** Not every manual test can be automated. An automated test only checks what it was programmed to check. It can only judge results a machine can interpret, against an automated **test oracle** (the source of the expected result). So qualities such as "is this screen easy to understand?" stay with people.

## In this programme

[Module 7 Why and what to automate](../../module-7-why-and-what-to-automate/index.md) asks you to sort your team's manual regression pack into *keep manual*, *automate*, or *retire*. This learning objective is the reasoning behind that sort. A check that the NHS number on a referral form is validated is a good candidate: it is repeated every release, and a machine can judge it. A check that a letter to a patient reads kindly is not.

## Teach it (1 hour)

1. In pairs, list ten manual tests from your team's pack.
2. For each, write one advantage of automating it and one cost.
3. Mark any test whose result a machine cannot judge. Discuss why.
4. Share the two hardest calls with the group.

## Check yourself

1. Name three advantages of test automation and three disadvantages.
2. Why can an automated test not replace a person judging usability?
3. What is a test oracle, and why does automation need one?

---

Previous: [1.1 Purpose of Test Automation](1-1-purpose-of-test-automation.md) · [Contents](index.md) · Next: [1.2 Test Automation in the Software Development Lifecycle](1-2-test-automation-in-the-software-development-lifecycle.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 1.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
