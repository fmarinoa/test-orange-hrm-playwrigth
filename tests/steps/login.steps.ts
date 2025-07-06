import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { getPage } from '../hooks/pageFixture';
import { Navigate } from '../../src/tasks/navigateToBaseUrl';
import { Login } from '../../src/tasks/login';
import { LoginPage } from '../../src/pages/loginPage';
import { HomePage } from '../../src/pages/homePage';

Given('I navigate to the login page', async function () {
  await Navigate.toBaseUrl().using(getPage());
});

When('I enter credentials', async function (dataTable) {
  const [username, password] = dataTable.raw()[0];
  await Login.withCredentials(username, password).using(getPage());
});

Then('I should be redirected to the dashboard', async function () {
  const dashboardElement = await new HomePage(getPage()).isDashboardVisible();
  expect(dashboardElement).toBe(true);
});

Then('The error message should be {string}', async function (expectedMessage: string) {
  const actual = await new LoginPage(getPage()).getErrorMessage();
  expect(actual).toEqual(expectedMessage);
});