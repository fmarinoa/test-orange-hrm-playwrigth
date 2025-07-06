import { Page, Locator } from '@playwright/test';

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
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToBaseUrl(): Promise<void> {
        const baseUrl = process.env.BASEURL;
        if (!baseUrl) {
            throw new Error('La variable de entorno BASEURL no está definida');
        }
        await this.page.goto(baseUrl);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async waitForSelector(selector: string, timeout: number = 5000): Promise<Locator> {
        const locator = this.page.locator(selector);
        await locator.waitFor({ timeout });
        return locator;
    }

    async isVisible(selector: string): Promise<boolean> {
        return this.page.isVisible(selector);
    }

    async click(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async type(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }
}