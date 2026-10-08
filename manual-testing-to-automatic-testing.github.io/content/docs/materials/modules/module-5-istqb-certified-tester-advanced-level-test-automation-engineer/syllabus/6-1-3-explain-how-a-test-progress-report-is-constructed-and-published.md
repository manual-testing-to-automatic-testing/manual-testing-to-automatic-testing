# 6.1.3 Explain How a Test Progress Report is Constructed and Published

Part of [6 Test Automation Reporting and Metrics](6-test-automation-reporting-and-metrics.md), [6.1 Collection, Analysis and Reporting of Test Automation Data](6-1-collection-analysis-and-reporting-of-test-automation-data.md).

**Learning objective:** TAE-6.1.3 (K2).

## In short

Logs are detail; a **test progress report** is the overview. Build it after each run, publish it where people will see it, and shape it for each kind of stakeholder.

## Key ideas

**Content:** the test results, information about the SUT, and the test environment the tests ran in. It must show which tests failed and why, the history of each test, and who is responsible for investigating, reporting, and following up a failure. Reports also show failures of the framework itself.

**Publishing:** on a website, in the cloud, by mailing list, by chat message, or in a test management tool. Keeping history shows which parts of the SUT regress often.

**Stakeholders want different things:**

| Stakeholders | Typical roles | Interested in |
| --- | --- | --- |
| **Management** | Architects, delivery and programme managers, test managers | Trends: tests added, pass-fail ratio, reliability of the TAS and SUT |
| **Operational** | Product owners, business representatives, business analysts | Product use and related metrics |
| **Technical** | Team leaders, developers, administrators, testers, test automation engineers | Low-level detail |

**Dashboards** combine data from pipelines, project tools, and repositories to show trends such as defect clusters, performance degradation, and build reliability. Some tools now use **machine learning** to analyse logs, find broken locators, and group common failures.

## In this programme

Evidence 15 in [Module 15](../../module-15-quality-engineering/index.md) is a suite-health report, a test progress report written for your team: one page for the product owner, with the detail linked for developers.

## Teach it (30 minutes)

Take one run's JUnit report. Pairs write three versions of a summary in three sentences each: for the delivery manager, for the product owner, and for the developers.

## Check yourself

1. What must a test progress report contain?
2. Name three ways to publish a report.
3. How does a report for management differ from one for developers?

---

Previous: [6.1.2 Analyze Data from the Test Automation Solution and the System Under Test to Better Understand Test Results](6-1-2-analyze-data-from-the-test-automation-solution-and-the-system-under-test-to-better-understand-test-results.md) · [Contents](index.md) · Next: [7 Verifying the Test Automation Solution](7-verifying-the-test-automation-solution.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 6.1.3. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
