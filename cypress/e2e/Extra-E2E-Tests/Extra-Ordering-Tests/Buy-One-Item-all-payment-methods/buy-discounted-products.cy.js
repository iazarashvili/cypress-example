import homePage from "../../../../support/pages/homePage";
import { baseHelper } from "../../../../support/Helpers/baseHelper"
import basketPage from "../../../../support/pages/basketPage"
import checkoutPage from "../../../../support/pages/checkoutPage"
import { basketApi } from "../../../../support/Extra-API/basketAPI"
import { checkoutPageHelpers } from "../../../../support/Helpers/checkoutPageHelpers";

describe(' ფასდაკლებული პროდუქტის შეძენა კალათიდან, ყველა გადახდის მეთოდით', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        cy.scrollToTimedDeals()
        baseHelper.addItemToCartAndGetBasket(homePage.timedDealsElements.firstItemDiscountedPrice(),
            basketPage.elements.firstItemDiscountedPrice(),
            homePage.timedDealsElements.firstItemName(),
            homePage.timedDealsElements.addFirstItemToCartButton())
        cy.get(basketPage.elements.continueShoppingButton()).click()
    })

    it('Case 1: შეძენა ბარათით', () => {
        checkoutPage.getIpay().click()
        cy.get(checkoutPage.elements.newCardText()).should('be.visible')
        cy.get(checkoutPage.elements.wantToRememberCardText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 2: შეძენა გადაიხადე მოგვიანებით', () => {
        checkoutPage.getPaylater().click()
        cy.get(checkoutPage.elements.priceInParts()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 3: შეძენა საქართველოს ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
        cy.wait(1000)
        cy.get(checkoutPage.elements.georgianBankText()).invoke('text')
            .should('eq', 'საქართველოს ბანკი')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 4: შეძენა კრედო ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.credoBanText()).invoke('text')
            .should('eq', 'კრედო')
        checkoutPage.getInstallmentCredo().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 5: შეძენა თიბისი ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
        cy.get(checkoutPage.elements.tbcBankText()).invoke('text')
            .should('eq', 'თიბისი')
        cy.scrollTo(0, 400)
        checkoutPage.getInstallmentTbc().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 6: შეძენა ტერა ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
        cy.scrollTo(0, 200)
        cy.get(checkoutPage.elements.teraBankText()).invoke('text')
            .should('eq', 'ტერაბანკი')
        checkoutPage.getInstallmentTera().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 7: ბალანსით გადახდა', () => {
        checkoutPage.getBalance().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 8: პლიუს ქულებით გადახდა', () => {
        cy.scrollTo(0, 400)
        checkoutPage.getPlusPoints().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 9: შეძენა კურიერთან გადახდით', () => {
        cy.wait(2000)
        cy.scrollTo(0, 400,{duration: 200})
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
        checkoutPage.getEndOrderButton().click()
        cy.contains('ნომრის დადასტურება')
    })
})