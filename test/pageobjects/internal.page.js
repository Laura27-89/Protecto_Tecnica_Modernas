import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InternalPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > p');
    }
}

export default new InternalPage();