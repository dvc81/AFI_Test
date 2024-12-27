import QuoteBasePage from './QuoteBasePage';
import '@testing-library/cypress/add-commands';

class DateOfBirthPage extends QuoteBasePage {
  get knowExactDobOption() {
    return cy.get('[data-test="label-text-dateOfBirthIsApproximate-false"]');
  }

  get dobInputField() {
    return cy.get('#datepicker-1');
  }

  get toggleCalendarButton() {
    return cy.get('button[aria-label="Toggle calendar"]');
  }

  get calendarTitle() {
    return cy.get('.k-calendar-title');
  }

  get navigatePrevViewButton() {
    return cy.findByTitle('Navigate to previous view');
  }

  get continueButton() {
    return cy.get("[data-test='btn-app-button']");
  }

  selectDobKnownExact(knowExact) {
    if (knowExact) {
      this.knowExactDobOption.should('be.visible').click();
    }
    return this;
  }

  enterDob(dob) {
    const DELAY_TYPING = 100;
    this.dobInputField.should('be.visible').clear().type(dob, { delay: DELAY_TYPING });
    return this;
  }

  clickCalendarIcon() {
    this.toggleCalendarButton.should('be.visible').click();
    cy.get('kendo-calendar', { timeout: 10000 }).should('be.visible');
    return this;
  }

  selectDateViaCalendar(dob) {
    const [day, monthStr, yearStr] = dob.split('/');
    const monthName = this.convertMonthIndexToName(monthStr);

    this.calendarTitle.should('be.visible').click();
    this.calendarTitle.click();
    this.navigatePrevViewButton.should('be.visible').click();
    this.selectYear(yearStr);
    this.selectMonth(monthName);
    this.selectDay(day);

    return this;
  }

  selectYear(year) {
    cy.findByText(year).should('be.visible').click();
    return this;
  }

  selectMonth(month) {
    cy.findByText(month).should('be.visible').click();
    return this;
  }

  selectDay(day) {
    cy.findByText(day).should('be.visible').click();
    return this;
  }

  convertMonthIndexToName(monthIndex) {
    const monthMap = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',
    };
    return monthMap[monthIndex];
  }

  clickContinue() {
    this.continueButton.should('be.visible').click();
    return this;
  }
}

export default DateOfBirthPage;
