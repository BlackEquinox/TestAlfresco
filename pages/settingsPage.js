import BasePage from '../pages/basePage';

export default class SettingsPage extends BasePage {
    constructor() {
        super();
        this.selectArrow = element(by.className('mat-select-arrow'));
        this.applyButton = element(by.id('host-button'));
        this.ECMitem = element(by.cssContainingText('.mat-option-text', 'ECM'));

        this.url = 'http://qaexercise.envalfresco.com/settings';
    }

    clickSelectArrow() {
        return this.selectArrow.click();
    }

    selectFromDropDown() {
        this.ECMitem.click();
        return this.applyButton.click();
    }
}