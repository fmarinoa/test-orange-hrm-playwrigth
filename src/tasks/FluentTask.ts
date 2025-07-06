import { Page } from "@playwright/test";

export class FluentTask<Args extends any[]> {
    constructor(
        private readonly executor: (...argsAndPage: [...Args, page: Page]) => Promise<void>
    ) { }

    with(...args: Args) {
        return {
            using: (page: Page) => this.executor(...args, page)
        };
    }
}
