import homePage from "../../../../support/pages/homePage";
import { baseHelper } from "../../../../support/Helpers/baseHelper"
import basketPage from "../../../../support/pages/basketPage"
import checkoutPage from "../../../../support/pages/checkoutPage"
import { basketApi } from "../../../../support/Extra-API/basketAPI"
import { checkoutPageHelpers } from "../../../../support/Helpers/checkoutPageHelpers";
import productDetailPage from "../../../../support/pages/productDetailPage";
import header from "../../../../support/pages/header";



describe('პროდუქტის შეძენა კალათიდან, ყველა გადახდის მეთოდით', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        cy.scroolToFirstSet()
        baseHelper.addItemToCartAndGetBasket(homePage.elements.firstItemPrice(),
            basketPage.elements.firstItemPrice(),
            homePage.elements.firstItemName(),
            homePage.elements.addFirstItemToCartButton())
        cy.get(basketPage.elements.continueShoppingButton()).click({ force: true })
        cy.url('').should('eq', Cypress.env('checkout_page_url'))
    })

    it('Case 1: შეძენა ბარათით', () => {
        checkoutPage.getIpay().click()
        cy.get(checkoutPage.elements.newCardText()).should('be.visible')
        cy.get(checkoutPage.elements.wantToRememberCardText()).should('be.visible')
        checkoutPageHelpers.checkTotalAmount()
        cy.intercept('POST', Cypress.env('api_ordering_url_inter')).as('orders')
        checkoutPage.getEndOrderButton().click({ force: true })
        cy.wait('@orders').its('response').then((response) => {
            expect(response.statusCode).to.be.eq(200)
            expect(response.body.externalId).not.be.null
        })
    })

    it('Case 2: გადაიხადე მოგვიანებით (საქ ბანკი)', () => {
        checkoutPage.getPaylater().click()
        cy.get(checkoutPage.elements.priceInParts()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
        cy.intercept('POST', Cypress.env('api_ordering_url_inter')).as('orders')
        checkoutPage.getEndOrderButton().click({ force: true })
    })

    it('Case 3: შეძენა საქართველოს ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
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
        checkoutPage.getInstallmentTbc().click()
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })

    it('Case 6: შეძენა ტერა ბანკის განვადებით', () => {
        checkoutPage.getInstallment().click()
        cy.scrollTo(0, 300, {duration: 300})
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
        checkoutPage.getPlusPoints().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 9: შეძენა კურიერთან გადახდით', () => {
        cy.scrollTo(0, 400, {duration: 500})
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 10: გადაიხადე მოგვიანებით (თიბისი)', () => {
        checkoutPage.getPaylater().click()
        cy.get(checkoutPage.elements.payLaterTbc(), { timeout: 7000 }).click()
        cy.get(checkoutPage.elements.priceInParts()).should('be.visible')
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
        cy.intercept('POST', Cypress.env('api_ordering_url_inter')).as('orders')
        checkoutPage.getEndOrderButton().click({ force: true })
    })

})



describe('ვამატებთ პროდუქტს კალათში და ვყიდულობთ სხვა პროდუქტს დეტალური გვერდიდან', () => {
    beforeEach('First steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        cy.scroolToFirstSet()
        cy.get(homePage.elements.addFirstItemToCartButton()).click()
        cy.get(header.elements.basketItemCount()).invoke('text', ' 1')
    })

    it('Case 1: შეძენა (ყიდვა) ღილაკით', () => {
        cy.priceParsing(homePage.elements.firstItemPrice()).then((firstItemPrice) => {
            cy.priceParsing(homePage.elements.secondItemPrice()).then((secondItemPrice) => {
                cy.get(homePage.elements.secondItemCard()).click()
                cy.url('').should('include', Cypress.env('detail_page_url'))
                cy.get(productDetailPage.elements.fromProductText()).invoke('text').should('eq', 'პროდუქტის შესახებ')
                cy.get(productDetailPage.elements.buyNowButton()).click({ force: true })
                cy.url('').should('include', Cypress.env('checkout_page_url'))
                cy.wait(2000)
                cy.priceParsing(checkoutPage.elements.productPrice()).then((itemsTotalPrice) => {
                    expect(firstItemPrice).not.be.eq(itemsTotalPrice)
                    expect(secondItemPrice).to.be.eq(itemsTotalPrice)
                })
            })
        })
        cy.scrollTo(0, 400, {duration: 500})
        checkoutPage.getCourier().click()
        checkoutPageHelpers.checkTotalAmount()
    })

    it('Case 2: შეძენა (განვადებით ყიდვა) ღილაკით', () => {
        cy.priceParsing(homePage.elements.firstItemPrice()).then((firstItemPrice) => {
            cy.priceParsing(homePage.elements.secondItemPrice()).then((secondItemPrice) => {
                cy.get(homePage.elements.secondItemCard()).click()
                cy.url('').should('include', Cypress.env('detail_page_url'))
                cy.get(productDetailPage.elements.fromProductText()).invoke('text').should('eq', 'პროდუქტის შესახებ')
                cy.get(productDetailPage.elements.buyInstallmentButton()).click({ force: true })
                cy.url('').should('include', Cypress.env('checkout_page_url'))
                cy.get(checkoutPage.elements.georgianBankText()).invoke('text')
                    .should('eq', 'საქართველოს ბანკი')
                cy.wait(2000)
                cy.priceParsing(checkoutPage.elements.productPrice()).then((itemsTotalPrice) => {
                    expect(firstItemPrice).not.be.eq(itemsTotalPrice)
                    expect(secondItemPrice).to.be.eq(itemsTotalPrice)
                })
            })
        })
        checkoutPageHelpers.checkTotalAmountWhitInstallments()
    })
})