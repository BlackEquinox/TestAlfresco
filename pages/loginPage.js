import BasePage from '../pages/basePage';

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.userNameField = element(by.id('username'));
        this.passwordField = element(by.id('password'));
        this.signInButton = element(by.id('login-button'));

        this.url = 'http://qaexercise.envalfresco.com/login';
    }

    enterUsername(userName) {
        this.userNameField.sendKeys(userName);
    }

    enterPassword(password) {
        this.passwordField.sendKeys(password);
    }

    clickSignInButton() {
        this.signInButton.click();
        browser.waitForAngular();
    } 
}