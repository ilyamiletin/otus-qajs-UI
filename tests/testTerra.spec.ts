import {test, expect} from "@playwright/test";

test.describe('Функциональное тестирование', () => {
    test('Успешный вход в систему', async ({ page }) => {
        await page.goto('');
        await page.locator('#loginEdit-el').fill('miletinia');
        await page.locator('#passwordEdit-el').fill('Vbvbkmrfbkmzz222#');
        await page.locator('#t-comp16-textEl').click();
        const locator = page.locator('#MainHeaderSchemaUserInfoHeaderCaptionLabel')
        await expect(locator).toContainText('Милетин Илья Александрович')
    });

    test('Неверный Логин', async ({ page }) => {
        await page.goto('');
        await page.locator('#loginEdit-el').fill('miletini');
        await page.locator('#passwordEdit-el').fill('Vbvbkmrfbkmzz222#');
        await page.locator('#t-comp16-textEl').click();
        const locator = page.locator('.ts-messagebox-caption');
        await expect(locator).toHaveText('При проверке количества используемых лицензий произошла ошибка. Вероятно, введен неверный логин пользователя. Попробуйте ввести логин заново или обратитесь к системному администратору.');
    });

    test('Пустое поле (пароль)', async ({ page }) => {
        await page.goto('');
        await page.locator('#loginEdit-el').fill('miletini');
        await page.locator('#passwordEdit-el').fill('');
        await page.locator('#t-comp16-textEl').click();
        const locator = page.locator('#passwordEdit-validation');
        await expect(locator).toHaveText('Enter a value');
    });

    test('Оценка качества (количество элементов на вкладке)', async ({ page }) => {
        await page.goto('');
        await page.locator('#loginEdit-el').fill('miletinia');
        await page.locator('#passwordEdit-el').fill('Vbvbkmrfbkmzz222#');
        await page.locator('#t-comp16-textEl').click();
        await page.locator('#menu-workplace-button-textEl').click();
        await page.locator('#t-comp4-list').getByText('Оценка качества').click();
        const list = page.locator('[class="vertical-strip"]');
        await expect(list).toHaveCount(4);
    });

    test('Завершение заявки с пустым полем "Код закрытия', async ({page}) => {
        await page.goto('https://itsm-t-app05.it.sberbank-service.ru/0/Nui/ViewModule.aspx#CardModuleV2/ActivityPageV2/edit/df507cb5-2f12-450c-8a78-2230a5307e5d');
        await page.locator('#loginEdit-el').fill('miletinia');
        await page.locator('#passwordEdit-el').fill('Vbvbkmrfbkmzz222#');
        await page.locator('#t-comp16-textEl').click();
        await page.locator('#ActivityPageV2StateMenuButton-menuWrapEl').click();
        await page.getByText('Завершена').click();
        await page.getByText('Сохранить').click();
        const locator = page.locator('#t-comp0-caption');
        await expect(locator).toHaveText('Поле "Код закрытия": Необходимо указать значение');
    });

    test('Поиск Обращения', async ({page}) => {
        await page.goto('https://itsm-t-app05.it.sberbank-service.ru/0/Nui/ViewModule.aspx#SectionModuleV2/CaseSection/');
        await page.locator('#loginEdit-el').fill('miletinia');
        await page.locator('#passwordEdit-el').fill('Vbvbkmrfbkmzz222#');
        await page.locator('#t-comp16-textEl').click();
        await page.getByPlaceholder('Поиск номера объекта').fill('SR096775274');
        await page.getByPlaceholder('Поиск номера объекта').click();
        await page.getByRole('link', { name: 'SR096775274' }).click();
        const locator = page.locator('#MainHeaderSchemaPageHeaderCaptionLabel');
        await expect(locator).toHaveText('Обращение №SR096775274: POS: Банк Открытие (АТМ-Альянс). Восстановление работоспособности');
        //await expect(page.getByText('Обращение №SR096775274: POS')).toBeVisible();
    });
})