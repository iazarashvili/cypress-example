import homePage from "../../../support/pages/homePage";

describe("საბჰედერის მენიუს შემოწმება", () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
    });

    it("Case 1: 'ფასდაკლებები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('ფასდაკლებები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    // TODO გადასაკეთებელია
    // it('Case 2: "ექსპრესი" კატეგორია ჩანს ჰედერში, ფერის ზომის და ფონტის შემოწმება', () => {
    //     cy.get(homePage.elements.expressText())
    //         .should("have.css", "font-family", "Conv_MarkGEO-Medium")
    //         .and("have.class", "hover:_x_text-purple")
    //         .and("have.css", "color", "rgb(43, 39, 49)")
    //         .and("have.css", "font-size", "14px")
    // });

    it("Case 3: 'პოპულარული' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('პოპულარული')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 4: 'მაღაზიები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('მაღაზიები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 5: 'სათამაშოები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('სათამაშოები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 6: 'ტექნიკა' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('ტექნიკა')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 7: 'სახლი დეკორი ავეჯი' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('სახლი დეკორი ავეჯი')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    });
})

describe("Top-Products Mobile", () => {
    beforeEach('First Steos', () => {
        cy.viewport("iphone-x");
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
    })
    it("Case 1: 'ფასდაკლებები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('ფასდაკლებები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

        // TODO გადასაკეთებელია ტესტი
    // it.only('Case 2: "ექსპრესი" კატეგორია ჩანს ჰედერში, ფერის ზომის და ფონტის შემოწმება', () => {
    //     cy.get(homePage.elements.expressText())
    //         .should("have.css", "font-family", "Conv_MarkGEO-Medium")
    //         .and("have.class", "hover:_x_text-purple")
    //         //.and("have.css", "color", "rgb(43, 39, 49)")
    //         .and("have.css", "font-size", "14px")
    // });

    it("Case 3: 'პოპულარული' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('პოპულარული')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 4: 'მაღაზიები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('მაღაზიები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 5: 'სათამაშოები' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('სათამაშოები')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 6: 'ტექნიკა' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('ტექნიკა')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });

    it("Case 7: 'სახლი დეკორი ავეჯი' ღილაკი ჩანს და ფერი, ზომა და ფონტი სწორია", () => {
        cy.contains('სახლი დეკორი ავეჯი')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.class", "hover:_x_text-purple")
            .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
            .and("have.css", "font-size", "14px")
    });
});
