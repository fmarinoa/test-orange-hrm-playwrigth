import { Page } from "@playwright/test";
import { BasePage } from "../helpers/base/basePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly usernameInput = 'input[name="username"]';
    private readonly passwordInput = 'input[name="password"]';
    private readonly loginButton = 'button[type="submit"]';
    private readonly errorMessage = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]';

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