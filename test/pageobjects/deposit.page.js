import Page from './page';

class DepositPage extends Page {
    /**
     * define selectors using getter methods
     */

     get getDepositTab(){
         return $('a[href^="DepositInput"]');
     }
     
     get getTitle() {
        return $('[class=heading3]');
    }

    get getAccountNo(){
        return $('[name="accountno"]');
    }

    get getAmount() {
        return $('[name="ammount"]');
    }

    get getDescription() {
        return $('[name="desc"]');
    }

    get getsubmitButton(){
        return $('[value="Submit"]');
    }
    setGotoDepositTab(){
        this.getDepositTab.click();
    }


     //Method to create a new customer
     DepositInfo(number,deposit,text){
        this.getAccountNo.setValue(number);
        this.getAmount.setValue(deposit);
        this.getDescription.setValue(text);
   }
}

export default new DepositPage();