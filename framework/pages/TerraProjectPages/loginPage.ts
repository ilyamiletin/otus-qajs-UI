import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly enterButton: Locator;
    readonly usernameHomePage: Locator;
    readonly invalidLoginModalWindow: Locator;
    readonly emptyPasswordField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginInput = page.locator('#loginEdit-el');
        this.passwordInput = page.locator('#passwordEdit-el');
        this.enterButton = page.locator('#t-comp16-textEl');
        this.usernameHomePage = page.locator('#MainHeaderSchemaUserInfoHeaderCaptionLabel');
        this.invalidLoginModalWindow = page.locator('.ts-messagebox-caption');
        this.emptyPasswordField = page.locator('#passwordEdit-validation');
    }

    async goto() {
        await this.page.goto('');
      }
    
    async login(login: string, password: string) {
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
        await this.enterButton.click();
    }
}