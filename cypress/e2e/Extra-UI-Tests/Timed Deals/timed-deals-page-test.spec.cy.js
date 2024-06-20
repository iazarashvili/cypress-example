// TODO თაიმ დილსის ტესტია დასაწერი თავიდან

describe('დღის შეთავაზების გვერდის შემოწმება', () => {
    beforeEach('First Steps', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit(Cypress.env('timed_deals_set_url'))
        cy.get('head title:eq(0)').invoke('text')
            .should('equal', 'დღის შეთავაზება | Extra.ge - ონლაინ მაღაზია')
    })

    it('Case 1: ტექსტი (დღის შეთავაზებები) შემოწმება', () => {
        cy.get('div p._x_text-8').should('have.css', 'font-size', '24px')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('eq', 'დღის შეთავაზება')
    });

    it('Case 2: ტექსტი (ყოველდღე, 12:00 საათზე, ექსკლუზიური შეთავაზებები) შემოწმება', () => {
        cy.get('p._x_text-3 span')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').invoke('trim').should('eq', '(ყოველდღე, 12:00 საათზე, ექსკლუზიური შეთავაზებები)')
    });

    it('Case 3: საიდბარის ტექსტის ( კატეგორია ) შემოწმება', () => {
        cy.get('div h3._x_text-3._x_text-black:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('eq', 'კატეგორია')
    });

    it('Case 4: საიდბარის კატეგორიის ტექსტი (ყველა) შემოწმება', () => {
        cy.get('div h2._x_mb-0._x_font-bold')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('include', 'ყველა')
    });
})

describe('დღის შეთავაზების გვერდის შემოწმება', () => {
    beforeEach('First Steps', () => {
        cy.viewport("iphone-x")
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit(Cypress.env('timed_deals_set_url'))
        cy.get('head title:eq(0)').invoke('text')
            .should('equal', 'დღის შეთავაზება | Extra.ge - ონლაინ მაღაზია')
    })

    it('Case 1: ტექსტი (დღის შეთავაზებები) შემოწმება', () => {
        cy.get('div p._x_text-8').should('have.css', 'font-size', '24px')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('eq', 'დღის შეთავაზება')
    });

    it('Case 2: ტექსტი (ყოველდღე, 12:00 საათზე, ექსკლუზიური შეთავაზებები) შემოწმება', () => {
        cy.get('p._x_text-3 span')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').invoke('trim').should('eq', '(ყოველდღე, 12:00 საათზე, ექსკლუზიური შეთავაზებები)')
    });

    it('Case 3: საიდბარის ტექსტის ( კატეგორია ) შემოწმება', () => {
        cy.get('div h3._x_text-3._x_text-black:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('eq', 'კატეგორია')
    });

    it('Case 4: საიდბარის კატეგორიის ტექსტი (ყველა) შემოწმება', () => {
        cy.get('div h2._x_mb-0._x_font-bold')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').invoke('trim').should('include', 'ყველა')
    });
});