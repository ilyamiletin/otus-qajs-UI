import { expect, type Locator, type Page } from '@playwright/test';

export class CaseSectionPage {
    readonly page: Page;
    readonly selectApplicationButton: Locator;
    readonly mainHeaderPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.selectApplicationButton = page.getByRole('link', { name: 'SR096775274' });
    }

    async goto() {
        await this.page.goto('https://itsm-t-app05.it.sberbank-service.ru/0/Nui/ViewModule.aspx#SectionModuleV2/CaseSection/');
      }
    
    async clickApplication() {
        await this.selectApplicationButton.click();
    }
}