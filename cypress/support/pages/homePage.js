
class extraHomePage {
  elements = {

    productCarusel: () => 'app-home-page-products-carousel',

    //! popup
    homePopupCloseButton: () => '._x_h-40 > ._x_flex',
    addItemToCardPopupText: () => 'app-toast div._x_text-white',

    // !Item Prices
    firstItemPrice: () => '[id="productPrice_0"]:eq(0)',
    secondItemPrice: () => '[id="productPrice_1"]:eq(0)',

    // !Names
    firstItemName: () => '[id="productTitle_0"]:eq(1)',
    secondItemName: () => '[id="productTitle_1"]:eq(1)',

    firstItemSellerName: () => '[id="sellerName_0"]:eq(1)',

    firstItemSellerHref: () => 'app-product-card a[class="_x_mb-5"]:eq(5)',

    // ! Banners elements
    firstBannerHrefLink: () => '[data-swiper-slide-index="0"] a:eq(1)',
    firstBanner: () => '[data-swiper-slide-index="0"]:eq(1)',

    getSecondBanner: () => '[class="_x_flex _x_justify-center"] div:eq(2)',
    secondBannerHrefLink: () => '[data-swiper-slide-index="1"] a:eq(2)',
    secondBanner: () => '[data-swiper-slide-index="1"] a:eq(2)',

    //! subheader menu elements
    // ფასდაკლებები
    expressText: () => '#expressBtnAnimated',

    //! Added Buttons
    addFirstItemToCartButton: () => '[id="AddToCart-card-button-0"]:eq(1)',
    addSecondItemToCartButton: () => '[id="AddToCart-card-button-1"]:eq(1)',

    addFirstDiscountedItemButton: () => '[id="AddToCart-card-button-0"]:eq(2)',
    addSecondDiscountedItemButton: () => '[id="AddToCart-card-button-1"]:eq(2)',

    addFirstItemToWishListButton: () => '[id="addWishList_0"]:eq(1)',
    addSecondItemToWishListButton: () => '[id="addWishList_1"]:eq(1)',

    addSecondItemToComparison: () => '[data-swiper-slide-index="1"] ._x_icon-Compare:eq(1)',

   //! Open product detail page buttons

    timedDealsFirstItemCard: () => '[id="productTitle_0"]:eq(0)',
    firstItemCard: () => '[id="productTitle_0"]:eq(1)',
    secondItemCard: () => '[id="productTitle_1"]:eq(1)',

    //! Catalog elements

    categoryNamesList: () => '[class="_x_pl-0 _x_ml-0"] span',

    //! ბოლოს ნანახი პროდუქტების სეტი
    addFirstItemToCartButtonFromLastViewedProductsSet: () => ':nth-child(11) > ._x_block > ._x_px-0 > ._x_border-b-1 > .swiper-container > .swiper-wrapper > .swiper-slide-active > ._x_max-h-188 > ._x_min-h-148 > ._x_justify-between > #AddToCart-card-button-0',
    firstItemNameLastViewedProductsSet: () => '[id="productTitle_0"]:eq(6)',
    addLastViewedItemToWishListButton: () => '[id="addWishList_0"]:eq(6)',

    //! Footer elements
    //  მაღაზიების ციფრული პლატფორმა
    textDigitalPlatformStores: () => 'footer p._x_font-medium',
  }

  addressPopupElements = {
    addAddressButton: () => 'app-address-form button._x_text-white',
    addresText: () => 'p[class="_x_font-medium _x_text-3 _x_text-dark"]',
    removeAddressButton: () => '._x_icon-remove-bin',
    confirmRemoveAddressButton: () => 'app-confirmation-dialog button._x_text-white',
  }

  footerElements = {
    textAboutUs: () => 'footer div h3._x_font-bold:eq(0)',
    pagePrivacyPolicy: () => 'footer ul li a[href="static/privacy-policy"]',
    facebookIcon: () => '[class="_x_group"] a:eq(0)',
    instagramIcon: () => '[class="_x_group"] a:eq(1)',
    youtubeIcon: () => '[class="_x_group"] a:eq(2)',
    linkDinIcon: () => '[class="_x_group"] a:eq(3)',
  }

  whiteElements = {
    whiteDealsTimer: () => '[class="_x_mt-4 _x_text-red _x_text-2 _x_font-bold ng-star-inserted"]',
    whiteLegalProfileFigure: () => '._x_icon-user-profile-1:eq(3)',
    whiteUserProfileFigure: () => 'figure img[class="_x_max-w-full _x_max-h-full _x_w-full ng-tns-c69-0"]:eq(1)',
    profileButton: () => '._x_outline-none > ._x_mb-0 > ._x_max-w-full',
  }

  productCardElements = {
    sellerName: () => '#sellerName_0:eq(0)',
    sellerHrefAttr: () => '#sellerName_0:eq(0)',
  }

  timedDealsElements = {

    // Item Prices
    firstItemDiscountedPrice: () => '[id="discountPrice_0"]:eq(0)',

    // Item Names
    firstItemName: () => '[id="productTitle_0"]:eq(0)',
    secondItemName: () => '[id="productTitle_1"]:eq(0)',

    firstItemSellerHref: () => 'app-product-card a:eq(3)',
    firstItemSellerName: () => '#sellerName_0:eq(0)',

    // Added buttons
    addFirstItemToCartButton: () => '[id="AddToCart-card-button-0"]:eq(0)',
    addSecondItemToCartButton: () => '[id="AddToCart-card-button-1"]:eq(0)',
    increaseCountToFirstTimedDealsItem: () => 'div[class="_x_cursor-pointer"] i._x_icon-plus:eq(0)',

    addFirstItemToWishListButton: () => '[id="addWishList_0"]:eq(0)',
    addSecondItemToWishListButton: () => '#addWishList_1:eq(0)',
    addFirstTimedDealsItemToComparison: () => '._x_icon-Compare:Eq(1)',

    addFirstItemComparisonPageButton: () => '._x_icon-Compare:eq(1)',

    firstItemDiscountPrice: () => '[id="discountPrice_0"]:eq(0)',
    secondItemDiscountPrice: () => '[id="discountPrice_1"]:eq(0)',
  }

  responsiveElements = {

     // Item Prices
     firstItemPrice: () => '[id="productPrice_0"]:eq(0)',
 
     // Names
     firstItemName: () => '[id="productTitle_0"]:eq(1)',
 
     // Added Buttons
     addFirstItemToCartButton: () => '[id="AddToCart-card-button-0"]:eq(1)',
  }

  dealsResponsiveElements = {

    // Item Names
    firstItemName: () => '[id="productTitle_0"]:eq(0)',

    firstItemSellerHref: () => 'app-product-card a:eq(3)',

    // Added buttons
    addFirstItemToCartButton: () => '[id="AddToCart-card-button-0"]:eq(0)',

    addFirstTimedDealsItemToWishList: () => '[id="addWishList_0"]:eq(0)',

    // Open Detail page button
    openTimedDealsPageButton: () => 'app-multiple-sections div a._x_text-white',
  }
}

module.exports = new extraHomePage();