

describe('Express პროდუქტების გვერდის, სერჩის, მისამართის და კატეგორიის ხის შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
        cy.wait(2000)
    })

    it('Case 1: ექსპრეს სერჩის შემოწმება', () => {
        cy.get('[formcontrolname="searchKeyword"]:eq(1)')
            .should('have.attr', 'placeholder', 'მოძებნე ექსპრესში')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Regular')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
    });

    it('Case 2: შემოწმება რომ მისამართი მითითებულია', () => {
        cy.get('app-header div._x_bg-white p._x_overflow-ellipsis:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.4)')
    });

    it('Case 3: ჩანს კატეგორიის ხე', () => {
        cy.wait(2000)
        cy.get('app-catalog div[class="_x_justify-between no-gutters _x_px-8"] div:eq(0)')
            .invoke('text').then((text) => {
                expect(text).to.include('პარიკები')
            })
    });

})

describe('Express გვერდის სორტირების დროპდაუნის ელემენტების შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
        cy.wait(500)
    })

    it('Case 1: ფილტრის შემოწმება ტექსტი (თარიღით) ფონტის ფერის და ზომის შწმოემწბა', () => {
        cy.get('div.filter-wrap h3 span')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 2:  სორტირების დროპდაუნის და მისი მნიშვნელობების შემოწმება', () => {
        cy.get('div.filter-wrap h3 span').click()

        cy.get('div[class="_x_relative _x_w-full"] p:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('eq', 'თარიღით')

        cy.get('div[class="_x_relative _x_w-full"] p:eq(1)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('eq', 'ფასი კლებადობით')

        cy.get('div[class="_x_relative _x_w-full"] p:eq(2)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('eq', 'ფასი ზრდადობით')

        cy.get('div[class="_x_relative _x_w-full"] p:eq(3)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('eq', 'ფასდაკლება')
    });
})

describe('Express გვერდის ფილტრების შემოწმება. ფილტრების ფორმა', () => {
    beforeEach('First settings', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
        cy.get('button i._x_icon-filters').click()
        cy.wait(2000)
    })

    it('Case 1: ტექსტი (ფილტრი) ფონტის ზომის და ფერის შემოწმება', () => {
        cy.get('div p[class="_x_font-bold _x_text-3 _x_leading-tight md:_x_hidden"]')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', ' ფილტრი ')
    });

    it('Case 2: ბოლო კატეგორიის შემოწმება', () => {
        cy.get('#category-list h2').should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
            .invoke('text').should('eq', ' პარიკები ')
    });

    it('Case 3: ტექსტი ( ფასი ₾ ) ფერის ფონტის და ზომის შემოწმება', () => {
        cy.get('#filters h3:eq(0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', ' ფასი ₾ ')
    });

    it('Case 4: მინ და მაქს ფასის მისათითებელი ველების შემოწმება', () => {
        cy.get('#filters div.ng-untouched input:eq(0)')
            .should('have.attr', 'placeholder', '-დან')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')

        cy.get('#filters div.ng-untouched input:eq(1)')
            .should('have.attr', 'placeholder', '-მდე')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 5: ტექსტი (შეთავაზებები) ფონტის ფერის და ზომის შემოწმება', () => {
        cy.get(':nth-child(2) > app-select-filter > .custom-switch > ._x_font-bold')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 6: შეთავაზების ჩექბოქსების შემოწმება ფასდაკლება და საჩუქარი', () => {
        cy.get('app-select-filter ul li label.custom-control-label:eq(0)')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgb(0, 0, 0)')

        cy.get('app-select-filter ul li label.custom-control-label:eq(1)')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 7: ტექსტი მიტანის მეთოდები ფონტი ფერი და ზომის გადაომწმება', () => {
        cy.get('app-select-filter h3:Eq(1)')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 8: შემოწმება რომ ფილტრებში ექსპრესი მონიშნულია', () => {
        cy.get('app-select-filter ul li .custom-checkbox i._x_bg-purple').should('exist')
        cy.get('app-select-filter ul li .custom-checkbox p:eq(1)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 9: გვერდზე პროდუქტების რაოდენობის შემოწმება', () => {
        cy.get('app-product-card').its('length').should('be.gt', 1)
    });


})