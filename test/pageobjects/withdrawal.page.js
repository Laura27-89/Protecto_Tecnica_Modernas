import Page from './page';

class WithdrawalPage extends Page {
    /**
     * define selectors using getter methods
     */

     get getWithdrawaTab(){
         return $('a[href^="WithdrawalInput"]');
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
    setGotoWithdrawaTab(){
        this.getWithdrawaTab.click();
    }


     //Method to Amount Withdrawal
     WithdrawaInfo(number,deposit,text){
        this.getAccountNo.setValue(number);
        this.getAmount.setValue(deposit);
        this.getDescription.setValue(text);
   }
}

export default new WithdrawalPage();