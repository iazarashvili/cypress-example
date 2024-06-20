const productDetailPage = require("../../../support/pages/productDetailPage")
import { checkPartnerBanksNames, checkPartnerBankImages, detailPageTimerTextCheck } from "../../../support/Helpers/productDetailPageHelper"

describe('პროდუქტის დეტალური გვერდის შემოწმება', () => {
  beforeEach('Preconditions', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('product_detail_page_url'))
    cy.wait(1000)
  })

  it('Case 1: კატეგორიის ხის შემოწმება', () => {
    cy.get(productDetailPage.elements.firstCategoryTreeHrefAttr())
      .invoke('attr', 'href').should('include', '/catalog/')
    cy.get(productDetailPage.elements.firstCategoryTreeNameText())
      .invoke('text').should('have.lengthOf.at.least', 1)

    cy.get(productDetailPage.elements.secondCategoryTreeHrefAttr())
      .invoke('attr', 'href').should('include', '/catalog/')
    cy.get(productDetailPage.elements.secondCategoryTreeNameText())
      .invoke('text').should('have.lengthOf.at.least', 1)

    cy.get(productDetailPage.elements.thirdCategoryTreeHrefAttr())
      .invoke('attr', 'href').should('include', '/catalog/')
    cy.get(productDetailPage.elements.thirdCategoryTreeNameText())
      .invoke('text').should('have.lengthOf.at.least', 1)
  });

  it('Case 2: პროდუქტის აიდის ტექსტი ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(productDetailPage.elements.itemId())
      .should('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('have.lengthOf.at.least', 1)
  });

  it('Case 3: პროდუქტის სახელის ტექსტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.itemName())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '28px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('have.lengthOf.at.least', 1)
  });

  it('Case 4: მომწოდებლის სახელის ტექსტის: ფერი ზომა და ფონტის შემოწმება', () => {
    cy.get(productDetailPage.elements.textSupplier())
      .should('have.css', 'color', 'rgba(43, 39, 49, 0.6)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'მომწოდებელი:')

    cy.get(productDetailPage.elements.supplierName())
      .should('have.css', 'color', 'rgb(0, 68, 187)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('have.lengthOf.at.least', 1)
  });

  it('Case 5: მომწოდებლის სახელზე დაკლიკებით გადავდივარ სწორ გვერდზე', () => {
    cy.get(productDetailPage.elements.supplierName())
      .invoke('attr', 'href').then(($hrefAttr) => {
        cy.get(productDetailPage.elements.supplierName()).click()
        cy.wait(2000)
        cy.location('pathname').should('eq', $hrefAttr)
      })
  });

  it('Case 6: გამყიდველის სახელის ტექსტის: ფერი ზომა და ფონტის შემოწმება', () => {
    cy.get(productDetailPage.elements.textSeller())
      .should('have.css', 'color', 'rgba(43, 39, 49, 0.6)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'გამყიდველი:')

    cy.get(productDetailPage.elements.sellerName())
      .should('have.css', 'color', 'rgb(0, 68, 187)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('have.lengthOf.at.least', 1)

  });

  it('Case 7: გამყიდველის სახელზე დაკლიკებით გადავდივარ სწორ გვერდზე', () => {
    cy.get(productDetailPage.elements.sellerName())
      .invoke('attr', 'href').then(($hrefAttr) => {
        cy.get(productDetailPage.elements.sellerName()).click()
        cy.wait(2000)
        cy.location('pathname').should('eq', $hrefAttr)
      })
  });

  it('Case 8: ტექსტი (მოკლე აღწერა:) ფონტის ფერი ზომა და ფონტის შემოწმება', () => {
    cy.get(productDetailPage.elements.textShortDescription())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'მოკლე აღწერა:')
  });

  it('Case 9: პროდუქტის აღწერის ტექსტის ფერი ზომა და ფონტის შემოწმება', () => {
    cy.get(productDetailPage.elements.productShortDescriptionText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 9: პროდუქტის ფასის ტექსტის ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.itemPrice())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '28px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
  });

  it('Case 10: შედარებაში დამატების აიქონის შემოწმება', () => {
    cy.get(productDetailPage.elements.compareItemButton())
      .should('have.css', 'font-size', '24px')
      .and('have.css', 'font-family', 'ex-icon')
      .and('have.css', 'font-style', 'normal')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'cursor', 'pointer')
  });

  it('Case 11: wishlist-ში დამატების აიქონის შემოწმება', () => {
    cy.get(productDetailPage.elements.addItemToWishlist())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'cursor', 'pointer')
  });

  it('Case 12: განვადების ტექსტის და აიქონის შემოწმება', () => {
    cy.get(productDetailPage.elements.monthlyPaymentBuyInstallmentText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('include', '₾-დან თვეში')

    cy.get(productDetailPage.elements.monthlyPaymentBuyInstallmentIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'min-height', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'min-width', '16px')
      .and('have.css', 'width', '16px')
  });

  it('Case 13: ტექსტი (საუკეთესო ფასის გარანტია) ფერი, ფონტი, ზომის და მისი აიქონის შემოწმება', () => {
    cy.get(productDetailPage.elements.bestPriceGuaranteeText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'საუკეთესო ფასის გარანტია')

    cy.get(productDetailPage.elements.bestPriceIcon())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '22px')
      .and('have.css', 'min-height', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'width', '24px')
  });

  it('Case 14: ტექსტი (რაოდენობა) ფერი ფონტი და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.textQuantity())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
      .invoke('text').should('eq', 'რაოდენობა')
  });

  it('Case 15: რაოდენობის გაზრდის შემცირების და რაოდენობის მაჩვენებლის შემოწმება', () => {
    cy.get(productDetailPage.elements.decreaseQuantityButton())
      .should('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
      .and('have.css', 'font-size', '22px')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'min-height', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'font-family', 'ex-icon')

    cy.get(productDetailPage.elements.increaseQuantityButton())
      .should('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
      .and('have.css', 'font-size', '22px')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'min-height', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'font-family', 'ex-icon')

    cy.get(productDetailPage.elements.addItemCount()).should('exist')
  });

  it('Case 16: ღილაკი და ტექსტი (ყიდვა) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.buyNowButton())
      .should('have.css', 'background-color', 'rgb(122, 29, 255)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'width', '300px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'cursor', 'pointer')

    cy.get(productDetailPage.elements.buyNowButtonText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'cursor', 'pointer')

  });

  it('Case 17: ღილაკი და ტექსტი (განვადებით ყიდვა) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.buyInstallmentButton())
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'width', '300px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'cursor', 'pointer')

    cy.get(productDetailPage.elements.buyInstallmentButtonText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(122, 29, 255)')
      .and('have.css', 'cursor', 'pointer')
  });

  it('Case 18: ღილაკი, კალათის აიქონის და ტექსტი (კალათში დამატება) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.addItemToCartButton())
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'width', '300px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'cursor', 'pointer')

    cy.get(productDetailPage.elements.addItemToCartButtonText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(122, 29, 255)')
      .and('have.css', 'cursor', 'pointer')

    cy.get(productDetailPage.elements.addItemToCartButtonIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'font-style', 'normal')
      .and('have.css', 'min-width', '24px')
      .and('have.css', 'width', '24px')
      .and('have.css', 'min-height', '24px')
      .and('have.css', 'height', '24px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
  });

  it('Case 19: ტექსტი (ტელეფონით ყიდვა) და ტელეფონის ნომრის ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.buyBuPhoneText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'ტელეფონით ყიდვა')

    cy.get(productDetailPage.elements.buyBuPhoneNumberText())
      .should('have.css', 'color', 'rgb(0, 68, 187)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', '032 2 333 111')

    cy.get(productDetailPage.elements.buyBuPhoneNumberIcon())
      .should('have.css', 'font-size', '20px')
      .and('have.css', 'font-style', 'normal')
      .and('have.css', 'min-width', '16px')
      .and('have.css', 'width', '16px')
      .and('have.css', 'min-height', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
  });

  it('Case 20: ტექსტი (პროდუქტის შესახებ) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.fromProductText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '24px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'პროდუქტის შესახებ')

  });

  it('Case 21: ტექსტი (ბრენდი:) ფონტი, ფერი, ზომა და მისი მნიშვნელობის შემოწმება ', () => {
    cy.scrollTo(0, 500, { duration: 1000 })
    cy.contains(productDetailPage.elements.brandText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('eq', 'ბრენდი:')
  });

  it('Case 22: ტექსტი (მოდელი:) ფონტი, ფერი, ზომა და მისი მნიშვნელობის შემოწმება ', () => {
    cy.scrollTo(0, 500, { duration: 1000 })
    cy.contains(productDetailPage.elements.modelText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('eq', 'მოდელი:')
  });

  it('Case 23: ტექსტი (ძირითადი მახასიათებლები) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.scrollTo(0, 500, { duration: 1000 })
    cy.get(productDetailPage.elements.mainFeaturesText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'გარანტია')
  });

  it('Case 24: ტექსტი (მსგავსი პროდუქტები) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.scrollTo(0, 4000, { duration: 4000 }).wait(1000)
    cy.get(productDetailPage.elements.similarProducts())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '24px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'მსგავსი პროდუქტები')
  });
})

