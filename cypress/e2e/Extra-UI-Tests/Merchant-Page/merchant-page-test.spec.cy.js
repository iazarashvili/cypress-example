import productDetaulPage from '../../../support/pages/productDetailPage'
import homePage from "../../../support/pages/homePage"
import merchantPage from "../../../support/pages/merchantPage"

describe('მერჩანტის გვერდის შემოწმება', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.authorization()
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.visit(Cypress.env('merchant_page_url'))
    cy.url('').should('eq', Cypress.env('merchant_page_url'))
  })
  it('Case 1: მერჩანტის ლოგოს შემოწმება', () => {
    cy.get(merchantPage.elements.merchantLogo())
      .invoke('attr', 'src')
      .then(($srcText) => {
        expect($srcText.length).be.above(25)
      })
  })

  it('Case 2: მერჩანტის სახელის შემოწმება', () => {
    cy.get(merchantPage.elements.merchantTitle())
      .should('have.css', 'font-size', '16px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  })

  it('Case 3: მერჩანტის პროდუქტების რაოდენობის მაჩვენებლის შემოწმება', () => {
    cy.wait(2000)
    cy.get(merchantPage.elements.productCount())
      .invoke('text').then(($productCount) => {
        let count = $productCount.substring(0, 4)
        expect(parseInt(count)).at.least(0)
      })
  })

  it('Case 4: ტექსტი (ყველა) შემოწმება', () => {
    cy.get(merchantPage.elements.categoryTextAll())
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
  })

  it('Case 5: კატეგორიის ტექსტი (ტექნიკა) შემოწმება', () => {
    cy.get(merchantPage.elements.categoryTextTechnic())
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  })

  it('Case 6: კატეგორის ტექსტი (ოფისი და საკანცელარიო) შემოწმება', () => {
    cy.get(merchantPage.elements.categoryTextOffice())
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').invoke('trim')
      .should('eq', 'ოფისი და საკანცელარიო')
  })

  it('Case 7: დროპ დაუნ ფილტრის ღილაკის შემოწმება', () => {
    cy.get(merchantPage.elements.dropDownButton())
      .should('have.css', 'font-size', '14px')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'ფასდაკლება')
  })

  it('Case 8: დროპ დაუნ ღილაკის აიქონის შემოწმება', () => {
    cy.get(merchantPage.elements.dropDownButtonIcon())
      .should('have.class', '_x_icon-addow-down')
  })
})

describe('მერჩანტის გვერდზე გადასვლა პროდუქტის ქარდიდან და დეტალური გვერდიდან', () => {
  beforeEach('First steps', () => {
    cy.authorization()
  })

  it('Case 1: პროდუქტის ქარდზე მერჩანტის სახელზე კლიკით უნდა გადაგვამისამართოს მერჩანტის გვერდზე', () => {
    cy.get(homePage.productCardElements.sellerHrefAttr())
      .parent('a').invoke('attr', 'href').then((sellerPageUrl) => {
        cy.get(homePage.productCardElements.sellerName()).click()
        cy.location('pathname').should('eq', sellerPageUrl)
      })
    cy.wait(3000)
    cy.scrollTo(0, 300)
    cy.get('app-product-card').should('have.length.at.least', 5)
  });

  it.only('Case 2: პროდუქტის დეტალურ გვერდზე მერჩანტის სახელზე დაკლიკებით უნდა გადაგვამისამართოს მერჩანტის გვერდზე', () => {
    cy.scrollTo(0, 300)
    cy.wait(2000)
    cy.get(homePage.elements.timedDealsFirstItemCard()).click()
    cy.wait(2000)
    cy.get(productDetaulPage.elements.supplierHrefAttr())
      .invoke('attr', 'href').then((sellerUrl) => {
        cy.get(productDetaulPage.elements.supplierName()).click()
        cy.location('pathname').should('eq', sellerUrl)
      })
    cy.wait(3000)
    cy.scrollTo(0, 300)
    cy.get('app-product-card').should('have.length.at.least', 5)
  });
})
