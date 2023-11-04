class ThankyouPage {
  visit() {
    cy.visit("/thank-you");
  }
}

export const thankyouPage = new ThankyouPage();
