import basketPage from "../pages/basketPage";
import header from "../pages/header";

export class BasketPageHelper {
    
    checkAddedProductToBasket(itemPrice, itemName) {
        cy.get(itemPrice).invoke('text').then(($itemPrice) => {
            cy.get(itemName).invoke('text').invoke('trim').then(($itemName => {
                cy.get(header.elements.basketButton()).click()
                cy.get(basketPage.elements.totalPrice()).invoke('text').then(($totalPrice) => {
                    cy.get(basketPage.elements.firstItemName()).invoke('text').invoke('trim').should('eq', $itemName)
                    expect(parseFloat($itemPrice)).to.eq(parseFloat($totalPrice))
                })
            }))
        })
    }

    checkTotalPrice(itemCount){
        if (itemCount === 2){
            cy.get(basketPage.elements.firstItemPrice()).invoke('text').then(($firstItemPrice) => {
                cy.get(basketPage.elements.secondItemPrice()).invoke('text').then(($secondItemPrice) => {
                    cy.get(basketPage.elements.totalPrice()).invoke('text').then(($totalPrice) => {
                        cy.get('[id="productCount_0"]').invoke('val').then(($itemCount) => {
                            expect((parseFloat($firstItemPrice) + parseFloat($secondItemPrice) * parseInt($itemCount))).eq(parseFloat($totalPrice))
                        })
                    })
                })
            })
        } else{
            cy.get(basketPage.elements.firstItemPrice()).invoke('text').then(($firstItemPrice) => {
                cy.get(basketPage.elements.totalPrice()).invoke('text').then(($totalPrice) => {
                    cy.get('[id="productCount_0"]').invoke('val').then(($itemCount) => {
                        expect(parseFloat($firstItemPrice) * parseInt($itemCount)).eq(parseFloat($totalPrice))
                    })
                })
            })
        }
    }
}

export const basketPageHelper = new BasketPageHelper()