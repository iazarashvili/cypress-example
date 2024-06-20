import merchantPage from "../pages/merchantPage";

export class MerchantPageHelpers {

    checkCategoryes() {
        cy.get(merchantPage.elements.categoryList()).find('li').should('have.length.greaterThan', 1)
        cy.get(merchantPage.elements.categoryList()).find('li:first').should('have.text', ' ყველა ')
    }

    checkProductsVisibility() {
        cy.scrollTo(0, 600, {duration: 2000})
        cy.get(merchantPage.elements.appProductCards()).should('have.length.greaterThan', 1)
    }
}

export const merchantPageHelper = new MerchantPageHelpers()
