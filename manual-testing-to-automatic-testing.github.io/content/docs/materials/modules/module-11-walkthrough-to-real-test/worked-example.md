# Worked example: from walkthrough to real test

This example uses the fixture site <https://testingexamples.github.io>, so you can run it as often as you like. The testingexamples "Given-When-Then Examples" page shows the same idea against Google Search, including a Selenium JavaScript version; read that one, but do not run it repeatedly, because Google's terms restrict automated querying.

## 1. The walkthrough (Module 10)

It acts and prints. It has no assertions, so it "passes" even if the page is wrong.

```javascript
await driver.get('https://testingexamples.github.io');
const text = await driver.findElement(By.id('text-example-1-id'));
await text.clear();
await text.sendKeys('hello');
console.log(await text.getAttribute('value'));
```

## 2. The scenario

```gherkin
Feature: Form inputs on the fixture page

  # Source: Module 10 exercise sheet, section 7
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

A page object keeps locators and actions in one place. If a locator changes, you fix it once. In the practice repository it is a plain JavaScript class in `tests/ui/pages/`.

```javascript
// tests/ui/pages/fixture-form-page.js
import { By, Select, until } from 'selenium-webdriver';

const URL = 'https://testingexamples.github.io';
const TIMEOUT = 10_000;

export class FixtureFormPage {
  constructor(driver) {
    this.driver = driver;
  }

  static textInput = By.id('text-example-1-id');
  static checkbox = By.id('checkbox-example-1-id');
  static radioOption1 = By.id('radio-example-1-option-1-id');
  static radioOption2 = By.id('radio-example-1-option-2-id');
  static select = By.id('select-example-1-id');

  /** Open the page and wait until the form is there. */
  async open() {
    await this.driver.get(URL);
    await this.driver.wait(until.elementLocated(FixtureFormPage.textInput), TIMEOUT);
  }

  async find(locator) {
    const element = await this.driver.wait(until.elementLocated(locator), TIMEOUT);
    await this.driver.wait(until.elementIsVisible(element), TIMEOUT);
    return element;
  }

  async fillText(value) {
    const input = await this.find(FixtureFormPage.textInput);
    await input.clear();
    await input.sendKeys(value);
  }

  async textValue() {
    return (await this.find(FixtureFormPage.textInput)).getAttribute('value');
  }

  async checkCheckbox() {
    const box = await this.find(FixtureFormPage.checkbox);
    if (!(await box.isSelected())) await box.click();
  }

  async isChecked(locator) {
    return (await this.find(locator)).isSelected();
  }

  async chooseRadio(locator) {
    await (await this.find(locator)).click();
  }

  async selectByText(text) {
    await new Select(await this.find(FixtureFormPage.select)).selectByVisibleText(text);
  }

  async selectedValue() {
    const option = await new Select(await this.find(FixtureFormPage.select)).getFirstSelectedOption();
    return option.getAttribute('value');
  }
}
```

The radio buttons have no `<label>`, so they are located by id. That is a good thing to raise with developers: a real form should label every input, for accessibility and for resilient tests.

## 4. The test

```javascript
// tests/ui/fixture-form.test.js
import { strict as assert } from 'node:assert';
import { Browser, Builder } from 'selenium-webdriver';
import { FixtureFormPage } from './pages/fixture-form-page.js';

describe('fixture page form', function () {
  this.timeout(30_000);
  let driver;
  let form;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    form = new FixtureFormPage(driver);
  });

  after(async () => {
    await driver?.quit();
  });

  it('fills in the form', async () => {
    // Given I am on the fixture page
    await form.open();

    // When I fill the text input with "hello"
    await form.fillText('hello');
    // And I check the checkbox
    await form.checkCheckbox();
    // And I choose radio option 2
    await form.chooseRadio(FixtureFormPage.radioOption2);
    // And I select "bravo"
    await form.selectByText('bravo');

    // Then the text input shows "hello"
    assert.equal(await form.textValue(), 'hello');
    // And the checkbox is checked
    assert.equal(await form.isChecked(FixtureFormPage.checkbox), true);
    // And radio option 2 is checked and option 1 is not
    assert.equal(await form.isChecked(FixtureFormPage.radioOption2), true);
    assert.equal(await form.isChecked(FixtureFormPage.radioOption1), false);
    // And the select shows value "b"
    assert.equal(await form.selectedValue(), 'b');
  });
});
```

What changed from the walkthrough:

- `describe` and `it` come from Mocha. `assert` comes from Node's own `node:assert/strict`.
- The driver is created once in `before` and always closed in `after`, even when a test fails.
- Every Then line is an assertion. If the value is wrong, the test fails with a message showing the expected and actual values.
- Selenium does not wait for you. The page object waits for each element to be present and visible before using it, with `driver.wait` and `until`. You never write a `sleep`.
- In the practice repository, the shared driver set-up and the hook that saves a screenshot and the page source on failure are in `tests/support/`. Use them rather than copying `before` and `after` into every file.

## 5. Prove it can fail

Change `'b'` in the last assertion to `'c'`. Run the tests:

```sh
npm run test:ui
```

It must fail, with a message showing expected `c` and actual `b`. Open the screenshot and page source saved in `test-results/`, and find what the page showed. Put the value back and run again. It must pass.

## 6. The spec

Every assessed suite has a `spec/index.md` that agrees with the code. A short one for this test:

```markdown
# Spec

## Summary

Checks that the form inputs on the testingexamples fixture page accept input.

## Scope

`tests/ui/fixture-form.test.js` only.

## Detail

1. Fill in the form
   * Navigate to `https://testingexamples.github.io`
   * Clear `#text-example-1-id` and type `hello`
   * Click `#checkbox-example-1-id` if it is not selected
   * Click `#radio-example-1-option-2-id`
   * Select the option with visible text `bravo` in `#select-example-1-id`
   * Assert the text input value is exactly `hello`
   * Assert the checkbox is selected
   * Assert radio option 2 is selected, and option 1 is not
   * Assert the selected option's value is exactly `b`

## Acceptance criteria

* The test passes against the live fixture site.

## Sources

* testingexamples fixture contract: `testingexamples.github.io/spec/index.md`
```

If the spec and the code ever disagree, that is a defect. Fix it before doing anything else.
