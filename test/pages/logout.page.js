//logout.page.js

const Page = require ('./page');

class LogoutPage extends Page{

        //page locators:

        get menuBtn() { return $('#react-burger-menu-btn') }        
        get logoutBtn() { return $('#logout_sidebar_link') }

        //page actions:  

        async open () {
            await super.open('/checkout-complete.html')
        }
    
        async logout () {
            await this.menuBtn.click();
            await this.logoutBtn.click();
        }
 
    }

module.exports = new LogoutPage();