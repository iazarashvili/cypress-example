
import homePage from '../../../support/pages/homePage'
import loginForm from "../../../support/pages/loginForm";
import basketPage from "../../../support/pages/basketPage";
import { baseHelper } from "../../../support/Helpers/baseHelper";
import productDetailPage from "../../../support/pages/productDetailPage";
import header from '../../../support/pages/header';

context("Smoke Tests", () => {
    describe('ფიზიკური ტიპის ავტორიზაცია', () => {
        beforeEach('First steps', () => {
            cy.viewport(1920, 1080)
            cy.authorization()
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        })

        it('Case 1: მეილით ავტორიზაცია', () => {
            cy.get(header.elements.signInButton()).click()
            cy.get(loginForm.elements.usernameInput()).type(Cypress.env('CorrectEmail'))
            cy.get(loginForm.elements.passwordInput()).type(Cypress.env('CorrectPassword'))
            cy.get(loginForm.elements.formSignInButton()).click()
            whiteAuthorization()
        });

        it('Case 2: ტელეფონის ნომრით ავტორიზაცია', () => {
            cy.get(header.elements.signInButton()).click()
            cy.get(loginForm.elements.usernameInput()).type(Cypress.env('mobileNumber'))
            cy.get(loginForm.elements.passwordInput()).type(Cypress.env('password'))
            cy.get(loginForm.elements.formSignInButton()).click()
            whiteAuthorization()
        });

        it('Case 3: ბასკეტიდან ჩექაუთ გვერდზე გადასვლის დროს ავტორიზაცია', () => {
            addItemAndGetBasket()
            cy.get(basketPage.elements.continueShoppingButton()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        });

        it('Case 4: ავტორიზაცია პროდუქტის დეტალურიდან ჩექაუთზე გადასვლის დროს', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.get(productDetailPage.elements.buyNowButtonText()).click()
            baseHelper.authorizationBeforePurchase(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        });
    })

    describe('იურიდიული პირის ავტორიზაცია', () => {
        beforeEach('First Steps', () => {
            cy.viewport(1920, 1080)
            cy.authorization()
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        })
        it('Case 1: ავტორიზაცია მეილით', () => {
            signInLegalUserAndCheckIt(Cypress.env('legalMail'), Cypress.env('password'))
        });

        it('Case 2: ავტორიზაცია ტელეფონის ნომრით', () => {
            signInLegalUserAndCheckIt(Cypress.env('mobileNumber'), Cypress.env('password'))
        });
    })
})

function addItemAndGetBasket() {
    cy.scroolToFirstSet()
    cy.get(homePage.elements.addFirstItemToCartButton()).click()
    cy.get(homePage.elements.addItemToCardPopupText(), { timeout: 10000 })
    cy.get(header.elements.basketButton()).click()
}

function signInLegalUserAndCheckIt(usserName, password) {
    cy.get(header.elements.signInButton()).click()
    cy.get(loginForm.elements.legalEntity()).click()
    cy.get(loginForm.elements.usernameInput()).type(usserName)
    cy.get(loginForm.elements.passwordInput()).type(password)
    cy.get(loginForm.legalElements.signInButton()).click()
    cy.get(homePage.whiteElements.whiteLegalProfileFigure(), { timeout: 10000 })
    cy.contains('შესვლა').should('not.exist')
}

function whiteAuthorization() {
    cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
    cy.contains('შესვლა').should('not.exist')
}
