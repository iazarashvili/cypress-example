import wishListPage from '../../../support/pages/wishListPage'
import { baseHelper } from '../../../support/Helpers/baseHelper';
import { basketApi } from '../../../support/Extra-API/basketAPI';
import homePage from '../../../support/pages/homePage';
import basketPage from '../../../support/pages/basketPage';
import productDetailPage from '../../../support/pages/productDetailPage';
import merchantPage from '../../../support/pages/merchantPage';
import resultPage from '../../../support/pages/resultPage'
import comparsionPage from '../../../support/pages/comparsionPage';
import categoriPage from '../../../support/pages/categoriPage';
import header from '../../../support/pages/header';
import {basketPageHelper} from '../../../support/Helpers/basketHelper'


context('Smoke Tests: კალათში პროდუქტის დამატება, ავტორიზებული მომხმარებელი', () => {
    describe('კალათში პროდუქტის დამატება', () => {
        beforeEach('First Steps', () => {
            basketApi.emptyBasket()
            cy.viewport(1920, 1080)
            cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
            cy.visit('')
            cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
        })

        it('Case 1: პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            cy.scrollToTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
            basketApi.checkTotalPrice()
        });

        it('Case 2: პროდუქტის კალათში დამატება მთავარი გვერდი ნებისმიერი სეტიდან', () => {
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndGetBasket(homePage.elements.firstItemPrice(),
                basketPage.elements.firstItemPrice(),
                homePage.elements.firstItemName(),
                homePage.elements.addFirstItemToCartButton())
        });

        it('Case 3: პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            baseHelper.addItemToCartAndGetBasket(productDetailPage.elements.itemPrice(),
                basketPage.elements.firstItemPrice(),
                productDetailPage.elements.itemName(),
                productDetailPage.elements.addItemToCartButton())

        });

        it('Case 4: პროდუქტის კალათში დამატება ბოლოს ნანახი პროდუქტების სეტიდან', () => {
            cy.contains('ბოლოს ნანახი პროდუქტები').scrollIntoView({ duration: 3000 })
            cy.wait(3000)
            cy.get(homePage.elements.firstItemNameLastViewedProductsSet()).invoke('text').then(($itemName) => {
                cy.get(homePage.elements.addFirstItemToCartButtonFromLastViewedProductsSet()).click()
                cy.get(homePage.elements.addItemToCardPopupText(), { timeout: 5000 }).should('include.text', 'დამატებულია კალათაში')
                cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
                cy.get(header.elements.basketButton()).click()
                cy.wait(3000)
                cy.url('').should('eq', Cypress.env('basket_page_url'))
                cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
                cy.get(basketPage.elements.firstItemName()).invoke('text').invoke('trim').invoke('replace').should('include', $itemName)
            })
        });

        it('Case 5: პროდუქტის კალათში დამატება მერჩანტის გვერდიდან', () => {
            cy.visit(Cypress.env('merchant_page_url'))
            cy.wait(3000)
            cy.scrollTo(0, 500, { duration: 1000 })
            baseHelper.addItemToCartAndGetBasket(
                merchantPage.elements.firstItemPrice(),
                basketPage.elements.firstItemPrice(),
                merchantPage.elements.firstItemName(),
                merchantPage.elements.addFirstItemToCartButton())

        });

        it('Case 6: პროდუქტის მოძებნა და კალათში დამატება', () => {
            baseHelper.searchAnyItem('Midea MF200D80B')
            cy.wait(2000)
            baseHelper.addItemToCartAndGetBasket(
                resultPage.elements.firstItemPrice(),
                basketPage.elements.firstItemPrice(),
                resultPage.elements.firstItemName(),
                resultPage.elements.addFirstItemToCart()
            )
        });

        it('Case 7: პროდუქტის კალათში დამატება მსგავსი პროდუქტების სეტიდან', () => {
            cy.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.detailPageScroolTolastView()
            cy.get(productDetailPage.elements.firstSimilarItemAddToCartButton(), { timeout: 6000 })
            baseHelper.addItemToCartAndCheck(productDetailPage.elements.firstSimilarItemAddToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(productDetailPage.elements.firstSimilarProductPrice(), productDetailPage.elements.firstSimilarProductName())
            basketPageHelper.checkTotalPrice(1)

        });

        it('Case 8: პროდუქტის კალათში დამატება wishlist გვერდიდან', () => {
            cy.get(homePage.timedDealsElements.addFirstItemToWishListButton()).click()
            baseHelper.openWishList()
            baseHelper.addItemToCartAndCheck(wishListPage.cardElements.wishlistAddToCart(), 1)
            basketPageHelper.checkAddedProductToBasket(wishListPage.cardElements.FirstItemDiscountedPrice(),wishListPage.cardElements.FirstItemName())
            baseHelper.openWishList()
            cy.get(wishListPage.cardElements.removeFirstItemButton(), { timeout: 5000 }).click()

        });

        it('Case 9: პროდუქტის კალათში დამატება შედარების გვერდიდან', () => {
            cy.get(homePage.timedDealsElements.addFirstTimedDealsItemToComparison()).click()
            cy.get(header.elements.comparisonIcon()).click()
            cy.get(comparsionPage.whiteElements.whiteEmptyComparison(), { timeout: 6000 })
            baseHelper.addItemToCartAndGetBasket(
                comparsionPage.elements.firstItemDiscountPrice(),
                basketPage.elements.firstItemDiscountedPrice(),
                comparsionPage.elements.firstItemName(),
                comparsionPage.elements.addFirstItemToCartButton())
            cy.get(header.elements.comparisonIcon()).click()
            cy.get(comparsionPage.whiteElements.whiteEmptyComparison(), { timeout: 6000 })
            cy.get(comparsionPage.elements.removeButton()).click()

        });

        it('Case 10: პროდუქტის კალათში დამატება კატეგორიის გვერდიდან', () => {
            cy.visit(Cypress.env('technic_page'))
            cy.scrollTo(0, 300, { duration: 1000 }).wait(2000)
            baseHelper.addItemToCartAndCheck(categoriPage.categoryTeqnika.firstItemAddToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(categoriPage.categoryTeqnika.firstItemPrice(), categoriPage.categoryTeqnika.firstItemTitle())

        });

        it('Case 11: კალათიდან ერთი ნივთის წაშლა და შემოწმება', () => {
            cy.scroolToFirstSet()
            baseHelper.addTwoDifferentItemGetBasket()
            cy.get(basketPage.elements.removeFirstItemButton()).click()
            const items = [basketPage.elements.firstItemPrice()]
            baseHelper.checkTotalPriceBasketPage(basketPage.elements.totalPrice(), items)
        });

        it('Case 12: კალათში ნივთის რაოდენობის გაზრდა და შემოწმება', () => {
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.addFirstItemToCartButton(), 1)
            basketPageHelper.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
            cy.get(basketPage.elements.plusFirstItemCountButton()).click()
            cy.wait(2000)
            basketPageHelper.checkTotalPrice(1)
        });

        it('Case 13: კალათში ნივთის რაოდენობის შემცირება და შემოწმება', () => {
            cy.scroolToFirstSet()
            baseHelper.addItemToCartAndGetBasket(homePage.elements.firstItemPrice(),
                basketPage.elements.firstItemPrice(),
                homePage.elements.firstItemName(),
                homePage.elements.addFirstItemToCartButton())
            cy.get(basketPage.elements.minusFirstItemCountButton()).click()
            const items = [basketPage.elements.firstItemPrice()]
            baseHelper.checkTotalPriceBasketPage(basketPage.elements.totalPrice(), items)
        });
    })
})