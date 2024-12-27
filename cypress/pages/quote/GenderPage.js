import QuoteBasePage from './QuoteBasePage';

class GenderPage extends QuoteBasePage {
  static GENDER_MAP = {
    Male: '[data-test="label-text-gender-0"]',
    Female: '[data-test="label-text-gender-1"]',
  };

  getGenderOption(gender) {
    if (typeof gender !== 'string') {
      throw new TypeError('Gender must be a string');
    }

    const selector = GenderPage.GENDER_MAP[gender];
    if (!selector) {
      throw new Error(`No selector found for gender: ${gender}`);
    }

    return cy.get(selector);
  }

  selectGender(gender) {
    this.getGenderOption(gender).click();
    return this;
  }
}

export default GenderPage;
