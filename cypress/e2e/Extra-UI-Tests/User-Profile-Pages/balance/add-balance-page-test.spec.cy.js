
import homePage from "../../../../support/pages/homePage";
import header from "../../../../support/pages/header";
//Todo გასასწორებელია ტესტები

describe("ბალანსის შევსების გვერდის შემოწმება", () => {
  beforeEach("First Steps", () => {
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.get(header.elements.userDataDropDown()).click();
    cy.contains("ბალანსის შევსება").click({ force: true });
    cy.url().should("equal", Cypress.env("add_balanse_page_url"));
    cy.title().should("eq", "Cypress რაც გაგიხარდება");
  });
  it("Case 1: ტექსტი (ბალანსის შევსება) შემოწმება", () => {
    cy.get('div h3[class="_x_text-5 _x_text-black _x_font-bold"]')
      .should("have.css", "font-size", "18px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "color", "rgb(0, 0, 0)")
      .invoke('text').should('eq', ' ბალანსის შევსება ')
  });

  it("Case 2: ინპუთის placeholder ის შემოწმება", () => {
    cy.get("app-new-input")
      .should("have.attr", "placeholder", "ჩაწერეთ თანხა")
      .and("have.attr", "formcontrolname", "amount");
  });

  it("Case 3: თანხის შეყვანის ველის შემოწმება ", () => {
    cy.get("app-new-input input")
      .should("have.attr", "thousandseparator", ",")
      .and("have.attr", "type", "text")
      .and("have.attr", "autocomplete", "new-recover-password")
      .and("have.attr", "maxlength", "64")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .and("have.css", "border-color", "rgba(43, 39, 49, 0.2)")
      .and("have.css", "border-width", "1px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "align-items", "center")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "width", "418px")
      .and("have.css", "height", "48px");
  });

  it("Case 4: placeholder ტექსტის შემოწმება", () => {
    cy.get("app-new-input label")
      .should("include.text", "ჩაწერეთ თანხა")
      .should("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .should("have.css", "font-size", "14px")
      .should("have.css", "font-family", "Conv_MarkGEO-Medium")
      .should("have.css", "align-items", "center")
      .should("have.css", "height", "14px")
      .should("have.css", "left", "20px")
      .should("have.css", "top", "16px")
      .should("have.css", "position", "absolute")
      .should("have.css", "pointer-events", "none");
  });

  it("Case 5: visa _ ის აიქონის შემოწმება", () => {
    cy.get("form div i._x_icon:eq(0)")
      .should("have.class", "_x_icon _x_icon-visa")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "line-height", "24px")
      .and("have.css", "font-size", "24px")
      .and("have.css", "margin-right", "10px")
      .and("have.css", "content", "normal");
  });

  it("Case 6: mastercard _ ის აიქონის შემოწმება", () => {
    cy.get("form div i._x_icon:eq(1)")
      .should("have.class", "_x_icon-mastercard")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "line-height", "24px")
      .and("have.css", "font-size", "24px")
      .and("have.css", "margin-right", "0px")
      .and("have.css", "content", "normal");
  });

  it("Case 7: ღილაკი შევსება შემოწმება", () => {
    cy.wait(2000)
    cy.get('[class="_x_flex _x_w-full _x_mt-12"] button')
      .should("have.css", "cursor", "pointer")
      .and("have.css", "padding-left", "24px")
      .and("have.css", "padding-right", "24px")
      .and("have.css", "background-color", "rgb(122, 29, 255)")
      .and("have.css", "border-radius", "10px")
      .and("have.css", "height", "48px")
      .and("have.css", "line-height", "24px")
      .and("have.css", "border", "0px solid rgb(0, 0, 0)");
  });

  it("Case 8: ღილაკი შევსება ტექსტის შემოწმება", () => {
    cy.get('[class="_x_text-3 _x_font-semibold _x_text-white"]')
      .should("include.text", "შევსება")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
      .and("have.css", "border", "0px solid rgb(255, 255, 255)")
      .and("have.css", "cursor", "pointer");
  });
});

describe("ბალანსის შევსების გვერდი 375 X 812 გაფართოებისთვის", () => {
  beforeEach("First Steps", () => {
    cy.viewport(375, 812);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('/user/profile/balance')
    cy.url().should("equal", Cypress.env("add_balanse_page_url"));
    cy.title().should("eq", "Cypress რაც გაგიხარდება");
  });

  it("Case 1: ტექსტი ბალანსის შევსება შემოწმება", () => {
    cy.get('._x_flex h3:eq(0)')
      .should("have.css", "font-size", "18px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "color", "rgb(0, 0, 0)")
      .invoke('text').should('eq', ' ბალანსის შევსება ')
  });

  it("Case 2: თანხის შეყვანის ველის ატრიბუტის შემოწმება", () => {
    cy.get("app-new-input")
      .should("have.attr", "placeholder", "ჩაწერეთ თანხა")
      .and("have.attr", "formcontrolname", "amount");
  });

  it("Case 3: თანხის შეყვანის ველის შემოწმება ", () => {
    cy.get("app-new-input input")
      .should("have.attr", "thousandseparator", ",")
      .and("have.attr", "type", "text")
      .and("have.attr", "autocomplete", "new-recover-password")
      .and("have.attr", "maxlength", "64")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .and("have.css", "border-color", "rgba(43, 39, 49, 0.2)")
      .and("have.css", "border-width", "1px")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "align-items", "center")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "width", "328px")
      .and("have.css", "height", "48px");
  });

  it("Case 4: ფლეისჰოლდერის ტექსტის შემოწმება", () => {
    cy.get("app-new-input label")
      .should("include.text", "ჩაწერეთ თანხა")
      .should("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .should("have.css", "font-size", "14px")
      .should("have.css", "font-family", "Conv_MarkGEO-Medium")
      .should("have.css", "align-items", "center")
      .should("have.css", "height", "14px")
      .should("have.css", "left", "20px")
      .should("have.css", "top", "16px")
      .should("have.css", "position", "absolute")
      .should("have.css", "pointer-events", "none");
  });

  it("Case 5: Visa ის აიქონის შემოწმება", () => {
    cy.get("._x_icon-visa")
      .should("have.class", "_x_icon _x_icon-visa")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "line-height", "24px")
      .and("have.css", "font-size", "24px")
      .and("have.css", "margin-right", "10px")
      .and("have.css", "content", "normal");
  });

  it("Case 6: Mastercard _ ის აიქონის შემოწმება", () => {
    cy.get("._x_icon-mastercard")
      .should("have.class", "_x_icon-mastercard")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "line-height", "24px")
      .and("have.css", "font-size", "24px")
      .and("have.css", "margin-right", "0px")
      .and("have.css", "content", "normal");
  });

  it("Case 7: ღილაკი შევსება შემოწმება", () => {
    cy.get('[class="_x_flex _x_w-full _x_mt-12"] button')
      .should("have.css", "cursor", "pointer")
      .and("have.css", "padding-left", "24px")
      .and("have.css", "padding-right", "24px")
      .and("have.css", "background-color", "rgb(122, 29, 255)")
      .and("have.css", "border-radius", "10px")
      .and("have.css", "height", "48px")
      .and("have.css", "line-height", "24px")
      .and("have.css", "border", "0px solid rgb(0, 0, 0)");
  });

  it("Case 8: ღილაკი შევსება ტექსტის შემოწმება", () => {
    cy.get('[class="_x_flex _x_w-full _x_mt-12"] span')
      .should("include.text", "შევსება")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
      .and("have.css", "border", "0px solid rgb(255, 255, 255)")
      .and("have.css", "cursor", "pointer");
  });
});
