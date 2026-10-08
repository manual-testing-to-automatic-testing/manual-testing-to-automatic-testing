# 5.1.2 Explain Configuration Management for Testware

Part of [5 Implementation and Deployment Strategies for Test Automation](5-implementation-and-deployment-strategies-for-test-automation.md), [5.1 Integration to CI/CD Pipelines](5-1-integration-to-ci-cd-pipelines.md).

**Learning objective:** TAE-5.1.2 (K2).

## In short

The same tests run against many environments and versions, so manage three things: environment configuration, test data, and which suites and tests apply to which release.

## Key ideas

**Test environment configuration:** each environment has its own settings, such as URLs and credentials. Usually stored with the testware; for several projects or frameworks, in a shared core library or repository.

**Test data:** may be specific to an environment or to a release. Usually stored with smaller frameworks; larger ones may use a test data management system.

**Test suites and test cases:** suites are grouped by purpose, such as smoke or regression, and often run at different test levels, in different pipelines and environments. Each release has its own feature set, handled in one of two ways:

- **Feature toggles:** a configuration per release or environment says which features are on, and so which suites run.
- **Released together:** testware is released with the SUT under the same version, using tags or branches, so each SUT version has exactly the tests that fit it.

## In this programme

The practice repository's API tests read the FHIR server's address from `FHIR_BASE_URL`, with a local default, rather than writing it into tests: that is environment configuration. Point it at another server, and the same tests run there. Credentials never go in the repository; CI secrets hold them ([Module 14 Safe and lawful test automation](../../module-14-safe-and-lawful-automation/index.md)).

## Teach it (30 minutes)

Pairs list every value in their team's tests that differs between environments, and decide where each should live: a configuration file, an environment variable, a CI secret, or test data.

## Check yourself

1. What three things does configuration management cover for testware?
2. Where should credentials for a test environment be kept?
3. Compare feature toggles with releasing testware alongside the SUT.

---

Previous: [5.1.1 Apply Test Automation at Different Test Levels within Pipelines](5-1-1-apply-test-automation-at-different-test-levels-within-pipelines.md) · [Contents](index.md) · Next: [5.1.3 Explain Test Automation Dependencies for an API Infrastructure](5-1-3-explain-test-automation-dependencies-for-an-api-infrastructure.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 5.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
