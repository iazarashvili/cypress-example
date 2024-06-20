import homePage from "../pages/homePage";
import basketPage from "../pages/basketPage";
import extraSuccessPage from "../pages/successPage"
import profileOrdersPage from "../pages/profileOrdersPage";
import checkoutPage from "../pages/checkoutPage";
import productDetailPage from "../pages/productDetailPage";
import loginForm from '../pages/loginForm'
import resultPage from "../pages/resultPage";
import header from "../pages/header";
import wishListPage from "../pages/wishListPage";
import comparsionPage from "../pages/comparsionPage";

export class BaseHelper {
    addItemToCartAndGetBasket(itemPrice, basketItemPrice, itemName, item) {
        cy.get(itemPrice).invoke('text').then(($itemPrice) => {
            cy.wait(2000)
            cy.get(itemName).invoke('text').invoke('trim').then(($itemName) => {
                cy.get(item).click()
                cy.get(homePage.elements.addItemToCardPopupText(), { timeout: 5000 }).should('include.text', 'დამატებულია კალათაში')
                cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
                cy.get(header.elements.basketButton()).click()
                cy.wait(3000)
                cy.url('').should('eq', Cypress.env('basket_page_url'))
                cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
                cy.get(basketPage.elements.firstItemName()).invoke('text').invoke('trim').invoke('replace').should('include', $itemName)
            })
            cy.get(basketItemPrice).invoke('text').then(($basketItemPrice) => {
                expect(parseFloat($basketItemPrice.replace('₾'))).to.be.eq(parseFloat($itemPrice.replace('₾')))
            })
        })
    }

    addTwoDifferentItemGetBasket() {
        cy.get(homePage.elements.firstItemPrice()).invoke('text').then((firstItemPrice) => {
            cy.get(homePage.elements.firstItemName()).invoke('text').invoke('trim').then((firstItemName) => {
                cy.get(homePage.elements.addFirstItemToCartButton()).click()
                cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 1')
                cy.get(homePage.elements.secondItemPrice()).invoke('text').then((secondItemPrice) => {
                    cy.get(homePage.elements.secondItemName()).invoke('text').invoke('trim').then((secondItemName) => {
                        cy.get(homePage.elements.addSecondItemToCartButton()).click()
                        cy.get(header.elements.basketItemCount()).invoke('text').should('eq', ' 2')
                        cy.get(header.elements.basketButton()).click()
                        cy.wait(3000)
                        cy.url().should("eq", Cypress.env("basket_page_url"));
                        cy.get(basketPage.elements.firstItemPrice()).invoke('text').then((basketFirstItemPrice) => {
                            cy.get(basketPage.elements.firstItemName()).invoke('text').invoke('trim').then((basketFirstItemName) => {
                                expect(parseFloat(secondItemPrice.split('₾'))).to.be.eq(parseFloat(basketFirstItemPrice.split('₾')))
                                expect(secondItemName).to.be.include(basketFirstItemName)
                            })
                        })
                    })
                })
                cy.get(basketPage.elements.secondItemPrice()).invoke('text').then((basketSecondItemPrice) => {
                    cy.get(basketPage.elements.secondItemName()).invoke('text').invoke('trim').then((basketSecondItemName) => {
                        expect(parseFloat(basketSecondItemPrice.split('₾'))).to.be.eq(parseFloat(firstItemPrice.split('₾')))
                        expect(basketSecondItemName).to.be.eq(firstItemName)
                    })
                })
            })
        })
    }

    addItemToComparisonPageAndCheck(item, item_count) {
        cy.get(item).click()
        cy.get(header.elements.comparisonItemCount(), { timeout: 6000 }).invoke('text').invoke('replace').then(($itemCount) => {
            expect(parseInt($itemCount)).to.eq(item_count)
        })
    }

