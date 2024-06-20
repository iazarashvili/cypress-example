class CheckoutPage {
  elements = {

    // * Order elements

    priceInParts: () => '[class="_x_text-balck _x_text-6 _x_font-bold _x_items-center _x_flex"]:eq(1)',
    productPrice: () => "var._x_text-dark._x_text-4._x_justify-between:eq(1)",
    productPriceIfDeliveryPriceIsFree: () => 'ul._x_list-unstyled li._x_mb-5 var._x_text-dark:eq(1)',
    deliveryPrice: () => 'li var[class="_x_text-3 _x_font-medium _x_not-italic"]:eq(1)',
    totalPrice: () => '[id="totalPrice"]:eq(1)',


    checkoutProductName: () => '[class="_x_flex _x_mb-4"] a',
    productImage: () => 'img[class="_x_max-w-full _x_max-h-full"]',
    productImageHref: () => '[class="_x_flex _x_col-span-12 md:_x_col-span-4"] a._x_w-50',
    productName: () => 'div[class="_x_flex _x_mb-4"] a',
    merchantNameHref: () => 'div._x_pl-10 a._x_text-decoration-none:eq(1)',
    merchantNameText: () => 'div._x_pl-10 span._x_text-2',
    finishOrderBtnText: () => 'button span[class="_x_text-2 _x_font-bold"]:eq(1)',
    finishOrderBtn: () => 'div._x_block button._x_text-white:eq(1)',
    
    // * Order data 

    lastNameField: () => '[formcontrolname="lastName"] input',
    addressData: () => "._x_text-3:eq(11)",
    receiverText: () => "div h4._x_font-bold:eq(0)",
    receiverPersonalInfoText: () => "form span._x_text-3:eq(0)",
    payWithCardText: () => '[class="_x_text-4 _x_font-medium _x_text-black"]:eq(0)',
    balanceValue: () => '[class="404 ng-star-inserted"] div span._x_font-bold',
    productPriceText: () => 'div._x_grid-cols-10 div._x_text-dark:eq(1)',
    textProduct: () => 'ul._x_list-unstyled li span._x_text-dark:eq(2)',
    priceOfProductsText: () => 'ul._x_list-unstyled li var._x_justify-between:eq(1)',
    priceOfDeliveryText: () => '[class="x_text-dark _x_text-3 _x_font-medium"]:eq(1)',
    sumOfPriceText: () => '[class="_x_text-3 _x_font-bold _x_text-black ng-star-inserted"]:eq(1)',

    // * Payment options
    payViaInstallment: () => '[class="_x_text-4 _x_font-medium _x_text-black"]:eq(2)',
    payViaBalance: () => '[class="_x_text-4 _x_font-medium _x_text-black"]:eq(3)',
    payViaPlusAndMrPoints: () => '[class="_x_text-4 _x_font-medium _x_text-black"]:eq(4)',
    payToCourier: () => '[class="_x_text-4 _x_font-medium _x_text-black"]:eq(5)',
    paymentOptionText: () => '._x_gap-10 > :nth-child(4) > ._x_text-3',
    paymentOptionsText: () => 'div h4:eq(2)',
    payWitchCardIcon: () => 'button i._x_icon-card',
    payLaterText: () => ':nth-child(2) > :nth-child(1) > :nth-child(1) > ._x_cursor-pointer > ._x_pb-8 > ._x_text-4',
    payLaterIcon: () => '[alt="გადაიხადე მოგვიანებით"]',
    payViaInstallmentIcon: () => 'button i._x_icon-bank-loan',
    payWithBalanceIcon: () => 'button i._x_icon-wallet',
    payWithPlusAndMrPointsIcon: () => 'i._x_icon img',
    payToCourierIcon: () => 'button i._x_icon-cash',
    payLaterTbc: () => 'part-payment-options li:eq(1)',

    // * Popups
    georgianBankPopup: () => 'აირჩიე სასურველი ვადა',

    // * Delivery

    deliveryMethodText: () => 'div h4._x_font-bold:eq(2)',

    checkoutText: () => '[class="ng-star-inserted"] h2._x_text-4:eq(1)',
    deliveryTimeText: () => '._x_px-6 > ._x_mb-7',
    deliveryDateText: () => '._x_px-6 > ._x_mb-5',

    priceText: () => "._x_grid > :nth-child(3) > ._x_text-3",
    

    // * checkout page valid texts elements

    priceInInstallmentsText: () => '[class="_x_text-3 _x_font-bold _x_text-black ng-star-inserted"]:eq(1)',

    // * Promo code
    haveAPromoCodeText: () => '[class="_x_text-black _x_text-3 _x_font-bold ng-star-inserted"]:eq(1)',


    newCardText: () => 'app-payment-options li p:eq(0)',
    wantToRememberCardText: () => 'app-payment-options li p:eq(1)',

    // * installment banks

    georgianBankText: () => 'app-bank-options div[class="_x_flex _x_items-start"]:eq(0)',
    credoBanText: () => 'app-bank-options div[class="_x_flex _x_items-start"]:eq(1)',
    tbcBankText: () => 'app-bank-options div[class="_x_flex _x_items-start"]:eq(2)',
    teraBankText: () => 'app-bank-options div[class="_x_flex _x_items-start"]:eq(3)',

    // * product elements

    checkoutProductSellerHref: () => 'h2 a:eq(1)',
    mobileCheckoutProductSellerHref: () => '[class="_x_w-full ng-star-inserted"] a._x_outline-none:eq(2)',

  };

  elementsFromCheckoutPage = {
    firstNameField: () => '[formcontrolname="firstName"] label',
    lastNameField: () => '[formcontrolname="lastName"] label',
    phoneNumberField: () => '[formcontrolname="phoneNumber"] label',
    personalNumberField: () => '[formcontrolname="personalNumber"] label',
  };


  getIpay() {
    return cy.contains("ბარათით");
  }

  getEndOrderButton() {
    return cy.get('button span[class="_x_text-2 _x_font-bold"]:eq(1)');
  }

  getBalance() {
    return cy.contains("ბალანსით");
  }

  getPlusPoints() {
    return cy.contains("Plus და MR ქულებით");
  }

  getCourier() {
    return cy.contains("კურიერთან");
  }

  getInstallment() {
    return cy.contains(" განვადება");
  }

  getPaylater() {
    return cy.contains(' გადაიხადე მოგვიანებით');
  }

  getDistribution() {
    return cy.contains('განაწილება');
  }

  getInstallmentCredo() {
    return cy.contains("კრედო");
  }

  getInstallmentTbc() {
    return cy.contains("თიბისი");
  }

  getInstallmentTera() {
    return cy.contains("ტერაბანკი");
  }
}

export default new CheckoutPage();
