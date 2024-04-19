import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {
    readonly page: Page;
    readonly inputPromocode: Locator;
    readonly applyPromocodeButton: Locator;
    readonly clearBasket: Locator;
    readonly gettingPageWithEmptyBasket: Locator;
    readonly gettingErrorPromocodeNotFound: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inputPromocode = page.getByPlaceholder('Есть промокод?');
        this.applyPromocodeButton = page.locator('.basket-coupon-block-coupon-btn');
        this.clearBasket = page.getByText('Очистить');
        this.gettingPageWithEmptyBasket = page.getByText('Ваша корзина пуста')
        // this.gettingErrorPromocodeNotFound = page.getByText('test1234 не найден');
    }

    async goto() {
        await this.page.goto('https://itusluga.ru/basket/');
    }

    async incorrectPromo(promoCode: string) {
        await this.inputPromocode.fill(promoCode);
        await this.applyPromocodeButton.click();
        await expect(this.page.getByText(`${promoCode} не найден`)).toBeVisible();
    }
}
