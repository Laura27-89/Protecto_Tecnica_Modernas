import NewAccountPage from '../pageobjects/newAccount.page';
import LoginPage from '../pageobjects/login.page';


describe('Add a new Customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await NewAccountPage.setGotoNewAccountTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should show the correct page "Add New Customer"', async () => {
        console.log('test 1');
        await expect(NewAccountPage.getTitle).toHaveTextContaining('Add new account form');
    });

    it('Create a new Account', async () => {
        console.log('test 2');
        NewAccountPage.newAccountInfo(
        11280,
        "Current",
        15600000000000);
        NewAccountPage.getsubmitButton.click();
        await expect(NewAccountPage.getTitle).toHaveTextContaining('Account Generated Successfully!!!');
        });
        
});


