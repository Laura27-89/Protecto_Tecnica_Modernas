import EditAccountPage from '../pageobjects/editAccount.page';
import LoginPage from '../pageobjects/login.page';


describe('Edit Customer App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await EditAccountPage.setGotoEditAccountTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should show the correct page "Edit Customer Form"', async () => {
        console.log('first test');
        await expect(EditAccountPage.getTitle).toHaveTextContaining('Edit Account Form');
    });


    it('Edit information', async () => {
        console.log('second test');
        EditAccountPage.editAccountInfo(
        93391);
        await expect(EditAccountPage.getTitle).toHaveTextContaining('Edit Account Form');
        });

});