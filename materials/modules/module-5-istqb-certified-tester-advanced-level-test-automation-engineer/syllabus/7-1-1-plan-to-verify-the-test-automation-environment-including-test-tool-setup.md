# 7.1.1 Plan to Verify the Test Automation Environment Including Test Tool Setup

Part of [7 Verifying the Test Automation Solution](7-verifying-the-test-automation-solution.md), [7.1 Verification of the Test Automation Infrastructure](7-1-verification-of-the-test-automation-infrastructure.md).

**Learning objective:** TAE-7.1.1 (K3).

## In short

Before trusting the results, check that the automation itself is installed, configured, connected, and working, the same way, everywhere.

## Key ideas

**Tool installation, set-up, configuration, and customisation.** A TAS has many parts: executables, libraries, data, and configuration files. Install it by automated scripts or from a repository, so that every SUT is tested with the same version and configuration, and upgrade it through the same process as other development tools.

**Repeatable set-up and tear-down.** Load and unload the TAS systematically, so that building it again makes no difference to how it works, in any environment. Configuration management makes a configuration dependable; documentation shows what a change to the SUT environment will affect.

**Connectivity.** Before testing, check that the TAS can reach internal and external systems: log into servers, start the tools, check they reach the SUT, inspect settings, and check permissions for logs and reports.

**Test the framework's own components**, functionally and non-functionally: for example, that object verification works for many kinds of user interface element, that logs and reports are accurate, and that the framework does not leak memory or slow down.

## In this programme

`npm ci` installs exactly the versions in `package-lock.json`, so every machine and the CI runner use the same tools. A first, trivial test that opens the fixture site and checks its title is a connectivity check: if it fails, nothing else is worth reading.

## Teach it (45 minutes)

Groups write a checklist to verify a fresh machine before it runs the team's suite: installation, versions, connectivity, permissions, and one smoke test. Then they try it on a colleague's machine.

## Check yourself

1. Why install the TAS by script or from a repository?
2. Give three connectivity checks to make before testing.
3. Why test the framework's own components?

---

Previous: [7.1 Verification of the Test Automation Infrastructure](7-1-verification-of-the-test-automation-infrastructure.md) · [Contents](index.md) · Next: [7.1.2 Explain the Correct Behavior for a Given Automated Test Script and/or Test Suite](7-1-2-explain-the-correct-behavior-for-a-given-automated-test-script-and-or-test-suite.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 7.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
