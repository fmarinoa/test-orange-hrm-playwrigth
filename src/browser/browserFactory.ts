import { chromium, firefox, webkit, Browser } from '@playwright/test';

const browserMap = {
    chromium: { launcher: chromium, name: "chrome" },
    firefox: { launcher: firefox, name: "firefox" },
    webkit: { launcher: webkit, name: "safari" }
};

export async function createBrowser(): Promise<{ browser: Browser, humanName: string }> {
    let entry;

    const browserKey = process.env.BROWSER;
    if (!browserKey) {
        entry = browserMap.chromium; // Default to Chromium if no BROWSER env variable is set
    } else {
        entry = browserMap[browserKey.toLowerCase().trim() as keyof typeof browserMap]
    }

    const browser = await entry.launcher.launch({ headless: process.env.HEADLESS === "true" });
    return { browser: browser, humanName: entry.name };
}