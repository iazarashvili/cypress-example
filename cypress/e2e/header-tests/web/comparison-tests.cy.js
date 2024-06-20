const { baseHelper } = require("../../../support/Helpers/baseHelper")
const homePage = require("../../../support/pages/homePage")
const productDetailPage = require("../../../support/pages/productDetailPage")

describe('შედარების ფუნქციონალის ტესტირება', () => {
    beforeEach('', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
    })

    it('Case 1: პირველი სეტიდან პროდუქტის დამატება შედარებაში', () => {
        baseHelper.scroolToTimedDeals()
        baseHelper.addItemToComparisonPageAndCheck(homePage.timedDealsElements.addFirstItemComparisonPageButton(), 1)
        baseHelper.openComparisonPage()
    });

    it('Case 2: პროდუქტის დამატება შედარებაში დეტალური გვერდიდან', () => {
        baseHelper.scroolToFirstSet()
        baseHelper.openProductDetailPage(homePage.elements.firstItemCard())
        baseHelper.addItemToComparisonPageAndCheck(productDetailPage.elements.compareItemButton(), 1)
    });
})