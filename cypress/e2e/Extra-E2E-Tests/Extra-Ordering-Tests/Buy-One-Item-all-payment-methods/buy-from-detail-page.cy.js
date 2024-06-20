import homePage from "../../../../support/pages/homePage";
import { baseHelper } from "../../../../support/Helpers/baseHelper"
import basketPage from "../../../../support/pages/basketPage"
import checkoutPage from "../../../../support/pages/checkoutPage"
import { basketApi } from "../../../../support/Extra-API/basketAPI"
import { checkoutPageHelpers } from "../../../../support/Helpers/checkoutPageHelpers";
import productDetailPage from "../../../../support/pages/productDetailPage";

describe('პროდუქტის დეტალური გვერდიდან ყიდვა', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('https://staging.extra.ge/product/xiaomi-poco-c40-4gb64gb-global-version-yellow-mobiluri-telefoni/617887')
        cy.wait(3000)
        // cy.scroolToFirstSet()
        // cy.get(homePage.elements.firstItemCard()).click()
        // cy.get(productDetailPage.elements.fromProductText()).should('be.visible', { setTimeout: 3000 })
    })

    it('Case 1: შეძენა (ყიდვა) ღილაკით', () => {
        cy.get(productDetailPage.elements.itemName()).invoke('text').then((itemNameDetailPage) => {
            cy.priceParsing(productDetailPage.elements.itemPrice()).then((itemPriceDetailPage) => {
                cy.url('').should('include', Cypress.env('detail_page_url'))
                cy.get(productDetailPage.elements.fromProductText()).invoke('text').should('eq', 'პროდუქტის შესახებ')
                cy.get(productDetailPage.elements.buyNowButton()).click({ force: true })
                cy.url('').should('include', Cypress.env('checkout_page_url'))
                cy.wait(2000)
                cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPriceCheckoutPage) => {
                    expect(itemPriceCheckoutPage).to.be.eq(itemPriceDetailPage)
                    cy.get(checkoutPage.elements.checkoutProductName()).invoke('text').should('eq', itemNameDetailPage)
                })
            })
        })
        cy.scrollTo(0, 400)
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 2: შეძენა (განვადებით ყიდვა) ღილაკით', () => {
        cy.get(productDetailPage.elements.itemName()).invoke('text').then((itemNameDetailPage) => {
            cy.priceParsing(productDetailPage.elements.itemPrice()).then((itemPriceDetailPage) => {
                cy.url('').should('include', Cypress.env('detail_page_url'))
                cy.get(productDetailPage.elements.fromProductText()).invoke('text').should('eq', 'პროდუქტის შესახებ')
                cy.get(productDetailPage.elements.buyInstallmentButton()).click({ force: true })
                cy.url('').should('include', Cypress.env('checkout_page_url'))
                cy.wait(3000)
                cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPriceCheckoutPage) => {
                    expect(itemPriceCheckoutPage).to.be.eq(itemPriceDetailPage)
                    cy.get(checkoutPage.elements.checkoutProductName()).invoke('text').should('eq', itemNameDetailPage)
                })
            })
        })
        cy.get(checkoutPage.elements.georgianBankText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })
    it('Case 3: პროდუქტის კალათში დამატება და ყიდვა', () => {
        baseHelper.addItemToCartAndGetBasket(productDetailPage.elements.itemPrice(),
            basketPage.elements.firstItemPrice(),
            productDetailPage.elements.itemName(),
            productDetailPage.elements.addItemToCartButton())

        cy.priceParsing(basketPage.elements.totalPrice()).then((itemPriceBasketPage) => {
            cy.get(basketPage.elements.continueShoppingButton()).click()
            cy.url('').should('include', Cypress.env('checkout_page_url'))
            cy.wait(3000)
            cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPriceCheckoutPage) => {
                expect(itemPriceCheckoutPage).to.be.eq(itemPriceBasketPage)
            })
        })
        cy.scrollTo(0, 400)
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 4: განვადების პოპაპით შეძენა', () => {
        cy.get(productDetailPage.elements.installmentPopupIcon()).click()
        cy.get(productDetailPage.installmentPopup.TermsOfInstallmentsText())
            .invoke('text')
            .should('eq', ' განვადების პირობები ')
        cy.get(productDetailPage.installmentPopup.buyingInstallmentButton()).click()
        cy.get(checkoutPage.elements.georgianBankText()).should('be.visible')
        cy.get(checkoutPage.elements.priceInInstallmentsText()).invoke('text')
            .should('eq', 'ფასი განვადებით:')
        cy.wait(2000)
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })
})