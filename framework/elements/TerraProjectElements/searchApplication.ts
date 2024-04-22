import { expect, type Locator, type Page } from '@playwright/test';

export class SearchApplication {
    readonly page: Page;
    readonly searchBarInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBarInput = page.getByPlaceholder('Поиск номера объекта');
        this.searchButton = page.getByPlaceholder('Поиск номера объекта');
    }

    async searchApplication(caseNumber: string) {
        await this.searchBarInput.fill(caseNumber)
        await this.searchButton.click();
    }
}