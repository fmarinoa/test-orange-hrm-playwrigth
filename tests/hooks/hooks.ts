import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from '@playwright/test';
import { setPage, getPage } from "./pageFixture";

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    setPage(page);
});

After(async function () {
    await getPage()?.close();
    await browser?.close();
});
