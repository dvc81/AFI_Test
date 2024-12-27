class QuoteBasePage {
  get continueButton() {
    return cy.get('[data-test="btn-app-button"]');
  }

  clickContinue() {
    this.continueButton.should('be.visible').and('not.be.disabled').click();
    return this;
  }
}

export default QuoteBasePage;
