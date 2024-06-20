
import homePage from "../../../support/pages/homePage";
import merchantPage from "../../../support/pages/merchantPage";
import resultPage from "../../../support/pages/resultPage";
import productDetailPage from "../../../support/pages/productDetailPage";
import wishListPage from "../../../support/pages/wishListPage";
import { searchAnyItemResponsive } from "../../../support/Helpers/homePageHelpers";
import basketPage from "../../../support/pages/basketPage";
import { basketApi } from '../../../support/Extra-API/basketAPI';
import checkoutPage from "../../../support/pages/checkoutPage";
import myPage from "../../../support/pages/comparsionPage"

describe('მერჩანტის გვერდზე გადასვლის შემოწმება', () => {
    beforeEach('First Steps', () => {
        basketApi.emptyBasket()
        cy.viewport('iphone-x')
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
    })

    it('Case 1: Homepage-ის სექციების card-ებიდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.scrollTo(0, 1000, { duration: 2000 })
        cy.get(homePage.elements.firstItemSellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(homePage.elements.firstItemSellerHref()).click()
                cy.wait(2000)
                cy.location('pathname').should('eq', $sellerHref)

            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)

    });

    it('Case 2: result page-ის card-იდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        searchAnyItemResponsive('hummel')
        cy.get(resultPage.elements.firstItemHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(resultPage.elements.firstItemHref()).click().wait(3000)
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
    });

    it('Case 3: პროდუქტის დეტალური გვერდიდნ', () => {
        cy.visit(Cypress.env('product_detail_page_url')).wait(2000)
        cy.get(productDetailPage.responsiveElements.sellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(productDetailPage.responsiveElements.sellerHref()).click().wait(2000)
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
    });

    it('Case 4: პროდუქტის დეტალურ ფეიჯზე მსგავსი პროდუქტების card-ებიდან', () => {
        cy.visit(Cypress.env('product_detail_page_url')).wait(2000)
        cy.get('[routerlink="/"]:eq(1)').scrollIntoView({ duration: 3000 })
        cy.get(productDetailPage.responsiveElements.firstItemLastOfViewProducts()).invoke('attr', 'href').then(($sellerHref) => {
            cy.get(productDetailPage.responsiveElements.firstItemLastOfViewProducts()).click().wait(3000)
            cy.location('pathname').should('eq', $sellerHref)
        })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)

    });

    it('Case 5: wishlist-ის card-იდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.scrollTo(0, 300, { duration: 1000 })
        cy.get(homePage.dealsResponsiveElements.addFirstTimedDealsItemToWishList()).click().wait(2000)
        cy.visit('/wishlist')
        cy.get(wishListPage.whiteElements.whiteAddToCartButton(), {timeout: 6000})
        cy.get(wishListPage.responsiveElements.firstItemSellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(wishListPage.responsiveElements.firstItemSellerHref()).click().wait(3000)
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
        cy.visit('https://staging.extra.ge/wishlist').wait(3000)
        cy.get(wishListPage.responsiveElements.firstItemRemoveButton()).click()
    });
    
    it('Case 6: Basket-ის card-იდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.scrollTo(0, 1000, { duration: 1000 })
        cy.get(homePage.responsiveElements.addFirstItemToCartButton()).click().wait(2000)
        cy.visit('/basket').wait(2000)
        cy.get(basketPage.responsiveElements.firstItemMerchantHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(basketPage.responsiveElements.firstItemMerchantHref()).click()
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
        basketApi.emptyBasket()

    });
    it('Case 7: Basket-ში ბოლოს ნანახი პროდუქტის ქარდიდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.visit('/basket').wait(2000)
        cy.scrollTo(0, 500, { duration: 1000 })
        cy.get(basketPage.responsiveElements.firstInLastOfViewerItemsMerchantHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(basketPage.responsiveElements.firstInLastOfViewerItemsMerchantHref()).click().wait(2000)
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
    });

    it('Case 8: Checkout-ზე პროდუქტების card-ებიდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.scrollTo(0, 1000, { duration: 3000 })
        cy.wait(3000)
        cy.get(homePage.responsiveElements.addFirstItemToCartButton()).click().wait(1000)
        cy.visit('/basket')
        cy.contains(' შეკვეთა ', {timeout: 6000})
        cy.scrollTo(0, 200)
        cy.get(basketPage.responsiveElements.continueShoppingButton()).click().wait(2000)
        cy.scrollTo(0, 1600, { duration: 3000 })
        cy.get(checkoutPage.elements.mobileCheckoutProductSellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(checkoutPage.elements.mobileCheckoutProductSellerHref()).click().wait(2000)
                cy.location('pathname', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
        basketApi.emptyBasket()
    });

    it('Case 9: თუ შედარების გვერდი ცარიელია შემოთავაზებული აითემების ქარდიდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.visit('/comparison')
        cy.get(myPage.whiteElements.whiteEmptyComparison(), {timeout: 10000})
        cy.scrollTo(0, 200, { duration: 1000 })
        cy.get(myPage.offerOfTheDayItemsResponsive.firstItemSellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.wait(2000)
                cy.get(myPage.offerOfTheDayItemsResponsive.firstItemSellerHref()).click()
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 400, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards()).should('have.length.at.least', 1)
    });

    it('Case 10: timed deals-ის სექციის card-ებიდან', () => {
        cy.get(homePage.dealsResponsiveElements.openTimedDealsPageButton(), { timeout: 10000 })
        cy.scrollTo(0, 500, { duration: 2000 })
        cy.get(homePage.dealsResponsiveElements.firstItemSellerHref()).invoke('attr', 'href')
            .then(($sellerHref) => {
                cy.get(homePage.dealsResponsiveElements.firstItemSellerHref()).click().wait(3000)
                cy.location('pathname').should('eq', $sellerHref)
            })
        cy.scrollTo(0, 500, { duration: 1000 })
        cy.get(merchantPage.elements.appProductCards())
            .should('have.length.at.least', 1)
    });
})