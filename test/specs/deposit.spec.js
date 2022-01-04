import DepositPage from '../pageobjects/deposit.page';
import LoginPage from '../pageobjects/login.page';


describe('Add a new Customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await DepositPage.setGotoDepositTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should show the correct page "Amount Deposit Form"', async () => {
        console.log('test 1');
        await expect(DepositPage.getTitle).toHaveTextContaining('Amount Deposit Form');
    });

    it('Amount Deposit', async () => {
        console.log('test 2');
        DepositPage.DepositInfo(
        55429,
        15600000000000,
        "Pago de estudios");
        DepositPage.getsubmitButton.click();
        await expect(DepositPage.getTitle).toHaveTextContaining('Deposit Successfully!!!');
        });
        
});


