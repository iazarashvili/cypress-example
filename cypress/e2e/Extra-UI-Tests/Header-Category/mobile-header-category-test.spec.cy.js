import headerCategories from "../../../support/pages/headerCategories";

headerCategories

describe("საბჰედერის მენიუს შემოწმება", () => {
    beforeEach('First Steps', () => {
        cy.viewport('iphone-x')
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
    });

    it("Case 1: 'ფასდაკლებების' ღილაკის შემოწმება", () => {
        cy.contains('ფასდაკლებები')
        .should('be.visible')
        .and('contain', 'ფასდაკლებები')
        .and("have.css", "font-family", "Conv_MarkGEO-Medium")
        .and("have.class", "hover:_x_text-purple")
        .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
        .and("have.css", "font-size", "14px")
    });

    it("Case 2: 'ფასდაკლებების' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('ფასდაკლებები').click()
        cy.url().should('be.equal', 'https://staging.extra.ge/discount?filterByDiscount=true')
    });

    it("Case 3: 'ვაუჩერის' ღილაკის შემოწმება", () => {
        cy.contains('ვაუჩერი')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 4: 'ვაუჩერის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('ვაუჩერი').click()
        cy.url().should('be.equal', 'https://staging.extra.ge/voucher')
    });

    it("Case 5: 'მაღაზიების' ღილაკის შემოწმება", () => {
        cy.contains('ვაუჩერი')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 6: 'მაღაზიების' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('მაღაზიები').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/sellers')
    });

    it("Case 7: 'პოპულარულის' ღილაკის შემოწმება", () => {
        cy.contains('პოპულარული').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 8: 'პოპულარულის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('პოპულარული').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/set/popular/5710')
    });

    it("Case 9: 'სათამაშოების' ღილაკის შემოწმება", () => {
        cy.contains('სათამაშოები').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 10: 'პოპულარულის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('სათამაშოები').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/satamashoebi/1386')
    });

    it("Case 11: 'ტექნიკის' ღილაკის შემოწმება", () => {
        cy.contains('ტექნიკა').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 12: 'ტექნიკის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('ტექნიკა').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/teqnika/1')
    });

    it("Case 13: 'სახლი დეკორი ავეჯის' ღილაკის შემოწმება", () => {
        cy.contains('სახლი დეკორი ავეჯი').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 14: 'სახლი დეკორი ავეჯის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('სახლი დეკორი ავეჯი').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/sakhli-dekori-aveji/8')
    });

    it("Case 15: 'სპორტი და მოგზაურობის' ღილაკის შემოწმება", () => {
        cy.contains('სპორტი და მოგზაურობა').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 16: 'სპორტი და მოგზაურობის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('სპორტი და მოგზაურობა').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/sporti-da-mogzauroba/918')
    });

    it("Case 17: 'სილამაზე და თავის მოვლის' ღილაკის შემოწმება", () => {
        cy.contains('სილამაზე და თავის მოვლა').scrollIntoView()
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 18: 'სილამაზე და თავის მოვლის' ღილაკზე დაკლიკება და გვერდის მისამართის შემოწმება", () => {
        cy.contains('სილამაზე და თავის მოვლა').scrollIntoView().click()
        cy.url().should('be.equal', 'https://staging.extra.ge/catalog/silamaze-da-tavis-movla/176')
    });

    it("Case 19: 'ექსპრესის' ღილაკის შემოწმება", () => {
        cy.get(headerCategories.elements.expressButton())
            .should('be.visible')
            .and("have.css", "width", "120px")
            .and("have.css", "height", "28px")
            .and("have.css", "background-color", "rgb(5, 206, 149)")
    });

    it("Case 20: 'ექსპრესის' ღილაკზე დაკლიკება და მისამართის შემოწმება", () => {
        cy.get(headerCategories.elements.expressButton()).click()
        cy.url().should('be.equal', 'https://staging.extra.ge/express')
    });

});
