import QuoteBasePage from './QuoteBasePage';

class RiskTypePage extends QuoteBasePage {
  selectDog() {
    cy.get('[data-test="risk-type-radio-label-dog"]', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('[data-test="input-riskType-0"]').should('be.checked');

    return this;
  }
}

export default RiskTypePage;
