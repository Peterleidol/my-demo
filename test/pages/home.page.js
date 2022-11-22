//home.page.js

const Page = require ('./page');

class HomePage extends Page{
//page locators:

        get BtnAddBackPack() { return $('#add-to-cart-sauce-labs-backpack') }
        get BtnBike() { return $('#add-to-cart-sauce-labs-bike-light') }
        get BtnShirt() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
        get BtnCart() { return $('#shopping_cart_container')}

        //page actions:  
       async open () {
            await super.open('/inventory.html')
        }

        async buy () {
            await this.BtnAddBackPack.click();
            await this.BtnBike.click();
            await this.BtnShirt.click();
            await this.BtnCart.click();
        }
 
    }

module.exports = new HomePage();