import { basketApi } from "../../../support/Extra-API/basketAPI";
import { baseHelper } from "../../../support/Helpers/baseHelper";
import homePage from "../../../support/pages/homePage";
import { basketPageHelper } from '../../../support/Helpers/basketHelper'
import itemDetailPage from "../../../support/pages/productDetailPage";

context('არაავტორიზებული მომხმარებლით, resolution 315 x 812', () => {
    describe('კალათის ფუნქციონალის ტესტირება', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            cy.authorization()
            baseHelper.openSiteFromMobile()
        })

        it('Case 1: პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.responsiveScroolTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.addFirstItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('Case 2: პროდუქტის კალათში დამატება მთავარი გვერდის პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('Case 3: ორი განსხვავებული პროდუქტის დამატება, მთავარი გვერდის სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.addItemToCartAndCheck(homePage.elements.addSecondItemToCartButton(), 2)
            cy.scrollTo('top')
            baseHelper.openBasket()
            basketPageHelper.checkTotalPrice(2)
        });

        it('Case 4: პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.scrollTo(0, 1200, { duration: 1000 })
            baseHelper.addItemToCartAndCheck(itemDetailPage.responsiveElements.addItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(itemDetailPage.responsiveElements.itemPrice(), itemDetailPage.responsiveElements.itemName())
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })
})


context('ავტორიზებული მომხმარებლით. resolution 315 x 812', () => {
    describe('კალათის ფუნქციონალის ტესტირება', () => {
        beforeEach('', () => {
            cy.viewport('iphone-x')
            basketApi.emptyBasket()
            cy.mobileSessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            baseHelper.openSiteFromMobile()
        })

        it('Case 1: პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.responsiveScroolTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.addFirstItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), 
                homePage.timedDealsElements.firstItemName())
        });

        it('Case 2: პროდუქტის კალათში დამატება მთავარი გვერდი პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('Case 3: პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.scrollTo(0, 1200, { duration: 1000 })
            baseHelper.addItemToCartAndCheck(itemDetailPage.responsiveElements.addItemToCartButton(), 1)
            cy.scrollTo('top')
            basketPageHelper.checkAddedProductToBasket(itemDetailPage.responsiveElements.itemPrice(), itemDetailPage.responsiveElements.itemName())
        });

        it('Case 4: ორი განსხვავებული პროდუქტის დამატება, მთავარი გვერდის სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            cy.scrollTo('top').wait(1000)
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addSecondItemToCartButton(), 2)
            cy.scrollTo('top').wait(1000)
            baseHelper.openBasket()
            basketPageHelper.checkTotalPrice(2)
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })
})