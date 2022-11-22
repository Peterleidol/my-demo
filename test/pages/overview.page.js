//overview.page.js

const Page = require ('./page');

class OverviewPage extends Page{
//page locators:

        get BtnFinish() { return $('#finish')}

        //page actions:  
       async open () {
            await super.open('/checkout-step-two.html')
        }

        async finish () {
            await this.BtnFinish.click();
        }
 
    }

module.exports = new OverviewPage();