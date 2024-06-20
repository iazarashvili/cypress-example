class comparisonPage {
    
    elements = {
        comparisonPageItemSellerHref: () => 'app-product-card a[class="_x_mb-5"]:eq(0)',
        removeButton: () => '#removeBin_0',
        firstItemName: () => '#productTitle_0',
        firstItemPrice: () => '',
        firstItemDiscountPrice: () => '#discountPrice_0',
        addFirstItemToCartButton: () => '._x_justify-between > #AddToCart-card-button-0:eq(0)',
        addItemToWishListButton: () => '#addWishList_0',
    }

    whiteElements = {
        // white elements
        whiteHeartIcon: () => 'app-product-card #addWishList_0',
        whiteEmptyComparison: () => '#sellerName_0:eq(0)',
    }

    offerOfTheDayItems = {
        firstItemSellerHref: () => '[data-swiper-slide-index="0"] a[class="_x_mb-5"]:eq(0)'
    }

    offerOfTheDayItemsResponsive = {
        firstItemSellerHref: () => 'app-product-card a._x_mb-5:eq(0)'
    }
}

module.exports = new comparisonPage();