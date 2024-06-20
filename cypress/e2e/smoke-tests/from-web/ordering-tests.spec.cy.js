import homePage from '../../../support/pages/homePage.js'
import { basketApi } from '../../../support/Extra-API/basketAPI'
import basketPage from '../../../support/pages/basketPage'
import checkoutPage from '../../../support/pages/checkoutPage'
import iframes from '../../../support/pages/iframes'
import { baseHelper } from '../../../support/Helpers/baseHelper'
import { checkoutPageHelpers } from '../../../support/helpers/checkoutPageHelpers.js'
import expressMarketPage from '../../../support/pages/expressMarketPage'
import productDetailPage from '../../../support/pages/productDetailPage'
import expressProductsPage from '../../../support/pages/expressProductsPage'
import expressPage from '../../../support/pages/expressPage'


    describe('შეკვეთის დადება ავტორიზებული მომხმარებლით თბილისი', function () {
        beforeEach('First Steps', function () {
            basketApi.emptyBasket()
            cy.viewport(1920, 1080)
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.visit('')
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.openBasket()
            getCheckoutPage()
        })

        it('Case 1: ბარათით გადახდა', function () {
            checkoutPage.getIpay().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        });

        it('Case 2: გადაიხადე მოგვიანეებით საქ ბანკი (ნაწილ ნაწილ)', () => {
            checkoutPage.getPaylater().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            checkPartToPartButton()
        });

        it('Case 3: ბალანსით გადახდა', () => {
            checkoutPage.getBalance().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            baseHelper.verificationSuccessFulOrderPlacment()
        });

        it('Case 4: Plus და Mr ქულებით გადახდა', () => {
            checkoutPage.getPlusPoints().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        });

        it('Case 5: კურიერთან გადახდა', () => {
            checkoutPage.getCourier().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            // ! დროებით ვაკომენტარებ 
            // cy.get(successPage.whiteEll.congratulationText(), { timeout: 10000 })
            // successPage.congratulations().invoke('text').invoke('trim')
            //     .should('eq', 'გილოცავ!')
        });

        it('Case 6: გადაიხადე მოგვიანეებით თიბისი ბანკი (განაწილება)', () => {
            checkoutPage.getPaylater().click()
            checkoutPage.getDistribution().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        });
    })


    describe('შეკვეთის დადება განვადებით თბილისი', () => {
        beforeEach('First Steps', () => {
            basketApi.emptyBasket()
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.viewport(1920, 1080)
            cy.visit('')
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.openBasket()
            getCheckoutPage()
        })
        

        it('Case 1: საქართველოს ბანკი', () => {
            checkoutPage.getInstallment().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        });

        it('Case 2: თიბისი ბანკი', () => {
            checkoutPage.getInstallment().click()
            checkoutPage.getInstallmentTbc().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        });

        it('Case 3: კრედო ბანკი', () => {
            checkoutPage.getInstallment().click()
            checkoutPage.getInstallmentCredo().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        })

        it('Case 4: ტერა ბანკი', () => {
            checkoutPage.getInstallment().click()
            checkoutPage.getInstallmentTera().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
        })
    })



context('Smoke Tests', () => {
    describe('შეკვეთის დადება არაავტორიზებული მომხმარებლით', () => {
        beforeEach('First Steps', () => {
            basketApi.emptyBasket()
            cy.viewport(1920, 1080)
            cy.authorization()
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        })

        it('Case 1: კალათიდან ყიდვა', () => {
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            baseHelper.openBasket()
            cy.get(basketPage.elements.continueShoppingButton()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.wait(6000)
            checkoutPage.getBalance().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            baseHelper.verificationSuccessFulOrderPlacment()
        });

        it('Case 2: პროდუქტის დეტალური გვერდიდან ყიდვა', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.get(productDetailPage.elements.buyNowButton()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.wait(6000)
            checkoutPage.getBalance().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            baseHelper.verificationSuccessFulOrderPlacment()
        });

        it('Case 3: პროდუქტის დეტალური გვერდი, განვადებით ყიდვა ღილაკზე დაკლიკებით', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.get(productDetailPage.elements.buyInstallmentButton()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.wait(5000)
            checkoutPageHelpers.checkTotalAmountWhitInstallments()
            checkoutPage.getEndOrderButton().click()
        });

        it('Case 4: პროდუქტის დეტალური გვერდი, განვადების პოპაპიდან გადასვლა', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.get(productDetailPage.elements.compareItemButton(), { timeout: 10000 })
            cy.get(productDetailPage.elements.installmentPopupIcon()).click();
            cy.get(productDetailPage.installmentPopup.buyingInstallmentButton()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.location('pathname').should('eq', '/checkout')
            cy.wait(5000)
            checkoutPageHelpers.checkTotalAmountWhitInstallments()
            checkoutPage.getEndOrderButton().click()
        });
    })
})


context('Smoke Tests', () => {
    describe('ექსპრეს პროდუქტის შეძენა', () => {
        // address 26/28 ვაჟა-ფშაველას გამზირი, თბილისი, საქართველო
        beforeEach('First Steps', () => {
            basketApi.emptyBasket()
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.viewport(1920, 1080)
            cy.visit('')
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
            cy.get(homePage.elements.expressText()).click()
            cy.get(expressPage.elements.marketBanner()).click()
            cy.get(expressMarketPage.elements.firstBanner()).click()
        })

        it('Case 1: ექსპრეს პროდუქტის შეძენა კალათიდან', () => {
            cy.get(expressProductsPage.whiteElements.whiteAddCardButton(), { timeout: 5000 })
            baseHelper.addItemToCartAndCheck(expressProductsPage.elements.addFirstItemToCartButton(), 1)
            baseHelper.openBasket()
            cy.get(basketPage.elements.continueShoppingButton()).click()
            checkoutPage.getBalance().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            baseHelper.verificationSuccessFulOrderPlacment()

        });

        it('Case 2: ექსპრეს პროდუქტის შეძენა დეტალური გვერდიდან', () => {
            cy.get(expressProductsPage.whiteElements.whiteAddCardButton(), { timeout: 5000 })
            baseHelper.openProductDetailPage(expressProductsPage.elements.openFirstItemDetailPage())
            cy.get(productDetailPage.elements.buyNowButton(), { timeout: 10000 }).click()
            checkoutPage.getBalance().click()
            checkoutPageHelpers.checkTotalAmount()
            checkoutPage.getEndOrderButton().click()
            baseHelper.verificationSuccessFulOrderPlacment()
        });
    })
})


function getCheckoutPage() {
    cy.priceParsing(basketPage.elements.totalPrice()).then(($price) => {
        cy.get(basketPage.elements.continueShoppingButton()).click()
        cy.get(checkoutPage.elements.payWitchCardIcon(), { timeout: 10000 })
        cy.priceParsing(checkoutPage.elements.productPrice()).then(($prodPrice) => {
            expect($price).to.be.eq($prodPrice)
        })
    })
}

function checkPartToPartButton() {
    cy.get(iframes.partToPart.modalWrapper()).find(iframes.partToPart.paymentDetailsText())
        .invoke('text').should('eq', 'გადახდის დეტალები')
    cy.get(iframes.partToPart.modalWrapper()).find(iframes.partToPart.thousandUnitsText())
        .invoke('text').should('eq', 'აირჩიე სასურველი ვადა')
}
