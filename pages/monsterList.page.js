class MonsterListPage {
  get monsterCountText() {
    return $('app-monster-list > p');
  }
  /**
   *
   * @param {number} row
   * Start at 1
   */
  monsterItemContainer(row) {
    return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a');
  }
  /**
   *
   * @param {number} row
   * Start at 1
   */
  monsterName(row) {
    return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > h4');
  }

  monsterDescription(row) {
    return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > div > p');
  }

  monsterIcon(row) {
    return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > span.role');
  }

  favoriteIcon(row) {
    return $('app-monster-list > div:nth-child(4) > div > app-monster-item:nth-child(' + row + ') > a > span.hearted');
  }
}

module.exports = new MonsterListPage();
