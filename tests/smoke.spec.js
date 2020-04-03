const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');
const ButtonsPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonsterPage.page');

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

  it('Should validate static buttons are displayed', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');
    assert.equal(ButtonsPage.newMonsterButton.isDisplayed(), true, 'newMonsterButton');
    assert.equal(ButtonsPage.randomMonsterButton.isDisplayed(), true, 'randomMonsterButton');
    assert.equal(ButtonsPage.removeAllButton.isDisplayed(), true, 'removeAllButton');
    assert.equal(ButtonsPage.sortMonstersButton.isDisplayed(), true, 'sortMonstersButton');
    assert.equal(ButtonsPage.unfavoriteAllButton.isDisplayed(), true, 'unfavoriteAllButton');
    assert.equal(ButtonsPage.createRandomButton.isDisplayed(), true, 'createRandomButton');
  });

  it('Should display default monster list', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');
    assert.equal(MonsterListPage.monsterCountText.getText(), 'Number of monsters: 2');
    assert.equal(MonsterListPage.monsterName(1).getText(), 'Vampire');
    assert.equal(MonsterListPage.monsterDescription(1).getText(), 'He just wants your blood.');
    assert.equal(MonsterListPage.monsterIcon(1).getAttribute('class'), 'glyphicon ra ra-sword pull-right role');
    assert.equal(MonsterListPage.favoriteIcon(1).getAttribute('class'), 'glyphicon glyphicon-heart pull-right hearted');

    assert.equal(MonsterListPage.monsterName(2).getText(), 'Swamp Creature');
    assert.equal(MonsterListPage.monsterDescription(2).getText(), 'He awaits you in the swamp.');
    assert.equal(MonsterListPage.monsterIcon(2).getAttribute('class'), 'glyphicon ra ra-health pull-right role');
  });

  it('Should validate default content in monster card', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');

    assert.equal(MonsterCardPage.selectMonsterText.isDisplayed(), true);
    MonsterListPage.monsterItemContainer(1).click();
    assert.equal(MonsterCardPage.selectMonsterText.isDisplayed(), false);
    assert.equal(MonsterCardPage.monsterName.getText(), 'Vampire');
    assert.equal(MonsterCardPage.monsterDescription.getText(), 'He just wants your blood.');

    assert.equal(MonsterCardPage.monsterIcon.getAttribute('class'), 'glyphicon ra ra-sword pull-right role');
    assert.equal(MonsterCardPage.monsterFavorite.getAttribute('class'), 'glyphicon glyphicon-heart pull-right hearted');

    MonsterListPage.monsterItemContainer(2).click();
    assert.equal(MonsterCardPage.monsterName.getText(), 'Swamp Creature');
    assert.equal(MonsterCardPage.monsterDescription.getText(), 'He awaits you in the swamp.');
    assert.equal(MonsterCardPage.monsterIcon.getAttribute('class'), 'glyphicon ra ra-health pull-right role');

    assert.equal(MonsterCardPage.manageMonsterMenu.isDisplayed(), true);
    MonsterCardPage.manageMonsterMenu.click();
    assert.equal(MonsterCardPage.editMonster.isDisplayed(), true);
    assert.equal(MonsterCardPage.deleteMonster.isDisplayed(), true);
  });

  it.only('Should validate default content for new or edit form', () => {
    browser.url('');
    LoginPage.login('bob@bob.com', 'Test123');

    ButtonsPage.newMonsterButton.click();
    assert.equal(browser.getUrl(), 'http://localhost:4200/mine/new', 'url');
    assert.equal(NewEditMonsterPage.saveButton.isDisplayed(), true, 'saveButton');
    assert.equal(NewEditMonsterPage.cancelButton.isDisplayed(), true, 'cancelButton');
    assert.equal(NewEditMonsterPage.nameLabel.isDisplayed(), true, 'nameLabel');
    assert.equal(NewEditMonsterPage.monsterRoleLabel.isDisplayed(), true, 'monsterRoleLabel');
    assert.equal(NewEditMonsterPage.descriptionLabel.isDisplayed(), true);
  });
});
