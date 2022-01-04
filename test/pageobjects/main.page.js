import Page from './page';

class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getTitleWelcome() {
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > marquee');
    }
}

export default new MainPage();