    addItemToCartAndCheck(item, itemCount) {
        cy.get(item).click({force: true}).wait(1500)
        cy.get(homePage.elements.addItemToCardPopupText(), { timeout: 5000 }).should('include.text', 'დამატებულია კალათაში')
        cy.get(header.elements.basketItemCount()).invoke('text').invoke('replace').then(($count) => {
            expect(parseInt($count)).be.eq(itemCount)
        })
    }

    addItemToWishListAndCheck(item, item_count) {
        cy.get(item).click().wait(1500)
        cy.get(header.elements.wishListItemCount(), { timeout: 6000 }).invoke('text').invoke('replace').then(($itemCount) => {
            expect(parseInt($itemCount)).to.eq(item_count)
        })
    }

    checkTotalPriceBasketPage(totalPrice, items) {
        cy.wait(3000)
        if (items.length > 1) {
            cy.get(basketPage.elements.firstItemCount()).invoke('val').then(($firstItemCount) => {
                cy.get(basketPage.elements.secondItemCount()).invoke('val').then(($secondItemCount) => {
                    cy.priceParsing(totalPrice).then((totalPrice) => {
                        cy.priceParsing(items[0]).then((firstItemPrice) => {
                            cy.priceParsing(items[1]).then((secondItemPrice) => {
                                const itemsTotalPrice = (parseInt($firstItemCount) * firstItemPrice) + (secondItemPrice * parseInt($secondItemCount))
                                const numericTotalPrice = parseFloat(totalPrice);
                                expect(numericTotalPrice).to.be.closeTo(itemsTotalPrice, 0.01);
                            })
                        })
                    })
                })
            })
        } else {
            cy.get(basketPage.elements.firstItemCount()).invoke('val').then((firstItemCount) => {
                cy.priceParsing(items[0]).then((firstItemPrice) => {
                    cy.priceParsing(totalPrice).then((totalPrice) => {
                        let firstItemTotalPrice = parseInt(firstItemCount) * firstItemPrice
                        expect(parseFloat(totalPrice)).to.be.eq(firstItemTotalPrice)
                    })
                })
            })
        }
    };

    getMyordersPageAndValidOrder() {
        cy.get(checkoutPage.elements.totalPrice()).invoke('text').then((totalPrice) => {
            checkoutPage.getEndOrderButton().click({ force: true })
            cy.url().should('include', Cypress.env('home_page_url') + '/checkout/success')
            cy.get(extraSuccessPage.elements.orderID()).invoke('text').then((orderId) => {
                extraSuccessPage.viewOrderButton().click()
                cy.get(profileOrdersPage.elements.myOrdersText()).invoke('text')
                    .should('eq', ' ჩემი შეკვეთები ')
                cy.get(profileOrdersPage.elements.orderIdFromOrdersPage()).invoke('text').then((orderIrMyorderPage) => {
                    cy.get(profileOrdersPage.elements.orderTotalPrice()).invoke('text').then((totalPriceMyOrderPage) => {
                        expect(parseFloat(totalPrice.trim())).to.be.eq(parseFloat(totalPriceMyOrderPage.trim()))
                        expect(orderId).to.be.eq(orderIrMyorderPage.replace('#', '').trim())
                    })
                })
            })
        })
    }


    openComparisonPage() {
        cy.get(header.elements.comparisonIcon()).click()
        cy.get(comparsionPage.whiteElements.whiteHeartIcon(), { timeout: 6000 })
    }

    openProductDetailPage(item) {
        cy.get(item).click()
        cy.get(productDetailPage.elements.itemId(), { timeout: 6000 })
    }

    openSiteFromWeb() {
        cy.viewport(1920, 1080)
        cy.visit('').wait(1000)
    }

    openSiteFromMobile() {
        cy.viewport('iphone-x')
        cy.visit('').wait(3000)
    }
    
    openBasket() {
        cy.get(header.elements.basketButton()).click().wait(2000)
    }

    openWishList() {
        cy.get(header.elements.wishlistHeartIcon()).click()
        cy.location('pathname').should('eq', '/wishlist').wait(2000)
    }

    closeHomePagePopup() {
        cy.get(homePage.elements.homePopupCloseButton()).click()
    }

