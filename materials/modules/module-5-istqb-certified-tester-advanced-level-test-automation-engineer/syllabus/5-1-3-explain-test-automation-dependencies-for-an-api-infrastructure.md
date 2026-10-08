# 5.1.3 Explain Test Automation Dependencies for an API Infrastructure

Part of [5 Implementation and Deployment Strategies for Test Automation](5-implementation-and-deployment-strategies-for-test-automation.md), [5.1 Integration to CI/CD Pipelines](5-1-integration-to-ci-cd-pipelines.md).

**Learning objective:** TAE-5.1.3 (K2).

## In short

API automation depends on understanding how APIs connect and on good API documentation. **Contract testing** checks that services keep their agreements with each other.

## Key ideas

**What you need to know:**

- **API connections:** the business logic you can test automatically, and how APIs relate to each other.
- **API documentation:** the baseline for automation: parameters, headers, and the types of requests and responses.

Developers or test automation engineers can automate API tests; with **shift left**, the testing is shared across test levels.

**Contract testing** is integration testing that checks that services can talk to each other, and that the data they share follows agreed rules. It goes beyond schema validation: both sides agree the allowed interactions, which are recorded in a **contract** that both are tested against, and which can evolve. Defects from underlying services are found earlier, and are easier to trace.

- **Consumer-driven:** the consumer says how the provider must respond to its requests.
- **Provider-driven:** the provider publishes a contract describing how its services work.

## In this programme

The FHIR sandbox in [Module 12 API, integration, and FHIR tests](../../module-12-api-integration-fhir/index.md) is a provider; your tests are a consumer. The HL7 FHIR specification itself works like a published, provider-driven contract: a `Patient` resource has defined fields and types, which your tests check.

## Teach it (30 minutes)

Pairs read the FHIR `Patient` resource definition and write three contract rules a consumer depends on (for example, "every Patient has an `id`, a string"), then one test for each against the sandbox.

## Check yourself

1. What two kinds of information does API automation depend on?
2. How does contract testing go beyond schema validation?
3. Compare consumer-driven and provider-driven contract testing.

---

Previous: [5.1.2 Explain Configuration Management for Testware](5-1-2-explain-configuration-management-for-testware.md) · [Contents](index.md) · Next: [6 Test Automation Reporting and Metrics](6-test-automation-reporting-and-metrics.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 5.1.3. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
