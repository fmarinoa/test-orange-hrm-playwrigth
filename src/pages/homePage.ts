import { Page } from "@playwright/test";
import { BasePage } from "../helpers/base/basePage";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly dashboard = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';

    async isDashboardVisible() {
        return this.isVisible(this.dashboard);
    }
}