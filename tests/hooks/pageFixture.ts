import { Page } from '@playwright/test';

let page: Page | undefined;

export function setPage(p: Page) {
  page = p;
}

export function getPage(): Page {
  return page!;
}

export async function closePage(): Promise<void> {
  await page?.close();
}
