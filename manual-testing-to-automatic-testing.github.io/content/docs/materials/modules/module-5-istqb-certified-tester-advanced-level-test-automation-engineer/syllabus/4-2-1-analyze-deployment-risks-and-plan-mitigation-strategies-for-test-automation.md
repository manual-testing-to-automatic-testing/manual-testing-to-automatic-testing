# 4.2.1 Analyze Deployment Risks and Plan Mitigation Strategies for Test Automation

Part of [4 Implementing Test Automation](4-implementing-test-automation.md), [4.2 Risks Associated with Test Automation Development](4-2-risks-associated-with-test-automation-development.md).

**Learning objective:** TAE-4.2.1 (K4).

## In short

Automation can fail for reasons outside the tests: firewalls, resources, networks, devices, packaging, logging, structure, and updates. Find these risks in the pilot, and plan for them.

## Key ideas

**Deployment risks** found in a pilot include firewall openings, resource use (CPU and memory), network connections, and reliability. For mobile testing on real devices, devices must be on, charged, connected, and able to reach the SUT.

**Technical risks, and what to do:**

| Risk | What it means | Mitigation |
| --- | --- | --- |
| **Packaging** | Testware needs version control as much as the SUT | Keep testware in a repository, shared on premises or in the cloud |
| **Logging** | Logs are the main source of information about results | Use log levels: fatal, error, warn, info, debug, and trace |
| **Test structuring** | The test harness and its **test fixtures** control the environment and data | Use set-up and tear-down to make tests repeatable and independent |
| **Updating** | Automatic updates to agents, browsers, or devices break runs | Plan device configuration, power, and network; control updates |

## In this programme

A common one: the CI runner's Chrome updates, and the tests fail although nothing in your code changed. Selenium Manager matches the driver to the browser, and pinning tool versions in `package.json` keeps runs repeatable. Another: a hospital network's firewall blocks the test server, so agree access before the pilot starts.

## Teach it (45 minutes)

Groups write a risk table for automating their team's product: at least six risks, each with likelihood, impact, and a mitigation, then swap tables with another group to challenge them.

## Check yourself

1. Give three deployment risks and a mitigation for each.
2. What are test fixtures, and why do they matter?
3. When would you use the debug and trace log levels?

---

Previous: [4.2 Risks Associated with Test Automation Development](4-2-risks-associated-with-test-automation-development.md) · [Contents](index.md) · Next: [4.3 Test Automation Solution Maintainability](4-3-test-automation-solution-maintainability.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 4.2.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
