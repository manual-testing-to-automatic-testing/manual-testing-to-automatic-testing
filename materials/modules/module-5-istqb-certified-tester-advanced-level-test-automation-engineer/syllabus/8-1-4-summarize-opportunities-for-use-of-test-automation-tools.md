# 8.1.4 Summarize Opportunities for Use of Test Automation Tools

Part of [8 Continuous Improvement](8-continuous-improvement.md), [8.1 Continuous Improvement Opportunities for Test Automation](8-1-continuous-improvement-opportunities-for-test-automation.md).

**Learning objective:** TAE-8.1.4 (K2).

## In short

Test automation tools can do useful work beyond testing: setting up and cleaning environments, keeping test data current, and producing screenshots and videos.

## Key ideas

- **Environment set-up and control:** scripts can create test data and users in a new environment, for example by calling a web service to register users with different profiles, and clean up afterwards, such as removing old logs and testware.
- **Data ageing:** automation can keep test data current, for example moving date fields forward so that records stay within the right year.
- **Screenshots and video:** most user interface tools can capture screenshots and videos, which can serve release documentation, training, or marketing.

## In this programme

The FHIR sandbox loads its synthetic patients at start-up: environment set-up by automation. A Selenium script that walks through a new feature and saves screenshots at each step can produce the pictures for the team's release notes, using only synthetic data.

## Teach it (20 minutes)

Pairs list three repetitive, non-testing chores in their team's work, such as preparing demo data or taking release screenshots, and sketch how a script could do each.

## Check yourself

1. How can test automation help set up a new test environment?
2. What is data ageing?
3. Give one use of automated screenshots beyond testing.

---

Previous: [8.1.3 Restructure the Automated Testware to Align with System Under Test Updates](8-1-3-restructure-the-automated-testware-to-align-with-system-under-test-updates.md) · [Contents](index.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 8.1.4. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
