class MonsterCardPage {
  get selectMonsterText() {
    return $('app-monster-start > h3');
  }

  get monsterCard() {
    return $('.monsterDetail');
  }

  get monsterName() {
    return $('h1');
  }

  get monsterDescription() {
    return $('.monsterDetail  .col-xs-12');
  }

  get monsterIcon() {
    return $('.monsterDetail span.role');
  }

  get monsterFavorite() {
    return $('.monsterDetail span.hearted');
  }

  get manageMonsterMenu() {
    return $('.btn-group > .btn.btn-primary.dropdown-toggle');
  }

  get editMonster() {
    return $('.btn-group > .dropdown-menu > li:nth-of-type(1) > a');
  }

  get deleteMonster() {
    return $('.btn-group > .dropdown-menu > li:nth-of-type(2) > a');
  }
}

module.exports = new MonsterCardPage();
