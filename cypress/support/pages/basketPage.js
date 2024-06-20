class extraBasketPage {
  elements = {

    firstItemPrice: () => '[id="currentPrice_0"]',
    secondItemPrice: () => '[id="currentPrice_1"]',

    firstItemDiscountedPrice: () => '[id="discountedPrice_0"]',
    secondItemDiscountedPrice: () => '[id="discountedPrice_1"]',

    firstItemName: () => 'div._x_mb-4 a:eq(0)',
    secondItemName: () => 'div._x_mb-4 a:eq(1)',


    firstItemSellerHref: () => 'app-basket-page a._x_max-w-110:eq(1)',
    lastViewProductSellerHref: () => 'app-product-card a[class="_x_mb-5"]:eq(0)',

    minusFirstItemCountButton: () => '#dicreaseCount_0',

    plusFirstItemCountButton: () => '._x_icon-plus:eq(1)',

    removeFirstItemButton: () => 'i._x_icon-remove-bin:eq(3)',

    firstItemCount: () => '[id="productCount_0"]',
    secondItemCount: () => '[id="productCount_1"]',
    
    numberOfProducts: () => '[id="totalProductCount"]',
    totalPrice: () => '[id="totalPrice"]:eq(0)',

    continueShoppingButton: () => 'button span[class="_x_text-2 _x_font-bold"]:eq(0)',

    myBasketText: () => 'h3._x_m-none',


    addItemToWishListButton: () => 'span._x_mr-6 svg',
    addItemToWishListLastViewItems: () => '#addWishList_0',
  }

  responsiveElements = {
    firstItemPrice: () => '[class="_x_pl-10 _x_w-full"] ._x_whitespace-nowrap:eq(0)',

    firstItemDiscountedPrice: () => '[class="_x_pl-10 _x_w-full"] ._x_text-dark',

    firstItemName: () => 'h2 ._x_mb-4 a:eq(0)',

    firstItemMerchantHref: () => '[class="_x_w-full _x_relative ng-star-inserted"] a:eq(2)',
    firstInLastOfViewerItemsMerchantHref: () => 'app-product-card a._x_mb-5:eq(0)',

    totalPrice: () => 'div span._x_text-6:eq(1)',

    continueShoppingButton: () => '[class="_x_text-2 _x_font-bold"]:eq(1)',
    productAddedToBasketPopup: () => '._x_bg-green',
  }
}

export default new extraBasketPage();