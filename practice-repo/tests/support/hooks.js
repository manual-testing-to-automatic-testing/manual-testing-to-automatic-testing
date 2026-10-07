// Root hooks for every suite, loaded by .mocharc.cjs.
//
// When a browser test fails, save evidence to test-results/: a screenshot,
// the page source, the URL, and the browser console log. In CI these files are
// uploaded, so you can see what the browser saw when the test failed.

import { mkdir, writeFile } from 'node:fs/promises';
import { currentDriver } from './driver.js';

const RESULTS = 'test-results';

function fileSafe(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 100);
}

export const mochaHooks = {
  async afterEach() {
    const test = this.currentTest;
    if (test?.state !== 'failed' || !currentDriver) return;
    const name = fileSafe(test.fullTitle());
    try {
      await mkdir(RESULTS, { recursive: true });
      const screenshot = await currentDriver.takeScreenshot();
      await writeFile(`${RESULTS}/${name}.png`, screenshot, 'base64');
      await writeFile(`${RESULTS}/${name}.html`, await currentDriver.getPageSource());
      const url = await currentDriver.getCurrentUrl();
      let console = [];
      try {
        console = await currentDriver.manage().logs().get('browser');
      } catch {
        // Not every browser offers its console log.
      }
      await writeFile(
        `${RESULTS}/${name}.txt`,
        [
          `url: ${url}`,
          '',
          'browser console:',
          ...console.map((e) => `${e.level.name} ${e.message}`),
        ].join('\n'),
      );
      process.stdout.write(`      failure evidence: ${RESULTS}/${name}.{png,html,txt}\n`);
    } catch (error) {
      process.stdout.write(`      could not save failure evidence: ${error.message}\n`);
    }
  },
};
