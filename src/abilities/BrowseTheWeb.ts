import { Page } from '@playwright/test';

export class BrowseTheWeb {
  constructor(private readonly page: Page) {}

  static using(page: Page) {
    return new BrowseTheWeb(page);
  }

  getPage(): Page {
    return this.page;
  }
}
