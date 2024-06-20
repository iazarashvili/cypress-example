import marketPage from "../../../../support/pages/marketPage";
import homePage from "../../../../support/pages/homePage";
import headerCategories from "../../../../support/pages/headerCategories";

describe("საბჰედერის მენიუს შემოწმება", () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        cy.visit('/express')
        cy.url('').should('eq', Cypress.env('express_page_url'))
    });

    it("Case 1: ექსპრეს კატეგორიის ღილაკის შემოწმება - ზომა", () => {
        cy.get(headerCategories.elements.expressButton())
            .should('have.css', 'width', '120px')
            .and ('have.css', 'height', '28px')
    });

    it("Case 2: ექსპრესის გვერდის სათაურის შემოწმება - ტექსტი, ფონტი, ზომა, ფერი", () => {
        cy.get(marketPage.elements.expressPageTitle())
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "24px")
            .invoke('text').should('eq', 'ექსპრესი')
    });

    it("Case 3: 'მიიღე პროდუქტი 30 წუთის განმავლობაში' - ტექსტის, ფონტის, ზომის და ფერის შემოწმება", () => {
        cy.contains("მიიღე პროდუქტი 35-50 წუთის განმავლობაში")
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.5)")
            .and("have.css", "font-size", "16px")
    });

    it("Case 4: 'ექსპრეს კატეგორიების რაოდენობის შემოწმება'", () => {
        cy.get(marketPage.elements.expressCategoryQuantity()).children().should('have.length', 4)
    });

    it("Case 5: 'მარკეტის გვერდზე კატეგორიების რაოდენობის შემოწმება'", () => {
        cy.get(marketPage.elements.marketPageCategoryQuantity()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get('._x_grid-cols-3').children().should('have.length', 6)
    });

    it("Case 6: 'ექსპრესის გვერდზე მარკეტის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.marketBanner())
        .should('have.css', 'width', '744px')
        .and('have.css', 'height', '213.46875px')
    });

    it("Case 7: 'ექსპრესის გვერდზე სათამაშოების ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.toysBanner())
        .should('have.css', 'width', '744px')
        .and('have.css', 'height', '213.46875px')
    });

    it("Case 8: 'ექსპრესის გვერდზე თავის მოვლის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.selfCareBanner())
        .should('have.css', 'width', '744px')
        .and('have.css', 'height', '213.46875px')
    });

    it("Case 9: 'ექსპრესის გვერდზე ტექნიკის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.electronicsBanner())
        .should('have.css', 'width', '744px')
        .and('have.css', 'height', '213.265625px')
    });

    it("Case 10: ძებნის ველში ექსპრეს ლეიბლის შემოწმება - ზომა, ფერი", () => {
        cy.get(marketPage.elements.expressLabel())
        .should('have.css', 'width', '117.015625px')
        .and("have.css", "background-color", "rgba(43, 39, 49, 0.1)")
        .and('have.css', 'height', '40px')
    });

    it("Case 11: ძებნის ველში ექსპრეს ლეიბლის დახურვის ღილაკის შემოწმება შემოწმება - ზომა", () => {
        cy.get(marketPage.elements.expressLabelCloseButton())
        .should('have.css', 'width', '16px')
        .and('have.css', 'height', '16px')
        .and('have.css', 'cursor', 'pointer')
    });

    it("Case 12: 'მარკეტის გვერდზე 'ხილი და ბოსტნეულის' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.fruitAndVegetablesBanner())
        .should('have.css', 'width', '234.65625px')
        .and('have.css', 'height', '173.734375px')
    });

    it("Case 13: 'მარკეტის გვერდზე 'პური და ფუნთუშეულის' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.breadAndCookiesBanner())
        .should('have.css', 'width', '234.671875px')
        .and('have.css', 'height', '173.75px')
    });


    it("Case 14: 'მარკეტის გვერდზე 'ბაკალეას' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url().should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.bakaleaBanner())
        .should('have.css', 'width', '234.671875px')
        .and('have.css', 'height', '173.75px')
    });

    it("Case 15: 'მარკეტის გვერდზე 'ხორცის და თევზის' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.meatAndFishBanner())
        .should('have.css', 'width', '234.65625px')
        .and('have.css', 'height', '173.734375px')
    });

    it("Case 16: 'მარკეტის გვერდზე 'ყავა და ჩაის' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.coffeeAndTeaBanner())
        .should('have.css', 'width', '234.671875px')
        .and('have.css', 'height', '173.75px')
    });

    it("Case 17: 'მარკეტის გვერდზე 'სააღდგომო შეთავაზების' ბანერის შემოწმება - ზომა'", () => {
        cy.get(marketPage.elements.marketBanner()).click()
        cy.url('').should('eq', Cypress.env('market_page_url'))
        cy.get(marketPage.elements.easterOfferBanner())
        .should('have.css', 'width', '234.671875px')
        .and('have.css', 'height', '173.75px')
    });

    it("Case 18: 'სათამაშოების გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.get(marketPage.elements.toysBanner()).click()
        cy.url('').should('eq', Cypress.env('toys_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("სათამაშოები")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "28px")
    });

    it("Case 19: 'თავის მოვლის გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.get(marketPage.elements.selfCareBanner()).click()
        cy.url('').should('eq', Cypress.env('selfcare_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("თავის მოვლა")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "28px")
    });

    it("Case 20: 'ტექნიკის გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.get(marketPage.elements.electronicsBanner()).click()
        cy.url('').should('eq', Cypress.env('electronics_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("ტექნიკა")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "28px")
    });

});
