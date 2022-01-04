import Page from './page';

class EditCustomerPage extends Page {
    /**
     * define selectors using getter methods
     */

    get geEditCustomerTab() {
        return $('a[href^="Edit"]');
    }

    get getTitle() {
        return $('[class=heading3]');
    }

    get getInput() {
        return $('[name="cusid"]');

    }

    get getInputCity(){
        return $('[name="city"]');
    }

    get submitButton(){
        return $('[value="Submit"]');
    }

    setGotoEditCustomerTab(){
        this.geEditCustomerTab.click();
    }

    setInputCity(){
        return this.getInputCity.setValue("Curridabat");
    }

    currentInput(){
        return $('[name="cusid"]');
    }

    setsubmitButton(){
        this.submitButton.click();
    }

    editCustomerInfo(id){
        this.getInput.setValue(id);
        this.submitButton.click();
   }
    

}

export default new EditCustomerPage();