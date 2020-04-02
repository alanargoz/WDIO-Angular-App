class navPage {
  get brand() {
    return $('.navbar-brand');
  }

  get monsterNavItem() {
    return $('.nav.navbar-nav  a');
  }

  get monsterNavItem() {
    return $('.nav.navbar-nav  a');
  }
  //Only available once logged in
  get burgerMenu() {
    return $("a[role='button'] > .glyphicon.glyphicon-menu-hamburger");
  }

  get supportLink() {
    return $("a[target='_blank']");
  }

  get logoutLink() {
    return $('li:nth-of-type(2) > a');
  }
}

module.exports = new navPage();
