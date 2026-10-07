// The flaky-test exercise, fixed. Read this only after you have found the
// root cause yourself.
//
// Root cause: timing. Half the time the status appears 300 ms after the
// click, but the flaky test reads it straight away. Selenium does not wait for you.
// The fix waits explicitly for the condition the test cares about: the status
// text is "Saved". No sleep, no retry: the test waits exactly as long as it
// must, up to a time limit, and no longer.

import { strict as assert } from 'node:assert';
import { pathToFileURL } from 'node:url';
import { By, until } from 'selenium-webdriver';
import { buildDriver, forgetDriver } from '../support/driver.js';

const PAGE = pathToFileURL('tests/flaky/slow-status.html').href;

describe('save status (fixed)', function () {
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
    const status = await driver.findElement(By.id('status'));
    await driver.wait(
      until.elementTextIs(status, 'Saved'),
      5000,
      'waiting for the status to say Saved',
    );
    assert.equal(await status.getText(), 'Saved');
  });
});
