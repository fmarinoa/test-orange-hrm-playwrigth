import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { getPage } from '../hooks/pageFixture';
import { Navigate } from '../../src/tasks/navigateToBaseUrl';
import { Login } from '../../src/tasks/login';

Given('I navigate to the login page', async function () {
  await Navigate.toBaseUrl().using(getPage());
});

Then('I should be redirected to the dashboard', async function () {
  let dashboardElement = getPage().locator(
    '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6',
  );
  await expect(dashboardElement).toBeVisible();
});

Then('I should see an error message', async function () {
  let errorElement = getPage().locator(
    '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]',
  );
  await expect(errorElement).toBeVisible();
});

Then('The error message should be {string}', async function (expectedMessage: string) {
  let errorElement = getPage().locator(
    '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]',
  );
  await expect(errorElement).toHaveText(expectedMessage);
});

When('I enter credentials', async function (dataTable) {
  const [username, password] = dataTable.raw()[0];
  await Login.with(username, password).using(getPage());
});
