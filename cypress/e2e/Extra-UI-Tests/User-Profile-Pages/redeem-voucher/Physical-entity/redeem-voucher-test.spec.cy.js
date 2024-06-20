import profileVoucherRedemptionPage from "../../../../../support/pages/profileVoucherRedemptionPage";

describe("ვაუჩერის განაღდების გვერდზე შესვლა", () => {
    beforeEach(() => {
        cy.firstSettings()
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('user/profile/voucher-redemption')
    })

    it("Case 1: პროფილის გვერდზე 'ვაუჩერის განაღდების' კატეგორიის სექციის - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.get(profileVoucherRedemptionPage.elements.voucherRedemptionSectionButton())
            .should('be.visible')
            .and('contain', 'ვაუჩერის განაღდება')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "16px")
    })

    it("Case 2: ვაუჩერის განაღდების გვერდზე 'ვაუჩერის გააქტიურების' ტექსტის შემოწმება - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.contains('ვაუჩერის გააქტიურება')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 3: ვაუჩერის განაღდების გვერდზე 'გააქტიურების შემდეგ თანხა ბალანსზე აგესახება' ტექსტის შემოწმება - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.contains('გააქტიურების შემდეგ თანხა ბალანსზე აგესახება')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 4: ვაუჩერის განაღდების გვერდზე 'შეიყვანე ათნიშნა კოდის' ველის და მისი სათაურის შემოწმება", () => {

        //ვაუჩერის განაღდების გვერდზე 'შეიყვანე ათნიშნა კოდის' ველის ბორდერის ზომის და ფერის შემოწმება
        cy.get(profileVoucherRedemptionPage.elements.enterVoucherCodeField())
            .should('be.visible')
            .and("have.css", "width", "412px")
            .and("have.css", "height", "48px")
            .and("have.css", "background-color", "rgb(255, 255, 255)")

        //ვაუჩერის განაღდების გვერდზე 'შეიყვანე ათნიშნა კოდის' ველის სათაურის შემომწმება - ტექსტი, ფერი, ზომა, ფონტი
        cy.contains('შეიყვანე ათნიშნა კოდი')
        .should('be.visible')
        .and("have.css", "font-family", "Conv_MarkGEO-Medium")
        .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
        .and("have.css", "font-size", "14px")
    })

    it("Case 5: ვაუჩერის განაღდების გვერდზე 'სად შევიძინო ვაუჩერი?' ტექსტის შემოწმება - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.contains('სად შევიძინო ვაუჩერი?')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(0, 68, 187)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 6: ვაუჩერის განაღდების გვერდზე 'სად შევიძინო ვაუჩერი? - ს' ღილაკზე დაკლიკების შემდეგ გადამისამართების და URL ის შემოწმება ", () => {
        cy.wait(2000)
        cy.contains('სად შევიძინო ვაუჩერი?').click()
        cy.url().should('include', 'https://staging.extra.ge/voucher')
    })

    it("Case 7: ვაუჩერის განაღდების გვერდზე 'გააქტიურება' ღილაკის შემოწმება, როდესაც ვაუჩერის კოდი არ არის შეყვანილი - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.get(profileVoucherRedemptionPage.elements.activateVoucherButton())
            .should('be.visible')
            .and("have.css", "width", "160px")
            .and("have.css", "height", "48px")
            .and("have.css", "background-color", "rgba(43, 39, 49, 0.3)")
    })

    it("Case 8: ვაუჩერის განაღდების გვერდზე 'გააქტიურება' ღილაკის შემოწმება, როდესაც ვაუჩერის კოდი შეყვანილია - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.wait(2000)
        cy.get(profileVoucherRedemptionPage.elements.enterVoucherCodeInput()).type('01234567891')
        cy.get(profileVoucherRedemptionPage.elements.activateVoucherButton())
            .should('be.visible')
            .and("have.css", "width", "160px")
            .and("have.css", "height", "48px")
            .and("have.css", "background-color", "rgb(122, 29, 255)")
    })

    it("Case 9: ვაუჩერის განაღდების გვერდზე 'გააქტიურება' ღილაკის ტექსტის შემოწმება, როდესაც ვაუჩერის კოდი არ არის შეყვანილი - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.get(profileVoucherRedemptionPage.elements.activateButtonText())
        .should('be.visible')
        .and('contain', 'გააქტიურება')
        .and("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(255, 255, 255)")
        .and("have.css", "font-size", "12px")
    })

    it("Case 10: ვაუჩერის განაღდების გვერდზე 'გააქტიურება' ღილაკის ტექსტის შემოწმება, როდესაც ვაუჩერის კოდი შეყვანილია - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.wait(2000)
        cy.get(profileVoucherRedemptionPage.elements.enterVoucherCodeInput()).type('01234567891')
        cy.get(profileVoucherRedemptionPage.elements.activateButtonText())
        .should('be.visible')
        .and('contain', 'გააქტიურება')
        .and("have.css", "font-family", "Conv_MarkGEO-Bold")
        .and("have.css", "color", "rgb(255, 255, 255)")
        .and("have.css", "font-size", "12px")
    })

    it("Case 11: ვაუჩერის განაღდების გვერდზე არავალიდური კოდის შეყვანის შემდეგ ერორის შემოწმება - ზომა, ფონტი, ფერი, ტექსტი", () => {
        cy.wait(2000)
        cy.get(profileVoucherRedemptionPage.elements.enterVoucherCodeInput()).type('01234567891')
        cy.get(profileVoucherRedemptionPage.elements.activateVoucherButton()).click()
        cy.get(profileVoucherRedemptionPage.elements.invalidVoucherCodeErrorBorder())
        .should('contain', 'არასწორი კოდი')
        .and("have.css", "height", "30px")
        .and("have.css", "background-color", "rgb(241, 45, 45)")
    })

})