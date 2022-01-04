import Page from './page';

class EditAccountPage extends Page {
    /**
     * define selectors using getter methods
     */

    get geEditAccountTab() {
        return $('a[href^="editAccount"]');
    }

    get getTitle() {
        return $('[class=heading3]');
    }

    get getInput() {
        return $('[name="accountno"]');

    }

    get submitButton(){
        return $('[value="Submit"]');
    }

    setGotoEditAccountTab(){
        this.geEditAccountTab.click();
    }

    currentInput(){
        return $('[name="accountno"]');
    }

    setsubmitButton(){
        this.submitButton.click();
    }

    editAccountInfo(Account){
        this.getInput.setValue(Account);
        this.submitButton.click();
   }
    

}

export default new EditAccountPage();