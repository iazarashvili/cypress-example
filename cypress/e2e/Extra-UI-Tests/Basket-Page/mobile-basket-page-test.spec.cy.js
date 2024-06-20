import homePage from "../../../support/pages/homePage";
import { basketApi } from "../../../support/Extra-API/basketAPI";
import basketPage from "../../../support/pages/basketPage";
import productDetailPage from "../../../support/pages/productDetailPage";
import resultPage from "../../../support/pages/resultPage";
import header from "../../../support/pages/header";

describe("კალათის გვერდის შემოწმება 375 X 812 გაფართოება", () => {
  beforeEach("logIn and add product in cart", () => {
    basketApi.emptyBasket();
    cy.viewport('iphone-x')
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.scrollTo(0, 500);
    cy.contains('კალათაში დამატება').click()
    cy.get(basketPage.responsiveElements.productAddedToBasketPopup())
    .should('contain', 'დამატებულია კალათაში')
    cy.scrollTo("top");
    cy.get(header.responsiveElements.getBasketButton()).click();
    cy.wait(3000);
    cy.get("head title:eq(0)").should(
      "have.text",
      "ჩემი კალათა - ექსტრა-ორდინალური ფასები"
    );
  });

  it("Case 1: ტექსტი (ჩემი კალათა) შემოწმება", () => {
    cy.contains('ჩემი კალათა')
      .should("have.css", "font-size", "18px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 2: პროდუქტის სურათის შემოწმება", () => {
    cy.get("div a._x_h-40 img")
      .should("have.attr", "src")
      .and("include", "https://cdn.staging.extra.ge/dyn");
  });

  it("Case 3: პროდუქტის ფასის შემოწმება", () => {
    cy.get(
      '._x_whitespace-nowrap:eq(24)'
    )
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      // Check GEL indicator
      .and("include.text", "₾")
      .invoke("text")
      .should("have.length.at.least", 1);

  });

  it("Case 4: პროდუქტის წაშლის აიქონის შემოწმება", () => {
    cy.get("i._x_icon-remove-bin:eq(0)")
      .should("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "font-weight", "400")
      .and("have.css", "font-variant", "normal")
      .and("have.css", "text-transform", "none")
      .and("have.css", "line-height", "22px")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "color", "rgba(43, 39, 49, 0.6)")
      .and("have.css", "font-size", "22px")
      .and("have.css", "width", "24px")
      .and("have.css", "height", "24px");
  });

  it("Case 5: პროდუქტის სახელის შემოწმება", () => {
    cy.get('div[class="_x_flex _x_mb-4"] a')
      .should("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
      .and("have.css", "max-width", "220px");
  });

  it("Case 6: მერჩანტის სახელის შემოწმება", () => {
    cy.get("a._x_max-w-110 span")
      .should("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .and("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });

  it("Case 7: პროდუქტის რაოდენობის შემცირების ღილაკის შემოწმება", () => {
    cy.get("#dicreaseCount_0")
      .should("exist")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "font-weight", "400")
      .and("have.css", "font-variant", "normal")
      .and("have.css", "text-transform", "none")
      .and("have.css", "line-height", "18px")
      .and("have.css", "color", "rgba(43, 39, 49, 0.5)")
      .and("have.css", "font-size", "18px")
      .and("have.css", "padding-top", "4px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "min-width", "24px")
      .and("have.css", "width", "24px")
      .and("have.css", "min-height", "24px")
      .and("have.css", "height", "24px");
  });

  it("Case 8: პროდუქტის რაოდენობის შემოწმება", () => {
    cy.get("#productCount_0")
      .should("exist")
      .and("have.css", "font-size", "14px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "30px");
  });

  it("Case 9: პროდუქტის რაოდენობის გაზრდის ღილაკის შემოწმება", () => {
    cy.get("#increaseCount_0")
      .should("exist")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "font-weight", "400")
      .and("have.css", "font-variant", "normal")
      .and("have.css", "text-transform", "none")
      .and("have.css", "line-height", "18px")
      .and("have.css", "color", "rgba(43, 39, 49, 0.5)")
      .and("have.css", "font-size", "18px")
      .and("have.css", "padding-top", "4px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "min-width", "24px")
      .and("have.css", "width", "24px")
      .and("have.css", "min-height", "24px")
      .and("have.css", "height", "24px");
  });

  it("Case 10: ტექსტი (შეკვეთა) შემოწმება", () => {
    cy.get("div._x_border-t-0 div._x_block h2:eq(0)")
      .should("include.text", " შეკვეთა ")
      .should("have.css", "font-size", "18px")
      .and("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 11: ტექსტი (პროდუქტების რაოდენობა) შემოწმება", () => {
    cy.contains("პროდუქტების რაოდენობა")
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });

  it("Case 12: პროდუქტის რაოდენობის მნიშვნელობის შემოწმება", () => {
    cy.get("ul._x_list-none var:eq(1)")
      .should("have.css", "font-style", "normal")
      .and("have.css", "font-size", "16px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });

  it("Case 13: ტექსტი (სულ თანხა) შემოწმება", () => {
    cy.contains("სულ თანხა:")
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 14: სულ თანხის მნიშვნელობის შემოწმება", () => {
    cy.get('div[class="_x_flex"] span:eq(1)')
      .should("have.css", "font-size", "20px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 15: ლარის აიქონის შემოწმება", () => {
    cy.get('div[class="_x_flex"] i:eq(1)')
      .should("have.class", "_x_icon-gel")
      .and("have.css", "font-family", "ex-icon")
      .and("have.css", "font-style", "normal")
      .and("have.css", "font-weight", "400")
      .and("have.css", "font-size", "20px")
      .and("have.css", "align-items", "center");
  });

  it("Case 16: ღილაკი ყიდვის გაგრძელების შემოწმება", () => {
    cy.scrollTo(0, 200)
    cy.get("button._x_bg-purple:eq(4)", {timeout: 5000})
      .should("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(122, 29, 255)")
      .and("have.css", "border-radius", "8px")
      .and("have.css", "width", "326px")
      .and("have.css", "height", "48px")
      .and("have.css", "margin-bottom", "10px")
      .and("have.css", "border", "0px solid rgb(255, 255, 255)");

    // button text
    cy.get("button._x_bg-purple span:eq(1)")
      .should("include.text", "ყიდვის გაგრძელება")
      .should("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "color", "rgb(255, 255, 255)");
  });
});

describe("ფასდაკლებული პროდუქტი", () => {
  beforeEach("First steps ", () => {
    basketApi.emptyBasket();
    cy.viewport('iphone-x')
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('');
    cy.mobileScrollToTimedDealsItems();
    cy.get(homePage.dealsResponsiveElements.addFirstItemToCartButton()).click();
    cy.scrollTo("top");
    cy.get(header.responsiveElements.getBasketButton()).click();
    cy.wait(3000);
  });

  it("Case 1: ფასდაკლებული ფასის შემოწმება", () => {
    cy.get(basketPage.responsiveElements.firstItemDiscountedPrice())
      .should("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 2: ფასდაკლებამდე ფასის შემოწმება", () => {
    cy.get(basketPage.responsiveElements.firstItemPrice())
      .should("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });
});

describe("პროდუქტი ფერით და ზომით", () => {
  beforeEach("", () => {
    basketApi.emptyBasket();
    cy.viewport('iphone-x')
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.wait(3000)
    cy.get(header.responsiveElements.searchInputField()).type("503127{enter}").wait(1000);
    resultPage.elementsMobile.whiteResultPage()
    cy.get(resultPage.elements.openFirstItemDetailPage()).click();
    cy.wait(3000)
    cy.scrollTo(0, 1500, {duration: 3000})
    cy.get(productDetailPage.responsiveElements.addItemToCartButton()).click();
    cy.scrollTo("top", { duration: 1000 });
    cy.get(header.responsiveElements.getBasketButton()).click();
  });

  it("Case 1: ტექსტი ფერი და მისი მნიშვნელობის შემოწმება", function () {
    cy.get(
      '[class="_x_flex _x_flex-col _x_mr-15"] span'
    )
      .should("include.text", "ფერი")
      .should("have.css", "color", "rgba(43, 39, 49, 0.8)")
      .and("have.css", "font-size", "12px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");

    cy.get('[class="_x_flex _x_flex-col _x_mr-15"] i')
      .should("have.attr", "style", "background-color: rgb(146, 148, 159);")
      .and("have.css", "width", "24px")
      .and("have.css", "height", "24px");
  });

  it("Case 2:ტექსტი ზომა და მისი მნიშვნელობის შემოწმება", function () {
    cy.get(
      'span[class="_x_text-3 _x_font-medium _x_text-dark-800 _x_mb-4"]:eq(2)'
    )
      .should("include.text", "ზომა")
      .should("have.css", "color", "rgba(43, 39, 49, 0.8)")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");

    cy.get(
      'span[class="_x_text-dark _x_font-bold _x_text-3 md:_x_text-4"]:eq(1)'
    )
      .should("have.css", "font-size", "14px")
      .and("have.css", "color", "rgb(43, 39, 49)")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });
});

describe("ცარიელი კალათის გვერდის ტესტი", () => {
  beforeEach("First settings", () => {
    basketApi.emptyBasket();
    cy.viewport('iphone-x')
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(header.responsiveElements.getBasketButton()).click();
    cy.wait(3000);
    cy.get("head title:eq(0)").invoke('text').should('eq', 'ჩემი კალათა - ექსტრა-ორდინალური ფასები')
  });

  it("case 1: ცარიელი კალათის სურათის შემოწმება", () => {
    cy.get("figure.backface-visibility-hidden img").should(
      "have.attr",
      "src",
      "../../../assets/img/svg/free-cart.svg"
    );
  });

  it("Case 2: ტექსტი (კალათა ცარიელია) შემოწმება",  () => {
    cy.contains("კალათა ცარიელია")
      .should("have.css", "font-size", "18px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 3: ტექსტი (აღმოაჩინე შენზე მორგებული შეთავაზებები კალათის შესავსებად) შემოწმება", () => {
    cy.contains("აღმოაჩინე შენზე მორგებული შეთავაზებები კალათის შესავსებად")
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium");
  });

  it("Case 4: ღილაკი ფასდაკლებები შემოწმება", () => {
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
      .and("have.css", "font-family", "Conv_MarkGEO-Bold");
  });

  it("Case 5: ღილაკი მთავარი გვერდი შემოწმება", () => {
    cy.get('[routerlink="/"]:eq(1)')
      .should("have.attr", "routerlink", "/")
      .and("have.css", "cursor", "pointer")
      .and("have.css", "max-width", "156px")
      .and("have.css", "height", "50px");
    // button text
    cy.get('[routerlink="/"] span')
      .should("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and("have.css", "color", "rgb(0, 68, 187)");
  });
});
