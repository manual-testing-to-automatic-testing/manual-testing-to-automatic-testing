// The driver factory: one place that decides how every browser test gets its
// browser. Use it in a before() hook, and quit the driver in after():
//
//   let driver;
//   before(async () => { driver = await buildDriver(); });
//   after(async () => { await driver?.quit(); });
//
// Selenium Manager, built into selenium-webdriver, finds Chrome and downloads a
// matching chromedriver the first time, so there is nothing else to install.

import { Builder, Browser } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

/** The driver of the test that is running now, so the failure hook can find it. */
export let currentDriver;

/**
 * Start Chrome. It runs headless in CI, or when HEADLESS=1; otherwise you can
 * watch it.
 */
export async function buildDriver() {
  const options = new chrome.Options();
  if (process.env.CI || process.env.HEADLESS === '1') {
    options.addArguments('--headless=new', '--window-size=1280,800');
  }
  options.addArguments('--disable-search-engine-choice-screen');
  const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
  // No implicit wait. Every wait in this repository is explicit, with
  // driver.wait(until...), so you can see exactly what each test waits for.
  await driver.manage().setTimeouts({ implicit: 0 });
  currentDriver = driver;
  return driver;
}

/** Forget the driver after it quits. */
export function forgetDriver(driver) {
  if (currentDriver === driver) currentDriver = undefined;
}
