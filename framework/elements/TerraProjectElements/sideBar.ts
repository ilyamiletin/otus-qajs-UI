import { expect, type Locator, type Page } from '@playwright/test';

export class SideBar {
    readonly page: Page;
    readonly mainMenuWorkplaceDropDownList: Locator;
    readonly qualityAssessmentButton: Locator;
    readonly quantityTabsQualityAssessmen: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainMenuWorkplaceDropDownList = page.locator('#menu-workplace-button-textEl');
        this.qualityAssessmentButton = page.locator('#t-comp4-list').getByText('Оценка качества');
        this.quantityTabsQualityAssessmen = page.locator('[class="vertical-strip"]');
    }

    async openSection() {
        await this.mainMenuWorkplaceDropDownList.click();
        await this.qualityAssessmentButton.click();
    }
}