import { basketApi } from "../../../../support/Extra-API/basketAPI"
import homePage from "../../../../support/pages/homePage"
import basketPage from "../../../../support/pages/basketPage"
import checkoutPage from "../../../../support/pages/checkoutPage"
import header from "../../../../support/pages/header"
import { checkoutPageHelpers } from "../../../../support/Helpers/checkoutPageHelpers"

describe('ორი განსხვავებული აითემის ყიდვა კალათიდან: ყველა გადახდის მეთოდით', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.scroolToFirstSet()
        
        cy.get(homePage.elements.addFirstItemToCartButton()).click()
        cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
        cy.get(homePage.elements.addSecondItemToCartButton()).click()
        cy.get(header.elements.basketItemCount()).invoke('text')
            .should('eq', ' 2')
        cy.get(header.elements.basketButton()).click()
        cy.url('').should('eq', Cypress.env('basket_page_url'))
    })

    it('Case 1: ბარათით ყიდვა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getIpay().click()
        cy.get(checkoutPage.elements.wantToRememberCardText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 2: გადაიხადე მოგვიანებით', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getPaylater().click()
        cy.get(checkoutPage.elements.payLaterText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
        checkoutPage.getEndOrderButton().click().wait(1000)
        cy.contains(checkoutPage.elements.georgianBankPopup()).should('be.visible')
    })

    it('Case 3: საქართველოს ბანკის განვადებით ყიდვა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.georgianBankText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 4: კრედო ბანკის განვადებით ყიდვაo', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getInstallment().click()
        checkoutPage.getInstallmentCredo().click()
        cy.get(checkoutPage.elements.credoBanText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 5: თიბისი ბანკის განვადებით ყიდვა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.tbcBankText()).should('be.visible')
        checkoutPage.getInstallmentTbc().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })
    
    it('Case 6: ტერა ბანკის განვადებით ყიდვა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getInstallment().click()
        cy.scrollTo(0, 400, {duration: 500})
        cy.get(checkoutPage.elements.teraBankText()).should('be.visible')
        checkoutPage.getInstallmentTera().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 7: ბალანსით გადახდა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getBalance().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 8: Plus და MR ქულებით გადახდა', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getPlusPoints().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 9: კურიერთან გადახდა', () => {
        getCheckoutPageAndValidPrice()
        cy.scrollTo(0, 400, {duration: 500})
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })
})

describe('ორი განსხვავებული ნივთის შეძენა ფასდაკლებით. ყველა გადახდის მეთოდის გამოყენებით', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 6000})
        cy.scrollToDiscountedProducts()

        // add items to cart and get basket
        cy.get(homePage.elements.addFirstDiscountedItemButton()).click()
        cy.get(header.elements.basketItemCount()).invoke('text')
            .should('eq', ' 1')
        cy.get(homePage.elements.addSecondDiscountedItemButton()).click()
        cy.get(header.elements.basketItemCount()).invoke('text')
            .should('eq', ' 2')
        cy.get(header.elements.basketButton()).click()
        cy.url('').should('eq', Cypress.env('basket_page_url'))
        cy.wait(3000)
        cy.get(basketPage.elements.continueShoppingButton()).click()
    })

    it('Case 1: ბარათით გადახდა', () => {
        checkoutPage.getIpay().click()
        cy.get(checkoutPage.elements.wantToRememberCardText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 2: გადაიხადე მოგვიანებით', () => {
        getCheckoutPageAndValidPrice()
        checkoutPage.getPaylater().click()
        cy.get(checkoutPage.elements.payLaterText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
        checkoutPage.getEndOrderButton().click().wait(1000)
        cy.contains(checkoutPage.elements.georgianBankPopup()).should('be.visible')
    })

    it('Case 3: საქართველოს ბანკის განვადებით ყიდვა', () => {
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.georgianBankText()).invoke('text')
        .should('eq', 'საქართველოს ბანკი')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 4: კრედო ბანკის განვადებით ყიდვაo', () => {
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.credoBanText()).invoke('text')
        .should('eq', 'კრედო')
        checkoutPage.getInstallmentCredo().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 5: თიბისი ბანკის განვადებით ყიდვა', () => {
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.tbcBankText()).invoke('text')
        .should('eq', 'თიბისი')
        checkoutPage.getInstallmentTbc().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })
    
    it('Case 6: ტერა ბანკის განვადებით ყიდვა', () => {
        checkoutPage.getInstallment().click()
        cy.scrollTo(0, 400, {duration: 500})
        cy.get(checkoutPage.elements.teraBankText()).invoke('text')
        .should('eq', 'ტერაბანკი')
        checkoutPage.getInstallmentTera().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 7: ბალანსით გადახდა', () => {
        checkoutPage.getBalance().click()
        checkoutPageHelpers.checkTotalAmount()

    })

    it('Case 8: Plus და MR ქულებით გადახდა', () => {
        checkoutPage.getPlusPoints().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 9: კურიერთან გადახდა', () => {
        cy.scrollTo(0, 400, {duration: 500})
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })
})


function getCheckoutPageAndValidPrice() {
    cy.url('').should('eq', Cypress.env('basket_page_url'))
        cy.get(basketPage.elements.myBasketText()).invoke('text')
            .should('eq', ' ჩემი კალათა ')
        cy.get(basketPage.elements.firstItemPrice(), {timeout: 6000})
        cy.get(basketPage.elements.firstItemPrice()).invoke('text').then(($firstPrice) => {
            cy.get(basketPage.elements.secondItemPrice()).invoke('text').then(($secondPrice) => {
                const prodTotalPrice = parseFloat($firstPrice.replace(/[\s₾,]/g, "")) + parseFloat($secondPrice.replace(/[\s₾,]/g, ""))
                cy.get(basketPage.elements.continueShoppingButton()).click()
                cy.url('').should('eq', Cypress.env('checkout_page_url'))
                cy.contains('პროდუქტი (2)', {timeout: 10000})
                cy.get(checkoutPage.elements.productPrice()).invoke('text').then(($totalPriceCheckoutPage) => {
                    expect(parseFloat($totalPriceCheckoutPage.replace(/[\s₾,]/g, ""))).to.be.eq(+prodTotalPrice.toFixed(2))
                })
            })
        })
}
