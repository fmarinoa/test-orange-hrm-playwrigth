import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from "./../hooks/pageFixture";


Given('I navigate to the login page', async function () {
  await getPage().goto('https://opensource-demo.orangehrmlive.com/');
});

When('I enter valid credentials', async function () {
  await getPage().fill('input[name="username"]', 'Admin');
  await getPage().fill('input[name="password"]', 'admin123');
  await getPage().click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async function () {
  let dashboardElement = getPage().locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6');
  await expect(dashboardElement).toBeVisible();
});

When('I enter invalid credentials', async function () {
  await getPage().fill('input[name="username"]', 'InvalidUser');
  await getPage().fill('input[name="password"]', 'InvalidPass');
  await getPage().click('button[type="submit"]');
});

Then('I should see an error message', async function () {
  let errorElement = getPage().locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]');
  await expect(errorElement).toBeVisible();
});

Then('The error message should be {string}', async function (expectedMessage: string) {
  let errorElement = getPage().locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]');
  await expect(errorElement).toHaveText(expectedMessage);
})

When('I enter credentials', async function (dataTable) {
  const [username, password] = dataTable.raw()[0];
  await getPage().fill('input[name="username"]', username);
  await getPage().fill('input[name="password"]', password);
  await getPage().click('button[type="submit"]');
})
