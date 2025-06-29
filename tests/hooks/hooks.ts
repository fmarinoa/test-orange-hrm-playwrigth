import { BeforeAll, Before, AfterAll, After, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { setPage, getPage } from "./pageFixture";

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
        const screenshotPath = `./reports/screenshots/${scenario.pickle.name}.png`;
        await getPage()?.screenshot({ path: screenshotPath });
    }
    await getPage()?.close();
    await context?.close();
});

AfterAll(async function () {
    await browser?.close();
});