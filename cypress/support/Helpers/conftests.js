import extraBasketPage from "../pages/basketPage";
import extraHomePage from "../pages/homePage";

Cypress.Commands.add("scrollToTimedDeals", () => {
  cy.wait(2000)
  cy.scrollTo(0, 400, { duration: 700 });
  cy.wait(3000)
});

Cypress.Commands.add("scroolToFirstSet", () => {
  cy.wait(2000)
  cy.scrollTo(0, 1000, { duration: 2000 });
});

Cypress.Commands.add("scrollToDiscountedProducts", () => {
  cy.scrollTo(0, 1400, { duration: 2300 });
  cy.wait(3000)
});

Cypress.Commands.add("merchantPageScrollToFirstItem", () => {
  cy.scrollTo(0, 800, { duration: 600 });
  cy.wait(3000)
});

Cypress.Commands.add("lastViewedProducts", () => {
  cy.scrollTo(0, 5000, {duration: 3000})
});

Cypress.Commands.add("mobileScrollToItems", () => {
  cy.wait(2000)
  cy.scrollTo(0, 1200, { duration: 1000 });
  cy.wait(3000)
});

Cypress.Commands.add("mobileScrollToTimedDealsItems", () => {
  cy.wait(2000)
  cy.scrollTo(0, 600, { duration: 1000 });
  cy.wait(3000)
});

Cypress.Commands.add('detailPageScroolTolastView', () => {
  cy.get('#AddToCart-card-button-0').scrollIntoView().wait(2000)
})

Cypress.Commands.add("addAnyItemToCart", (itemAddButton, itemPrice) => {
  cy.parsePrice(itemPrice).then(($firstProductPrice) => {
    itemAddButton.click();
    cy.wait(1000);
    cy.checkItemsCountToCart(1);
    cy.get(extraHomePage.elements.getBasketButton()).click().click();
    cy.wait(3000);
    cy.url().should("eq", Cypress.env("basket_page_url"));
    cy.get(extraBasketPage.elements.numberOfProducts()).should("include.text", 1);
    cy.parsePrice(extraBasketPage.elements.firstItemPrice()).then(
      ($productPrice) => {
        expect($firstProductPrice).to.be.eq($productPrice);
      }
    );
  });
  cy.comparePrice(
    extraBasketPage.elements.firstItemPrice(),
    extraBasketPage.elements.totalPrice()
  );
  cy.wait(3000);
});
