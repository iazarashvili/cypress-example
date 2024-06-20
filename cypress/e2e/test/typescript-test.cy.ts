

describe('test', () => {
    beforeEach('asd', () => {
        cy.viewport(1920, 1080)
        cy.visit('')
        cy.get('#username').type('scByKxLa36Wcypju');
        cy.get('#password').type('DbeGwVkuLee9Zjvf');
        cy.wait(1000)
        cy.contains('Sign In').click({force: true});
        cy.wait(2000)
    })
    it('asd', () => {
        interface TestCase {
            input: string,
            expectedOutput: string
        }

        const testCases: TestCase[] = [
            { input: '[routerlink="/sellers"]', expectedOutput: 'https://staging.extra.ge/sellers' },
            { input: '._x_relative > ._x_whitespace-nowrap', expectedOutput: 'https://staging.extra.ge/catalog/set/popular/5710' },
            { input: '[routerlink="/catalog/satamashoebi/1386"]', expectedOutput: 'https://staging.extra.ge/catalog/satamashsoebi/1386' }
        ]

        for (const { input, expectedOutput } of testCases) {
            cy.get(input).click()
            cy.url().should('eq', expectedOutput)
            cy.get('[routerlink="/"]:eq(0)').click()
        }
    });
})