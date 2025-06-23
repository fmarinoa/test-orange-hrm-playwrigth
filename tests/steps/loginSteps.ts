import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I navigate to the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('I enter valid credentials', async function () {
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async function () {
  let dashboardElement = page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6');
  await expect(dashboardElement).toBeVisible();
});

When('I enter invalid credentials', async function () {
  await page.fill('input[name="username"]', 'InvalidUser');
  await page.fill('input[name="password"]', 'InvalidPass');
  await page.click('button[type="submit"]');
});

Then('I should see an error message', async function () {
  let errorElement = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]');
  await expect(errorElement).toBeVisible();
});

Then('The error message should be {string}', async function (expectedMessage: string) {
  let errorElement = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]');
  await expect(errorElement).toHaveText(expectedMessage);
})
