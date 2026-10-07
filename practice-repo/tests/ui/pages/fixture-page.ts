import type { Locator, Page } from '@playwright/test';

/**
 * Page object for the fixture section of https://testingexamples.github.io.
 *
 * Every selector here comes from the fixture contract in
 * testingexamples.github.io/spec/index.md. If the contract changes, change
 * this file only: the tests describe behaviour, the page object knows where
 * things are.
 */
export class FixturePage {
  constructor(readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  // Locating: one method per selector strategy.

  byId(n: 1 | 2 | 3): Locator {
    return this.page.locator(`#id-example-${n}`);
  }

  byName(n: 1 | 2 | 3): Locator {
    return this.page.locator(`[name="name-example-${n}"]`);
  }

  byClass(n: 1 | 2 | 3): Locator {
    return this.page.locator(`.class-example-${n}`);
  }

  link(n: 1 | 2 | 3): Locator {
    return this.page.getByRole('link', { name: `Link Example ${n}`, exact: true });
  }

  orderedList(): Locator {
    return this.page.locator('#ol-example-1');
  }

  orderedListItems(): Locator {
    return this.orderedList().locator('li');
  }

  unorderedList(): Locator {
    return this.page.locator('#ul-example-1');
  }

  unorderedListItems(): Locator {
    return this.unorderedList().locator('li');
  }

  // Form inputs: prefer user-facing locators (label, role) where the markup allows.

  get textInput(): Locator {
    return this.page.getByLabel('Text Example 1', { exact: true });
  }

  get checkbox(): Locator {
    return this.page.getByLabel('Checkbox Example 1', { exact: true });
  }

  radio(option: 1 | 2 | 3): Locator {
    // The radios have no <label>, so fall back to the contract ids.
    return this.page.locator(`#radio-example-1-option-${option}-id`);
  }

  get select(): Locator {
    return this.page.locator('#select-example-1-id');
  }

  get submitByXPath(): Locator {
    return this.page.locator('xpath=//input[@type="submit"]');
  }
}
