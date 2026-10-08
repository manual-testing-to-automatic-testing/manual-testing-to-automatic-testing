# 3.1.5 Apply Design Principles and Design Patterns in Test Automation

Part of [3 Test Automation Architecture](3-test-automation-architecture.md), [3.1 Design Concepts Leveraged in Test Automation](3-1-design-concepts-leveraged-in-test-automation.md).

**Learning objective:** TAE-3.1.5 (K3).

## In short

Test automation is software development, so use the same principles (object-oriented programming and SOLID) and patterns (facade, singleton, page object model, and flow model) as developers do.

## Key ideas

**Object-oriented programming principles:** encapsulation, abstraction, inheritance, and polymorphism.

**SOLID principles:** single responsibility, open-closed, Liskov substitution, interface segregation, and dependency inversion. They improve readability, maintainability, and scalability.

**Design patterns that matter most to test automation engineers:**

- **Facade:** hides implementation details, and exposes only what a test case needs.
- **Singleton:** makes sure there is only one driver talking to the SUT.
- **Page object model:** one class per page, holding its locators and actions. When the page changes, you update one place, not every test.
- **Flow model:** a second facade over the page objects that holds whole user actions, such as "book an appointment", so that steps are reused across test scripts.

## In this programme

```javascript
// A page object: locators and actions in one place.
export class PracticePage {
  constructor(driver) {
    this.driver = driver;
  }
  async choose(option) {
    const select = await this.driver.wait(until.elementLocated(By.id("select-example-1-id")), 10000);
    await new Select(select).selectByVisibleText(option);
  }
}
```

If the select box's id changes, only `PracticePage` changes. [Module 11](../../module-11-walkthrough-to-real-test/index.md) introduces page objects; Band 7 test engineering participants build the flow model in Frameworks and non-functional testing.

## Teach it (60 minutes)

Give pairs three tests that each repeat the same locators. Ask them to refactor the locators into one page object, then add a flow function used by two of the tests.

## Check yourself

1. What problem does the page object model solve?
2. What does the flow model add on top of page objects?
3. Why is the singleton pattern used for the driver?

---

Previous: [3.1.4 Apply Different Approaches for Automating Test Cases](3-1-4-apply-different-approaches-for-automating-test-cases.md) · [Contents](index.md) · Next: [4 Implementing Test Automation](4-implementing-test-automation.md)

Based on the [ISTQB Certified Tester Advanced Level Test Automation Engineering (CTAL-TAE) syllabus, version 2.0](https://www.gasq.org/files/content/ISTQB2/ISTQB_CTAL-TAE_Syllabus_v2.0.pdf), section 3.1.5. The syllabus is © International Software Testing Qualifications Board (ISTQB®); ISTQB® is a registered trademark of the ISTQB. Copyright © 2024 the authors of the syllabus: Andrew Pollner (Chair), Péter Földházi, Patrick Quilter, Gergely Ágnecz, and László Szikszai. This page explains its concepts in our own words, for teaching, and is not an accredited course or a substitute for the syllabus.
