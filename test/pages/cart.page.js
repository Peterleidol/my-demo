//cart.page.js

const Page = require ('./page');

class CartPage extends Page{
//page locators:

        get BtnRemoveBike() { return $('#remove-sauce-labs-bike-light') }
        get BtnCheckOut() { return $('#checkout')}

        //page actions:  
       async open () {
            await super.open('/cart.html')
        }

        async checkout () {
            await this.BtnRemoveBike.click();
            await this.BtnCheckOut.click();
        }
 
    }

module.exports = new CartPage();