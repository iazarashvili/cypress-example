class extraMerchantPage {
  elements = {
    addFirstItemToCartButton: () => '#AddToCart-card-button-0',
    firstItemPrice: () => '#productPrice_0:eq(0)',
    firstItemName: () => '#productTitle_0:eq(0)',
    merchantLogo: () => 'figure img.mw-100',
    merchantTitle: () => 'div h1',
    productCount: () => '[class="_x_text-dark-600 _x_text-2 _x_font-medium"]',
    categoryTextAll: () => '#catalog-sidebar h2:Eq(0)',
    categoryTextTechnic: () => '#catalog-sidebar h2:eq(1)',
    categoryTextOffice: () => '#catalog-sidebar h2:eq(3)',
    dropDownButton: () => 'h3.dropper span:eq(1)',
    dropDownButtonIcon: () => 'i._x_icon-addow-down._x_js-rotate',
    categoryList: () => '#category-list',
    appProductCards: () => 'app-product-card',
  };

  whiteElements = {
    merchantPageBanner: () => '[data-swiper-slide-index="0"]',
  }
}
module.exports = new extraMerchantPage();
