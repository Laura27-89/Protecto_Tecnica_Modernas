import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (Username, password) {
        return browser.url(`http://${Username}:${password}@demo.guru99.com/V4/manager/Managerhomepage.php`);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();
