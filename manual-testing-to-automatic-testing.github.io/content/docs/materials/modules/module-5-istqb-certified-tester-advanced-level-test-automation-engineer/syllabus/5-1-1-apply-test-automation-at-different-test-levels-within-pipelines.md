# 5.1.1 Apply Test Automation at Different Test Levels within Pipelines

Part of [5 Implementation and Deployment Strategies for Test Automation](5-implementation-and-deployment-strategies-for-test-automation.md), [5.1 Integration to CI/CD Pipelines](5-1-integration-to-ci-cd-pipelines.md).

**Learning objective:** TAE-5.1.1 (K3).

## In short

Automated tests run unattended, so they belong in pipelines: fast low-level tests as quality gates when code is built, and system-level tests when or after it is deployed.

## Key ideas

| Test level | Where it runs in a pipeline |
| --- | --- |
| **Configuration tests** of the framework itself | During the build of the test project: check that every file the tests use exists where expected |
| **Component tests** | The build step: a quality gate in continuous integration |
| **Component integration tests** | With component tests, in continuous integration |
| **System tests** | Continuous deployment: the last quality gate |
| **System integration tests** | Continuous delivery: checking that separately built parts work together |

Many CI systems separate **build** and **deploy** phases. Component and component integration tests run in the build phase; when it passes, the software is deployed. System, system integration, and acceptance tests can then run in one of two ways:

1. **In the deployment phase**, after deployment. Failures can fail and roll back the deployment, but a rerun needs a redeployment.
2. **As a separate pipeline**, triggered by a successful deployment. This allows different suites per deployment, but tests are not a quality gate, so rolling back needs other, usually manual, action. A few simple deployment checks confirm the system is up.

Pipelines also run **nightly regression** suites, and **non-functional** tests such as performance.

## In this programme

The practice repository's GitHub Actions workflow runs five jobs on every pull request: a secrets scan, lint and format checks, the katas (component tests), the browser tests against the fixture site, and the API tests against the local FHIR sandbox. Each job is a quality gate: if any fails, the pull request cannot be merged. [Module 13](../../module-13-continuous-integration/index.md) builds the same shape for your team's product.

## Teach it (45 minutes)

Draw your team's pipeline as boxes. Place each existing automated suite in its stage, mark which are quality gates, and decide whether system tests should run in the deployment phase or a separate pipeline, and why.

## Check yourself

1. Which test levels run in the build phase?
2. Compare running system tests in the deployment phase with running them in a separate pipeline.
3. What is a nightly regression, and when is it useful?

---

Previous: [5.1 Integration to CI/CD Pipelines](5-1-integration-to-ci-cd-pipelines.md) · [Contents](index.md) · Next: [5.1.2 Explain Configuration Management for Testware](5-1-2-explain-configuration-management-for-testware.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 5.1.1. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
