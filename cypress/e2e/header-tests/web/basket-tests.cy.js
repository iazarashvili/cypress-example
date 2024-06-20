import { basketApi } from "../../../support/Extra-API/basketAPI";
import { baseHelper } from "../../../support/Helpers/baseHelper";
import homePage from "../../../support/pages/homePage";
import { basketPageHelper } from '../../../support/Helpers/basketHelper'
import itemDetailPage from "../../../support/pages/productDetailPage";
import productDetailPage from "../../../support/pages/productDetailPage";

context('არაავტორიზებული მომხმარებლით, resolution 1920 x 1080', () => {
    describe('კალათის ფუნქციონალის ტესტირება', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            cy.authorization()
            baseHelper.openSiteFromWeb()
        })

        it('Case 1: პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.scroolToTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('Case 2: პროდუქტის კალათში დამატება მთავარი გვერდის პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('Case 3: ორი განსხვავებული პროდუქტის დამატება, მთავარი გვერდის სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.addItemToCartAndCheck(homePage.elements.addSecondItemToCartButton(), 2)
            baseHelper.openBasket()
            basketPageHelper.checkTotalPrice(2)
        });

        it.only('Case 4: პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            baseHelper.addItemToCartAndCheck(productDetailPage.elements.addItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(itemDetailPage.elements.itemPrice(), itemDetailPage.elements.itemName())
            basketPageHelper.checkTotalPrice(1)
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })
})
 


context('ავტორიზებული მომხმარებლით. resolution 1920 x 1080', () => {
    describe('კალათის ფუნქციონალის ტესტირება', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            cy.viewport(1920, 1080)
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
            baseHelper.openSiteFromWeb()
        })

        it('Case 1: პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.scroolToTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('Case 2: პროდუქტის კალათში დამატება მთავარი გვერდი პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('Case 3: პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            baseHelper.addItemToCartAndCheck(productDetailPage.elements.addItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(itemDetailPage.elements.itemPrice(), itemDetailPage.elements.itemName())
            basketPageHelper.checkTotalPrice(1)
        });

        it('Case 4: ორი განსხვავებული პროდუქტის დამატება, მთავარი გვერდის სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.addItemToCartAndCheck(homePage.elements.addSecondItemToCartButton(), 2)
            baseHelper.openBasket()
            basketPageHelper.checkTotalPrice(2)
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })


})