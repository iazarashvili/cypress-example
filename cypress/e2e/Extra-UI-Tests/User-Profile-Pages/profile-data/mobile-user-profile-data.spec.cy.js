import homePage from "../../../../support/pages/homePage";

describe("მომხმარებლის მონაცემების გვერდის შეწმოწმება 375 X 812 რეზოლუციაზე", () => {
  it(" Case 1: მომხმარებლის მონაცემების ველების და ტექსტის შემოწმება", () => {
    cy.authorizationMobile()
    cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})

    cy.visit('/user/profile/data')
    cy.contains("მონაცემები")
      .should("be.visible")
      .and("have.css", "font-size", "18px")

    cy.get('div[id="profile-edit-form"]').within(() => {
      cy.contains("სახელი")
        .should("be.visible")
        .and("have.css", "font-size", "12px")

      cy.get('input[placeholder="სახელი"]')
        .should("have.attr", "placeholder", "სახელი")
        .and("have.attr", "maxlength", "64");

      cy.get("div._x_user-top-5 button:eq(0)")
        .should("be.enabled")
        .and("be.visible");

      cy.contains("გვარი")
        .should("be.visible")
        .and("have.css", "font-size", "12px")
        .invoke("text")
        .and("have.length.at.least", 4);
      cy.get('input[placeholder="გვარი"]')
        .should("have.attr", "placeholder", "გვარი")
        .and("have.attr", "maxlength", "64");

      cy.get("div._x_user-top-5 button:eq(1)")
        .should("be.enabled")
        .and("be.visible");

      cy.contains("პირადი ნომერი")
        .should("be.visible")
        .and("have.css", "font-size", "12px")
        .invoke("text")
        .and("have.length.at.least", 12);

      cy.get('input[placeholder="პირადი ნომერი"]')
        .should("have.attr", "placeholder", "პირადი ნომერი")
        .should("have.attr", "maxlength", "64");

      cy.get("div._x_user-top-5 button:eq(2)")
        .should("be.enabled")
        .and("be.visible");

      cy.contains("დაბადების თარიღი")
        .should("be.visible")
        .and("have.css", "font-size", "12px")
        .invoke("text")
        .and("have.length.at.least", 12);

      cy.get('input[placeholder="დაბადების თარიღი"]')
        .should("have.attr", "placeholder", "დაბადების თარიღი")
        .and("have.attr", "maxlength", "64");

      cy.get("div._x_user-top-5 button:eq(3)")
        .should("be.enabled")
        .and("be.visible");

      cy.contains("ტელეფონის ნომერი")
        .should("be.visible")
        .and("have.css", "font-size", "12px")
        .invoke("text")
        .and("have.length.at.least", 12);

      cy.get('input[placeholder="ტელეფონის ნომერი"]')
        .should("have.attr", "placeholder", "ტელეფონის ნომერი")
        .should("have.attr", "maxlength", "64");
      cy.contains("დაამატე ინფორმაცია").should("be.visible");

      cy.contains("ელ.ფოსტა")
        .should("be.visible")
        .and("have.css", "font-size", "12px")
        .invoke("text")
        .and("have.length.at.least", 7);

      cy.get("div._x_user-top-5 button:eq(3)")
        .should("be.enabled")
        .and("be.visible");
    });

    cy.contains("დამატებითი ნომრები")
      .should("be.visible")
      .and("have.css", "font-size", "18px")
      .invoke("text")
      .and("have.length.at.least", 15);

      // add phone number button

      cy.get('._x_col-span-3 > .icon-disabled').should('be.visible')

      // check text დამატება

      cy.get('._x_col-span-3 > ._x_text-2').invoke('text')
        .should('include', ' დამატება')
  });
});
