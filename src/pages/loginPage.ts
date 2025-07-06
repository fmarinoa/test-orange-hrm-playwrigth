import { Page } from "@playwright/test";
import { BasePage } from "../helpers/base/basePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly usernameInput = 'input[name="username"]';
    private readonly passwordInput = 'input[name="password"]';
    private readonly loginButton = 'button[type="submit"]';
    private readonly errorMessage = '.orangehrm-login-error div[role="alert"] div p';

    async typeUsername(username: string) {
        await this.type(this.usernameInput, username);
    }

    async typePassword(password: string) {
        await this.type(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async getErrorMessage() {
        return this.getText(this.errorMessage);
    }
}