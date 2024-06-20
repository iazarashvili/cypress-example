class productDetailPage {
  elements = {
    firstCategoryTreeHrefAttr: () => 'a[class="_x_flex _x_items-center ng-star-inserted"]:eq(0)',
    secondCategoryTreeHrefAttr: () => 'a[class="_x_flex _x_items-center ng-star-inserted"]:eq(1)',
    thirdCategoryTreeHrefAttr: () => 'a[class="_x_flex _x_items-center ng-star-inserted"]:eq(2)',

    firstCategoryTreeNameText: () => 'a[class="_x_flex _x_items-center ng-star-inserted"] span:eq(0)',
    secondCategoryTreeNameText: () => 'a[class="_x_flex _x_items-center ng-star-inserted"] span:eq(1)',
    thirdCategoryTreeNameText: () => 'a[class="_x_flex _x_items-center ng-star-inserted"] span:eq(2)',

    lastViewedItemSellerHref: () => 'app-product-card a._x_mb-5:eq(0)',

    itemId: () => 'section span._x_text-dark-500',
    itemName: () => 'h1._x_text-5:eq(1)',
    textSupplier: () => 'div._x_mt-4 p._x_mr-2:eq(2)',
    supplierName: () => '._x_text-link-blue:eq(3)',
    supplierHrefAttr: () => '[class="md:_x_flex _x_flex-col _x_mb-10 _x_hidden"] a._x_text-link-blue:eq(0)',
    textSeller: () => 'div._x_mt-4 p._x_mr-2:eq(3)',
    sellerName: () => 'div._x_mt-4 a:eq(3)',
    sellerHelpIcon: () => 'button i._x_cursor-pointer._x_icon-help:eq(1)',
    textShortDescription: () => 'section span[class="_x_text-4 _x_font-bold _x_text-dark ng-star-inserted"]',
    productShortDescriptionText: () => '[class="_x_overflow-hidden"] div p', 

    itemPrice: () => 'div span._x_text-10:eq(1)',
    compareItemButton: () => 'button[class="_x_min-h-12 _x_max-h-12"] ._x_icon-Compare',
    addItemToWishlist: () => '[class="_x_flex _x_gap-8 _x_items-center"] svg',
    
    monthlyPaymentBuyInstallmentText: () => '[class="_x_flex _x_items-center"] span._x_leading-10',
    monthlyPaymentBuyInstallmentIcon: () => 'a._x_ml-3 i:eq(1)',
    bestPriceGuaranteeText: () => '[class="_x_font-medium _x_text-dark _x_text-3"]:eq(1)',
    bestPriceIcon: () => 'div._x_mr-6 i._x_icon-bestprice:eq(1)',
    bestPriceHelpIcon: () => 'a._x_ml-6 i._x_icon-help:eq(1)',
    textQuantity: () => 'p[class="_x_text-3 _x_font-semibold _x_text-dark"]:eq(1)',
    decreaseQuantityButton: () => '._x_icon-minus:eq(1)',
    increaseQuantityButton: () => '._x_icon-plus:eq(2)',
    addItemCount: () => '[type="text"][thousandseparator=","]:eq(1)',

    buyNowButton: () => '#buy-instant-desktop',  
    buyNowButtonText: () => '#buy-instant-desktop-text',
    buyInstallmentButton: () => '#buy-installment-desktop',
    buyInstallmentButtonText: () => '#buy-installment-desktop-text',  

    addItemToCartButton: () => '#AddToCart-detailed-desktop-button',
    addItemToCartButtonText: () => '#AddToCart-detailed-desktop-text',
    addItemToCartButtonIcon: () => '#AddToCart-detailed-desktop-icon',

    buyBuPhoneText: () => 'span[class="_x_text-3 _x_mb-1 _x_text-dark _x_font-bold"]:eq(1)',
    buyBuPhoneNumberText: () => 'a[href="tel:0322333111"] span._x_link-blue:eq(1)',
    buyBuPhoneNumberIcon: () => 'a._x_text-link-blue i._x_icon-call',

    fromProductText: () => 'div h2',
    brandText: () => 'ბრენდი:',
    modelText: () => 'მოდელი:',
    mainFeaturesText: () => 'span[class="_x_text-5 _x_text-black _x_font-bold _x_mb-10"]:eq(0)',

    //! მსგავსი პროდუქტების სეტი
    similarProducts: () => '._x_color-dark',
    firstSimilarProductPrice: () => '#productPrice_0',
    firstSimilarProductName: () => '#productTitle_0',
    firstSimilarItemAddToCartButton: () => '#AddToCart-card-button-0',
    addSimilarItemToWishListButton: () => '[id="addWishList_0"]',

    //! -----------------------------------
    discountedItemPrice: () => "._x_block  span._x_opacity-100:eq(1)",
    beforeDiscountedItemPrice: () => '[class="_x_flex _x_items-center"] span._x_text-5:eq(1)',
    discountPriceBadge: () => 'div._x_min-w-24:eq(1)',
    discountPriceBadgeText: () => '[class="_x_font-bold _x_text-2 _x_text-white _x_whitespace-nowrap"]:eq(1)',

    // Timer

    timerElement: () => 'section ._x_border-pink',
    offerOfTheDayText: () => "section p._x_text-white:eq(0)",
    timerDayCountText: () => 'section p._x_text-red span:eq(0)',
    timerTextDay: () => 'section p._x_text-red span:eq(1)',
    timerTimeText: () => 'section p._x_text-red span:eq(2)',

    textColor: () => 'section span._x_text-4:eq(1)',
    productColor: () => "div._x_flex div._x_min-w-17",

    textSize: () => 'section span._x_text-4:eq(2)',
    productSize: () => 'div[class="_x_flex _x_flex-wrap"] div',

    installmentPopupIcon: () => '._x_ml-3 i[id="forOpenContent"]:eq(1)',

  };

  installmentPopup = {
    TermsOfInstallmentsText: () => 'app-detailed-installment-popup p._x_font-bold:eq(0)',
    extraPartnerBanksText: () => 'p[class="_x_font-bold _x_text-4 md:_x_text-5 _x_text-black _x_mb-10"]',
    purchasedByBankInstallmentsText: () => 'p[class="_x_text-3 _x_font-medium _x_text-dark _x_mb-12 _x_text-left"]',
    georgianBankText: () => '.category-custom-scroll-bar div p:eq(0)',
    georgianBankIcon: () => '.category-custom-scroll-bar div img:eq(0)',
    tbcBankText: () => '.category-custom-scroll-bar div p:eq(1)',
    tbcBankIcon: () => '.category-custom-scroll-bar div img:eq(1)',
    credoBanText: () => '.category-custom-scroll-bar div p:eq(2)',
    credoBankIcon: () => '.category-custom-scroll-bar div img:eq(2)',
    teraBankText: () => '.category-custom-scroll-bar div p:eq(3)',
    teraBankIcon: () => '.category-custom-scroll-bar div img:eq(3)',
    spaceBankText: () => '.category-custom-scroll-bar div p:eq(4)',
    spaceBankIcon: () => '.category-custom-scroll-bar div img:eq(4)',
    theBestTermsInstallmentsText: () => '[class="_x_font-bold _x_text-4 _x_text-black _x_mb-10 _x_text-left"]',
    infoDivideTheAmountText: () => 'p[class="_x_text-3 _x_font-medium _x_text-dark _x_text-left _x_mb-10"]:eq(0)',
    infoGeorgianTbcBankPercentBoldText: () => 'p[class="_x_text-3 _x_font-medium _x_text-dark _x_text-left _x_mb-10"] span',
    infoGeorgianTbcBankPercentText: () => 'p[class="_x_text-3 _x_font-medium _x_text-dark _x_text-left _x_mb-10"]:eq(1)',
    spaceText: () => '[class="_x_text-3 _x_font-medium _x_text-dark _x_text-left"] span',
    infoSpaceText: () => '[class="_x_text-3 _x_font-medium _x_text-dark _x_text-left"]',
    buyingInstallmentButton: () => '#buy-installment-popup',
    buyingInstallmentButtonText: () => '#buy-installment-popup-text',

  };

  sellerInfoPopup = {
    sellerInfoText: () => 'app-seller-info-popup p[class="_x_font-bold _x_text-5"]',
    
    legalNameText: () => 'app-seller-info-popup p._x_font-medium:eq(0)',
    infoLegalNameText: () => 'app-seller-info-popup p._x_font-semibold:eq(0)',
    identificationText: () => 'app-seller-info-popup p._x_font-medium:eq(1)',
    infoIdentificationText: () => 'app-seller-info-popup p._x_font-semibold:eq(1)',
    addressText: () => 'app-seller-info-popup p._x_font-medium:eq(2)',
    infoAddressText: () => 'app-seller-info-popup p._x_font-semibold:eq(2)',
    phoneText: () => 'app-seller-info-popup p._x_font-medium:eq(3)',
    infoPhoneText: () => 'app-seller-info-popup p._x_font-semibold:eq(3)',
  }

  responsiveElements = {
    addItemToCartButton: () => '#AddToCart-detailed-mobile-button',
    sellerHref: () => 'app-dashboard a._x_text-link-blue:eq(0)',
    firstItemLastOfViewProducts: () => 'app-product-card a._x_mb-5:eq(0)',
    itemPrice: () => 'div._x_flex span._x_text-10:eq(0)',
    itemName: () => 'div._x_flex h1._x_break-words:eq(0)',

  };
}

module.exports = new productDetailPage();
