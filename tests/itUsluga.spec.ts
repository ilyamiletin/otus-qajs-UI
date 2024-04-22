import {test, expect} from "@playwright/test";
import { describe } from "node:test";

test.describe('Функциональное тестирвоание', () => {
    test('Содержание подстроки и URL', async ({ page }) => {
        await page.goto('https://itusluga.ru/');
        await expect(page).toHaveURL('https://itusluga.ru');
        await expect(page).toHaveTitle(/Купить онлайн-кассы для ИП с доставкой по РФ/);
    });

    test('Начальная страница', async ({ page }) => {
        await page.goto('https://itusluga.ru/');
        await expect(page.getByText('Профессиональное обслуживание онлайн-касс')).toBeVisible();
    });

    test('Регистрация с неверным паролем', async ({ page }) => {
        await page.goto('https://itusluga.ru/');
        await page.getByRole('link', { name: 'Войти' }).click();
        await page.locator('#phone').fill('9169038949')
        await page.locator('#login-form_password').fill('testlearning')
        await page.locator('#loginModalBtn').click()
        await expect(page.getByText('Пользователь с таким логином и паролем не найден')).toBeVisible();
    });

    test('Элемент ввода имеет значение', async ({ page }) => {
        await page.goto('https://itusluga.ru/');
        await page.getByRole('link', { name: 'Войти' }).click();
        await page.locator('#phone').fill('9169038949')
        await expect(page.getByPlaceholder('+7 (___) ___-__-__')).toHaveValue('+7 (916) 903-89-49');
    });

    test('Выпадающий список', async ({ page }) => {
        await page.goto('https://itusluga.ru/');
        await page.getByRole('link', { name: 'Каталог ' }).hover();
        await page.getByRole('link', { name: 'Онлайн-кассы ' }).hover();
        const list = page.locator('[class="dropdown-toggle"]');
        await expect(list).toHaveCount(4);
    });
})