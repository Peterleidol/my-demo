//information.page.js

const Page = require ('./page');

class LoginPage extends Page{

        //page locators:

        get txtUsername() { return $('#user-name') }
        get txtPassword() { return $('#password') }
        get loginBtn() { return $('#login-button') }

        //page actions:  

        async open () {
            await super.open('/')
        }
    
        async login (username,password) {
            await this.txtUsername.setValue(username);
            await this.txtPassword.setValue(password);
            await this.loginBtn.click();
        }
 
    }

module.exports = new LoginPage();