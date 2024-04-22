import { expect, type Locator, type Page } from '@playwright/test';

export class ActivityPage {
    readonly page: Page;
    readonly activityStatusDropDownList: Locator;
    readonly statusCompletedButton: Locator;
    readonly saveButton: Locator;
    readonly EmptyClosingCodeFieldModalWindow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.activityStatusDropDownList = page.locator('#ActivityPageV2StateMenuButton-menuWrapEl');
        this.statusCompletedButton = page.getByText('Завершена');
        this.saveButton = page.getByText('Сохранить');
        this.EmptyClosingCodeFieldModalWindow = page.locator('#t-comp0-caption');
    }

    async goto() {
        await this.page.goto('https://itsm-t-app05.it.sberbank-service.ru/0/Nui/ViewModule.aspx#CardModuleV2/ActivityPageV2/edit/df507cb5-2f12-450c-8a78-2230a5307e5d');
      }
    
    async completionEmptyClosingCodeField() {
        await this.activityStatusDropDownList.click();
        await this.statusCompletedButton.click();
        await this.saveButton.click();
    }
}