
import checkoutPage from "../pages/checkoutPage"

export class CheckoutPageHelpers {

  checkTotalAmountWhitInstallments() {
    cy.get(checkoutPage.elements.deliveryPrice()).invoke('text').invoke('trim').then((deliveryPrice) => {
      if (deliveryPrice === 'უფასო') {
        cy.priceParsing(checkoutPage.elements.productPriceIfDeliveryPriceIsFree()).then((itemPrice) => {
          cy.priceParsing(checkoutPage.elements.totalPrice()).then((totalPrice) => {
            cy.priceParsing(checkoutPage.elements.priceInParts()).then((priceInParts) => {
              expect(totalPrice).to.be.eq(itemPrice)
              expect(totalPrice).to.be.eq(priceInParts, 'სულ თანხა: და ფასი განვადებით ტოლია')
            })
          })
        })
      } else {
        cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPrice) => {
          cy.priceParsing(checkoutPage.elements.deliveryPrice()).then((deliveryPrice) => {
            cy.priceParsing(checkoutPage.elements.totalPrice()).then((totalPrice) => {
              cy.priceParsing(checkoutPage.elements.priceInParts()).then((priceInParts) => {
                expect(totalPrice).to.be.eq(itemPrice + deliveryPrice)
                expect(totalPrice).to.be.eq(priceInParts, 'სულ თანხა: და ფასი განვადებით ტოლია')
              })
            })
          })
        })
      }
    })
  }


  checkTotalAmount() {
    cy.get(checkoutPage.elements.deliveryPrice()).invoke('text').invoke('trim').then((deliveryPrice) => {
      if (deliveryPrice === 'უფასო') {
        cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPrice) => {
          cy.priceParsing(checkoutPage.elements.totalPrice()).then((totalPrice) => {
            expect(totalPrice).to.be.eq(itemPrice)
          })
        })
      } else {
        cy.priceParsing(checkoutPage.elements.productPrice()).then((itemPrice) => {
          cy.priceParsing(checkoutPage.elements.deliveryPrice()).then((deliveryPrice) => {
            cy.priceParsing(checkoutPage.elements.totalPrice()).then((totalPrice) => {
              expect(totalPrice).to.be.eq(itemPrice + deliveryPrice)
            })
          })
        })
      }
    })
  }
}

export const checkoutPageHelpers = new CheckoutPageHelpers()