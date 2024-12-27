import 'cypress-wait-until';

class BasePage {
  get acceptCookieBtn() {
    return '#onetrust-accept-btn-handler';
  }

  get cookieBanner() {
    return '#onetrust-button-group-parent';
  }

  acceptCookies() {
    cy.waitUntil(
      () => {
        const $btn = Cypress.$(this.acceptCookieBtn);
        if ($btn.length && $btn.is(':visible')) {
          $btn.click();
          return true;
        }
        return false;
      },
      {
        errorMsg: 'Cookie accept button never became visible',
        timeout: 10000,
        interval: 500,
      }
    );

    cy.waitUntil(
      () => {
        const $banner = Cypress.$(this.cookieBanner);
        return !$banner.length || !$banner.is(':visible');
      },
      {
        errorMsg: 'Cookie banner is still visible after 10s',
        timeout: 10000,
        interval: 500,
      }
    );
  }
}

export default new BasePage();
