# Worked example: from walkthrough to real test

This example uses the fixture site <https://testingexamples.github.io>, so you can run it as often as you like. The testingexamples "Given-When-Then Examples" page shows the same idea against Google Search; read that one, but do not run it repeatedly, because Google's terms restrict automated querying.

## 1. The walkthrough (M4)

It acts and prints. It has no assertions, so it "passes" even if the page is wrong.

```typescript
await page.goto('https://testingexamples.github.io');
const text = page.locator('#text-example-1-id');
await text.fill('hello');
console.log(await text.inputValue());
```

## 2. The scenario

```gherkin
Feature: Form inputs on the fixture page

  # Source: M4 exercise sheet, section 7
  # Hazard: none (practice page)

  Scenario: Fill in the form
    Given I am on the fixture page
    When I fill the text input with "hello"
    And I check the checkbox
    And I choose radio option 2
    And I select "bravo"
    Then the text input shows "hello"
    And the checkbox is checked
    And radio option 2 is checked and option 1 is not
    And the select shows value "b"
```

Here the When has several steps because the behaviour is "filling in a form". That is fine: it is still one behaviour.

## 3. The page object

A page object keeps locators in one place. If a locator changes, you fix it once.

```typescript
// tests/ui/pages/fixture-page.ts
import { type Locator, type Page } from '@playwright/test';

export class FixturePage {
  readonly page: Page;
  readonly textInput: Locator;
  readonly checkbox: Locator;
  readonly radioOption1: Locator;
  readonly radioOption2: Locator;
  readonly select: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textInput = page.getByLabel('Text Example 1');
    this.checkbox = page.getByLabel('Checkbox Example 1');
    this.radioOption1 = page.locator('#radio-example-1-option-1-id');
    this.radioOption2 = page.locator('#radio-example-1-option-2-id');
    this.select = page.locator('#select-example-1-id');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://testingexamples.github.io');
  }
}
```

The radio buttons have no `<label>`, so they are located by id. That is a good thing to raise with developers: a real form should label every input, for accessibility and for resilient tests.

## 4. The test

```typescript
// tests/ui/fixture-form.spec.ts
import { test, expect } from '@playwright/test';
import { FixturePage } from './pages/fixture-page';

test('fill in the form', async ({ page }) => {
  const fixture = new FixturePage(page);

  // Given I am on the fixture page
  await fixture.goto();

  // When I fill the text input with "hello"
  await fixture.textInput.fill('hello');
  // And I check the checkbox
  await fixture.checkbox.check();
  // And I choose radio option 2
  await fixture.radioOption2.check();
  // And I select "bravo"
  await fixture.select.selectOption({ label: 'bravo' });

  // Then the text input shows "hello"
  await expect(fixture.textInput).toHaveValue('hello');
  // And the checkbox is checked
  await expect(fixture.checkbox).toBeChecked();
  // And radio option 2 is checked and option 1 is not
  await expect(fixture.radioOption2).toBeChecked();
  await expect(fixture.radioOption1).not.toBeChecked();
  // And the select shows value "b"
  await expect(fixture.select).toHaveValue('b');
});
```

What changed from the walkthrough:

- `test()` and `expect()` come from `@playwright/test`.
- The `{ page }` fixture is created and closed for you. No `browser.close()`.
- `expect(locator).toHaveValue(...)` is a **web-first assertion**. It retries until it passes or times out. You never write a `sleep`.
- Every Then line is an assertion.

## 5. Prove it can fail

Change `toHaveValue('b')` to `toHaveValue('c')`. Run the test:

```sh
npm run test:ui
```

It must fail, with a message showing expected `c` and received `b`. Put it back and run again. It must pass.

Open the trace of the failed run with `npx playwright show-trace` and find the step that failed.

## 6. The spec

Every assessed suite has a `spec/index.md` that agrees with the code. A short one for this test:

```markdown
# Spec

## Summary

Checks that the form inputs on the testingexamples fixture page accept input.

## Scope

`tests/ui/fixture-form.spec.ts` only.

## Detail

1. Fill in the form
   * Navigate to `https://testingexamples.github.io`
   * Fill the input labelled `Text Example 1` with `hello`
   * Check the input labelled `Checkbox Example 1`
   * Check `#radio-example-1-option-2-id`
   * Select the option with label `bravo` in `#select-example-1-id`
   * Assert the text input value is exactly `hello`
   * Assert the checkbox is checked
   * Assert radio option 2 is checked, and option 1 is not
   * Assert the select value is exactly `b`

## Acceptance criteria

* The test passes against the live fixture site.

## Sources

* testingexamples fixture contract: `testingexamples.github.io/spec/index.md`
```

If the spec and the code ever disagree, that is a defect. Fix it before doing anything else.
