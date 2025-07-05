export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: 'chromium' | 'firefox' | 'webkit';
            ENVIRONMENT: 'local' | 'dev' | 'test' | 'staging';
            HEADLESS: 'true' | 'false';
            SCREENSHOT: 'true' | 'false';
            BASEURL: string;
        }
    }
}
