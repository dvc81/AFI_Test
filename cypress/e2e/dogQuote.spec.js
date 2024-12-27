import RiskTypePage from '../pages/quote/RiskTypePage';
import RiskNamePage from '../pages/quote/RiskNamePage';
import ExistingConditionsPage from '../pages/quote/ExistingConditionsPage';
import GenderPage from '../pages/quote/GenderPage';
import DateOfBirthPage from '../pages/quote/DateOfBirthPage';
import BreedSelectionPage from '../pages/quote/BreedSelectionPage';
import BasePage from '../pages/BasePage';

describe('Animal Friends Quote Journey - Dogs', () => {
  const riskTypePage = new RiskTypePage();
  const riskNamePage = new RiskNamePage();
  const existingConditionsPage = new ExistingConditionsPage();
  const genderPage = new GenderPage();
  const dateOfBirthPage = new DateOfBirthPage();
  const breedSelectionPage = new BreedSelectionPage();

  beforeEach(() => {
    cy.visit('https://quote.animalfriends.co.uk');
    BasePage.acceptCookies();
  });

  it(
    'should complete quotes for dog - labrador, 10 years old with no pre existing conditions',
    { tags: ['quote', 'dog', 'no-preexisting'] },
    () => {
      cy.fixture('dogDetails').then((dogs) => {
        cy.wrap(dogs).each((dog) => {
          riskTypePage.selectDog().clickContinue();

          riskNamePage.enterRiskName(dog.dogName).clickContinue();

          existingConditionsPage
            .selectPreExistingCondition(dog.preExistingCondition)
            .clickContinue();

          genderPage.selectGender(dog.gender).clickContinue();

          dateOfBirthPage.selectDobKnownExact(dog.dobKnownExact);
          if (dog.dobKnownExact) {
            dateOfBirthPage.clickCalendarIcon().selectDateViaCalendar(dog.dob).clickContinue();
          }

          breedSelectionPage.selectBreed(dog.breed.main, dog.breed.sub).clickContinue();

          cy.url().should('include', '/risk-purchase');
        });
      });
    }
  );
});
