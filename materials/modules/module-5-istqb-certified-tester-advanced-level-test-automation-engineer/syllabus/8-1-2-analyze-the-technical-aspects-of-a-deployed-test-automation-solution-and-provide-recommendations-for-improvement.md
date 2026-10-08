# 8.1.2 Analyze the Technical Aspects of a Deployed Test Automation Solution and Provide Recommendations for Improvement

Part of [8 Continuous Improvement](8-continuous-improvement.md), [8.1 Continuous Improvement Opportunities for Test Automation](8-1-continuous-improvement-opportunities-for-test-automation.md).

**Learning objective:** TAE-8.1.2 (K4).

## In short

A deployed test automation solution can always be improved: its scripting, execution, verification, architecture, framework, set-up and tear-down, documentation, features, and updates. Choose the improvements that add the most value.

## Key ideas

| Area | Improvement |
| --- | --- |
| **Scripting** | Move to a better scripting approach, such as data-driven or keyword-driven, for new tests and the costliest old ones; consolidate repeated steps into library functions, with parameters where steps differ; build failure recovery so one failure does not stop the suite |
| **Waits** | Replace **hard-coded waits** with **dynamic waits** that poll for a condition, or, better, subscribe to the SUT's **events**; always with a timeout |
| **Test execution** | Run in parallel, or split long suites into parts that fit a time window, such as a night; remove duplicated coverage; schedule pipelines |
| **Verification** | One set of standard verification functions, with parameters, used by every test |
| **Architecture** | Change the TAA, or the SUT, to improve testability, such as adding APIs for testing; cheapest when planned early |
| **Framework** | Adopt new core library versions through a pilot, an impact analysis, and an adoption plan across teams |
| **Set-up and tear-down** | Move repeated preconditions into set-up methods, for example creating test users through a web service before a UI test |
| **Documentation, features, and updates** | Keep documentation current; add only features that will be used; test new tool versions on sample tests before rolling them out |

## In this programme

The most common improvement you will make: a hard-coded `driver.sleep(3000)` replaced by `driver.wait(until.elementLocated(...), 10000)`, which waits only as long as needed and has a timeout. That is Principle 10, "Wait explicitly, never sleep".

## Teach it (60 minutes)

Groups review a real suite, from their team or the practice repository, against the eight areas in the table, and write three recommendations, each with its expected benefit and cost.

## Check yourself

1. Compare hard-coded waits, dynamic waits, and event subscription.
2. How can you shorten a regression suite that no longer fits in a night?
3. How should a new version of a core library be adopted across teams?

---

Previous: [8.1.1 Discover Opportunities for Improving Test Cases Through Data Collection and Analysis](8-1-1-discover-opportunities-for-improving-test-cases-through-data-collection-and-analysis.md) · [Contents](index.md) · Next: [8.1.3 Restructure the Automated Testware to Align with System Under Test Updates](8-1-3-restructure-the-automated-testware-to-align-with-system-under-test-updates.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 8.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
