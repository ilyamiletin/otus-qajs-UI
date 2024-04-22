import { expect, type Locator, type Page } from '@playwright/test';

export class CasePage {
    readonly page: Page;
    readonly mainHeaderPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainHeaderPage = page.locator('#MainHeaderSchemaPageHeaderCaptionLabel');
    }
}