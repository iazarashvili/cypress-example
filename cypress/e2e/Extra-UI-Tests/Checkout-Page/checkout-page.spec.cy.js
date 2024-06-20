import homePage from "../../../support/pages/homePage"
import productDetailPage from "../../../support/pages/productDetailPage"
import checkoutPage from "../../../support/pages/checkoutPage"

describe("ჩექაუთ გვერდი მიმღების პერსონალური მონაცემების შემოწმება. 1920 X 1080 რეზოლუცია", () => {
  beforeEach('First steps', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.scrollTo(0, 200)
    cy.get(homePage.timedDealsElements.firstItemName()).click()
    cy.wait(3000)
    cy.get(productDetailPage.elements.buyNowButton()).click()
    cy.get('title:eq(0)').invoke('text').should('equal', 'ეს ერთი და სხვა მრავალი | Extra.ge')
  })

  it('Case 1: ტექსტი (მიმღები) შემოწმება', () => {
    cy.get(checkoutPage.elements.receiverText())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'მიმღები')
  })

  it('Case 2: ტექსტი (შეიყვანეთ მიმღების პერსონალური ინფორმაცია) შემოწმება', () => {
    cy.get(checkoutPage.elements.receiverPersonalInfoText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'შეიყვანეთ მიმღების პერსონალური ინფორმაცია')
  });

  it('Case 3: სახელის ველის label (სახელი) შემოწმება', () => {
    cy.get(checkoutPage.elementsFromCheckoutPage.firstNameField())
      .should('have.css', 'font-size', '10px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'სახელი')
  });

  it('Case 4: მიმღების სახელის შემოწმება', () => {
    cy.get('[formcontrolname="firstName"] input')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 5: გვარის ველის label (გვარი) შემოწმება', () => {
    cy.get(checkoutPage.elementsFromCheckoutPage.lastNameField())
      .should('have.css', 'font-size', '10px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'გვარი')
  });

  it('Case 6: მიმღების გვარის შემოწმება', () => {
    cy.get(checkoutPage.elements.lastNameField())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 7: მობილური ველის label (მობილური) შემოწმება', () => {
    cy.get(checkoutPage.elementsFromCheckoutPage.phoneNumberField())
      .should('have.css', 'font-size', '10px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'მობილური')
  });

  it('Case 8: მიმღების მობილური ნომრის შემოწმება', () => {
    cy.get('[formcontrolname="phoneNumber"] input')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 9: პირადი ნომრის ველის label ტექსტის (პირადი ნომრი) შემოწმება', () => {
    cy.get(checkoutPage.elementsFromCheckoutPage.personalNumberField())
      .should('have.css', 'font-size', '10px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'პირადი ნომერი')
  });

  it('Case 10: მიმღების პირადი ნომრის შემოწმება', () => {
    cy.get('[formcontrolname="personalNumber"] input')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 14: მომხმარებლის მისამართის შემოწმება', () => {
    cy.get(checkoutPage.elements.addressData())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 15: კომენტარის ველის placeholder ტექსტის (დამატებითი კომენტარი) შემოწმება', () => {
    cy.get('[formcontrolname="comment"]')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.attr', 'placeholder', 'დამატებითი კომენტარი')
  });
})

describe('ჩექაუთ გვერდი გადახდის მეთოდების შემოწმება. 1920 X 1080 რეზოლუციაზე', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.scrollTo(0, 200)
    cy.get(homePage.timedDealsElements.firstItemName()).click()
    cy.wait(3000)
    cy.get(productDetailPage.elements.buyNowButton()).click()
    cy.get('title:eq(0)').invoke('text').should('equal', 'ეს ერთი და სხვა მრავალი | Extra.ge')
  })

  it('Case 1: ტექსტი (გადახდის მეთოდები) შემოწმება', () => {
    cy.get(checkoutPage.elements.paymentOptionsText()).should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'გადახდის მეთოდები')
  });

  it('Case 2: ტექსტი (აირჩიე შენთვის მოსახერხებელი გადახდის მეთოდი და გადაიხადე მარტივად.) შემოწმება', () => {
    cy.get(checkoutPage.elements.paymentOptionText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'აირჩიე შენთვის მოსახერხებელი გადახდის მეთოდი და გადაიხადე მარტივად.')
  });

  it('Case 3: გადახდა ბარათით ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payWithCardText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' ბარათით')

    // ბარათით გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payWitchCardIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'ex-icon')
  });


  it('Case 4: გადახდა ნაწილ ნაწილ ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payLaterText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' გადაიხადე მოგვიანებით')

    // ნაწილ ნაწილ გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payLaterIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
  });

  it('Case 5: განვადებით გადახდა ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payViaInstallment())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' განვადება')

    // განვადება გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payViaInstallmentIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'ex-icon')
  });

  it('Case 6: გადახდა ბალანსით ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payViaBalance())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' ბალანსით')

    // ბალანსით გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payWithBalanceIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'ex-icon')
  });

  it('Case 7: ბალანსის მნიშვნელობის შემოწმება', () => {
    cy.get(checkoutPage.elements.balanceValue())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('have.length.greaterThan', 1)
  });

  it('Case 8: გადახდა Plus და MR ქულებით ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payViaPlusAndMrPoints())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' Plus და MR ქულებით')

    // Plus და MR ქულებით გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payWithPlusAndMrPointsIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.attr', 'src', '../../../../assets/img/icons/card-part-payment.png')
  });

  it('Case 9: გადახდა კურიერთან ტექსტის და აიქონის შეწმოწმება', () => {
    cy.get(checkoutPage.elements.payToCourier())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', ' კურიერთან')

    // კურიერთან გადახდის აიქონის შემოწმება

    cy.get(checkoutPage.elements.payToCourierIcon())
      .should('have.css', 'font-size', '22px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'ex-icon')
  });

})

