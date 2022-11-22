//information.page.js

const Page = require ('./page');

class InformationPage extends Page{

        //page locators:

        get txtFirstname() { return $('#first-name') }
        get txtLastname() { return $('#last-name') }
        get txtZipcode() { return $('#postal-code') }
        get continueBtn() { return $('#continue') }

        //page actions:  

        async open () {
            await super.open('/checkout-step-one.html')
        }
    
        async checkinfor (firstname,lastname,zipcode) {
            await this.txtFirstname.setValue(firstname);
            await this.txtLastname.setValue(lastname);
            await this.txtZipcode.setValue(zipcode);
            await this.continueBtn.click();
        }
 
    }

module.exports = new InformationPage();