describe('განვადების აიქონზე დაკლიკებით გახსნილი პოპაპის შემოწმება', () => {
  beforeEach('First settings', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('product_detail_page_url'))
    cy.wait(1000)
    cy.get(productDetailPage.elements.installmentPopupIcon()).click()
    cy.wait(1000)
  })

  it('Case 1: ტექსტი (განვადების პირობები) ფონტი ზომა და ფერის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.TermsOfInstallmentsText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'განვადების პირობები')
  });

  it('Case 2: ტექსტი (Extra.ge-ის პარტნიორი ბანკები) ფონტი ზომა და ფერის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.extraPartnerBanksText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'Extra.ge-ის პარტნიორი ბანკები')
  });

  it('Case 3: ტექსტი (შენს შერჩეულ პროდუქტს extra.ge-ზე 5 ბანკის განვადებით შეიძენ:) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.purchasedByBankInstallmentsText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('eq', 'შენს შერჩეულ პროდუქტს extra.ge-ზე 4 ბანკის განვადებით შეიძენ:')
  });

  it('Casee 4: ტექსტი (საქართველოს ბანკი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
    checkPartnerBanksNames(productDetailPage.installmentPopup.georgianBankText(), 'საქართველოს ბანკი')
    checkPartnerBankImages(productDetailPage.installmentPopup.georgianBankIcon())
  });

  it('Casee 5: ტექსტი (თიბისი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
    checkPartnerBanksNames(productDetailPage.installmentPopup.tbcBankText(), 'თიბისი')
    checkPartnerBankImages(productDetailPage.installmentPopup.tbcBankIcon())
  });

  it('Casee 6: ტექსტი (კრედო) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
    checkPartnerBanksNames(productDetailPage.installmentPopup.credoBanText(), 'კრედო')
    checkPartnerBankImages(productDetailPage.installmentPopup.credoBankIcon())
  });

  it('Casee 7: ტექსტი (ტერაბანკი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
    checkPartnerBanksNames(productDetailPage.installmentPopup.teraBankText(), 'ტერაბანკი')
    checkPartnerBankImages(productDetailPage.installmentPopup.teraBankIcon())
  });

  it('Case 8: ტექსტი (განვადების საუკეთესო პირობები) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.theBestTermsInstallmentsText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'განვადების საუკეთესო პირობები')
  });

  it('Case 9: ტექსტი (გადაანაწილე თანხა და გადაიხადე ნივთის ღირებულება გაძვირების გარეშე. ) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.infoDivideTheAmountText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('eq', 'გადაანაწილე თანხა და გადაიხადე ნივთის ღირებულება გაძვირების გარეშე. ')
  });

  it('Case 10: ტექსტი ( 0-დან 6 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე.) და ინფოს ფონტის, ფერის, ზომის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.infoGeorgianTbcBankPercentBoldText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'საქართველოს ბანკი, თიბისი ბანკი, კრედო ბანკი:')

    cy.get(productDetailPage.installmentPopup.infoGeorgianTbcBankPercentText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('eq', 'საქართველოს ბანკი, თიბისი ბანკი, კრედო ბანკი: 0-დან 6 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე.')
  });

  it('Csae 11: ტექსტის (სფეისი) და ინფოს ფონტის, ფერის, ზომის შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.spaceText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'სფეისი:')

    cy.get(productDetailPage.installmentPopup.infoSpaceText())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').and('include', ' 0-დან 3 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე. ')
  });

  it('Case 12: ღილაკის (განვადებით ყიდვა) შემოწმება', () => {
    cy.get(productDetailPage.installmentPopup.buyingInstallmentButton())
      .should('have.css', 'background-color', 'rgb(122, 29, 255)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'width', '448px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'cursor', 'pointer')

    cy.get(productDetailPage.installmentPopup.buyingInstallmentButtonText())
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('include', 'განვადებით ყიდვა')
  });
})


