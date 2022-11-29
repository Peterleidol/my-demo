//login.spec.js

const assert = require('assert');
const LoginPage = require ('../pages/login.page');
const HomePage = require('../pages/home.page');
const cartPage = require('../pages/cart.page');
const informationPage = require('../pages/information.page');
const overviewPage = require('../pages/overview.page');
const logoutPage = require('../pages/logout.page');

describe('My Login application', () => {
  beforeEach(async () => {
    it('I should open the main URL and verify the title', async () => {
          await page.open();
        }
    );
  });
  
    it('I enter valid username and password and login successfully' , async () => {
      await LoginPage.open();
      await LoginPage.login('standard_user','secret_sauce');
      console.log("Successfully login");

    });

    it('After login I want to add items to cart', async () => {
      await HomePage.open();
      await HomePage.buy();
      console.log('Successfully');

    });
    
    it('I want to remove item and checkout', async () => {
      await cartPage.open();
      await cartPage.checkout();
      console.log('Successfully');

    });
    it('I want to write down my personal information', async () => {
      await informationPage.open();
      await informationPage.checkinfor('Peter','Le','10001');
      console.log('Successfully');

    });

    it('I want to click the finish button',async () => {
      await overviewPage.finish();
      console.log('Done');

    });

    it('I want to logout my account successfully', async () => {
      await logoutPage.open();
      await logoutPage.logout();
      console.log('Logout Successfully');

    });
});
