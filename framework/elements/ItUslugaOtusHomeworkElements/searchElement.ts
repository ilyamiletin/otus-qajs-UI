import { expect, type Locator, type Page } from '@playwright/test';

export class SearchElement {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('#title-search-input_fixed');
        this.searchButton = page.locator('#title-search_fixed').getByRole('button');
    }

    async searchItem(searchItem: string) {
        await this.searchInput.fill(searchItem)
        await this.searchButton.click();
    }
}