import { Page, Locator } from '@playwright/test';
import { Constants } from '../constants';

/**
 * Represents a base page object providing common methods for interacting with web pages using Playwright.
 *
 * @remarks
 * This class is intended to be extended by specific page objects in your test framework.
 *
 * @example
 * ```typescript
 * class LoginPage extends BasePage {
 *   async login(username: string, password: string) {
 *     await this.type('#username', username);
 *     await this.type('#password', password);
 *     await this.click('#login-button');
 *   }
 * }
 * ```
 */
export class BasePage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async waitForSelector(selector: string, timeout: number = Constants.LONG_TIMEOUT): Promise<Locator> {
        const locator = this.page.locator(selector);
        await locator.waitFor({ timeout });
        return locator;
    }

    async isVisible(selector: string): Promise<boolean> {
        return this.page.isVisible(selector);
    }

    async click(selector: string): Promise<void> {
        const locator = await this.waitForSelector(selector);
        await locator.click();
    }

    async type(selector: string, text: string): Promise<void> {
        const locator = await this.waitForSelector(selector);
        await locator.fill(text);
    }

    async getText(selector: string): Promise<string> {
        const locator = await this.waitForSelector(selector);
        return (await locator.textContent()) ?? '';
    }
}