import { checkInfoFromSeller, checkSellerRealDataText } from "../../../support/Helpers/productDetailPageHelper"

describe('გამყიდველის აიქონზე დაკლიკებით გახსნილი პოპაპის შემოწმება', () => {
  beforeEach('First settings', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('product_detail_page_url'))
    cy.wait(1000)
    cy.get(productDetailPage.elements.sellerHelpIcon()).click().wait(1000)
  })

  it('Case 1: ტექსტი (გამყიდველის ინფორმაცია) ფონტის ფერის და ზომის გადამოწმება', () => {
    cy.get(productDetailPage.sellerInfoPopup.sellerInfoText())
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'გამყიდველის ინფორმაცია')
  })

  it('Case 2: ტექსტი (იურიდიული დასახელება) და (სს "ექსტრა არეა") ფონტი ფერი ზომის შემოწმება ', () => {
    checkInfoFromSeller(productDetailPage.sellerInfoPopup.legalNameText(), 'იურიდიული დასახელება')
    checkSellerRealDataText(productDetailPage.sellerInfoPopup.infoLegalNameText(), 'სს "ექსტრა არეა"')
  });

  it('Case 3: ტექსტი (საიდენტიფიკაციო) და (402129763) ფონტი ფერი ზომის შემოწმება ', () => {
    checkInfoFromSeller(productDetailPage.sellerInfoPopup.identificationText(), 'საიდენტიფიკაციო')
    checkSellerRealDataText(productDetailPage.sellerInfoPopup.infoIdentificationText(), '402129763')
  });

  it('Case 4: ტექსტი (მისამართი) და (თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, N 41) ფონტი ფერი ზომის შემოწმება ', () => {
    checkInfoFromSeller(productDetailPage.sellerInfoPopup.addressText(), 'მისამართი')
    checkSellerRealDataText(productDetailPage.sellerInfoPopup.infoAddressText(), 'თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, N 41')
  });

  it('Case 5: ტექსტი (ტელეფონი) და (0322 333 111) ფონტი ფერი ზომის შემოწმება ', () => {
    checkInfoFromSeller(productDetailPage.sellerInfoPopup.phoneText(), 'ტელეფონი')
    checkSellerRealDataText(productDetailPage.sellerInfoPopup.infoPhoneText(), '0322 333 111')
  });
})


