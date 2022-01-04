import Page from './page';

class DeleteAccountPage extends Page {
    /**
     * define selectors using getter methods
     */

    get geDeleteAccountTab() {
        return $('a[href^="deleteAccount"]');
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

    setGotoDeleteAccountTab(){
        this.geDeleteAccountTab.click();
    }

    currentInput(){
        return $('[name="accountno"]');
    }

    setsubmitButton(){
        this.submitButton.click();
    }

    deleteAccountInfo(Account){
        this.getInput.setValue(Account);
        this.submitButton.click();
   }
    

}

export default new DeleteAccountPage();