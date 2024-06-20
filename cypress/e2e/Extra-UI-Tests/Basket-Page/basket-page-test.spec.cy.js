import basketPage from "../../../support/pages/basketPage";
import { basketApi } from "../../../support/Extra-API/basketAPI";
import homePage from "../../../support/pages/homePage";
import resultPage from "../../../support/pages/resultPage";
import header from "../../../support/pages/header";

describe("ბასკეტის გვერდის შემოწმება", () => {
  beforeEach("logIn and add product in cart", () => {
    basketApi.emptyBasket();
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.scroolToFirstSet();
    cy.get(homePage.elements.addFirstItemToCartButton()).click();
    cy.contains("კალათა").should("be.visible").click();
    // check page title
    cy.get("head title:eq(0)")
      .invoke("text")
      .should("eq", "ჩემი კალათა - ექსტრა-ორდინალური ფასები");
  });

  it("Case 1: ტექსტი (ჩემი კალათა) შემოწმება", () => {
    cy.get("h3._x_text-5:eq(0)")
      .should("include.text", " ჩემი კალათა ")
      .should("have.css", "font-size", "24px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  })

  it("Case 2: href ატრიბუტის შემოწმება პროდუქტის სურათზე", () => {
    cy.get("div._x_flex a._x_overflow-hidden")
      .should("have.attr", "href")
      .and("include", "/express");
  });

  it("Case 3: პროდუქტის სურათის შემოწმება", () => {
    cy.get('[class="_x_max-w-full _x_max-h-full"]')
      .should("have.attr", "src")
      .and("include", "https://cdn.staging.extra.ge/");
  });

  it("Case 4: პროდუქტის სახელის შემოწმება", () => {
    cy.get("h2._x_text-2 a:eq(0)")
      .should("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
      .invoke("text")
      .should(($productTitle) => {
        expect($productTitle).length.to.above(2);
      });
  });

  it("Case 5: მერჩანტის სახელის შემოწმება", () => {
    cy.get("h2._x_text-2 a span")
      .should("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .and("have.css", "color", "rgba(43, 39, 49, 0.7)");
  });

  it("Case 6: ტექსტი (ფასი) შემოწმება", () => {
    // text price
    cy.get("span._x_text-dark-800")
      .should("include.text", "ფასი")
      .and("have.css", "color", "rgba(43, 39, 49, 0.8)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");

    // ფასის მნიშვნელობის შემოწმება
    cy.get(basketPage.elements.firstItemPrice())
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it('Case 7: გულის აიქონის შემოწმება', () => {
      cy.get('[id="addWishList_0"]:eq(1)')
        .should('have.css', 'width', '22px')
        .and('have.css', 'height', '20px')
        .and('have.class', '_x_cursor-pointer')
  });

  it("Case 8: პროდუქტის წაშლის აიქონის შემოწმება", () => {
    cy.get("a i._x_icon-remove-bin:eq(1)")
      .and("have.css", "width", "20px")
      .and("have.css", "height", "20px");
  });

  it("Case 9: ტექსტი (შეკვეთა) შემოწმება", () => {
    cy.get("div._x_block h2:eq(0)")
      .should("include.text", " შეკვეთა ")
      .should("have.css", "color", "rgb(43, 39, 49)")
      .should("have.css", "font-size", "18px")
      .should("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 10: ტექსტი (პროდუქტების რაოდენობა) და მისი მნიშვნელობის შემოწმება", () => {
    cy.get("ul._x_list-none span:eq(0)")
      .should("include.text", "პროდუქტების რაოდენობა")
      .and("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");

    // quantity indicator
    cy.get("ul._x_list-none var:eq(0)")
      .and("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });

  it("Case 11: ტექსტი (სულ თანხა) და მისი მნიშვნელობის შემოწმება", () => {
    cy.get("div._x_mb-10 span:eq(0)")
      .should("include.text", "სულ თანხა:")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");

    cy.get(basketPage.elements.totalPrice())
      .and("have.css", "font-size", "20px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });

  it("Case 12: ტექსტი (ბოლოს ნანახი პროდუქტები) შემოწმება", () => {
    cy.get("app-home-page-products-carousel h3")
      .should("include.text", "ბოლოს ნანახი პროდუქტები")
      .and("have.css", "font-size", "24px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });
});

describe("ფასდაკლებული პროდუქტის შემოწმება", () => {
  beforeEach("Discounted item ", () => {
    basketApi.emptyBasket();
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.scrollToTimedDeals();
    cy.get(homePage.timedDealsElements.addFirstItemToCartButton()).click();
    cy.get(header.elements.basketButton()).click()
  });

  it("Case 1: ფასდაკლებული ფასის შემოწმება", () => {
    cy.get(basketPage.elements.firstItemDiscountedPrice())
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 2: ფასდაკლებამდე ფასის შემოწმება", () => {
    cy.get(basketPage.elements.firstItemPrice())
      .should("have.css", "color", "rgba(43, 39, 49, 0.6)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });
});

describe("პროდუქტი ფერით და ზომით შემოწმება", () => {
  beforeEach("First steps", () => {
    basketApi.emptyBasket();
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.get(header.elements.searchInputField()).type("503127{enter}");
    cy.wait(2000)
    cy.get(resultPage.elements.allCategoryText()).invoke('text').should('include', ' ყველა ')
    cy.get(resultPage.elements.openFirstItemDetailPage()).click()
    
  });
  it("Case 1: პროდუქტის ფერის მაჩვენებლის და ტექსტი (ფერი) შემოწმება", function () {
    cy.get(
      '[class="_x_text-4 _x_font-bold _x_text-dark _x_flex _x_mb-8"]:eq(0)'
    )
      .should("include.text", "ფერი")
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");

    cy.get('[class="_x_flex"] div._x_cursor-pointer')
      .should("have.attr", "style", "background-color: rgb(146, 148, 159);")
      .and("have.css", "width", "34px")
      .and("have.css", "height", "34px");
  });

  it("Case 2: პროდუქტის ზომის მაჩვენებლის და ტექსტი (ზომა) შემოწმება", function () {
    cy.get(
      '[class="_x_text-4 _x_font-bold _x_text-dark _x_flex _x_mb-8"]:eq(1)'
    )
      .should("include.text", "ზომა")
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");

    cy.get(
      '[class="_x_flex _x_flex-wrap"] ._x_border-purple span'
    )
      .should("have.css", "font-size", "12px")
      .and("have.css", "color", "rgb(122, 29, 255)")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });
});

describe("ცარიელი კალათის გვერდის შემოწმება", () => {
  beforeEach("First settings ", () => {
    basketApi.emptyBasket();
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.get(header.elements.basketButton()).click();
  });
  it("case 1: ცარიელი კალათის იმიჯის შემოწმება", () => {
    cy.get("figure.backface-visibility-hidden img").should(
      "have.attr",
      "src",
      "../../../assets/img/svg/free-cart.svg"
    );
  });

  it("Case 2: ტექსტი (კალათა ცარიელია შემოწმება)", () => {
    cy.contains("კალათა ცარიელია")
      .should("have.css", "font-size", "18px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });

  
  it("Case 3: ტექსტი (აღმოაჩინე შენზე მორგებული შეთავაზებები კალათის შესავსებად) შემოწმება", () => {
    cy.contains("აღმოაჩინე შენზე მორგებული შეთავაზებები კალათის შესავსებად")
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });

  it("Case 4: ღილაკი (ფასდაკლებები) შემოწმება", () => {
    cy.get("button._x_bg-purple:eq(3)")
      .should("have.attr", "routerlink", "/discount")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "background-color", "rgb(122, 29, 255)")
      .and("have.css", "max-width", "156px")
      .and("have.css", "height", "50px");

    // text in button
    cy.get("button._x_bg-purple span")
      .should("include.text", "ფასდაკლებები")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  });

  it("Case 5: ღილაკი (მთავარი გვერდი) შემოწმება", () => {
    cy.get("button._x_text-white:eq(3)")
      .should("have.attr", "routerlink", "/")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "max-width", "156px")
      .and("have.css", "height", "50px");
      
    // button text
    cy.get("button span._x_text-link-blue")
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "color", "rgb(0, 68, 187)");
  });
});
