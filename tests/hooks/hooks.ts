import { BeforeAll, Before, AfterAll, After, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { setPage, getPage } from "./pageFixture";
import { Constants } from "./../../src/helper/constants";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    setPage(page);
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshotPath = `./${Constants.TARGET}/screenshots/${scenario.pickle.name}.png`;
        const screenshot = await getPage()?.screenshot({ path: screenshotPath });
        this.attach(screenshot, 'image/png');
    }
    await getPage()?.close();
    await context?.close();
});

AfterAll(async function () {
    await browser?.close();
});