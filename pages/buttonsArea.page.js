class buttonsPage {
  get newMonsterButton() {
    return $('div:nth-of-type(1) > button:nth-of-type(1)');
  }

  get randomMonsterButton() {
    return $('div:nth-of-type(1) > button:nth-of-type(2)');
  }

  get removeAllButton() {
    return $('div:nth-of-type(1) > button:nth-of-type(3)');
  }

  get unfavoriteAllButton() {
    return $('div:nth-of-type(2) > button:nth-of-type(1)');
  }

  get createRandomButton() {
    return $('div:nth-of-type(2) > button:nth-of-type(2)');
  }

  get sortMonstersButton() {
    return $('div:nth-of-type(2) > button:nth-of-type(3)');
  }
}

module.exports = new buttonsPage();
