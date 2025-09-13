import { Page } from '@playwright/test';
import { BaseTask } from '../helpers/base/baseTask';
import { BasePage } from '../helpers/base/basePage';

export class Navigate extends BaseTask {
    constructor(
        private readonly baseUrl = process.env.BASEURL,
    ) { super(); }

    async using(page: Page): Promise<void> {
        if (!this.baseUrl) throw new Error('BASEURL not defined');
        await new BasePage(page).goTo(this.baseUrl);
    }

    static toBaseUrl() {
        return new Navigate();
    }
}