import {test, expect} from "@playwright/test";
import { SigninPage } from "../framework/pages/ItUslugaOtusHomeworkPages/signinPage";
import { HomePage } from "../framework/pages/ItUslugaOtusHomeworkPages/homePage";
import { NoutbukiPage } from "../framework/pages/ItUslugaOtusHomeworkPages/noutbukiPage";
import { BasketPage } from "../framework/pages/ItUslugaOtusHomeworkPages/basketPage";
import { SearchElement } from "../framework/elements/ItUslugaOtusHomeworkElements/searchElement";

test.describe('Функциональное тестирование', () => {
    test('Регистрация с неверным паролем', async ({page}) => {
        const signinPage = new SigninPage(page);

        await signinPage.goto();
        await signinPage.login('9169038949', 'testlearning');
        await expect(signinPage.gettingErrorUserLogin).toBeVisible();
    })
    
    test('Открытие страницы с ноутбуками', async ({page}) => {
        const homePage = new HomePage(page);

        await homePage.goto();
        await homePage.openLaptops();
        await expect(homePage.gettingNamePageLaptops).toBeVisible();
    })

    test('Добавление товара в корзину', async ({page}) => {
        const noutbukiPage = new NoutbukiPage(page);

        await noutbukiPage.goto();
        await noutbukiPage.addBasket();
        await expect(noutbukiPage.gettingNamePageBasket).toBeVisible();
        //пауза для просмотра выполнения expect
        //await page.waitForTimeout(5000);
    })

    test('Ввод неверного промокода', async ({page}) => {
        const noutbukiPage = new NoutbukiPage(page);
        await noutbukiPage.goto();
        await noutbukiPage.addBasket();

        const basketPage = new BasketPage(page);
        await basketPage.incorrectPromo('test');
        // await expect(basketPage.gettingErrorPromocodeNotFound).toBeVisible();
    })

    test('Поиск товара', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        const searchElement = new SearchElement(page);
        await searchElement.searchItem('Моноблок Lenovo IdeaCentre AIO 5 Gen 6')
        await expect(page.locator('#bx_3966226736_825')).toHaveScreenshot('image.png');
    })
})