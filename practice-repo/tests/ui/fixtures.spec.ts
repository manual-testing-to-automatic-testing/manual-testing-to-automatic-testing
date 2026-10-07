import { test, expect } from '@playwright/test';
import { FixturePage } from './pages/fixture-page';

// Specification: spec/example/index.md. The spec and this file must agree.

test.describe('testingexamples fixture contract', () => {
  let fixture: FixturePage;

  test.beforeEach(async ({ page }) => {
    fixture = new FixturePage(page);
    await fixture.goto();
  });

  test('id examples have the expected text', async () => {
    for (const n of [1, 2, 3] as const) {
      await expect(fixture.byId(n)).toHaveText(`Id Example ${n}`);
    }
  });

  test('name examples have the expected text', async () => {
    for (const n of [1, 2, 3] as const) {
      await expect(fixture.byName(n)).toHaveText(`Name Example ${n}`);
    }
  });

  test('class examples have the expected text', async () => {
    for (const n of [1, 2, 3] as const) {
      await expect(fixture.byClass(n)).toHaveText(`Class Example ${n}`);
    }
  });

  test('link examples point to the expected hrefs', async () => {
    for (const n of [1, 2, 3] as const) {
      await expect(fixture.link(n)).toHaveAttribute('href', `https://${n}.example.com`);
    }
  });

  test('ordered list has alfa, bravo, charlie in order', async () => {
    await expect(fixture.orderedListItems()).toHaveText(['alfa', 'bravo', 'charlie']);
    await expect(fixture.orderedList().locator('#ol-example-1-li-2')).toHaveText('bravo');
  });

  test('unordered list has alfa, bravo, charlie', async () => {
    await expect(fixture.unorderedListItems()).toHaveCount(3);
    await expect(fixture.unorderedListItems()).toHaveText(['alfa', 'bravo', 'charlie']);
  });

  test('text input starts with its default value and can be filled', async () => {
    // Given the text input has its default value
    await expect(fixture.textInput).toHaveValue('Text Example 1 Value');
    // When I fill it
    await fixture.textInput.fill('hello');
    // Then it holds the new value
    await expect(fixture.textInput).toHaveValue('hello');
  });

  test('checkbox starts unchecked and can be checked', async () => {
    await expect(fixture.checkbox).not.toBeChecked();
    await fixture.checkbox.check();
    await expect(fixture.checkbox).toBeChecked();
  });

  test('radio buttons are mutually exclusive', async () => {
    await fixture.radio(1).check();
    await expect(fixture.radio(1)).toBeChecked();
    await fixture.radio(2).check();
    await expect(fixture.radio(2)).toBeChecked();
    await expect(fixture.radio(1)).not.toBeChecked();
  });

  test('select has alfa first and can select charlie', async () => {
    await expect(fixture.select.locator('option')).toHaveText(['alfa', 'bravo', 'charlie']);
    await expect(fixture.select).toHaveValue('a');
    await fixture.select.selectOption({ label: 'charlie' });
    await expect(fixture.select).toHaveValue('c');
  });

  test('submit button is found by XPath', async () => {
    await expect(fixture.submitByXPath).toHaveCount(1);
    await expect(fixture.submitByXPath).toHaveValue('Submit');
  });
});
