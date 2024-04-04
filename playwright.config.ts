import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel 
     (Запускайте тесты в файлах параллельно)*/
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. 
     (Сбой сборки на CI, если вы случайно оставили test.only в исходном коде)*/
  forbidOnly: !!process.env.CI,
  /* Retry on CI only 
     (Повторите попытку только на CI)*/
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. 
     (Откажитесь от параллельных тестов на CI.)*/
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters 
     (Репортер для использования. Видеть)*/
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. 
     (Общие настройки для всех приведенных ниже проектов. Видеть)*/
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. 
       (Базовый URL-адрес для использования в действиях типа await page.goto)*/
    //baseURL: 'https://demoqa.com',
    //baseURL: 'https://itusluga.ru',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
       (Соберите трассировку при повторной попытке неудачного теста. Видеть)*/
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers 
     (Настройка проектов для основных браузеров)*/
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      headless: true},
    },

   //  {
   //    name: 'chromium-mobile',
   //    use: { ...devices['Galaxy S5'] ,
   //    headless: true},
   //  },

   //  {
   //    name: 'firefox',
   //    use: { ...devices['Desktop Firefox'] },
   //  },

   //  {
   //    name: 'webkit',
   //    use: { ...devices['Desktop Safari'] },
   //  },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests 
     (Запустите свой локальный сервер разработки перед запуском тестов)*/
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
