export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER: 'chromium' | 'firefox' | 'webkit';
      ENVIRONMENT: 'dev' | 'test' | 'staging';
      HEADLESS: 'true' | 'false';
      SCREENSHOT: 'true' | 'false';
      BASE_URL: string;
    }
  }
}
