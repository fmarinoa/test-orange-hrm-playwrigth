import { Page } from '@playwright/test';

export abstract class BaseQuestion<T> {
    abstract in(page: Page): Promise<T>;
}
