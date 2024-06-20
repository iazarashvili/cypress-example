

describe('მომხმარებლის მონაცემების გვერდის შეწმოწმება 1920 X 1080 რეზოლუციაზე ', () => {
    it('Case 1: მომხმარებლის მონაცემების გვერდის ტექსტის და ველების შემოწმება', () => {
        cy.authorization()
        cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.wait(500)

        cy.get('span').contains(' პროფილი').click({force: true})
        cy.contains('მონაცემები').should('be.visible')
            .and('have.css', 'font-size', '16px')

            // პირადი მონაცემების ქარდი
        cy.get('div[id="profile-edit-form"]').within(() => {
            cy.contains('სახელი').should('be.visible')
                .and('have.css', 'font-size', '12px')

            cy.get('input[placeholder="სახელი"]')
                .should('have.attr', 'placeholder', 'სახელი')
                .should('have.attr', 'maxlength', '64')

            cy.get('div._x_user-top-5 button:eq(0)')
                .should('be.enabled')
                .and('be.visible')

            cy.contains('გვარი').should('be.visible')
                .and('have.css', 'font-size', '12px')
                .invoke('text')
                .and('have.length.at.least', 4)

            cy.get('input[placeholder="გვარი"]')
                .should('have.attr', 'placeholder', 'გვარი')
                .and('have.attr', 'maxlength', '64')

            cy.get('div._x_user-top-5 button:eq(1)')
                .should('be.enabled')
                .and('be.visible')


            cy.contains('პირადი ნომერი').should('be.visible')
                .and('have.css', 'font-size', '12px')
                .invoke('text')
                .and('have.length.at.least', 12)

            cy.get('input[placeholder="პირადი ნომერი"]')
                .should('have.attr', 'placeholder', 'პირადი ნომერი')
                .and('have.attr', 'maxlength', '64')

            cy.get('div._x_user-top-5 button:eq(2)')
                .should('be.enabled')
                .and('be.visible')

            cy.contains('დაბადების თარიღი').should('be.visible')
                .and('have.css', 'font-size', '12px')
                .invoke('text')
                .and('have.length.at.least', 12)

            cy.get('input[placeholder="დაბადების თარიღი"]')
                .should('have.attr', 'placeholder', 'დაბადების თარიღი')
                .and('have.attr', 'maxlength', '64')

            cy.get('div._x_user-top-5 button:eq(3)')
                .should('be.enabled')
                .and('be.visible')

            cy.contains('ტელეფონის ნომერი').should('be.visible')
                .and('have.css', 'font-size', '12px')
                .invoke('text')
                .and('have.length.at.least', 12)

            cy.get('input[placeholder="ტელეფონის ნომერი"]')
                .should('have.attr', 'placeholder', 'ტელეფონის ნომერი')
                .and('have.attr', 'maxlength', '64')
            cy.contains('დაამატე ინფორმაცია').should('be.visible')

            cy.contains('ელ.ფოსტა').should('be.visible')
                .and('have.css', 'font-size', '12px')
                .invoke('text')
                .and('have.length.at.least', 7)

            cy.get('div._x_user-top-5 button:eq(3)')
                .should('be.enabled')
                .and('be.visible')
        })

        cy.contains('დამატებითი ნომრები').should('be.visible')
            .and('have.css', 'font-size', '18px')
            .invoke('text')
            .and('have.length.at.least', 15)


            // add phone button
        cy.get('button.add-phone i._x_icon-plus')
            .should('be.visible')

        cy.get('button.add-phone span:eq(0)').invoke('text').should('eq', 'ნომრის დამატება')
    })
})

