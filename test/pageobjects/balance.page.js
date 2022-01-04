import Page from './page';

class BalancePage extends Page {
    /**
     * define selectors using getter methods
     */

    get geBalanceTab() {
        return $('a[href^="BalEnqInput"]');
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

    setGotoBalanceTab(){
        this.geBalanceTab.click();
    }

    currentInput(){
        return $('[name="accountno"]');
    }

    setsubmitButton(){
        this.submitButton.click();
    }

   BalanceInfo(Account){
        this.getInput.setValue(Account);
        this.submitButton.click();
   }
    

}

export default new BalancePage();