describe('პროდუქტის დეტალური გვერდს შემოწმება თუ აქვს ფასდაკლება', () => {
  beforeEach('', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('discount_product_detail_page_url')).wait(2000)
  })

  it('Case 1: ფასდაკლებული ფასის შემოწმება ფერი ფონტი ზომა', () => {
    cy.get(productDetailPage.elements.discountedItemPrice())
      .should('have.css', 'font-size', '28px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .invoke('text').should('include', '₾')
  });

  it('Case 2: ფასდაკლებამდე ფასის შემოწმება ფონტი ფერი და ზომა', () => {
    cy.get(productDetailPage.elements.beforeDiscountedItemPrice())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'text-decoration-line', 'line-through')
  });

  it('Case 3: ფასდაკლების ბეიჯის შემოწმება ფონტი ფერი და ზომა', () => {
    cy.get(productDetailPage.elements.discountPriceBadge())
      .should('have.css', 'padding', '4px')
      .and('have.css', 'background-color', 'rgb(241, 45, 45)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'min-width', '48px')

    cy.get(productDetailPage.elements.discountPriceBadgeText())
      .should('have.css', 'font-size', '12px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'min-width', 'auto')
      .invoke('text').should('include', '%')
  });
})


describe('პროდუქტის დეტალური გვერდი შემოწმება თუ აქვს ტაიმერი', () => {
  beforeEach('', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('timer_product_detail_page_url')).wait(2000)
  })

  it('Case 1: ტაიმერის ფონის ფერის შემოწმება', () => {
    cy.get(productDetailPage.elements.timerElement())
      .should('have.css', 'display', 'flex')
      .and('have.css', 'border-color', 'rgb(250, 59, 155)')
      .and('have.css', 'border-width', '1px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'width', '496px')
  });

  it('Case 2: ტაიმერის ტექსტის (დღის შეთავაზება) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.get(productDetailPage.elements.offerOfTheDayText())
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'დღის შეთავაზება')
  });

  it('Case 3: ტაიმერის დღის რაოდენობის ტექსტის ფონტი ზომა ფერი შემოწმება', () => {
    detailPageTimerTextCheck(productDetailPage.elements.timerDayCountText())
  });

  it('Case 4: ტაიმერის ტექსტის (დღე) ფონტი ზომა ფერის შემოწმება', () => {
    detailPageTimerTextCheck(productDetailPage.elements.timerTextDay())
  });

  it('Case 5: ტაიმერის ტექსტის დარჩენილი დროის საათის ფონტის ზომა ფერის შემოწმება', () => {
    detailPageTimerTextCheck(productDetailPage.elements.timerTimeText())
  });
})


