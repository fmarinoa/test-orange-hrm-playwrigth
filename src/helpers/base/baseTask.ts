import { Page } from '@playwright/test';

export abstract class BaseTask {
    abstract using(page: Page): Promise<void>;
}