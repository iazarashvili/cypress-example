import {baseHelper} from '../../../support/Helpers/baseHelper'
import homePage from '../../../support/pages/homePage.js'
import productDetailPage from '../../../support/pages/productDetailPage'
import resultPage from '../../../support/pages/resultPage'
const itemId = '702989'
const expressItemId = '717917'

context('Smoke Tests: სერჩის ქეისები', () => {
    describe('სერჩის ტესტირება', () => {
        beforeEach('First Steps', () => {
            cy.viewport(1920, 1080)
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.visit('')
            cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        })

        it('Case 1: პროდუქტის ძიება სახელით', () => {
            baseHelper.searchAnyItem('ტელეფონი')
        });
    
        it('Case 2: პროდუქტის ძიება აიდით', () => {
            baseHelper.searchAnyItemFromItemId(itemId)
            baseHelper.openProductDetailPage(resultPage.elements.firstItemName())
            cy.get(productDetailPage.elements.itemId()).invoke('text').should('include', itemId)
        });
    
        it('Case 3: ექსპრეს პროდუქტის ძიება აიდით', () => {
            baseHelper.searchAnyItemFromItemId(expressItemId)
            baseHelper.openProductDetailPage(resultPage.elements.firstItemName())
            cy.get(productDetailPage.elements.itemId()).invoke('text').should('include', expressItemId)
        });
    
        it('Case 4: ექსპრეს პროდუქტის ძიება სახელით', () => {
            cy.visit(Cypress.env('express_page_url'))
            baseHelper.searchAnyItem('ავოკადო')
        });
    
        it('Case 5: პროდუქტის ძიება სურათით', () => {
            baseHelper.imageSearch('blenderi.png')
        });
    })
})