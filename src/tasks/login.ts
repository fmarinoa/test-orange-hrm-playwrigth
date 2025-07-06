import { LoginPage } from '../pages/loginPage';
import { FluentTask } from './FluentTask';

export const Login = new FluentTask<[string, string]>(
    async (username, password, page) => {
        const loginPage = new LoginPage(page);
        await loginPage.typeUsername(username);
        await loginPage.typePassword(password);
        await loginPage.clickLoginButton();
    }
);
