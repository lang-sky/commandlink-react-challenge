class IndexPage {
  visit() {
    cy.visit("/");
  }

  fillData(formData: { [key: string]: string }) {
    const inputFields = [
      "firstName",
      "lastName",
      "email",
      "address1",
      "city",
      "state",
      "zip",
      "phone",
    ] as const;

    inputFields.forEach((field) => {
      if (!!formData[field]) {
        cy.get(`input[name=${field}]`).type(formData[field]);
      }
    });
    if (!!formData.jobTitle) {
      cy.get("select[name=jobTitle]").select(formData.jobTitle);
    }
    if (!!formData.reason) {
      cy.get("textarea[name=reason]").type(formData.reason);
    }
  }

  submit() {
    cy.get("button[type=submit]").click();
  }
}

export const indexPage = new IndexPage();
