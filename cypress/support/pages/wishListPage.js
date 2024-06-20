class extraWishListPage {
  elements = {
    shoppingListIsEmptyText: () => "app-wishlist span._x_text-5",
    productCards: () => "app-product-card",
  };

  cardElements = {
    FirstItemName: () => '[id="productTitle_0"]:eq(0)',

    FirstItemDiscountedPrice: () => '[id="discountPrice_0"]:eq(0)',

    wishlistAddToCart: () => '#AddToCart-card-button-0',

    removeFirstItemButton: () => '[id="removeBin_0"]:eq(0)',
    removeSecondItemButton: () => '[id="removeBin_1"]',

    sellerHref: () => 'app-product-card a:eq(3)',
  };

  responsiveElements = {
    firstItemSellerHref: () => 'app-wishlist a._x_mb-5:eq(0)',
    firstItemRemoveButton: () => '#removeBin_0',
  }

  whiteElements = {
    whiteAddToCartButton: () => '#AddToCart-card-button-0',
    savedText: () => 'შენახული'
  }
}

module.exports = new extraWishListPage();
