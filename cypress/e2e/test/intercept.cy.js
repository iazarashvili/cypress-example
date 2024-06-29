describe('', () => {
    it('first test', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://extra.ge/')
        cy.intercept('POST','https://mercury.extra.ge/search/billie-jean').as('gimme')
        cy.wait('@gimme').then((interception) => {
            console.log(interception.response.body.data[0])
            expect(interception.response.body.data[0]).to.be.eq(896445)
        })
        
    });
})