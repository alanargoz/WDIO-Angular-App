const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');

describe('Nav Test suite', () => {
  it('Should open support page', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');

    NavPage.burgerMenu.click();
    NavPage.supportLink.click();
    browser.switchWindow('https://glitchitsystem.com/');
    assert.equal(browser.getUrl(), 'https://glitchitsystem.com/');
  });

  it('Should logout', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');

    NavPage.burgerMenu.click();
    NavPage.logoutLink.click();
    assert.equal(NavPage.burgerMenu.isDisplayed(), false);
    assert.equal(browser.getUrl(), configBaseurl);
  });
});
