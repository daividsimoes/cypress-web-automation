import { LoginElements } from "../elements/login.elements";
import { MainPageObjects } from "./main.po";

const mainPageObjects = new MainPageObjects();

export class LoginPageObjects {

    openLoginPage() {
        cy.visit('/');
    }

    doLogin(userName: string, password: string) {
        cy.get(LoginElements.userName).type(userName);
        cy.get(LoginElements.password).type(password);
        cy.get(LoginElements.loginButton).click();
        mainPageObjects.waitMainPageLoad();
    }
}