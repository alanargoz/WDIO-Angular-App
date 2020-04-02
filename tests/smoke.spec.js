const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');
const ButtonsPage = require('../pages/buttonsArea.page');

describe('Smoke Test suite', () => {
  it('Should validate static content on login page', () => {
    browser.url('');
    assert.equal(browser.getUrl(), configBaseurl);
    //Checking all the static items are displayed
    assert.equal(NavPage.brand.isDisplayed(), true);
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true);
    assert.equal(LoginPage.passwordLabel.isDisplayed(), true);
    assert.equal(LoginPage.passwordField.isDisplayed(), true);
    assert.equal(LoginPage.loginButton.isDisplayed(), true);
    assert.equal(LoginPage.usernameField.isDisplayed(), true);
    assert.equal(LoginPage.usernameLabel.isDisplayed(), true);
    assert.equal(LoginPage.emailErrorText.isDisplayed(), false);
    assert.equal(LoginPage.passwordErrorTest.isDisplayed(), false);
    //Checking all the static items have correct text
    assert.equal(NavPage.brand.getText(), 'Monster Dream Team');
    assert.equal(NavPage.monsterNavItem.getText(), 'My Monster Team');
    assert.equal(LoginPage.passwordLabel.getText(), 'Password');
    assert.equal(LoginPage.usernameLabel.getText(), 'Username');
    //Test default element state
    assert.equal(LoginPage.loginButton.isClickable(), false);
    assert.equal(LoginPage.usernameField.getValue(), '');
    assert.equal(LoginPage.passwordField.getValue(), '');
  });

  it('Should validate static contents in Nav Bar once logged in', () => {
    browser.url('');
    assert.equal(NavPage.brand.isDisplayed(), true);
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true);

    LoginPage.login('bob@bob.com', 'Test123');
    assert.equal(NavPage.brand.isDisplayed(), true);
    assert.equal(NavPage.monsterNavItem.isDisplayed(), true);

    assert.equal(NavPage.burgerMenu.isDisplayed(), true);
    assert.equal(NavPage.supportLink.isDisplayed(), false);
    assert.equal(NavPage.logoutLink.isDisplayed(), false);

    assert.equal(NavPage.burgerMenu.click());
    assert.equal(NavPage.supportLink.isDisplayed(), true);
    assert.equal(NavPage.logoutLink.isDisplayed(), true);
  });

  it.only('Should validate static buttons are displayed', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');
    assert.equal(ButtonsPage.newMonsterButton.isDisplayed(), true, 'newMonsterButton');
    assert.equal(ButtonsPage.randomMonsterButton.isDisplayed(), true, 'randomMonsterButton');
    assert.equal(ButtonsPage.removeAllButton.isDisplayed(), true, 'removeAllButton');
    assert.equal(ButtonsPage.sortMonstersButton.isDisplayed(), true, 'sortMonstersButton');
    assert.equal(ButtonsPage.unfavoriteAllButton.isDisplayed(), true, 'unfavoriteAllButton');
    assert.equal(ButtonsPage.createRandomButton.isDisplayed(), true, 'createRandomButton');
  });
});
