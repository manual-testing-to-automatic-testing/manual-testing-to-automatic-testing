// Page object for the fixture section of https://testingexamples.github.io.
//
// Every selector here comes from the fixture contract in
// testingexamples.github.io/spec/index.md. If the contract changes, change
// this file only: the tests describe behaviour, the page object knows where
// things are and how long to wait for them.

import { By, until, Select } from 'selenium-webdriver';

const BASE_URL = process.env.FIXTURE_BASE_URL ?? 'https://testingexamples.github.io';
const WAIT_MS = 10000;

export class FixturePage {
  /** @param {import('selenium-webdriver').WebDriver} driver */
  constructor(driver) {
    this.driver = driver;
  }

  /** Open the page, and wait until the fixture form is there. */
  async open() {
    await this.driver.get(`${BASE_URL}/`);
    await this.find(By.id('form-1'));
  }

  /**
   * Wait for an element to be in the page, then return it. Selenium does not
   * wait for you: this explicit wait is what makes the tests reliable.
   */
  async find(locator) {
    return this.driver.wait(until.elementLocated(locator), WAIT_MS, `waiting for ${locator}`);
  }

  /**
   * Click an element the way a person would: only once it is in view, and is
   * the thing a click at its centre would actually reach.
   *
   * Selenium clicks at screen coordinates. If anything moves the page between
   * finding the element and clicking it (a sticky header, a page that resets
   * its scroll position as its scripts finish loading), the click lands on
   * something else and fails with ElementClickInterceptedError. So this waits,
   * explicitly, until the element is centred and on top, then clicks.
   */
  async click(element) {
    await this.driver.wait(
      () =>
        this.driver.executeScript(
          `const el = arguments[0];
           el.scrollIntoView({ block: 'center' });
           const box = el.getBoundingClientRect();
           const top = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
           return top !== null && (top === el || el.contains(top));`,
          element,
        ),
      WAIT_MS,
      'waiting for the element to be clickable',
    );
    await element.click();
  }

  // Locating: one method per selector strategy.

  byId(n) {
    return this.find(By.id(`id-example-${n}`));
  }

  byName(n) {
    return this.find(By.name(`name-example-${n}`));
  }

  byClass(n) {
    return this.find(By.className(`class-example-${n}`));
  }

  link(n) {
    return this.find(By.linkText(`Link Example ${n}`));
  }

  async listItems(listId) {
    await this.find(By.id(listId));
    return this.driver.findElements(By.css(`#${listId} > li`));
  }

  // Form inputs, by the contract's ids.

  textInput() {
    return this.find(By.id('text-example-1-id'));
  }

  checkbox() {
    return this.find(By.id('checkbox-example-1-id'));
  }

  radio(option) {
    return this.find(By.id(`radio-example-1-option-${option}-id`));
  }

  /** A <select> needs Selenium's Select helper, not a plain click. */
  async select() {
    return new Select(await this.find(By.id('select-example-1-id')));
  }

  submitByXPath() {
    return this.find(By.xpath('//input[@type="submit"]'));
  }
}

/** The visible text of each element, in order. */
export async function textsOf(elements) {
  return Promise.all(elements.map((element) => element.getText()));
}
