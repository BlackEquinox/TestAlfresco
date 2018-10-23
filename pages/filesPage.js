import BasePage from '../pages/basePage';


export default class FilesPage extends BasePage {
    constructor() {
        super();
        this.createNewFolder = element(by.css('.adf-document-action-buttons .mat-icon-button:nth-of-type(2) .material-icons'));
        this.newFolderNameField = element(by.id('adf-folder-name-input'));
        this.newFolderCreateButton = element(by.id('adf-folder-create-button'));
        this.dialogId = element(by.id('mat-dialog-0'));
        this.deleteButton = element(by.xpath("//*[@class='mat-menu-content']//*[.='Delete']"));
        this.folderByUserGitNameXpath = ".//*[@class='adf-datatable-cell-value'][contains(text(),'%s')]";
        this.contentActionsByFolderNameXpath = ".//*[contains(text(),'%s')]/ancestor::*[@class='adf-datatable-row ng-star-inserted']//*[@title='Content actions']";

        this.url = 'http://qaexercise.envalfresco.com/files';
    }

    clickCreateNewFolder() {
        return this.createNewFolder.click();
    }

    enterFolderName(userGit) {
        return this.newFolderNameField.sendKeys(userGit);
    }

    clickCreateButton() {
        this.newFolderCreateButton.click();
        browser.waitForAngular();
    }

    checkFolderInListByUserGitName(userGit) {
        let el = this.folderByUserGitNameXpath.replace('%s', userGit);
        return element(by.xpath(el)).isPresent();
    }

    getPageSource() {
        return browser.getPageSource();
    }

    clickOnActionMenuByName(userGit) {
        let el = this.contentActionsByFolderNameXpath.replace('%s', userGit);
        let actionMenu = element(by.xpath(el));
        return actionMenu.click();
    }

    clickDeleteButton() {
        var EC = protractor.ExpectedConditions;
        // Waits for the element to be visible on the dom.
        browser.wait(EC.visibilityOf(this.deleteButton), 5000);
        return this.deleteButton.click();
    }
}