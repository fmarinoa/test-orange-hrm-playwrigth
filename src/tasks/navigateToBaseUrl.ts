import { Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export class Navigate {
    static toBaseUrl() {
        return {
            using: async (page: Page) => {
                const baseUrl = process.env.BASEURL;
                if (!baseUrl) throw new Error('BASEURL not defined');
                await new BasePage(page).goTo(baseUrl);
            }
        };
    }
}