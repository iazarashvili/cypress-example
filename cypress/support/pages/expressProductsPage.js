// https://staging.extra.ge/catalog/parikebi/3061?deliveryTypes=3

class expressProductPage  {

    whiteElements = {
        whiteAddCardButton: () => '#AddToCart-card-text-0'
    }

    elements = {
        addFirstItemToCartButton: () => '#AddToCart-card-button-0',
        openFirstItemDetailPage: () => 'app-product-card:eq(0)',
        addFirstItemToWishList: () => '#addWishList_0'
    }
}


module.exports = new expressProductPage();