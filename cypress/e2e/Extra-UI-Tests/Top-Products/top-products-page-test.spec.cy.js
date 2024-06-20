import homePage from "../../../support/pages/homePage";


describe("ტოპ პროდუქტების გვერდის შემოწმება", () => {
    beforeEach(() => {
        cy.firstSettings()
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('')
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        cy.contains('პოპულარული').click()
        cy.url().should('eq', Cypress.env('popular_set_page_url'))
        cy.get('#category-list li:eq(1)').click({ force: true }); 
    })

    it("Case 1: ტექსტი ( პოპულარული პროდუქტები ) ფონტის ზომის და ფერის შემოწმება", () => {
        cy.contains('პოპულარული პროდუქტები')
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "24px")
    })

    it("Case 2: კატეგორია 'ყველა' ჩანს", () => {
        cy.contains('ყველა')
            .click({ force: true })
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.5)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 3: კატეგორიების ქვეშ 'ფასის' სექცის ტექსტის ზომა, ფონტი და ფერი სწორია", () => {
        cy.contains(' ფასი ₾ ')
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 4: კატეგორიების ქვეშ ფასის' სექცია ჩანს და საწყისი ფასის სიგანე სწორია ", () => {
        cy.get('[placeholder="-დან"]')
            .should('be.visible')
            .invoke('css', 'width')
            .should('match', /165.*px/)
    })

    it("Case 5: კატეგორიების ქვეშ ფასის' სექცია ჩანს და საბოლოო ფასის სიგანე სწორია ", () => {
        cy.get('[placeholder="-მდე"]')
            .should('be.visible')
            .invoke('css', 'width')
            .should('match', /165.*px/)
    })

    it("Case 6: კატეგორიების ქვეშ 'შეთავაზებებში' ფასდაკლების და საჩუქრის ჩეკბოქსები ჩანს", () => {
        cy.contains('ფასდაკლება')
        cy.contains('საჩუქარი')
    })

    it("Case 7: კატეგორიების ქვეშ 'შეთავაზებებში' ფასდაკლება' და 'საჩუქრი' ტექსტის ზომა, ფერი და ფონტი სწორია", () => {
        cy.contains('ფასდაკლება')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px");

        cy.contains('საჩუქარი')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 8: გვერდზე პროდუქტი ჩანს და ფოტოს (ბორდერის) ზომა სწორია", () => {
        cy.get('app-product-card a._x_cursor-pointer:eq(0)')
            .should('have.css', 'width', '245.5px')
    })

    it("Case 9: გვერდზე პროდუქტის შენახვის ღილაკი ჩანს და ზომა და ფერი სწორია", () => {
        cy.get('#addWishList_0')
            .should("have.css", "color", "rgb(0, 0, 0)") // don't have <3 icon color in Figma
            .and("have.css", "width", "24px")
            .and("have.css", "height", "24px")
    })

    it("Case 10: 'კალათაში დამატება' ღილაკის ზომა, ფერი და ფონტი სწორია", () => {
        cy.get('#AddToCart-card-text-0')
            .should("have.css", "font-size", "14px")
            .and("have.css", "color", "rgb(122, 29, 255)")
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
    })

    it("Case 11: გვერდზე პროდუქტის დასახელების ტექსტის ზომა, ფონტი და ფერი სწორია", () => {
        cy.get('#productTitle_0')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })
});



describe("ტოპ პროდუქტების სეტის შემოწმება", () => {
    beforeEach(() => {
        cy.viewport("iphone-x")
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
        cy.visit(Cypress.env('popular_set_page_url'))
        cy.url('').should('eq', Cypress.env('popular_set_page_url'))
        cy.wait(2000)       
    });

    it("Case 1: 'პოპულარული' გვერდის სათაური ჩანს ტექსტის ზომა, ფონტი და ფერი სწორია", () => {
        cy.contains(' პოპულარული პროდუქტები ')
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "24px")
    });

    it("Case 2: კატეგორია 'ყველა' ჩანს", () => {
        cy.get('button i._x_icon-filters').click()
        cy.contains(' ყველა ')
            .click({ force: true })
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 3: კატეგორიების ქვეშ 'ფასის' სექცის ტექსტის ზომა, ფონტი და ფერი სწორია", () => {
        cy.get('button i._x_icon-filters').click().wait(1000)
        cy.get('#category-list li:eq(1)').click()
        cy.contains(' ფასი ₾ ')
            .should("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 4: კატეგორიების ქვეშ ფასის' სექცია ჩანს და საწყისი ფასის სიგანე სწორია ", () => {
        cy.get('button i._x_icon-filters').click().wait(1000)
        cy.get('#category-list li:eq(1)').click()
        cy.scrollTo(0, 300)
        cy.get('[placeholder="-დან"]')
            .should('be.visible')
            .invoke('css', 'width')
            .should('match', /120.*px/)
    })

    it("Case 5: კატეგორიების ქვეშ ფასის' სექცია ჩანს და საბოლოო ფასის სიგანე სწორია ", () => {
        cy.get('button i._x_icon-filters').click().wait(1000)
        cy.get('#category-list li:eq(1)').click()
        cy.get('[placeholder="-მდე"]')
            .should('be.visible')
            .invoke('css', 'width')
            .should('match', /120.*px/)
    })

    it("Case 6: კატეგორიების ქვეშ 'შეთავაზებებში' ფასდაკლების და საჩუქრის ჩეკბოქსები ჩანს", () => {
        cy.get('button i._x_icon-filters').click().wait(1000)
        cy.get('#category-list li:eq(1)').click()
        cy.contains('ფასდაკლება')
        cy.contains('საჩუქარი')
    })

    it("Case 7: კატეგორიების ქვეშ 'შეთავაზებებში' ფასდაკლება' და 'საჩუქრი' ტექსტის ზომა, ფერი და ფონტი სწორია", () => {
        cy.get('button i._x_icon-filters').click().wait(1000)
        cy.get('#category-list li:eq(1)').click()
        cy.contains(' ფასდაკლება ')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px");

        cy.contains('საჩუქარი')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 8: გვერდზე პროდუქტი ჩანს და ფოტოს (ბორდერის) ზომა სწორია", () => {
        cy.wait(2000)
        cy.get('app-product-card a._x_overflow-hidden:eq(0)')
            .should('have.css', 'height', '130px')
            .and('have.css', 'width', '120.828125px')
    })

    it("Case 9: გვერდზე პროდუქტის ვიშლისტში შენახვის ღილაკი ჩანს და ზომა და ფერი სწორია", () => {
        cy.get('#addWishList_0')
            .should("have.css", "color", "rgb(0, 0, 0)") // don't have <3 icon color in Figma
            .and("have.css", "width", "24px")
            .and("have.css", "height", "24px")
    })

    it("Case 10: რჩეული '<3' ღილაკის ზომა, ფერი და ფონტი სწორია", () => {
        cy.get('#addWishList_0')
            .should("have.css", "color", "rgb(0, 0, 0)") // don't have <3 icon color in Figma
            .and("have.css", "width", "24px")
            .and("have.css", "height", "24px")
    })

    it("Case 11: გვერდზე პროდუქტის დასახელების ტექსტის ზომა, ფონტი და ფერი სწორია", () => {
        cy.get('#productTitle_0')
            .should("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "12px")
    })
})


