import { capitalizeFirstLetter } from "utils";

class ThankyouPage {
  visit() {
    cy.visit("/thank-you");
  }

  expectResults(formData: { [key: string]: string }) {
    const textFields = [
      "firstName",
      "lastName",
      "email",
      "address1",
      "city",
      "state",
      "zip",
      "phone",
      "jobTitle",
    ];
    const textareaFields = ["reason"];

    textFields.forEach((field) => {
      if (!!formData[field]) {
        cy.contains("div", `${capitalizeFirstLetter(field)}: ${formData[field]}`).should("exist");
      } else {
        cy.contains("div", `${capitalizeFirstLetter(field)}: N/A`).should("exist");
      }
    });

    textareaFields.forEach((field) => {
      if (!!formData[field]) {
        cy.contains("b", capitalizeFirstLetter(field)).should("exist");
        formData[field].split("\n").forEach((p) => {
          cy.contains("p", p).should("exist");
        });
      } else {
        cy.contains("div", `${capitalizeFirstLetter(field)}: N/A`).should("exist");
      }
    });
  }
}

export const thankyouPage = new ThankyouPage();
