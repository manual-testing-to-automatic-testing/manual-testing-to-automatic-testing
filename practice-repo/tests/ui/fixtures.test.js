// Browser tests for the fixture page: Modules 4 and 5.
// Specification: spec/example/index.md. The spec and this file must agree.

import { strict as assert } from 'node:assert';
import { buildDriver, forgetDriver } from '../support/driver.js';
import { FixturePage, textsOf } from './pages/fixture-page.js';

describe('testingexamples fixture contract', function () {
  let driver;
  let fixture;

  before(async function () {
    driver = await buildDriver();
    fixture = new FixturePage(driver);
  });

  beforeEach(async function () {
    await fixture.open();
  });

  after(async function () {
    // Always quit, even when a test fails, or the browser keeps running.
    await driver?.quit();
    forgetDriver(driver);
  });

  it('id examples have the expected text', async function () {
    for (const n of [1, 2, 3]) {
      assert.equal(await (await fixture.byId(n)).getText(), `Id Example ${n}`);
    }
  });

  it('name examples have the expected text', async function () {
    for (const n of [1, 2, 3]) {
      assert.equal(await (await fixture.byName(n)).getText(), `Name Example ${n}`);
    }
  });

  it('class examples have the expected text', async function () {
    for (const n of [1, 2, 3]) {
      assert.equal(await (await fixture.byClass(n)).getText(), `Class Example ${n}`);
    }
  });

  it('link examples point to the expected hrefs', async function () {
    for (const n of [1, 2, 3]) {
      // getDomAttribute reads the attribute as written in the HTML.
      assert.equal(
        await (await fixture.link(n)).getDomAttribute('href'),
        `https://${n}.example.com`,
      );
    }
  });

  it('ordered list has alfa, bravo, charlie in order', async function () {
    assert.deepEqual(await textsOf(await fixture.listItems('ol-example-1')), [
      'alfa',
      'bravo',
      'charlie',
    ]);
  });

  it('unordered list has alfa, bravo, charlie', async function () {
    const items = await fixture.listItems('ul-example-1');
    assert.equal(items.length, 3);
    assert.deepEqual(await textsOf(items), ['alfa', 'bravo', 'charlie']);
  });

  it('text input starts with its default value and can be filled', async function () {
    // Given the text input has its default value
    const input = await fixture.textInput();
    assert.equal(await input.getAttribute('value'), 'Text Example 1 Value');
    // When I replace it
    await input.clear();
    await input.sendKeys('hello');
    // Then it holds the new value
    assert.equal(await input.getAttribute('value'), 'hello');
  });

  it('checkbox starts unchecked and can be checked', async function () {
    const checkbox = await fixture.checkbox();
    assert.equal(await checkbox.isSelected(), false);
    await fixture.click(checkbox);
    assert.equal(await checkbox.isSelected(), true);
  });

  it('radio buttons are mutually exclusive', async function () {
    const first = await fixture.radio(1);
    const second = await fixture.radio(2);
    await fixture.click(first);
    assert.equal(await first.isSelected(), true);
    await fixture.click(second);
    assert.equal(await second.isSelected(), true);
    assert.equal(await first.isSelected(), false);
  });

  it('select has alfa first and can select charlie', async function () {
    const select = await fixture.select();
    assert.deepEqual(await textsOf(await select.getOptions()), ['alfa', 'bravo', 'charlie']);
    assert.equal(await (await select.getFirstSelectedOption()).getAttribute('value'), 'a');
    await select.selectByVisibleText('charlie');
    assert.equal(await (await select.getFirstSelectedOption()).getAttribute('value'), 'c');
  });

  it('submit button is found by XPath', async function () {
    assert.equal(await (await fixture.submitByXPath()).getAttribute('value'), 'Submit');
  });
});
