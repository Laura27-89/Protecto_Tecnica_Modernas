import Page from './page';

class NewCustomerPage extends Page {
    /**
     * define selectors using getter methods
     */

     get getNewCustomerTab(){
         return $('a[href^="addcustomerpage"]');
     }
     
     get getTitle() {
        return $('[class=heading3]');
    }

    get getInpuName(){
        return $('[name="name"]');
    }

    get getCheckboxM() {
        return $('[value="m"]');
    }

    get getCheckboxF() {
        return $('[value="f"]');
    }

    get getInputDateBirth(){
        return $('[name="dob"]');
    }

    get getInputAddress(){
        return $('[name="addr"]');
    }

    get getInputCity(){
        return $('[name="city"]');
    }

    get getInputState(){
        return $('[name="state"]');
    }

    get getInputPIN(){
        return $('[name="pinno"]');
    }

    get getInputMobileNumber(){
        return $('[name="telephoneno"]');
    }

    get getInputEmail(){
        return $('[name="emailid"]');
    }

    get getInpuPassword(){
        return $('[name="password"]');
    }


    get submitButton(){
        return $('[value="Submit"]');
    }

    setGotoNewCustomerTab(){
        this.getNewCustomerTab.click();
    }


     //Method to create a new customer
     newCustomerInfo(name,dateBirth, address, city, state, pin, mobilenumber, email, password){
        this.getInpuName.setValue(name);
        this.getCheckboxF.click();
        this.getInputDateBirth.setValue(dateBirth);
        this.getInputAddress.setValue(address);
        this.getInputCity.setValue(city);
        this.getInputState.setValue(state);
        this.getInputPIN.setValue(pin);
        this.getInputMobileNumber.setValue(mobilenumber);
        this.getInputEmail.setValue(email);
        this.getInpuPassword.setValue(password);
        this.submitButton.click();
   }
}

export default new NewCustomerPage();