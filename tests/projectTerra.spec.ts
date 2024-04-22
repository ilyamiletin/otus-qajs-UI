import { config } from "../framework/config";
import {test, expect} from "@playwright/test";
import { LoginPage } from "../framework/pages/TerraProjectPages/loginPage";
import { SideBar } from "../framework/elements/TerraProjectElements/sideBar";
import { ActivityPage } from "../framework/pages/TerraProjectPages/activityPage";
import { CaseSectionPage } from "../framework/pages/TerraProjectPages/caseSectionPage";
import { SearchApplication } from "../framework/elements/TerraProjectElements/searchApplication";
import { CasePage } from "../framework/pages/TerraProjectPages/casePage";


test.describe('Функциональное тестирование', () => {
    test('Успешный вход в систему', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(config.login, config.password);
        await expect(loginPage.usernameHomePage).toContainText('Милетин Илья Александрович')
    })

    test('Неверный Логин', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('qwertyui', config.password);
        await expect(loginPage.invalidLoginModalWindow).toHaveText('При проверке количества используемых лицензий произошла ошибка. Вероятно, введен неверный логин пользователя. Попробуйте ввести логин заново или обратитесь к системному администратору.')
    })

    test('Пустое поле (пароль)', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(config.login, '');
        await expect(loginPage.emptyPasswordField).toHaveText('Enter a value')
    })

    test('Оценка качества (количество элементов на вкладке)', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(config.login, config.password);

        const sideBar = new SideBar(page);
        await sideBar.openSection();
        await expect(sideBar.quantityTabsQualityAssessmen).toHaveCount(4);
    })

    test('Завершение заявки с пустым полем "Код закрытия', async ({page}) => {
        const activityPage = new ActivityPage(page);
        await activityPage.goto()

        const loginPage = new LoginPage(page);
        await loginPage.login(config.login, config.password);

        //class ActivityPage
        await activityPage.completionEmptyClosingCodeField()
        await expect(activityPage.EmptyClosingCodeFieldModalWindow).toHaveText('Поле "Код закрытия": Необходимо указать значение');
    })

    test('Поиск Обращения', async ({page}) => {
        const caseSectionPage = new CaseSectionPage(page);
        await caseSectionPage.goto();

        const loginPage = new LoginPage(page);
        await loginPage.login(config.login, config.password);

        const searchApplication = new SearchApplication(page);
        await searchApplication.searchApplication('SR096775274');

        //class CaseSectionPage
        await caseSectionPage.clickApplication();

        const casePage = new CasePage(page);
        await expect(casePage.mainHeaderPage).toHaveText('Обращение №SR096775274: POS: Банк Открытие (АТМ-Альянс). Восстановление работоспособности');
    })
})