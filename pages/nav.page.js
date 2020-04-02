class navPage {
  get brand() {
    return $('.navbar-brand');
  }

  get monsterNavItem() {
    return $('.nav.navbar-nav  a');
  }
}

module.exports = new navPage();
