
import expressProductPage from '../../../../support/pages/expressProductsPage'

describe('Express პროდუქტების გვერდის, სერჩის, მისამართის და კატეგორიის ხის შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
        cy.get(expressProductPage.whiteElements.whiteAddCardButton(), {timeout: 10000})
    })

    it('Case 1: ექსპრეს სერჩის შემოწმება', () => {
        cy.get('._x_hidden > ._x_left-0 > ._x_text-3')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('eq', 'ექსპრესი')
        
        cy.get('div i._x_icon-remove._x_h-8')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'min-width', '16px')
            .and('have.css', 'width', '16px')
            .and('have.css', 'min-height', '16px')
            .and('have.css', 'height', '16px')
    });

    it('Case 2: შემოწმება რომ მისამართი მითითებულია', () => {
        cy.get('div._x_gap-1 p._x_text-dark')
            .should('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').then((text) => {
                expect(text).to.include('თბილისი')
            })
    });

    it('Case 3: ჩანს კატეგორიის ხე', () => {
        cy.get('#category-list h2')
            .invoke('text').then((text) => {
                expect(text).to.include('პარიკები')
            })
    });

})

describe('Express გვერდის კატალოგის საიდბარის შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
    })

    it('Case 1: ტექსტი (კატეგორია) ფონტის ზომის და ფერის შემოწმება', () => {
        cy.get('#catalog-sidebar h3._x_mt-12')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').should('eq', ' კატეგორია ')
    });

    it('Case 2: ბოლო კატეგორიის აიქონის და ტექსტის შემოწმება ', () => {
        cy.get('#category-list i._x_icon-arrow-left')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-style', 'normal')
            .and('have.css', 'font-family', 'ex-icon')
            .and('have.css', 'font-size', '22px')
            .and('have.css', 'cursor', 'pointer')

        cy.get('#category-list h2')
            .should('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .invoke('text').should('eq', ' პარიკები ')
    });

    it('Case 3: ფასის ფილტრის შემოწმება', () => {
        cy.get('#filters div._x_justify-start h3')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').should('eq', ' ფასი ₾ ')

        cy.get('#filters div.ng-untouched input:eq(0)')
            .should('have.attr', 'placeholder', '-დან')
            .and('have.attr', 'type', 'number')


        cy.get('#filters div.ng-untouched input:eq(1)')
            .should('have.attr', 'placeholder', '-მდე')
            .and('have.attr', 'type', 'number')

        cy.get('#filters ngx-slider')
            .should('have.class', 'ngx-slider animate')
    });

    it('Case 4: შემოწმება რომ არ არის მონიშნული შეთავაზებების ფილტრები', () => {
        cy.get('app-select-filter ul li input:eq(0)').should('not.have.class', 'active')
        cy.get('app-select-filter ul li input:eq(1)').should('not.have.class', 'active')
    });

    it('Case 5: შემოწმება მიტანის მეთოდებში რომ არის მონიშული ექსპრესი', () => {
        cy.get('app-select-filter ul li div i._x_bg-purple')
            .should('exist').and('have.class', '_x_bg-purple')
    });
})

describe('Express გვერდის არჩეული ფილტრების და სორტირების შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(1920, 1080)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.visit(Cypress.env('express_products_page_url'))
    })
    it('Case 1: არჩეული ფილტრების გასუფთავების ღილაკი ჩანს და კლიკებადია', () => {
        cy.get('[class="_x_flex _x_justify-end _x_items-start _x_w-full"] button span')
            .should('have.css', 'color', 'rgb(241, 45, 45)')
            .and('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'cursor', 'pointer')
            .invoke('text').should('eq', 'გასუფთავება')

        // * გასუფთავების ღილაკზე აიქონის შემოწმება

        cy.get('._x_icon-remove-bin')
            .should('have.css', 'color', 'rgb(241, 45, 45)')
            .and('have.css', 'font-style', 'normal')
            .and('have.css', 'font-family', 'ex-icon')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'cursor', 'pointer')
    });

    it('Case 2: არჩეული ფილტრის ღილაკის (ექსპრესი) შემოწმება', () => {
        cy.get('span[class="_x_font-medium _x_text-2 _x_text-black"]')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'cursor', 'pointer')
            .invoke('text').should('eq', 'ექსპრესი')

        // * ექსპრესი ფილტრის ღილაკზე დახურვის აიქონის შემოწმება

        cy.get('a i._x_icon._x_icon-remove')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-style', 'normal')
            .and('have.css', 'font-family', 'ex-icon')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'cursor', 'pointer')
    });

    it('Case 3: სორტირების შემოწმება დეფაულტად არის ფასი კლებადობით', () => {
        cy.get('._x_min-w-115 span span')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'cursor', 'pointer')
        .invoke('text').should('eq', 'რჩეული')
    });

    it('Case 4: სორტირების დროპდაუნის და მისი მნიშვნელობების შემოწმება', () => {
        const sortDropDownItems = [
            " რჩეული ",
            " განთავსების თარიღით ",
            " ფასი კლებადობით ",
            " ფასი ზრდადობით ",
            " ფასდაკლება "
        ]

        cy.get('._x_min-w-115 ul li').each((item, index) => {
            expect(Cypress.$(item).text()).to.eq(sortDropDownItems[index])
            cy.wrap(item).should('have.css', 'font-size', '14px')
        })
    });
})