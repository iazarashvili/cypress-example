
import homePage from "../../../support/pages/homePage"
import merchantPage from "../../../support/pages/merchantPage"
import { merchantPageHelper } from "../../../support/Helpers/merchantPageHelpers"
import { baseHelper } from "../../../support/Helpers/baseHelper"
import resultPage from "../../../support/pages/resultPage"
import { scroolToLastViewedProducts } from '../../../support/Helpers/productDetailPageHelper'
import productDetailPage from "../../../support/pages/productDetailPage"
import wishListPage from "../../../support/pages/wishListPage"
import basketPage from "../../../support/pages/basketPage"
import checkoutPage from "../../../support/pages/checkoutPage"
import comparisonPage from "../../../support/pages/comparsionPage"
import header from "../../../support/pages/header"
import { basketApi } from '../../../support/Extra-API/basketAPI'

describe('მერჩანტის გვერდზე გადასვლის შემოწმება', () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        // cy.get(homePage.whiteElements.whiteDealsTimer())
        cy.wait(3000)
    })

    it('Case 1: timed deals-ის სექციის card-ებიდან', () => {
        cy.scrollTo(0, 300, { duration: 2000 })
        cy.get(homePage.timedDealsElements.firstItemSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(homePage.timedDealsElements.firstItemSellerName()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
        merchantPageHelper.checkCategoryes()
        merchantPageHelper.checkProductsVisibility()
    });

    it('Case 2: Homepage-ის სექციების card-ებიდან', () => {
        baseHelper.scroolToFirstSet()
        cy.get(homePage.elements.firstItemSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(homePage.elements.firstItemSellerName()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
    });
    
    it('Case 3: პროდუქტის result page-ის card-იდან', () => {
        baseHelper.searchAnyItem('ტელეფონი')
        cy.get(resultPage.elements.firstItemHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(resultPage.elements.firstItemSellerName()).click()
                cy.get(merchantPage.elements.addFirstItemToCartButton(), { timeout: 10000 })
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
    });

    it('Case 4: პროდუქტის დეტალური გვერდიდნ', () => {
        cy.scroolToFirstSet()
        baseHelper.openProductDetailPage(homePage.elements.firstItemCard())
        // დასაზუსტებელია დეტალურ გვერდზე მყიდველი გამყიდველი არ ჩანს ზოგ პროდუქტზე
    });

    it('Case 5: პროდუქტის დეტალურ ფეიჯზე მსგავსი პროდუქტების card-ებიდან', () => {
        cy.scroolToFirstSet()
        baseHelper.openProductDetailPage(homePage.elements.firstItemCard())
        scroolToLastViewedProducts()
        cy.get(productDetailPage.elements.lastViewedItemSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(productDetailPage.elements.lastViewedItemSellerHref()).click()
                cy.get(merchantPage.elements.addFirstItemToCartButton(), { timeout: 10000 })
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
    });

    it('Case 6: wishlist-ის card-იდან', () => {
        cy.scroolToFirstSet()
        baseHelper.addItemToWishListAndCheck(homePage.elements.addFirstItemToWishListButton(), 1)
        baseHelper.openWishList()
        cy.get(wishListPage.cardElements.sellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(wishListPage.cardElements.sellerHref()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
        cy.get(header.elements.wishlistHeartIcon()).click().wait(2000)
        cy.get(wishListPage.cardElements.removeFirstItemButton()).click()
    });

    it('Case 7: Basket-ის card-იდან', () => {
        cy.scroolToFirstSet()
        baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
        baseHelper.openBasket()
        cy.get(basketPage.elements.firstItemSellerHref(), { timeout: 10000 }).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(basketPage.elements.firstItemSellerHref()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
        basketApi.emptyBasket()
    });

    it('Case 8: Basket-ში ბოლოს ნანახი პროდუქტის ქარდიდან', () => {
        basketApi.emptyBasket()
        cy.scroolToFirstSet()
        baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
        baseHelper.openBasket()
        cy.get(basketPage.elements.lastViewProductSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(basketPage.elements.lastViewProductSellerHref()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
        basketApi.emptyBasket()
    });

    it('Case 9: Checkout-ზე პროდუქტების card-ებიდან', () => {
        cy.scroolToFirstSet()
        baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
        baseHelper.openBasket()
        cy.get(basketPage.elements.continueShoppingButton()).click().wait(3000)
        cy.scrollTo(0, 600, { duration: 2000 })
        cy.get(checkoutPage.elements.checkoutProductSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(checkoutPage.elements.checkoutProductSellerHref()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
        basketApi.emptyBasket()
    });

    it('Case 10: შედარებაში არსებული პროდუქტის ქარდიდან', () => {
        cy.scroolToFirstSet()
        cy.get(homePage.elements.addSecondItemToComparison()).click()
        cy.get(header.elements.comparisonIcon()).click().wait(3000)
        cy.get(comparisonPage.elements.comparisonPageItemSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(comparisonPage.elements.comparisonPageItemSellerHref(), { timeout: 10000 }).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
        cy.get(header.elements.comparisonIcon()).click()
        cy.get(comparisonPage.elements.removeButton()).click()
    });

    it('Case 11: თუ შედარების გვერდი ცარიელია შემოთავაზებული აითემების ქარდიდან', () => {
        cy.get(header.elements.comparisonIcon()).click().wait(3000)
        cy.get(comparisonPage.offerOfTheDayItems.firstItemSellerHref()).invoke('attr', 'href')
            .then(($hrefAttr) => {
                cy.get(comparisonPage.offerOfTheDayItems.firstItemSellerHref()).click()
                cy.location('pathname').should('eq', $hrefAttr)
            })
            merchantPageHelper.checkCategoryes()
            merchantPageHelper.checkProductsVisibility()
    });
})