describe('პროდუქტის დეტალური გვერდი შემოწმება თუ აქვს ფერი და ზომა', () => {
  beforeEach('', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit(Cypress.env('color_size_product_detail_page_url')).wait(2000)
  })

  it('Case 1: ტექსტი (ფერი) ფონტი ზომა ფერის შემოწმება', () => {
    cy.get(productDetailPage.elements.textColor())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'ფერი:')

  });

  it('Case 2: ფერის მაჩვენებლის შემოწმება', () => {
    cy.get(productDetailPage.elements.productColor())
      .should('have.attr', 'style', 'background-color: rgb(53, 100, 172);')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'min-width', '34px')
      .and('have.css', 'width', '34px')
      .and('have.css', 'height', '34px')
  });

  it('Case 3: ტექსტი (ზომა) ფონტი ზომა ფერის შემოწმება', () => {
    cy.get(productDetailPage.elements.textSize())
      .should('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').and('eq', 'ზომა:')
  });

  it('Case 4: ზომის მაჩვენებლის შემოწმება', () => {
    cy.get(productDetailPage.elements.productSize())
      .should('have.css', 'border-color', 'rgb(122, 29, 255)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'min-width', '40px')
      .and('have.css', 'width', '40px')
      .and('have.css', 'height', '40px')
      .and('have.css', 'border-width', '2px')
  });
})


