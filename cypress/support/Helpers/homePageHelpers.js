import header from "../pages/header"
import homePage from "../pages/homePage"
import resultPage from "../pages/resultPage"

export function checkCategoryNames(index, categoryName) {
    cy.get(homePage.elements.categoryNamesList()).eq(index)
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
        .invoke('text').invoke('trim').should('eq', categoryName)
};

export function searchAnyItemResponsive(searchWord) {
    cy.get(header.responsiveElements.searchInputField()).type(searchWord+'{enter}',)
    cy.get(resultPage.elements.firstItemName()).invoke('text').invoke('toLowerCase')
        .should('include', searchWord, {setTimeout: 10000})
}

export class HomePageHelper {

    white() {
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 }).should('exist')
    }
}

export const homePageHelper = new HomePageHelper()