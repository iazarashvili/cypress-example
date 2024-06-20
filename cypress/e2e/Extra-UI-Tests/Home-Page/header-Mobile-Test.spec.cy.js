import homePage from "../../../support/pages/homePage"
import header from "../../../support/pages/header"

describe('ჰედერის შემოწმება', () => {
  beforeEach('First steps', () => {
    cy.viewport("iphone-x")
    cy.authorization()
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
  })

  it('Case 1: ლოგოს extra.ge შემოწმება', () => {
    cy.get(header.elements.extraHeaderLogo())
      .should('have.attr', 'src', '../assets/atomic-assets/img/logo/black-logo.svg')
  })

  it('Case 2: ღილაკი კატალოგის შემოწმება', () => {
    // catalog button
    cy.get(header.elements.catalogButton())
      .should('have.css', 'cursor', 'pointer')
    // burger icon
    cy.get(header.elements.catalogButtonBurgerIcon())
      .should('have.class', '_x_icon-burger')
    // catalog button text
    cy.get(header.elements.catalogButtonText())
      .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(22, 30, 63)')
      .and('have.css', 'font-size', '14px')
  })

  it('Case 3: სერჩის ველის შემოწმება', () => {
    cy.get(header.elements.searchInputField())
      .should('have.attr', 'placeholder', 'მოძებნე რაც გაგიხარდება')

    cy.get(header.elements.searchIconCamera())
      .should('have.class', '_x_icon-camera')
    cy.get(header.elements.searchIconSearch())
      .should('have.class', '_x_icon-search')
  })

  it('Case 4: ტექსტი (შენახული) და გულის აიქონის შემოწმება', () => {
    // check text (შენახული)
    cy.get(header.elements.wishListSavedText())
      .should('have.css', 'font-size', '12px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text')
      .should('eq', 'შენახული')

    // check heart icon
    cy.get(header.elements.wishlistHeartIcon())
      .should('have.class', '_x_icon-love-favorite-heart')
  })

  it('Case 5: ტექსტი (კალათა) და კალათის აიქონის შემოწმება', () => {
    // Basket text 
    cy.get(header.elements.basketText())
      .should('have.css', 'font-size', '12px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text')
      .should('eq', 'კალათა')

    // Basket icon
    cy.get(header.elements.basketIcon())
      .should('have.class', '_x_icon-cart-bucket')
  })

  it('Case 6: ღილაკი (შესვლა) შემოწმება', () => {
    // Sign in button text
    cy.get(header.elements.signInButtonText())
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text')
      .should('eq', 'შესვლა')
    // Sign in button icon
    cy.get(header.elements.signInButtonIcon())
      .should('have.class', '_x_icon-user-profile-1')
  })

  it('Case 7: ტექსტი (შედარება) და მისი აიქონის შემოწმება', () => {
    cy.get(header.elements.comparisonText())
      .should('have.css', 'font-size', '12px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'cursor', 'pointer')

    cy.get(header.elements.comparisonIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'min-height', '24px')
      .and('have.css', 'max-height', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'cursor', 'pointer')

    cy.get(header.elements.comparisonHref())
      .invoke('prop', 'href').should('include', '/comparison')
    cy.get(header.elements.comparisonIcon()).click().wait(1000)
    cy.location('pathname').should('eq', '/comparison')
  });
})

