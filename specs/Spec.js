// spec.js
import SettingsPage from '../pages/settingsPage';
import LoginPage from '../pages/loginPage';
import FilesPage from '../pages/filesPage';
import User from '../models/userModel';

const settingsPage = new SettingsPage();
const loginPage = new LoginPage();
const filesPage = new FilesPage();
const user = new User();

describe('ADF Demo App', function() {

    beforeEach(() => {
        settingsPage.goto();
        settingsPage.clickSelectArrow();
        settingsPage.selectFromDropDown();

        loginPage.enterUsername(user.userName);
        loginPage.enterPassword(user.userPassword);
        loginPage.clickSignInButton();
    });

    it('should create a folder', function() {
        filesPage.goto();
        filesPage.clickCreateNewFolder();
        filesPage.enterFolderName(user.userGitName);
        filesPage.clickCreateButton();

        expect(filesPage.dialogId.isPresent()).toBe(false);
        expect(filesPage.checkFolderInListByUserGitName(user.userGitName)).toBeTruthy();
    });

    it('should not create a folder if a folder exists', function() {
        filesPage.goto();
        filesPage.clickCreateNewFolder();
        filesPage.enterFolderName(user.userGitName);
        filesPage.clickCreateButton();

        expect(filesPage.dialogId.isPresent()).toBe(true);
        expect(filesPage.getPageSource()).toContain("There's already a folder with this name. Try a different name.");
    });

    it('should remove a folder', function() {
        filesPage.goto();
        filesPage.clickOnActionMenuByName(user.userGitName);
        filesPage.clickDeleteButton();

        expect(filesPage.checkFolderInListByUserGitName(user.userGitName)).toBe(false);
    });
});