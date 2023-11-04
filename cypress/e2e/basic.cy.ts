describe("Basic testing", () => {
  it("visit the base page", () => {
    cy.visit(Cypress.env("REACT_APP_BASE_URL"));
  });
});
