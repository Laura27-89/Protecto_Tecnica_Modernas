import EditCustomerPage from '../pageobjects/editCustomer.page';
import LoginPage from '../pageobjects/login.page';


describe('Edit Customer App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await EditCustomerPage.setGotoEditCustomerTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
    });

    it('Should show the correct page "Edit Customer Form"', async () => {
        console.log('first test');
        await expect(EditCustomerPage.getTitle).toHaveTextContaining('Edit Customer Form');
    });


    it('Edit information', async () => {
        console.log('second test');
        EditCustomerPage.editCustomerInfo(
        93391);
        await expect(EditCustomerPage.getTitle).toHaveTextContaining('Edit Customer');
        });

        it('Edit city information', async () => {
            console.log('third test');
            await EditCustomerPage.setInputCity();
            expect(EditCustomerPage.getInputCity).toHaveTextContaining("Curridabat");
        });

});