describe('ჩექაუთ გვერდი პროდუქტები და მიწოდება შემოწმება. 1920 X 1080 რეზოლუციაზე', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.scrollTo(0, 200)
    cy.get(homePage.timedDealsElements.firstItemName()).click()
    cy.wait(3000)
    cy.get(productDetailPage.elements.buyNowButton()).click()
    cy.get('title:eq(0)').invoke('text').should('equal', 'ეს ერთი და სხვა მრავალი | Extra.ge')
    cy.scrollTo(0, 1000, { duration: 1000 })
  })

  it('Case 1: ტექსტი (პროდუქტები და მიწოდება) შემოწმება', () => {
    cy.get(checkoutPage.elements.deliveryMethodText())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'სტანდარტული მიწოდება და პროდუქტები')
  })

  it('Case 2: ტექსტი (მიტანის დრო: ) შემოწმება', () => {
    cy.get(checkoutPage.elements.deliveryTimeText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('include', 'მიტანის დრო:')
  });

  it('Case 3: მიტანის თარიღის ტექსტის შემოწმება რიცხვი და თვე', () => {
    cy.get(checkoutPage.elements.deliveryDateText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').invoke('trim').should('have.length.greaterThan', 1)
  });

  // it('Case 4: ტექსტი (თუ შეუკვეთავთ დღეს, 15:00 საათამდე) შემოწმება', () => {
  //   var data = new Date()
  //   var hour = data.getHours();
  //   if (hour < 15) {
  //     cy.get(checkoutPage.elements.orderBeforeExactTimeText())
  //       .should('have.css', 'font-size', '14px')
  //       .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
  //       .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  //       .invoke('text').should('eq', 'თუ შეუკვეთავთ დღეს, 15:00 საათამდე')
  //   } else {
  //     cy.get(checkoutPage.elements.orderBeforeExactTimeText()).should('not.exist')
  //   }
  // });

  it('Case 4: პროდუქტის სურათზე href ატრიბუტის შემოწმება', function () {
    cy.get(checkoutPage.elements.productImageHref())
      .should('have.attr', 'href').and('include', '/product')
  });

  it('Case 5: პროდუქტის სურათის შემოწმება', () => {
    cy.get(checkoutPage.elements.productImage())
      .should('have.attr', 'src')
      .and('include', 'https://cdn.staging.extra.ge/dyn')
  });

  it('Case 6: პროდუქტის სახელის ტექსტის და href ატრიბუტის შემოწმება', () => {
    cy.get(checkoutPage.elements.productName())
      .should('have.css', 'font-size', '12px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
      .should('have.attr', 'href')
  });

  it('Case 7: პროდუქტის მერჩანტის სახელის შემოწმება', () => {
    cy.get(checkoutPage.elements.merchantNameHref())
      .should('have.attr', 'href')
      .and('not.include', '/seller/null/')
    cy.get(checkoutPage.elements.merchantNameText()).should('have.css', 'font-size', '12px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 8: ტექსტი (ფასი) შემოწმება', () => {
    cy.get(checkoutPage.elements.priceText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'ფასი')
  });

  it('Case 9: პროდუქტის ფასის ტექსტის შემოწმება', () => {
    cy.get(checkoutPage.elements.productPriceText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('include', '₾')
  });
})

describe('შეკვეთის დეტალების შემოწმება', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.scrollTo(0, 200)
    cy.get(homePage.timedDealsElements.firstItemName()).click()
    cy.wait(3000)
    cy.get(productDetailPage.elements.buyNowButton()).click()
    cy.get('title:eq(0)').invoke('text').should('equal', 'ეს ერთი და სხვა მრავალი | Extra.ge')
  })

  it('Case 1: ტექსტი (შეკვეთა) შემოწმება', () => {
    cy.get(checkoutPage.elements.checkoutText())
      .should('have.css', 'font-size', '18px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('include', ' შეკვეთა ')
  });

  it('Case 2: ტექსტი (პროდუქტი) შემოწმება', () => {
    cy.get(checkoutPage.elements.textProduct())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'პროდუქტი (1)')
  });

  it('Case 3: პროდუქტის ფასის ტექსტის შემოწმება', () => {
    cy.get(checkoutPage.elements.priceOfProductsText())
      .should('have.css', 'font-size', '16px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('include', '₾')
  });

  it('Case 4: ტექსტი (მიტანის ღირებულება) შემოწმება', () => {
    cy.get(checkoutPage.elements.priceOfDeliveryText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .invoke('text').should('eq', 'მიტანის ღირებულება:')
  });

  it('Case 5: ტექსტი (სულ თანხა) შემოწმება', () => {
    cy.get(checkoutPage.elements.sumOfPriceText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', ' სულ თანხა:')
  });

  it('Case 6: შეკვეთის დასრულების ღილაკის ტექსტის შემოწმება', () => {
    cy.get(checkoutPage.elements.finishOrderBtnText())
      .should('have.css', 'font-size', '12px')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', 'შეკვეთის დასრულება')
  });

  it('Case 7: შეკვეთის დასრულების ღილაკის შემოწმება', () => {
    cy.get(checkoutPage.elements.finishOrderBtn())
      .should('have.css', 'transition-duration', '0.3s')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(122, 29, 255)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'height', '48px')
      .and('have.css', 'margin-top', '16px')
      .and('have.css', 'cursor', 'pointer')
  });

  it('Case 8: ტექსტი (გაქვთ პრომო კოდი?) შემოწმება', () => {
    cy.get(checkoutPage.elements.haveAPromoCodeText())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(0, 0, 0)')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .invoke('text').should('eq', ' გაქვთ პრომო კოდი? ')

  });
})