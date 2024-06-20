import addNewAddressPage from "../../../../support/pages/addNewAddressPage"

describe('მომხმარებლის მისამართების გვერდის შემოწმებ მისამართის გარეშე', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('ThirdCorrectEmail'), Cypress.env('ThirdCorrectPassword'))
    cy.visit('').wait(3000)
    cy.navigateToProfileAddressPage()
  })
  it('Case 1: ტექსტი მისამართები - ის ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.deliveryAddressTitle())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'მისამართები')
  });

  it('Case 2: ტექსტი (თქვენ არ გაქვთ დამატებული მიტანის მისამართი) - ის ფონტის ფერის და ზომის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.youDontHaveDeliveryAddressText())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.6)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'თქვენ არ გაქვთ დამატებული მიტანის მისამართი')
  })

  it('Case 3: მისამართის დამატების ღილაკის და ღილაკის ტექსტი ( მისამართის დამატება ) ფონტის ფერის და ზომის შემოწმება', () => {
    // პლიუს ნიშნის შემოწმება ღილაკზე

    cy.get(addNewAddressPage.elements.addAddressButtonPlusIcon())
      .should('have.class', '_x_inline-block _x_text-7 _x_cursor-pointer _x_icon-plus _x_transform _x_rotate-90 _x_mr-4')

    // ღილაკის ტექსტის შემოწმება

    cy.get(addNewAddressPage.elements.addAddressButtonText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', ' მისამართის დამატება ')
  });
})

describe('მისამართის გვერდი. მისამართის პოპაპის შემოწმება', () => {
  beforeEach('Firsts Settings', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('authUserName'), Cypress.env('authPassword'), Cypress.env('ThirdCorrectEmail'), Cypress.env('ThirdCorrectPassword'))
    cy.navigateToProfileAddressPage()
    cy.wait(2000)
    cy.get(addNewAddressPage.elements.addAddressButtonText()).click()
  })
  it('Case 1: მისამართის დამატების პოპაპის ტექსტი (მიტანის მისამართის) ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.popupDeliveryAddressText())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'მიტანის მისამართი')
  });

  it('Case 3: მისამართის დამატების პოპაპის (აირჩიე ქალაქი) dropdown-ის ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.selectCityPlaceHolderText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'აირჩიე ქალაქი')
  });

  it('Case 4: მისამართის დამატების პოპაპის placehoder ტექსტის ( მისამართი ) ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.addressPopupText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' მისამართი ')
  });

  it('Case 5: მისამართის დამატების პოპაპის placeholder ტექსტის (სადარბაზო, სართული, ბინა, ა.შ) ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.popupAddressAdditionalInfo())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('attr', 'placeHolder').should('eq', 'სადარბაზო, სართული, ბინა, ა.შ')
  });

  it('Case 6: მისამართის დამატების პოპაპის placehoder ტექსტის ( აირჩიე მისამართი მონიშვნით ) ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.selectAddressTickingText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
      .invoke('text').should('eq', 'აირჩიე მისამართი მონიშვნით')
  });

  it('Case 7: მისამართის დამატების პოპაპის checkBox - ის ტექსტი ( ძირითად მისამართად მონიშვნა ) ფერის ზომის და ფონტის შემოწმება', () => {
    cy.get(addNewAddressPage.elements.primaryAddressCheckBox())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.attr', 'for', 'isDefaultCheckbox')
      .invoke('text').should('eq', ' ძირითად მისამართად მონიშვნა ')
  });

  it('Case 8: მისამართის დამატების პოპაპის ღილაკის ტექსტის ( მისამართის დამატება ) ფერის ზომის და ფონტის შემოწმება', () => {
      cy.get(addNewAddressPage.elements.popupAddAddressButtonText())
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').should('eq', ' მისამართის ')
  });
})