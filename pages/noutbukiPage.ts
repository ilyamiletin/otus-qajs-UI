import { expect, type Locator, type Page } from '@playwright/test';

export class NoutbukiPage {
    readonly page: Page;
    readonly itemHuaweiHover: Locator;
    readonly quickViewButton: Locator;
    readonly addBasketButton: Locator;
    readonly closeWindowQuickViewButton: Locator;
    readonly itemBasketHover: Locator;
    readonly moveInBasketButton: Locator;
    readonly gettingNamePageBasket: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemHuaweiHover = page.locator('#bx_3966226736_728');
        this.quickViewButton = page.getByText('Быстрый просмотр');
        this.addBasketButton = page.locator('#bx_117848907_728f_basket_actions').getByText('В корзину');
        this.closeWindowQuickViewButton = page.locator('.close');
        this.itemBasketHover = page.getByRole('link', { name: 'Корзина 1 49 900 ₽' });
        this.moveInBasketButton = page.getByRole('link', { name: 'Перейти в корзину' });
        this.gettingNamePageBasket = page.getByRole('heading', { name: 'Корзина' });
    }

    async goto() {
        await this.page.goto('https://itusluga.ru/catalog/noutbuki/');
    }

    async addBasket() {
        await this.itemHuaweiHover.hover();
        await this.quickViewButton.click();
        await this.addBasketButton.click();
        await this.closeWindowQuickViewButton.click();
        await this.itemBasketHover.hover();
        await this.moveInBasketButton.click();
    }
}