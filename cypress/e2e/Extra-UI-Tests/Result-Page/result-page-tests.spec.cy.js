import homePage from "../../../support/pages/homePage";
import extraResultPage from "../../../support/pages/resultPage";
import header from "../../../support/pages/header";

describe("რეზალტ ფეიჯის შემოწმება", () => {
  beforeEach("First settings", () => {
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.get(header.elements.searchInputField()).type("ტელეფონი{enter}");
    cy.wait(2000);
  });
  it("Case 1: აითემის მოძიება და რეზალტის შემოწმება", () => {
    cy.get("head title:eq(0)")
      .invoke("text")
      .should("equal", "ტელეფონი - შეიძინე ონლაინ Extra.ge-ზე");
    cy.get(extraResultPage.elements.categoryText())
      .invoke("text")
      .should("equal", " კატეგორია ");
    cy.get(extraResultPage.elements.allCategoryText())
      .invoke("text")
      .should("include", "ყველა");
    cy.get(extraResultPage.elements.allCategoryText())
      .should("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "font-size", "14px")
      .and("have.class", "_x_font-bold");
  });

});

describe("რეზალტ ფეიჯის შემოწმება", () => {
  beforeEach("First settings", () => {
    cy.viewport("iphone-x");
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.get(header.responsiveElements.searchInputField()).type("ტელეფონი{enter}");
    cy.wait(2000);
  });
  it("Case 1: აითემის მოძიება და რეზალტის შემოწმება", () => {
    cy.get("head title:eq(0)")
      .invoke("text")
      .should("equal", "ტელეფონი - შეიძინე ონლაინ Extra.ge-ზე");
    cy.get(extraResultPage.elements.categoryText())
      .invoke("text")
      .should("equal", " კატეგორია ");
    cy.get(extraResultPage.elements.allCategoryText())
      .invoke("text")
      .should("include", "ყველა");
    cy.get(extraResultPage.elements.allCategoryText())
      .should("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "font-size", "14px")
      .and("have.class", "_x_font-bold");
  });

});
