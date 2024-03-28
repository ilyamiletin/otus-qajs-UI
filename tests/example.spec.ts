import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Ожидайте, что заголовок "будет содержать" подстроку.
  await expect(page).toHaveTitle(/Playwright/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Нажмите на ссылку приступить к работе.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Ожидает, что страница будет иметь заголовок с названием установки.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
