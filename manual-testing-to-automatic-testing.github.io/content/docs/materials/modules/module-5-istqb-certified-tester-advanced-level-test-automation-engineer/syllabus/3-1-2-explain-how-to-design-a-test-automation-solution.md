# 3.1.2 Explain How to Design a Test Automation Solution

Part of [3 Test Automation Architecture](3-test-automation-architecture.md), [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md).

**Learning objective:** TAE-3.1.2 (K2).

## In short

A **test automation solution (TAS)** is built from the SUT's requirements and the tools you need. Its **test automation architecture (TAA)** is the technical design that ties tools, components, connections, and management together.

## Key ideas

A TAS is defined by the functional, non-functional, and technical requirements of the SUT, and by the tools needed. It is built with commercial or open-source tools, and may need adaptors specific to the SUT. Its design, the TAA, should cover:

- choosing **tools** and tool-specific libraries
- developing **plugins and components**
- identifying **connectivity**: firewalls, databases, URLs, mocks and stubs, message queues, and protocols
- connecting to **test management** and **defect management** tools
- using **version control** and repositories.

## In this programme

Before building your capstone suite, write one page that answers each bullet for your team's product: which tools, what you will build yourself (such as page objects), what you need to connect to (and whether the network allows it), where results go, and which repository holds the code.

## Teach it (30 minutes)

Give groups a blank one-page TAA template with the five headings. Each group fills it in for the practice repository, then for their own team's product, and notes what is different.

## Check yourself

1. What defines a test automation solution?
2. Name four things a test automation architecture should address.
3. Give two examples of connectivity requirements.

---

Previous: [3.1.1 Explain the Major Capabilities in a Test Automation Architecture](3-1-1-explain-the-major-capabilities-in-a-test-automation-architecture.md) · [Contents](index.md) · Next: [3.1.3 Apply Layering of Test Automation Frameworks](3-1-3-apply-layering-of-test-automation-frameworks.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 3.1.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
