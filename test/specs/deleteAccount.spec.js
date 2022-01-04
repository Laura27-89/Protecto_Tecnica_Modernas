import DeleteAccountPage from '../pageobjects/deleteAccount.page';
import LoginPage from '../pageobjects/login.page';


describe('Edit Customer App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await DeleteAccountPage.setGotoDeleteAccountTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should show the correct page "Delete Account Form"', async () => {
        console.log('first test');
        await expect(DeleteAccountPage.getTitle).toHaveTextContaining('Delete Account Form');
    });


    it('Delete Account', async () => {
        console.log('second test');
        DeleteAccountPage.deleteAccountInfo(
        34567);
        await expect(DeleteAccountPage.getTitle).toHaveTextContaining('Account Deleted!!');
        });

});