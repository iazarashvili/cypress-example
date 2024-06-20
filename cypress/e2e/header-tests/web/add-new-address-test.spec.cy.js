import addNewAddressPage from "../../../support/pages/addNewAddressPage";
import header from "../../../support/pages/header";
import homePage from "../../../support/pages/homePage"
import {addAddressPage} from '../../../support/Helpers/userAddressPage'

describe('test', () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('ThirdCorrectEmail'), Cypress.env('ThirdCorrectPassword'))
        cy.navigateToProfileAddressPageMobile()
        cy.contains('ბალანსი', {timeout: 10000})
        cy.get(addNewAddressPage.elements.addAddressButtonText()).click()
    })

    it('Case 1: მისამართის დამატება ვალიდური მონაცემებით და შემდეგ წაშლა', () => {
        addAddressPage.selectCity()
        cy.get('[aria-label="რუკის მონაცემები"]', {timeout: 10000})
        cy.wait(2000)
        cy.get(addNewAddressPage.elements.addressInputField()).type("მერაბ კოსტავას ქუჩა")
        cy.get(addNewAddressPage.elements.selectAddressInAddressList(), {timeout: 10000})
        cy.get(addNewAddressPage.elements.selectAddressInAddressList()).click({force: true})
        cy.get('button[disabled]').should('not.exist')
        cy.get(addNewAddressPage.elements.popupAddAddressButton()).click().wait(1000)
        cy.get(addNewAddressPage.elements.moreDotsButton()).click()
        cy.get(addNewAddressPage.elements.removeAddressButton()).click()
        cy.get(addNewAddressPage.elements.confirmRemoveAddressButton()).click()
    })

    it('Case 2: მისამართის შენახვა ცარიელი "ქალაქის" და "მისამართის" ველით "', () => {
        cy.get(addNewAddressPage.elements.popupAddAddressButton())
            .should('have.class', 'sm:_x_inline _x_hidden')
    })

    it('Case 3: მისამართის შენახვა ცარიელი "მისამართის" ველით"', () => {
        addAddressPage.selectCity()
        cy.get(addNewAddressPage.elements.popupAddAddressButton())
            .should('have.class', 'sm:_x_inline _x_hidden')
    })

    it('Case 4: მისამართის შენახვა არავალიდური "მისამართით" ', () => {
        addAddressPage.selectCity()
        cy.get(addNewAddressPage.elements.addressInputField()).type('არავალიდური მისამართი')
        cy.get(addNewAddressPage.elements.popupAddAddressButton())
            .should('have.class', 'sm:_x_inline _x_hidden')
    })
})

describe('მისამართის დამატება მთავარი გვერდიდან', () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('ThirdCorrectEmail'), Cypress.env('ThirdCorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 6000})
        cy.get(header.elements.addnewAddressButton()).click()
    })

    it('Case 1: მისამართის დამატება მთავარი გვერდიდან და შემოწმება', () => {
        cy.get('app-address-form p:eq(0)', {timeout: 6000})
        addAddressPage.selectCity()
        cy.get('[aria-label="რუკის მონაცემები"]', {timeout: 10000})
        cy.wait(2000)
        cy.get(addNewAddressPage.elements.addressInputField()).type("მერაბ კოსტავას ქუჩა")
        cy.get(addNewAddressPage.elements.selectAddressInAddressList(), {timeout: 10000})
        cy.get(addNewAddressPage.elements.selectAddressInAddressList()).click({force: true})
        cy.get('button[disabled]').should('not.exist')
        cy.get(homePage.addressPopupElements.addAddressButton()).click()
        cy.wait(4000)
        cy.get(header.elements.addnewAddressButton()).invoke('text').should('include', 'მერაბ კოსტავას ქუჩა').wait(2000)
        cy.get(header.elements.addnewAddressButton()).click()
        cy.wait(2000)
        cy.get(homePage.addressPopupElements.addresText()).invoke('text').should('include', 'მერაბ კოსტავას ქუჩა')
        cy.get(homePage.addressPopupElements.removeAddressButton()).click()
        cy.get(homePage.addressPopupElements.confirmRemoveAddressButton()).click()
        cy.get(homePage.addressPopupElements.addresText()).should('not.exist')

    });
})