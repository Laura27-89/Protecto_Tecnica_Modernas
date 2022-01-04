import LoginPage from  '../pageobjects/login.page';
import MainPage from  '../pageobjects/main.page';

describe('My Login Guru', () => {
    beforeEach(async function(){
        LoginPage.login('mngr373602', 'AzygarU');
    
     });
     
    it('should login with valid credentials at Guru login', async () => {
        await expect(MainPage.getTitleWelcome).toBeExisting();
        await expect(MainPage.getTitleWelcome).toHaveTextContaining('Welcome To Manager'+"'"+'s Page of Guru99 Bank');
    });
});