describe("Redirects", () => {
  it("anonymous page redirects to index page", () => {
    cy.visit("anonymous");
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
