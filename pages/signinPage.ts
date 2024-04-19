import { expect, type Locator, type Page } from '@playwright/test';

export class SigninPage {
    readonly page: Page;
    readonly telephoneInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly gettingErrorUserLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.telephoneInput = page.locator('#phone');
        this.passwordInput = page.locator('#login-form_password');
        this.loginButton = page.locator('#loginModalBtn');
        this.gettingErrorUserLogin = page.getByText('Пользователь с таким логином и паролем не найден');
    }

    async goto() {
        await this.page.goto('https://sb.itusluga.ru/signin');
      }
    
    async login(telephone: string, password: string) {
        await this.telephoneInput.fill(telephone);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}