class mobileProdactDetailPage {
    elements = {
        //ფასდაკლებული პროდუქტის ტესტ ქეისები
        OfferOfTheDayContainer: () => '._x_flex._x_px-8 > ._x_justify-start > ._x_bg-gradient-to-r',
        OfferOfTheDayText: () => '._x_flex._x_px-8 > ._x_justify-start > ._x_bg-gradient-to-r > ._x_text-white',
        OfferOfTheDayTimer: () => '._x_flex._x_px-8 > ._x_justify-start > ._x_w-full',
        discountProductPrice: () => '[class="_x_flex _x_items-center"] span._x_opacity-100:eq(1)',
        discountedPrice: () => '[class="_x_flex _x_items-center"] span._x_leading-11',
        discountedPriceWithPercent: () => 'div[class="_x_flex _x_items-center"] ._x_whitespace-nowrap',
        discountedPriceWithPercentConteiner: () => '._x_items-start > :nth-child(1) > ._x_relative > ._x_pr-3',
        InstallmentPurchaseButton: () => '#buy-installment-mobile',
        sellerHelpIcon: () => 'button i._x_cursor-pointer._x_icon-help:eq(0)',

        //პროდუქტი რომლის ფასი აღემატება 100 ლარს
        navbarElementTechnic: () => '._x_opacity-100:eq(0)',
        navbarElementFamilyTechnic: () => '[href="/catalog/saojakho-teqnika/37"] > ._x_text-3',
        navbarElementKitchenTechnic: () => '[href="/catalog/samzareulos-teqnika/65"] > ._x_text-3',
        navbarElementMicrowaveTechnic: () => '[href="/catalog/mikrotalghuri-ghumeli/89"] > ._x_text-3',
        productID: () => '._x_justify-between > ._x_text-3:eq(0)',
        hartIcon: () => '._x_justify-between > div._x_flex  path',
        hartIconBorder: () => 'svg._x_stroke-1\\.6._x_stroke-black._x_fill-transparent',
        shareIcon: () => '._x_icon-share',
        productName: () => '._x_break-words',
        merchantName: () => 'div._x_mt-4 a._x_text-link-blue:eq(0)',
        productFrame: () => '.swiper-slide-visible > ._x_w-full',
        describeText: () => '._x_justify-between > ._x_text-4',
        firstP: () => '._x_pt-10 > ._x_flex > ._x_overflow-hidden > ._x_text-3 > :nth-child(1)',
        aboutProduct: () => '._x_pt-15 > ._x_text',
        brand: () => '._x_mb-10._x_flex > :nth-child(1) > ._x_col-span-8 > ._x_flex > ._x_text-3',
        productBrand: () => '._x_mb-10._x_flex > :nth-child(1) > ._x_col-span-4 > ._x_text-3',
        model: () => '._x_mb-10._x_flex > :nth-child(2) > ._x_col-span-8 > ._x_flex > ._x_text-3',
        productModel: () => '._x_mb-10._x_flex > :nth-child(2) > ._x_col-span-4 > ._x_text-3',
        productMainFeatureText: () => 'div._x_mb-10 span[class="_x_text-5 _x_text-black _x_font-bold _x_mb-10"]:eq(2)',
        productType: () => ':nth-child(1) > :nth-child(2) > :nth-child(1) > ._x_col-span-8 > ._x_flex > ._x_text-3',
        manufacturerCountry: () => 'div[class="_x_flex _x_w-full"] span._x_text-3:eq(2)',
        manufacturerCountryName: () => '[class="_x_text-3 _x_text-black _x_text-right _x_font-medium ng-star-inserted"]:eq(1)',
        productPrice: () => '._x_items-start > :nth-child(1) > ._x_flex > ._x_text-10:eq(0)',
        productInstallment: () => '._x_mb-6 > ._x_bg-credit-200 > ._x_text-3',
        productInstallmentIcon: () => '._x_mb-6 > ._x_bg-credit-200 > ._x_ml-3 > #forOpenContent',
        bayButton: () => '#buy-instant-mobile',
        bayButtonText: () => '#buy-instant-mobile-text',
        buyInstallmentButton: () => '#buy-installment-mobile',
        buyInstallmentButtonText: () => '#buy-installment-mobile-text',
        addToCartButton: () => '#AddToCart-detailed-mobile-button',
        addToCartButtonText: () => '#AddToCart-detailed-mobile-text',
        addToCartButtonIcon: () => '#AddToCart-detailed-mobile-icon',
        byWithPhoneText: () => ':nth-child(1) > :nth-child(1) > ._x_col-span-12 > div._x_flex-col._x_w-full > ._x_block > ._x_p-6 > ._x_mb-1:eq(0)',
        byWithPhoneIcon: () => ':nth-child(1) > :nth-child(1) > ._x_col-span-12 > div._x_flex-col._x_w-full > ._x_block > ._x_p-6 > ._x_text-link-blue > ._x_flex:eq(0)',
        byWithPhoneNumber: () => ':nth-child(1) > :nth-child(1) > ._x_col-span-12 > div._x_flex-col._x_w-full > ._x_block > ._x_p-6 > ._x_text-link-blue > ._x_text-3:eq(0)',
        similarProducts: () => '._x_color-dark',
        installmentPopupIcon: () => 'a[class="_x_ml-3"]:eq(0)',
    
    test: () => '._x_flex._x_px-8 > ._x_justify-start > ._x_flex-auto > ._x_text-red > :nth-child(1)'
    }

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

      installmentPopup = {
        TermsOfInstallmentsText: () => 'app-detailed-installment-popup p._x_text-5',
        extraPartnerBanksText: () => 'p[class="_x_font-bold _x_text-4 md:_x_text-5 _x_text-black _x_mb-10"]',
        purchasedByBankInstallmentsText: () => 'p[class="_x_text-3 _x_font-medium _x_text-dark _x_mb-12 _x_text-left"]',
        georgianBankText: () => '.category-custom-scroll-bar div._x_flex p:eq(0)',
        georgianBankIcon: () => '.category-custom-scroll-bar div img:eq(0)',
        tbcBankText: () => '.category-custom-scroll-bar div._x_flex p:eq(1)',
        tbcBankIcon: () => '.category-custom-scroll-bar div img:eq(1)',
        credoBanText: () => '.category-custom-scroll-bar div._x_flex p:eq(2)',
        credoBankIcon: () => '.category-custom-scroll-bar div img:eq(2)',
        teraBankText: () => '.category-custom-scroll-bar div._x_flex p:eq(3)',
        teraBankIcon: () => '.category-custom-scroll-bar div img:eq(3)',
        spaceBankText: () => '.category-custom-scroll-bar div._x_flex p:eq(4)',
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
}

module.exports = new mobileProdactDetailPage();