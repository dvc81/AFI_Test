import QuoteBasePage from './QuoteBasePage';

class ExistingConditionsPage extends QuoteBasePage {
  static CONDITION_MAP = {
    No: '[data-test="label-text-existingConditionsNotCovered-true"]',
    Yes: '[data-test="label-text-existingConditionsNotCovered-false"]',
  };

  getPreExistingConditionOption(condition) {
    const selector = ExistingConditionsPage.CONDITION_MAP[condition];
    if (!selector) {
      throw new Error(`No selector found for preExistingCondition: ${condition}`);
    }

    return cy.get(selector);
  }

  selectPreExistingCondition(condition) {
    this.getPreExistingConditionOption(condition).should('be.visible').click();
    return this;
  }
}

export default ExistingConditionsPage;
