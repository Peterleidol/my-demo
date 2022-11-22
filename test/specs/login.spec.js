//login.spec.js

const assert = require('assert');
const LoginPage = require ('../pages/login.page');
const HomePage = require('../pages/home.page');
const cartPage = require('../pages/cart.page');
const informationPage = require('../pages/information.page');
const overviewPage = require('../pages/overview.page');

describe('My Login application', () => {

    it('I should open the main URL and verify the title', async () => {
    
      await browser.url('');
      const title = await browser.getTitle();
      await assert.strictEqual(title , 'Swag Labs');

    });
   
    it('I enter valid username and password and login successfully' , async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user','secret_sauce');
      console.log("Successfully login");

    });

    it('I add items to cart', async () => {
      await HomePage.open();
      await HomePage.buy();
      console.log('Successfully');

    })
    
    it('I want to remove item and checkout', async () => {
      await cartPage.open();
      await cartPage.checkout();
      console.log('Successfully');

    })
    it('I want to write my information', async () => {
      await informationPage.open();
      await informationPage.checkinfor('Peter','Le','10001');
      console.log('Successfully');
    })

    it('I want to finish',async () => {
      await overviewPage.finish();
      console.log('Done');
    })
});
