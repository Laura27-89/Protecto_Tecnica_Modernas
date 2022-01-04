import BalancePage from '../pageobjects/balance.page';
import LoginPage from '../pageobjects/login.page';


describe('Edit Customer App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await BalancePage.setGotoBalanceTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should show the correct page "Edit Customer Form"', async () => {
        console.log('first test');
        await expect(BalancePage.getTitle).toHaveTextContaining('Balance Enquiry Form');
    });


    it('Balance Enquiry information', async () => {
        console.log('second test');
        BalancePage.BalanceInfo(
        93391);
        await expect(BalancePage.getTitle).toHaveTextContaining('Balance Enquiry Successfully!!!');
        });

});