const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');

describe('Login Test suite', () => {
  it('Should display error messages when fields are blank', () => {
    browser.url('');

    LoginPage.usernameField.click();
    LoginPage.passwordField.click();
    LoginPage.usernameField.click();

    assert.equal(LoginPage.emailErrorText.isDisplayed(), true);
    assert.equal(LoginPage.emailErrorText.getText(), 'Username is required');
    assert.equal(LoginPage.passwordErrorText.isDisplayed(), true);
    assert.equal(LoginPage.passwordErrorText.getText(), 'Password is required');
  });

  it('Should display error when not a valid email', () => {
    let emails = ['bob', 'bob@bob.', 'bob@'];
    for (let i = 0; i < emails.length; i++) {
      browser.url('');
      LoginPage.usernameField.setValue(emails[i]);
      LoginPage.passwordField.click();
      assert.equal(LoginPage.emailErrorText.getText(), 'Username needs to be a valid email');
    }
  });

  it('Should display error when username or password is invalid', () => {
    let emails = ['bob@bob.com', 'sams@sam.com', '1@2.com'];
    let passwords = ['fakepass', 'Test123', 'password'];

    for (let i = 0; i < emails.length; i++) {
      browser.url('');
      LoginPage.usernameField.setValue(emails[i]);
      LoginPage.passwordField.setValue(passwords[i]);
      LoginPage.loginButton.click();
      browser.pause(1000);
      assert.equal(LoginPage.invalidLoginErrorText.isDisplayed(), true);
    }
  });

  it('Should Login', () => {
    let username = 'bob@bob.com';
    let password = 'Test123';
    browser.url('');
    LoginPage.usernameField.setValue(username);
    LoginPage.passwordField.setValue(password);
    LoginPage.loginButton.click();

    assert.equal(browser.getUrl(), 'http://localhost:4200/mine');
  });
});
