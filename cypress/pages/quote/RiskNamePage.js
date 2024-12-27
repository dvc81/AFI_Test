import QuoteBasePage from './QuoteBasePage';

class RiskNamePage extends QuoteBasePage {
  enterRiskName(riskName) {
    if (typeof riskName !== 'string') {
      throw new TypeError('Risk name must be a string');
    }

    cy.get('[data-test="input-riskName"]').type(riskName);
    return this;
  }
}

export default RiskNamePage;
