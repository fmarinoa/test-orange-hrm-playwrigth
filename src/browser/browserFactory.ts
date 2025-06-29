import { chromium, firefox, webkit, Browser } from '@playwright/test';

const browserMap = {
    chromium: { launcher: chromium, name: "chrome" },
    firefox: { launcher: firefox, name: "firefox" },
    webkit: { launcher: webkit, name: "safari" }
};

export async function createBrowser(browserKey: string): Promise<{ browser: Browser, humanName: string, version: string }> {
    const entry = browserMap[browserKey.toLowerCase().trim() as keyof typeof browserMap] || browserMap.chromium;
    const browser = await entry.launcher.launch({ headless: true });
    const version = browser.version();
    return { browser, humanName: entry.name, version };
}