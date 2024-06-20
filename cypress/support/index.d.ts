/// <reference types="cypress" />
import cypress from "cypress";
import 'cypress-mochawesome-reporter/register';

declare global {
  namespace Cypress {
    interface Chainable<Subject=any> {
      checkTotalPriceBasketPage(totalPrice: string, items: Array<any>): Chainable<any>;
      checkTotalAmount(): Chainable<any>;
      checkTotalAmountWhitInstallments(): Chainable<any>;
      sessionAuth(authUserName: string, authPassword: string, CorrectEmail: string, CorrectPassword: string): Chainable<any>;
      checkCategoryNames(index: number, categoryName: string): Chainable<any>;
      checkCategoryes(): Chainable<any>;
      checkProductsVisibility(): Chainable<any>;
      searchAnyItem(searchWord: string): Chainable<any>;
      openItemDetailPage(item: HTMLElement): Chainable<any>;
      authorization(authUserName: string, authPassword: string): Chainable<any>;
      authorizationMobile(authUserName: string, authPassword: string): Chainable<any>;
      logIn(name: string, password: string): Chainable<any>;
      navigateToProfileAddressPage(): Chainable<any>;
      navigateToProfileAddressPageMobile(): Chainable<any>;
      selectCity(): Chainable<any>;
      firstSettings(): Chainable<any>;
      firstSettingsMobile(): Chainable<any>;
      priceParsing(selector: string): Chainable<number>;
      scroolToFirstSet(): Chainable<any>;
      addItemToCartAndGetBasket(itemPrice: string, basketItemPrice: string, itemName: string, item: string): Chainable<any>;
      addItemToWishListAndCheck(item: string, item_count: string): Chainable<any>;
    }
  }
}