import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly catalogButton: Locator;
    readonly onlineSalesRegisterButton: Locator;
    readonly laptopsComputersButton: Locator;
    readonly softwareButton: Locator;
    readonly gettingNamePageLaptops: Locator;

    constructor(page: Page) {
        this.page = page;
        this.catalogButton = page.getByRole('link', { name: 'Каталог ' });
        this.onlineSalesRegisterButton = page.getByRole('link', { name: 'Онлайн-кассы ' });
        this.laptopsComputersButton = page.getByRole('link', { name: 'Ноутбуки и компьютеры ' });
        this.softwareButton = page.getByRole('link', {name: 'Программное обеспечение ' });
        this.gettingNamePageLaptops = page.locator('h1', { hasText: 'Ноутбуки' });
    }

    async goto() {
        await this.page.goto('https://itusluga.ru/');
    }

    async openLaptops() {
        await this.catalogButton.hover();
        await this.laptopsComputersButton.click();
    }
}