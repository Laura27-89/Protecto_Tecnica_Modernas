import NewCustomerPage from '../pageobjects/newCustomer.page';
import LoginPage from '../pageobjects/login.page';


describe('Add a new Customer', () => {
    beforeAll(async function(){
        console.log('I get executed before all its.')
        await LoginPage.login();
    });

    beforeEach(async function(){
        console.log('I get executed before every it');
        await NewCustomerPage.setGotoNewCustomerTab();
    });

    afterAll(async function(){
        console.log('I get executed after all its.');
    });

    afterEach(async function(){
        console.log('I get executed after every it');
    });


    it('Should show the correct page "Add New Customer"', async () => {
        console.log('Field 1');
        await expect(NewCustomerPage.getTitle).toHaveTextContaining('Add New Customer');
    });

    it('Create a new Customer', async () => {
        NewCustomerPage.newCustomerInfo(
        "Juana",
        "27-08-1890",
        "San Geronimo de Asis",
        "San Jose",
        "Curridabat",
        "098765",
        "87654567",
        Math.floor((Math.random() * 100) + 1) + "@hotmail.com",
        "MeliGar");
        await expect(NewCustomerPage.getTitle).toHaveTextContaining('Customer Registered Successfully!!!');
        });
        
});


