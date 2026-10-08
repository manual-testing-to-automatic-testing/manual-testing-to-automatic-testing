// The flaky-test exercise (Module 9). This test is deliberately flaky: it
// passes sometimes and fails sometimes, with no change to the code or the page.
// Find out why before you read fixed.test.js.

import { strict as assert } from 'node:assert';
import { pathToFileURL } from 'node:url';
import { By } from 'selenium-webdriver';
import { buildDriver, forgetDriver } from '../support/driver.js';

const PAGE = pathToFileURL('tests/flaky/slow-status.html').href;

describe('save status (flaky)', function () {
  let driver;

  before(async function () {
    driver = await buildDriver();
  });

  after(async function () {
    await driver?.quit();
    forgetDriver(driver);
  });

  it('shows Saved after clicking Save', async function () {
    await driver.get(PAGE);
    await driver.findElement(By.id('save')).click();
    const status = await driver.findElement(By.id('status')).getText();
    assert.equal(status, 'Saved');
  });
});
