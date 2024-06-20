import marketPage from "../../../../support/pages/marketPage";
import homePage from "../../../../support/pages/homePage";

describe("საბჰედერის მენიუს შემოწმება", () => {
    beforeEach('First Steps', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        cy.visit('/express')
        cy.url('').should('eq', Cypress.env('express_page_url'))
    });

    it("Case 1: ექსპრესის გვერდის სათაურის შემოწმება - ტექსტი, ფონტი, ზომა, ფერი", () => {
        cy.get(marketPage.elements.expressPageTitle())
            .contains("ექსპრესი")
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "18px")
    });

    it("Case 2: 'ექსპრეს კატეგორიების რაოდენობის შემოწმება'", () => {
        cy.get(marketPage.elements.expressCategoryQuantity()).children().should('have.length', 4)
    });

    it("Case 3: 'მარკეტის გვერდზე კატეგორიების რაოდენობის შემოწმება'", () => {
        cy.get(marketPage.elements.marketPageCategoryQuantity()).click()
        cy.get('._x_grid-cols-3').children().should('have.length', 6)
    });

    it("Case 4: 'ექსპრესის გვერდზე მარკეტის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.marketBanner())
        .should('have.css', 'width', '328px')
    });

    it("Case 5: 'ექსპრესის გვერდზე სათამაშოების ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.toysBanner())
        .should('have.css', 'width', '328px')
    });

    it("Case 6: 'ექსპრესის გვერდზე თავის მოვლის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.selfCareBanner())
        .should('have.css', 'width', '328px')
    });

    it("Case 7: 'ექსპრესის გვერდზე ტექნიკის ბანერის შემოწმება'", () => {
        cy.get(marketPage.elements.electronicsBanner())
        .should('have.css', 'width', '328px')
    });


    it("Case 8: 'სათამაშოების გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.get(marketPage.elements.toysBanner()).click()
        cy.url('').should('eq', Cypress.env('toys_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("სათამაშოები")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "18px")
    });

    it("Case 9: 'თავის მოვლის გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.get(marketPage.elementsMobile.selfCareBannerMobile()).click()
        cy.url('').should('eq', Cypress.env('selfcare_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("თავის მოვლა")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "18px")
    });

    it("Case 10: 'ტექნიკის გვერდზე გვერდის სათაურის შემოწმება - ზომა, ფონტი, ფერი'", () => {
        cy.scrollTo(0, 300)
        cy.get(marketPage.elements.electronicsBanner()).click()
        cy.url('').should('eq', Cypress.env('electronics_page_url'))
        cy.get(marketPage.elements.categoryPageTitle())
        .contains("ტექნიკა")
        .should("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(0, 0, 0)")
        .and("have.css", "font-size", "18px")
    });

});
