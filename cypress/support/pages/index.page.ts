class IndexPage {
  visit() {
    cy.visit("/");
  }
}

export const indexPage = new IndexPage();
