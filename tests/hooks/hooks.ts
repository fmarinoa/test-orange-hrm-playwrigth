import { BeforeAll, Before, AfterAll, After, Status, ITestCaseHookParameter, AfterStep } from '@cucumber/cucumber';
import { Browser, BrowserContext } from '@playwright/test';

import { invokeBrowser } from '../../src/helpers/browser/browserFactory';

import { setPage, getPage, closePage } from './pageFixture';
import { Constants } from '../../src/helpers/constants';
import { getEnv } from '../../src/helpers/env/env';
import { writeBrowserInfo, writeEndTime, writeStartTime } from '../../src/helpers/WriteFileUtil';

let browser: Browser;
let context: BrowserContext;

async function closeBrowser(): Promise<void> { await browser?.close(); }
async function closeContext(): Promise<void> { await context?.close(); }

function setBrowser(newBrowser: Browser): void { browser = newBrowser; }
function setContext(newContext: BrowserContext): void { context = newContext; }

function getBrowser(): Browser { return browser; }
function getContext(): BrowserContext { return context; }

async function takeScreenshot(scenario: ITestCaseHookParameter): Promise<Buffer> {
  const screenshotPath = `./${Constants.TARGET}/screenshots/${scenario.pickle.name}.png`;
  return await getPage().screenshot({ path: screenshotPath });
}

BeforeAll(async function () {
  writeStartTime();

  getEnv();
  const { browser: newBrowser, humanName } = await invokeBrowser();
  setBrowser(newBrowser);

  writeBrowserInfo(humanName, getBrowser().version());
});

Before(async function () {
  setContext(await getBrowser().newContext());
  setPage(await getContext().newPage());
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && process.env.SCREENSHOT === 'true') {
    this.attach(await takeScreenshot(scenario), 'image/png');
  }
  await closePage();
  await closeContext();
});

AfterAll(async function () {
  await closeBrowser();
  writeEndTime();
});

AfterStep(async function (scenario) {
  this.attach(await takeScreenshot(scenario), 'image/png');
});