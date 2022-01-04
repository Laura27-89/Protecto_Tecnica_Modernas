import DeleteCustomerPage from '../pageobjects/deleteCustomer.page';

describe('Edit Customer App', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
    });
    beforeEach(async function(){
        console.log('I get executed before all its.');
        await DeleteCustomerPage.open('manager/DeleteCustomerInput.php');
    });

    afterAll(async function(){
        console.log('I get executed after all its.')
    });
    afterEach(async function(){
        console.log('I get executed after all its.');
        await DeleteCustomerPage.open('manager/DeleteCustomerInput.php');
    });

    it('Should show the correct page "Delete Customer Form"', async () => {
        console.log('first test');
        await expect(DeleteCustomerPage.getTitle).toHaveTextContaining('Delete Customer Form');
    });

    it('Should set a Customer ID', async () => {
        console.log('second test');
        await DeleteCustomerPage.setCustomerID();
        expect(DeleteCustomerPage.currentInput()).toHaveTextContaining(28119);
    });
    it('Should show the correct "Successfully" deleted', async () => {
        console.log('third test');
        $(".//button[text()='Delete Customer Form']").click();
        await (DeleteCustomerPage.submitButton).click;
        expect(DeleteCustomerPage.acceptAlert);
    })
});