class LoginPage {
  get usernameField() {
    return $('#username');
  }

  get passwordField() {
    return $('#password');
  }

  get usernameLabel() {
    return $('div:nth-of-type(1) > .col-xs-12 > .form-group > label');
  }

  get passwordLabel() {
    return $('div:nth-of-type(2) > .col-xs-12 > .form-group > label');
  }

  get loginButton() {
    return $('.btn.btn-success');
  }

  get emailErrorText() {
    return $('div:nth-of-type(1) > .col-xs-12 > .form-group > .notValid');
  }
  get passwordErrorText() {
    return $('div:nth-of-type(2) > .col-xs-12 > .form-group > .notValid');
  }

  get invalidLoginErrorText() {
    return $('.notValid');
  }
  /**
   *
   * @param {*} username
   * @param {*} password
   */
  login(username, password) {
    this.usernameField.setValue(username);
    this.passwordField.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();
