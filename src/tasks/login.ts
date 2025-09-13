import { Page } from '@playwright/test';
import { BaseTask } from '../helpers/base/baseTask';
import { LoginPage } from '../pages/loginPage';

export class Login extends BaseTask {
    constructor(
        private readonly username: string,
        private readonly password: string
    ) { super(); }

    async using(page: Page): Promise<void> {
        const loginPage = new LoginPage(page);
        await loginPage.typeUsername(this.username);
        await loginPage.typePassword(this.password);
        await loginPage.clickLoginButton();
    }

    static withCredentials(username: string, password: string) {
        return new Login(username, password);
    }
}
