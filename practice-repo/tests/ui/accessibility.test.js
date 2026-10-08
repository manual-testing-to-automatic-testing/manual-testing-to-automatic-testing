// Automated accessibility checks with axe-core: Module 12.
//
// Automated checks find only some problems; see the module for what they
// cannot find. The fixture page has known issues, recorded below, because its
// markup is a fixed contract that other repositories depend on. Any other
// violation fails the test.

import { strict as assert } from 'node:assert';
import { AxeBuilder } from '@axe-core/webdriverjs';
import { buildDriver, forgetDriver } from '../support/driver.js';
import { FixturePage } from './pages/fixture-page.js';

// Known, accepted issues on the fixture page: the radio buttons have no
// labels, and the select has no accessible name. Each needs a reason.
const KNOWN = {
  label: 'fixture contract: radio inputs have no <label> (testingexamples.github.io spec)',
  'select-name': 'fixture contract: the select has no <label> (testingexamples.github.io spec)',
};

describe('fixture page accessibility', function () {
  let driver;

  before(async function () {
    driver = await buildDriver();
  });

  after(async function () {
    await driver?.quit();
    forgetDriver(driver);
  });

  it('has no WCAG 2.2 AA violations except the known contract issues', async function () {
    await new FixturePage(driver).open();
    const results = await new AxeBuilder(driver)
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const unexpected = results.violations
      .filter((v) => !KNOWN[v.id])
      .map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`);
    assert.deepEqual(unexpected, [], unexpected.join('\n'));
  });
});
