import homePage from "../../../../support/pages/homePage"

describe('გვერდი უსაფრთხოება შემოწმება 1920 X 1080 რეზოლუციაზე', () => {
    it('Case 1: პაროლის შეცვლის ფორმის შემოწმება', () => {
        cy.viewport(1920, 1080)
        cy.authorization()
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.get('span').contains('პაროლის შეცვლა').click({force: true})
        cy.url().should('include', '/user/profile/security')
        cy.get("head title:eq(0)").invoke("text")
        .should("equal", "Cypress რაც გაგიხარდება");

        cy.get('#profile-edit-form h2')
            .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', 'უსაფრთხოება')

        cy.get('form.ng-invalid').within(() => {
            cy.get('p._x_text-black:eq(0)').contains('მიმდინარე პაროლი')
                .should('have.text', 'მიმდინარე პაროლი')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
                .and('have.css', 'color', 'rgb(0, 0, 0)')

            cy.get('app-new-input[formcontrolname="currentPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="currentPassword"] label')
                .should('contain.text', 'მიმდინარე პაროლი')

            cy.get('p._x_text-black:eq(1)').should('have.text', 'ახალი პაროლი')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
                .and('have.css', 'color', 'rgb(0, 0, 0)')

            cy.get('app-new-input[formcontrolname="newPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="newPassword"] label')
                .should('contain.text', 'ახალი პაროლი')

            cy.get('app-new-input[formcontrolname="confirmPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="confirmPassword"] label')
                .should('contain.text', 'გაიმეორე პაროლი')

            cy.contains('პაროლის შეცვლა')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .invoke('text').should('eq', 'პაროლის შეცვლა')
        })
    })
})

describe('გვერდი უსაფრთხოება შემოწმება 375 X 812 რეზოლუციაზე', () => {
    it('Case 1: ველების და ტექსტის შემოწმება უსაფორთხოების გვერდზე ', () => {
        cy.viewport("iphone-x");
        cy.authorizationMobile()
        cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.get('span').contains('პაროლის შეცვლა').click({force: true})
        cy.url().should('include', '/user/profile/security')

        cy.get('#profile-edit-form h2')
            .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', 'უსაფრთხოება')

        cy.get('form.ng-invalid').within(() => {
            cy.get('p._x_text-black:eq(0)').contains('მიმდინარე პაროლი')
                .should('have.text', 'მიმდინარე პაროლი')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-family' , 'Conv_MarkGEO-Medium')
                .and('have.css', 'color' , 'rgb(0, 0, 0)')

            cy.get('app-new-input[formcontrolname="currentPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="currentPassword"] label')
                .should('contain.text', 'მიმდინარე პაროლი')

            cy.get('p._x_text-black:eq(1)').should('have.text', 'ახალი პაროლი')
                .and('have.css', 'font-size', '16px')
                .and('have.css', 'font-family' , 'Conv_MarkGEO-Medium')
                .and('have.css', 'color' , 'rgb(0, 0, 0)')

            cy.get('app-new-input[formcontrolname="newPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="newPassword"] label')
                .should('contain.text', 'ახალი პაროლი')

            cy.get('app-new-input[formcontrolname="confirmPassword"] input')
                .should('have.attr', 'maxlength', '64')
            cy.get('app-new-input[formcontrolname="confirmPassword"] label')
                .should('contain.text', 'გაიმეორე პაროლი')

            cy.get('[class="_x_text-2 _x_font-bold"]')
                .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
                .and('be.visible').and('have.css', 'font-size', '12px')
                .and('have.css', 'color', 'rgb(255, 255, 255)')
                .invoke('text').should('eq', 'პაროლის შეცვლა')

        })
    })
})

// TODO დასამატებელია ერრორ მესიჯები