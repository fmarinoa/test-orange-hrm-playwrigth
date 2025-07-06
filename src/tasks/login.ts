import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export class Login {
    static with(username: string, password: string) {
        return {
            using: async (page: Page) => {
                const loginPage = new LoginPage(page);
                await loginPage.typeUsername(username);
                await loginPage.typePassword(password);
                await loginPage.clickLoginButton();
            }
        };
    }
}
