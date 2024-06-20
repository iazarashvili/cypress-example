import homePage from "../../../support/pages/homePage";

describe("სექციების შემოწმება 1920 X 1080 რეზოლუციაზე", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.authorization()
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
  });

  it("Case 1: დღის შეთავაზების სეტის სახელის შემოწმება", () => {
    cy.get('._x_my-18 > ._x_text-5')
      .should('have.css', 'font-size', '24px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'დღის  შეთავაზება')
  });

  it("Case 2: დღის შეთავაზების სეტის რილაკი (ყველას ნახვა) შემოწმება", () => {
    cy.get('app-home-page-products-carousel a._x_whitespace-nowrap:eq(0)')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
  });
});

// Mobile Test iphone x

describe("სექციების შემოწმება 375 x 812 რეზოლუციაზე", () => {
  beforeEach(() => {
    cy.authorizationMobile()
    cy.wait(3000)
    cy.scrollTo(0, 300, {duration: 2000})
  });

  it("Case 1: დღის შეთავაზების სეტის სახელის შემოწმება", () => {
    cy.get('app-home-page-products-carousel h3._x_line-clamp-1')
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'დღის  შეთავაზება')
  });

  it("Case 2: დღის შეთავაზების სეტის რილაკი (ყველას ნახვა) შემოწმება", () => {
    cy.get('app-home-page-products-carousel a._x_py-4')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
  });
});
