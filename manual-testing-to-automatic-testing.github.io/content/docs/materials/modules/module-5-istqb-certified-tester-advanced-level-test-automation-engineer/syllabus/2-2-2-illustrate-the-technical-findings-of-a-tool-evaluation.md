# 2.2.2 Illustrate the Technical Findings of a Tool Evaluation

Part of [2 Preparing for Test Automation](2-preparing-for-test-automation.md), [2.2 Evaluation Process for Selecting the Right Tools and Strategies](2-2-evaluation-process-for-selecting-the-right-tools-and-strategies.md).

**Learning objective:** TAE-2.2.2 (K4).

## In short

Show tool options side by side in a **comparison table**, with requirements in the rows and tools in the columns, so that stakeholders can see the differences and approve a proposal.

## Key ideas

No single tool may meet every requirement, and stakeholders should know that. A comparison table makes the trade-offs visible. Rows are requirements, columns are tools, and cells say how well each tool meets each requirement, and how much the requirement matters. Typical requirements:

- the tool's **language and technology**, and its IDE support
- **configuration**: different environments, run configurations, static or dynamic settings
- **test data management**, possibly linked to version control
- support for the **test types** you need (one tool may not cover them all)
- **reporting** that matches the project's reporting needs
- **integration** with CI/CD, task tracking, and test management tools
- **architecture qualities**: scalability, maintainability, modifiability, compatibility, and reliability.

The table leads to a proposed tool or tool set, which is shown to the right stakeholders for approval.

## In this programme

| Requirement (priority) | Selenium with JavaScript | A low-code recorder |
| --- | --- | --- |
| Same language as our web product (high) | Yes: JavaScript | No: its own format |
| Runs in our CI on every pull request (high) | Yes: Mocha in GitHub Actions | Depends on licence |
| Readable test reports (medium) | JUnit reports, screenshots | Built-in dashboard |
| Cost (medium) | Open source | Licence per user |

## Teach it (45 minutes)

Pairs build a comparison table for two real tools their team might use, against at least six requirements with priorities, then present a one-minute recommendation to the group.

## Check yourself

1. What goes in the rows and columns of a tool comparison table?
2. Why should stakeholders expect that no single tool meets every requirement?
3. Name five requirements to compare tools against.

---

Previous: [2.2.1 Analyze a System Under Test to Determine the Appropriate Test Automation Solution](2-2-1-analyze-a-system-under-test-to-determine-the-appropriate-test-automation-solution.md) · [Contents](index.md) · Next: [3 Test Automation Architecture](3-test-automation-architecture.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 2.2.2. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
