import Page from './page';

class DeleteCustomerPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > p');
    }

    get getSubTitle(){
        return $('#customer > tbody > tr:nth-child(1) > td > p')
    }

    get getInput() {
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');

    }
    get submitButton(){
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=submit]:nth-child(1)');
    }

    setCustomerID(){
        return this.getInput.setValue(28119);
    }

    currentInput(){
        return $('body > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]');
    }

    setsubmitButton(){
        this.submitButton.click();
    }

}

export default new DeleteCustomerPage();