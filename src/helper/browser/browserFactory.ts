import { chromium, firefox, webkit, Browser, LaunchOptions } from '@playwright/test';

const browserMap = {
  chromium: { launcher: chromium, name: 'chrome' },
  firefox: { launcher: firefox, name: 'firefox' },
  webkit: { launcher: webkit, name: 'safari' },
};

/**
 * Launches a browser instance based on the `BROWSER` environment variable.
 * If the variable is not set, defaults to launching Chromium.
 *
 * @returns A promise that resolves to an object containing the launched `browser` instance
 * and a human-readable `humanName` for the browser.
 *
 * @throws Will throw an error if the specified browser key is not found in `browserMap`
 * or if the browser fails to launch.
 */
export async function invokeBrowser(): Promise<{
  browser: Browser;
  humanName: string;
}> {
  const browserKey = process.env.BROWSER || 'chromium';

  const entry = browserMap[browserKey.toLowerCase().trim() as keyof typeof browserMap];

  const options: LaunchOptions = {
    headless: process.env.HEADLESS === 'true'
  };

  return {
    browser:
      await entry.launcher.launch(options),
    humanName:
      entry.name
  };
}
