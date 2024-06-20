class headerElements {
    elements = {

        // !Header Elements

        addnewAddressButton: () => '._x_z-11 > ._x_flex-col > ._x_font-medium',

        userDataDropDown: () => 'span._x_outline-none',

        searchInputField: () => '[formcontrolname="searchKeyword"]:eq(0)',

        basketItemCount: () => '[routerlink="/basket"] p',

        openWishList: () => cy.get('[routerlink="/wishlist"]').click(),

        wishListItemCount: () => '[routerlink="/wishlist"] div p',

        extraHeaderLogo: () => '[routerlink="/"] img:eq(0)',

        basketButton: () => '[href="/basket"]',

        catalogButton: () => 'button[aria-label="Justify"]:eq(1)',

        catalogButtonBurgerIcon: () => '[aria-label="Justify"] i._x_icon-burger:eq(1)',

        catalogButtonText: () => '[class="_x_text-3 _x_ml-4 _x_font-bold ng-tns-c70-0"]',

        searchIconCamera: () => 'button i._x_icon-camera:eq(0)',

        searchIconSearch: () => 'button i._x_icon-search:eq(0)',

        technicCategori: () => '[routerlink="/catalog/teqnika/1"]',
        
        voucherCategory: () => '[routerlink="/voucher"]',

        wishListSavedText: () => '[routerlink="/wishlist"] span',

        wishlistHeartIcon: () => '[routerlink="/wishlist"] i',

        // !sign in button elements
        signInButton: () => '._x_icon-user-profile-1',

        signInButtonText: () => 'header button._x_text-dark span',

        signInButtonIcon: () => 'header button._x_text-dark i._x_icon-user-profile-1',

        //! Basket icon and text elements
        basketIcon: () => '[routerlink="/basket"] i',

        basketText: () => '[routerlink="/basket"] span',

        //! Comparison icon and text elements
        comparisonText: () => '[routerlink="/comparison"] span',

        comparisonIcon: () => '[routerlink="/comparison"] i',

        comparisonHref: () => '[routerlink="/comparison"]',

        comparisonItemCount: () => '[href="/comparison"] p'
    }

    responsiveElements = {
        searchButton: () => '._x_icon-search:eq(1)',
        // Header Elements
        signInButton: () => 'header button._x_text-dark:eq(1)',
        searchInputField: () => '[formcontrolname="searchKeyword"]:eq(1)',
        getBasketButton: () => '[routerlink="/basket"]',
    }
}

module.exports = new headerElements();