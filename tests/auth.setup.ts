import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';


/*
Пример с использованием файла авторизованного юзера
https://playwright.dev/docs/auth
*/

setup('authenticate', async ({ page }) => {
    // Выполните шаги аутентификации. Замените эти действия своими собственными.
    await page.goto('login');
    await page.locator('input[id=userName]').fill('Dannytest');
    await page.locator('input[id=password]').fill('Test12345!');
    await page.locator('button[id=login]').click();
    // Подождите, пока страница не получит файлы cookie.
    //
    // Иногда поток входа в систему устанавливает файлы cookie в процессе нескольких перенаправлений.
    // Дождитесь окончательного URL-адреса, чтобы убедиться, что файлы cookie действительно установлены.
    await page.waitForURL('https://demoqa.com/profile');
    // В качестве альтернативы вы можете подождать, пока страница не достигнет состояния, в котором будут установлены все файлы cookie.
    await expect(page.locator('#userName-value')).toBeVisible();
    // Завершение этапов аутентификации.

    await page.context().storageState({ path: authFile });
});