import { indexPage, thankyouPage } from "support/pages";

describe("form submission result", () => {
  it("should submit the correct data results to thank-you page", () => {
    indexPage.visit();

    const formData = {
      firstName: "John",
      lastName: "Smith",
      email: "johnsmith@email.com",
      address1: "123 Main St",
      city: "Springfield",
      state: "Illinois",
      // zip: "62704", // check for N/A
      phone: "5551234567",
      jobTitle: "Engineer - lead",
      reason: "I bring good experience.\nI align with the company values.",
    };

    indexPage.fillData(formData);
    indexPage.submit();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/thank-you");
    });

    thankyouPage.expectResults(formData);
  });
});