    authorizationBeforePurchase(userName, password) {
        cy.get(loginForm.elements.signInButton()).click()
        cy.get(loginForm.elements.usernameInput()).type(userName)
        cy.get(loginForm.elements.passwordInput()).type(password)
        cy.get(loginForm.elements.signInButton()).click()
        cy.wait(3000)
        cy.contains('შესვლა').should('not.exist')
    }

    searchAnyItem(searchWord) {
        cy.get(header.elements.searchInputField()).type(searchWord + '{enter}')
        cy.contains(' ძებნა ', { timeout: 6000 })
        cy.get(resultPage.elements.firstItemName()).invoke('text')
            .should('include', searchWord, { setTimeout: 10000 })
    }

    searchAnyItemMobile(searchWord) {
        cy.get(header.responsiveElements.searchInputField()).type(searchWord + '{enter}')
        cy.contains(' ძებნა ', { timeout: 6000 })
        cy.get(resultPage.elements.firstItemName()).invoke('text')
            .should('include', searchWord, { setTimeout: 10000 })
    }

    searchAnyItemFromItemId(searchItemId) {
        cy.get(header.elements.searchInputField()).type(searchItemId + '{enter}')
        cy.contains(' ძებნა ', { timeout: 3000 })
    }

    searchAnyItemFromItemIdMobile(searchItemId) {
        cy.get(header.responsiveElements.searchInputField()).type(searchItemId + '{enter}')
        cy.contains(' ძებნა ', { timeout: 3000 })
    }

    imageSearch(imagePath) {
        cy.get(header.elements.searchIconCamera()).click()
        cy.get('#uploadImage').attachFile(imagePath)
        cy.contains(' კატეგორია ', { timeout: 3000 })
        cy.get(resultPage.elements.firstItemName()).invoke('text')
            .should('include', 'ბლენდერი', { setTimeout: 10000 })
    }

    imageSearchMobile(imagePath) {
        cy.get(header.responsiveElements.searchIconCamera()).click()
        cy.get('#uploadImage').attachFile(imagePath)
        cy.contains(' კატეგორია ', { timeout: 3000 })
        cy.get(resultPage.elements.firstItemName()).invoke('text')
            .should('include', 'ბლენდერი', { setTimeout: 10000 })
    }

    deleteItemToWishList() {
        this.openWishList()
        cy.get('._x_icon-remove-bin').click({ multiple: true }).wait(1000)
        cy.get(wishListPage.cardElements.removeFirstItemButton()).should('not.exist')
    }

    deleteItemToComparsionPageAndCheck() {
        cy.get(comparsionPage.elements.removeButton()).click()
        cy.contains('შედარების ჩამონათვალი ცარიელია 🥺')

    }

    whiteBasketPageLoad() {
        cy.get(basketPage.elements.addItemToWishListButton(), { timeout: 6000 })
    }

    verificationSuccessFulOrderPlacment() {
        cy.get(extraSuccessPage.whiteEll.congratulationText(), { timeout: 10000 })
        extraSuccessPage.congratulations().invoke('text').invoke('trim')
            .should('eq', 'გილოცავ!')
    }

    clickSignInButton(button) {
        cy.get(button).click({ force: true })
    }

    typeUserName(usserName) {
        cy.get(loginForm.elements.usernameInput()).type(usserName)
    }

    typeUserPassword(password) {
        cy.get(loginForm.elements.passwordInput()).type(password)
    }

    scroolToTimedDeals() {
        cy.scrollTo(0, 400, { duration: 700 }).wait(1000)
    }

    scroolToFirstSet() {
        cy.scrollTo(0, 1000, { duration: 1200 }).wait(1000)
    }

    responsiveScroolTimedDeals() {
        cy.scrollTo(0, 500, { duration: 1000 })
    }

    acceptCookiesMobile() {
        cy.get(homePage.elements.acceptCookiesButton()).click()
    }
}


export const baseHelper = new BaseHelper()