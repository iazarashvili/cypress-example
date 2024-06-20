import homPage from '../../../../support/pages/homePage'

describe("ჩემი ბარათები გვერდის შემოწმება", () => {
  it("Case 1: ბარათების გვერდის შემოწმება", () => {
    cy.viewport(1920, 1080);
    cy.authorization()
    cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.get(homPage.whiteElements.whiteDealsTimer(), {timeout: 6000})
    cy.get("head title:eq(0)")
      .invoke("text")
      .should("equal", "Extra.ge - ყველაზე დიდი ონლაინ მაღაზია");
    cy.get('a[href="/user/profile/my-cards"]:eq(1)').click({ force: true });
    cy.contains("ჩემი ბარათები ")
      .should("be.visible")
      .and("have.css", "font-size", "18px")
      .invoke("text")
      .and("have.length.at.least", 10);

    cy.contains("ბარათის დამატება")
      .should("have.css", "font-size", "14px")
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });
});

describe("ჩემი ბარათების გვერდის შემოწმება 375 X 812 რეზოლუციაზე", () => {
  it("Case 1: ბარათების გვერდის შემოწმება", () => {
    cy.authorizationMobile()
    cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.visit('/user/profile/my-cards')
    cy.url().should('eq', Cypress.env('my_cards_url'))
    cy.contains("ჩემი ბარათები ")
      .should("be.visible")
      .and("have.css", "font-size", "18px")
      .invoke("text")
      .and("have.length.at.least", 10);

    cy.contains("ბარათის დამატება")
      .should("have.css", "font-size", "12px")
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });
});
