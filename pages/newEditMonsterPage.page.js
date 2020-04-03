class NewEditMonsterPage {
  get saveButton() {
    return $('.btn.btn-success');
  }

  get cancelButton() {
    return $('.btn.btn-danger');
  }

  get nameLabel() {
    return $('div:nth-of-type(2) > .col-xs-12 > .form-group > label');
  }

  get nameField() {
    return $('#name');
  }

  get favoriteCheckBox() {
    return $('#favorite');
  }

  get favoriteLabel() {
    return $('.form-check-label');
  }

  get monsterRoleLabel() {
    return $('.form-group > .form-group > label');
  }

  monsterTypeBox(option) {
    return $('.form-group > .form-group > input:nth-of-type(' + option + ')');
  }

  get solderIcon() {
    return $('.ng-touched .ra-sword');
  }

  get shieldIcon() {
    return $('.ra.ra-cracked-shield');
  }

  get thiefIcon() {
    return $('.ra.ra-kunai');
  }

  get mageIcon() {
    return $('.ra.ra-laser-blast');
  }

  get medicIcon() {
    return $('.ng-touched .ra-health');
  }

  get descriptionLabel() {
    return $('div:nth-of-type(5) > .col-xs-12 > .form-group > label');
  }

  get descriptionInput() {
    return $('#description');
  }

  get descriptionInput() {
    return $('#description');
  }

  get nameRequiredError() {
    return $('div:nth-of-type(2) > .col-xs-12 > .form-group > .notValid');
  }

  get descriptionRequiredError() {
    return $('div:nth-of-type(5) > .col-xs-12 > .form-group > .notValid');
  }
}

module.exports = new NewEditMonsterPage();
