import header from "../pages/header"

export class WishListHelpers {

    deleteItemTooWishListAndCheck(item, item_count) {
        cy.get(item).click().wait(1000)
        cy.get(header.elements.wishListItemCount()).invoke('text').invoke('replace').then(($itemCount) => {
            expect(parseInt($itemCount)).to.eq(item_count)
        })
    }

}

export const wishListPageHelpers = new WishListHelpers()