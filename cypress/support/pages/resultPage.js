class resultPage {
  elements = {
    categoryText: () => "#catalog-sidebar div h3:eq(0)",
    allCategoryText: () => "#catalog-sidebar div h2:eq(0)",
    addFirstItemToCart: () => '[id="AddToCart-card-button-0"]:eq(0)',
    openFirstItemDetailPage: () => '[id="productPrice_0"]:eq(0)',
    firstItemPrice: () => '[id="productPrice_0"]:eq(0)',
    firstItemName: () => '[id="productTitle_0"]:eq(0)',
    firstItemSellerName: () => '#sellerName_0',
    firstItemHref: () => 'app-product-card a:eq(3)',
    addFirstItemToWishListButton: () => '#addWishList_0:eq(0)'
  };
  elementsMobile = {
    whiteResultPage: () => cy.contains(' ძებნა ', {timeout: 6000})
  };
}

module.exports = new resultPage();
