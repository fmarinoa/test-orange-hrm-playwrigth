import { Page } from '@playwright/test';

let page: Page | undefined;

export function setPage(p: Page) {
  page = p;
}

export function getPage(): Page {
  return page!;
}