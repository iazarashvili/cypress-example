import homePage from "../../../support/pages/homePage"
import { baseHelper } from '../../../support/Helpers/baseHelper'
import { wishListPageHelpers } from '../../../support/Helpers/wishListPageHelpers'
import header from "../../../support/pages/header"
import wishListPage from '../../../support/pages/wishListPage'
import basketPage from "../../../support/pages/basketPage"
import { basketApi } from '../../../support/Extra-API/basketAPI'
import categoriPage from "../../../support/pages/categoriPage"
import resultPage from "../../../support/pages/resultPage"
import comparsionPage from "../../../support/pages/comparsionPage"
import expressPage from "../../../support/pages/expressPage"
import productDetailPage from "../../../support/pages/productDetailPage"

describe('ვიშ ლისტის ტესტირება', () => {
    beforeEach('First Steps', () => {
        basketApi.emptyBasket()
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
    })

    afterEach('Delete wish list item', () => {
        baseHelper.deleteItemToWishList()
    })

    it('Case 1: პროდუქტის დამატება ვიშ ლისტში დღის შეთავაზების სეტიდან და შემოწმება', () => {
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.addFirstItemToWishListButton(), 1)
    });

    it('Case 2: ორი პროდუქტის დამატება ვიშ ლისტში, ვიშ ლისტის გვერდზე გადასვლა და რომელიმე პროდუქტის წაშლა', () => {
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.addFirstItemToWishListButton(), 1)
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.addSecondItemToWishListButton(), 2)
        baseHelper.openWishList()
        wishListPageHelpers.deleteItemTooWishListAndCheck(wishListPage.cardElements.removeSecondItemButton(), 1)
    });

    it('Case 3: პროდუქტის დამატება ვიშ ლისტში პირველი სეტიდან და შემოწმება', () => {
        cy.scroolToFirstSet()
        baseHelper.addItemToWishListAndCheck(homePage.elements.addFirstItemToWishListButton(), 1)
    });

    it('Case 4: პროდუქტის დამატება ვიშ ლისტში კალათიდან და შემოწმება', () => {
        cy.scroolToFirstSet()
        baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
        baseHelper.openBasket()
        baseHelper.whiteBasketPageLoad()
        baseHelper.addItemToWishListAndCheck(basketPage.elements.addItemToWishListButton(), 1)
    });

    it('Case 5: პროდუქტის დამატება ვიშ ლისტში კატეგორიიდან და შემოწმება', () => {
        cy.visit(Cypress.env('electronics_url')).wait(2000)
        baseHelper.addItemToWishListAndCheck(categoriPage.categoryTeqnika.addFirstItemToWishLiset(), 1)
    });

    it('Case 6: პროდუქტის დამატება ვიშ ლისტში რეზალტ ფეიჯიდან და შემოწმება', () => {
        baseHelper.searchAnyItemFromItemId(617887)
        baseHelper.addItemToWishListAndCheck(resultPage.elements.addFirstItemToWishListButton(), 1)
    });

    it('Case 7: პროდუქტის დამატება ვიშ ლისტში შედარების გვერდიდან და შემოწმება', () => {
        baseHelper.addItemToComparisonPageAndCheck(homePage.timedDealsElements.addFirstItemComparisonPageButton(), 1)
        baseHelper.openComparisonPage()
        baseHelper.addItemToWishListAndCheck(comparsionPage.elements.addItemToWishListButton(), 1)
        baseHelper.deleteItemToComparsionPageAndCheck()
    });

    it('Case 8: ექსპრესული პროდუქტის დამატება ვიშ ლისტში და შემოწმება', () => {
        cy.visit('https://staging.extra.ge/catalog/parikebi/3061?deliveryTypes=3').wait(3000)
        baseHelper.addItemToWishListAndCheck(expressPage.elements.addFirstItemToWishListButton(), 1)
    });

    it('Case 9: პროდუქტის დამატება ვიშ ლისტში დეტალური გვერდიდან და შემოწმება', () => {
        baseHelper.openProductDetailPage(homePage.timedDealsElements.firstItemName())
        baseHelper.addItemToWishListAndCheck(productDetailPage.elements.addItemToWishlist(), 1)
    });

    it('Case 10: პროდუქტის დამატება ვიშ ლისტში ბოლოს ნანახი პროდუქტების სეტიდან და შემოწმება', () => {
        cy.contains('ბოლოს ნანახი პროდუქტები').scrollIntoView({duration: 3000}).wait(2000)
        baseHelper.addItemToWishListAndCheck(homePage.elements.addLastViewedItemToWishListButton(), 1)
    });

    it('Case 11: პროდუქტის დამატება ვიშ ლისტში მსგავსი პროდუქტების სეტიდან და შემოწმება', () => {
        baseHelper.openProductDetailPage(homePage.timedDealsElements.firstItemName())
        cy.wait(2000)
        cy.scrollTo(0, 2300, {duration: 3000})
        baseHelper.addItemToWishListAndCheck(productDetailPage.elements.addSimilarItemToWishListButton(), 1)
    });
    
})

describe('ვიშ ლისტის ტესტირება', () => {
    beforeEach('First Settings', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
    })

    it('Case 1: პროდუქტის დამატება ვიშ ლისტში რომელიმე ქარდიდან და წაშლა გულის აიქონზე დაკლიკებით', () => {
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.addFirstItemToWishListButton(), 1)
        cy.get(homePage.timedDealsElements.addFirstItemToWishListButton()).click()
        cy.get(header.elements.wishListItemCount(), { timeout: 6000 }).should('not.exist')
    });

    it('Case 2: გულის აიქონის შემოწმება მონიშვნის დროს', () => {
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.addFirstItemToWishListButton(), 1)
        cy.wait(1000)
        cy.get('button[class="_x_top-0 sm:_x_right-10"] svg:eq(0)').should('have.class', '_x_stroke-purple')
        cy.get(homePage.timedDealsElements.addFirstItemToWishListButton()).click()
    });
})
