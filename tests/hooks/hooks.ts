import * as fs from 'fs';

import { BeforeAll, Before, AfterAll, After, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext } from '@playwright/test';

import { invokeBrowser } from '../../src/helper/browser/browserFactory';

import { setPage, getPage } from './pageFixture';
import { Constants } from './../../src/helper/constants';
import { getEnv } from '../../src/helper/env/env';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  fs.writeFileSync(`./${Constants.TARGET}/startTime.txt`, new Date().toISOString());

  getEnv();
  const { browser: b, humanName } = await invokeBrowser();
  browser = b;

  fs.writeFileSync(
    `./${Constants.TARGET}/browserInfo.json`,
    JSON.stringify({ name: humanName, version: browser.version() }, null, 2),
  );
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  setPage(page);
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && process.env.SCREENSHOT === 'true') {
    const screenshotPath = `./${Constants.TARGET}/screenshots/${scenario.pickle.name}.png`;
    const screenshot = await getPage().screenshot({ path: screenshotPath });
    this.attach(screenshot, 'image/png');
  }
  await getPage()?.close();
  await context?.close();
});

AfterAll(async function () {
  await browser?.close();
  fs.writeFileSync(`./${Constants.TARGET}/endTime.txt`, new Date().toISOString());
});
