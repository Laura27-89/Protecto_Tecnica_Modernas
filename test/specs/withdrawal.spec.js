import WithdrawalPage from '../pageobjects/withdrawal.page';
import LoginPage from '../pageobjects/login.page';


describe('Add a new Customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await WithdrawalPage.setGotoWithdrawaTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should show the correct page "Amount Withdrawal Form"', async () => {
        console.log('test 1');
        await expect(WithdrawalPage.getTitle).toHaveTextContaining('Amount Withdrawal Form');
    });

    it('Amount Withdrawal', async () => {
        console.log('test 2');
        WithdrawalPage.WithdrawaInfo(
        34567,
        600000000000,
        "Pago de estudios");
        WithdrawalPage.getsubmitButton.click();
        await expect(WithdrawalPage.getTitle).toHaveTextContaining('Withdrawal Successfully!!!');
        });
        
});


