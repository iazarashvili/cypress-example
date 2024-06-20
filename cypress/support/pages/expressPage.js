class expressPage {
    elements = {
        marketBanner: () => '[href="/express/market"]',
        addFirstItemToWishListButton: () => '#addWishList_0',
    }
}

module.exports = new expressPage();