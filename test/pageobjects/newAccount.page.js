import Page from './page';

class NewAccountPage extends Page {
    /**
     * define selectors using getter methods
     */

     get getNewAccountTab(){
         return $('a[href^="addAccount"]');
     }
     
     get getTitle() {
        return $('[class=heading3]');
    }

    get getCustomerID(){
        return $('[name="cusid"]');
    }

    get getAccountType() {
        return $('[name="selaccount"]');
    }

    get getInitialDeposit() {
        return $('[name="inideposit"]');
    }

    get getsubmitButton(){
        return $('[value="submit"]');
    }

    setDropdownValuebyText(text){
        getAccountType.selectByVisibleText(text)
    }

    setGotoNewAccountTab(){
        this.getNewAccountTab.click();
    }


     //Method to create a new Account
     newAccountInfo(id,text,deposit){
        this.getCustomerID.setValue(id);
        this.getAccountType.selectByVisibleText(text)
        this.getInitialDeposit.setValue(deposit);
   }
}

export default new NewAccountPage();