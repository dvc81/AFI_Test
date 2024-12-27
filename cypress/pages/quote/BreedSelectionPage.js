import QuoteBasePage from './QuoteBasePage';

class BreedSelectionPage extends QuoteBasePage {
  static DELAY_TYPING = 100;
  static DROPDOWN_TIMEOUT = 10000;

  findMainBreedOption(breedType) {
    return cy.contains('[data-test^="label-text-breedType-"]', breedType);
  }

 
  selectMainBreed(breedType) {
    this.findMainBreedOption(breedType).should('be.visible').click();
    return this;
  }


  get subBreedInput() {
    return cy.get('.typeahead__input');
  }


  typeSubBreed(subBreed) {
    this.subBreedInput.should('be.visible').clear().type(subBreed, { delay: BreedSelectionPage.TYPING_DELAY });

    cy.get('.dropdown-menu.show', { timeout: BreedSelectionPage.DROPDOWN_TIMEOUT }).should('be.visible');
    return this;
  }

  getSubBreedOption(subBreed) {
    return cy.contains('button.dropdown-item', subBreed, { timeout: BreedSelectionPage.DROPDOWN_TIMEOUT });
  }

 
  selectSubBreed(subBreed) {
    this.getSubBreedOption(subBreed).should('be.visible').click();
    return this;
  }

  selectBreed(main, sub) {
    this.selectMainBreed(main).typeSubBreed(sub).selectSubBreed(sub);
    return this;
  }
}

export default BreedSelectionPage;