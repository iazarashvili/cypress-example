import header, { elements } from "../../../../support/pages/header";
import voucherPage from "../../../../support/pages/voucherPage";

describe("ვაუჩერის გვერდზე შესვლა", () => {
    beforeEach(() => {
        cy.firstSettings()
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        // cy.visit('')
        cy.get(header.elements.voucherCategory()).click()
    })

    it("Case 1: 'აჩუქე ექსტრა ვაუჩერი' ტექსტის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.contains('აჩუქე ექსტრა ვაუჩერი')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "32px")
    })

    it("Case 2: 'შეარჩიე შენთვის სასურველი' ტექსტის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.contains('შეარჩიე შენთვის სასურველი')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "24px")
    })

    it("Case 3: 'ვაუჩერის შესახებ' ტექსტის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.contains('ვაუჩერის შესახებ')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 4: 'ვაუჩერის შესახებ' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.aboutVoucherDescription())
            .should('be.visible')
            .and('contain', 'ექსტრა ვაუჩერით ყველა მომხმარებელს შეუძლია თანხა დაისვას ბალანსზე, სასურველი ნივთების არჩევის შემდეგ კი მისი საფასური ბალანსით გადაიხადოს.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 5: 'შეარჩიე ვაუჩერის ტიპი' ტექსტის და რიგითობის შემოწმება", () => {

        // "შეარჩიე ვაუჩერის ტიპი" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.selectVoucherTypeOrderIndicator())
            .should('be.visible')
            .and('contain', '1')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "შეარჩიე ვაუჩერის ტიპი" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.selectVoucherTypeTitle())
            .should('be.visible')
            .and('contain', 'შეარჩიე ვაუჩერის ტიპი')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 6: 'როგორი ვაუჩერი გსურს?' ტექსტის შემოწმება - ზომა, ფონტი, ფერი", () => {
            cy.contains('როგორი ვაუჩერი გსურს?')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 7: 'ელექტრონული' ვაუჩერის ღილაკის და ტექსტის შემოწმება", () => {

        // "ელექტრონული" ვაუჩერის ღილაკის შემოწმება
        cy.get(voucherPage.elements.digitalVoucherButton())
            .should('be.visible')
            .and("have.css", "width", "155.109375px")
            .and("have.css", "height", "50px")
            .and("have.css", "background-color", "rgb(255, 255, 255)")
        
        // "ელექტრონული" ვაუჩერის ღილაკის ტექსტის შემოწმება
        cy.get(voucherPage.elements.digitalVoucherText())
        .should('be.visible')
        .and('contain', 'ელექტრონული')
        .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
        .and("have.css", "color", "rgb(122, 29, 255)")
        .and("have.css", "font-size", "16px")
        
    })

    it("Case 8: 'ფიზიკური' ვაუჩერის ღილაკის და ტექსტის შემოწმება", () => {

        // "ფიზიკური" ვაუჩერის ღილაკის შემოწმება
        cy.get(voucherPage.elements.physicalVoucherButton())
            .should('be.visible')
            .and("have.css", "width", "107.5234375px")
            .and("have.css", "height", "50px")
            .and("have.css", "background-color", "rgb(255, 255, 255)")
        
        // "ფიზიკური" ვაუჩერის ღილაკის ტექსტის შემოწმება
        cy.get(voucherPage.elements.physicalVoucherText())
        .should('be.visible')
        .and('contain', 'ფიზიკური')
        .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
        .and("have.css", "color", "rgb(43, 39, 49)")
        .and("have.css", "font-size", "16px")
        
    })

    it("Case 9: 'აირჩიე ვაუჩერის დიზაინი' ტექსტის და რიგითობის შემოწმება", () => {

        // "აირჩიე ვაუჩერის დიზაინი" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.selectVoucherDesignOrderIndicator())
            .should('be.visible')
            .and('contain', '2')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "აირჩიე ვაუჩერის დიზაინი" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.selectVoucherDesignTitle())
            .should('be.visible')
            .and('contain', 'აირჩიე ვაუჩერის დიზაინი:')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })


    it("Case 10: 'აირჩიე ვაუჩერის დიზაინი' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.selectVoucherDesignDescritpion())
            .should('be.visible')
            .and('contain', 'ვაუჩერი იქნება შენივე შერჩეული ვიზუალით.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 11: 'ვაუჩერის ფოტოს' შემოწმება - ზომა", () => {
        cy.get(voucherPage.elements.voucherImage())
            .should('be.visible')
            .and("have.css", "width", "173px")
            .and("have.css", "height", "88px")
    })

    it("Case 12: 'ვაუჩერის ფოტოს' ბორდერის შემოწმება - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.voucherImageBorder())
            .should('be.visible')
            .and("have.css", "width", "191px")
            .and("have.css", "height", "104px")
            .and ("have.css", "background-color", "rgb(255, 255, 255)")
    })

    it("Case 13: 'შეარჩიე ვაუჩერის ტიპი' ტექსტის და რიგითობის შემოწმება", () => {

        // "შეარჩიე ვაუჩერის ტიპი" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.selectVoucherPriceOrderIndicator())
            .should('be.visible')
            .and('contain', '3')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "შეარჩიე ვაუჩერის ტიპი" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.selectVoucherPriceText())
            .should('be.visible')
            .and('contain', 'აირჩიე ვაუჩერის ღირებულება:')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 14: 'აირჩიე ვაუჩერის ღირებულება' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.selectVoucherPriceDescription())
            .should('be.visible')
            .and('contain', 'მონიშნე სასურველი თანხა.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 15: 'ვაუჩერის ფასის' ღილაკის შემოწმება - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.voucherPriceButton())
            .should('be.visible')
            .and("have.css", "width", "112px")
            .and("have.css", "height", "80px")
            .and ("have.css", "background-color", "rgb(255, 255, 255)")
    })

    it("Case 16: 'აირჩიე ვაუჩერის რაოდენობა:' ტექსტის და რიგითობის შემოწმება", () => {

        // "აირჩიე ვაუჩერის რაოდენობა:" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.selectVoucherQuantityIndicator())
            .should('be.visible')
            .and('contain', '4')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "აირჩიე ვაუჩერის რაოდენობა:" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.selectVoucherQuantityTitle())
            .should('be.visible')
            .and('contain', 'აირჩიე ვაუჩერის რაოდენობა:')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })
    
    it("Case 17: 'აირჩიე ვაუჩერის რაოდენობა' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.selectVoucherQuantityDescription())
            .should('be.visible')
            .and('contain', 'ერთზე მეტი ვაუჩერის შეძენისას, მითითებული იფორმაცია იქნება იდენტური.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 18: 'ვაუჩერის რაოდენობის' მისათითებელი ველის შემოწმება - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.voucherQuantityFied())
            .should('be.visible')
            .and("have.css", "width", "246px")
            .and("have.css", "height", "48px")
            .and("have.css", "color", "rgb(122, 29, 255)")
    })

    it("Case 19: 'ვაუჩერის რაოდენობის' მისათითებელ ველში '-' აიქონის შემოწმება - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.decreaseVoucherQuantityButton())
            .should('be.visible')
            .and("have.css", "width", "24px")
            .and("have.css", "height", "24px")
            .and("have.css", "color", "rgba(43, 39, 49, 0.2)")
    })

    it("Case 20: 'ვაუჩერის რაოდენობის' მისათითებელ ველში '+' აიქონის შემოწმება - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.increaseVoucherQuantityButton())
            .should('be.visible')
            .and("have.css", "width", "24px")
            .and("have.css", "height", "24px")
            .and("have.css", "color", "rgba(43, 39, 49, 0.2)")
    })

    it("Case 21: 'ვაუჩერის რაოდენობის' მისათითებელ ველში რაოდენობის მაჩვენებლის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.voucherQuantityIndicator())
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(0, 0, 0)")
            .and("have.css", "font-size", "16px")
    })

    it("Case 22: 'შეარჩიე ვაუჩერის ტიპი' ტექსტის და რიგითობის შემოწმება", () => {

        // "შეავსე ადრესატის მონაცემების" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.enterReceiverDetailsOrderIndicator())
            .should('be.visible')
            .and('contain', '5')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "შეავსე ადრესატის მონაცემების" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.enterReceiverDetailsTitle())
            .should('be.visible')
            .and('contain', 'შეავსე ადრესატის მონაცემები:')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 23: 'შეავსე ადრესატის მონაცემების' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.get(voucherPage.elements.enterReceiverDetailsDescription())
            .should('be.visible')
            .and('contain', 'მიუთითე ადრესატის სახელი და აირჩიე ელ.ფოსტაზე გაუგზავნი ვაუჩერს თუ მობილურზე.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 24: 'მიმღების სახელის' ველის შემოწმება - ზომა, ფერი, ფონტი, ტექსტი", () => {

        // მიმღების სახელის ველის შემოწმება
        cy.get(voucherPage.elements.receiverNameField()).scrollIntoView()
            .should('be.visible')
            .and("have.css", "width", "384px")
            .and("have.css", "height", "48px")
            .and("have.css", "color", "rgb(43, 39, 49)")

        //მიმღების სახელის ველის სათაურის შემოწმება
        cy.get(voucherPage.elements.receiverNameFieldTitle())
            .should('be.visible')
            .and('contain', 'მიმღების სახელი')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 25: 'მიმღების ელ.ფოსტის' ველის შემოწმება - ზომა, ფერი, ფონტი, ტექსტი", () => {

        // მიმღების ელ.ფოსტის ველის შემოწმება
        cy.get(voucherPage.elements.receiverEmailAddressField()).scrollIntoView()
            .should('be.visible')
            .and("have.css", "width", "384px")
            .and("have.css", "height", "48px")
            .and("have.css", "color", "rgb(43, 39, 49)")

        //მიმღების ელ.ფოსტის ველის სათაურის შემოწმება
        cy.get(voucherPage.elements.receiverEmailAddressFieldTitle())
            .should('be.visible')
            .and('contain', 'მიმღების ელ.ფოსტა')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 26: 'მიმღების ტელეფონის' ველის შემოწმება - ზომა, ფერი, ფონტი, ტექსტი", () => {

        // მიმღების ტელეფონის ველის შემოწმება
        cy.get(voucherPage.elements.receiverPhoneNumberField()).scrollIntoView()
            .should('be.visible')
            .and("have.css", "width", "384px")
            .and("have.css", "height", "48px")
            .and("have.css", "color", "rgb(43, 39, 49)")

        //მიმღების ტელეფონის ველის სათაურის შემოწმება
        cy.get(voucherPage.elements.receiverPhoneNumberFieldTitle())
            .should('be.visible')
            .and('contain', 'მიმღების ტელეფონი')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 27: 'დატოვე წერილი' ტექსტის და რიგითობის შემოწმება", () => {

        // "დატოვე წერილი" სათაურის რიგითობის შემოწმება
        cy.get(voucherPage.elements.leaveMessageOrderIndicator())
            .should('be.visible')
            .and('contain', '6')
            .and("have.css", "font-family", "Conv_MarkGEO-SemiBold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
            .and("have.css", "width", "28px")
            .and("have.css", "height", "28px")

        // "დატოვე წერილი" სათაურის ტექსტის შემოწმება
        cy.get(voucherPage.elements.leaveMessageTitle())
            .should('be.visible')
            .and('contain', 'დატოვე წერილი')
            .and("have.css", "font-family", "Conv_MarkGEO-Bold")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 28: 'დატოვე წერილი' აღწერის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.wait(2000)
        cy.get(voucherPage.elements.leaveMessageDescription())
            .should('be.visible')
            .and('contain', 'დაწერე შეტყობინება შენი ადრესატისთვის.')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgb(43, 39, 49)")
            .and("have.css", "font-size", "18px")
    })

    it("Case 29: 'დატოვე წერილის' ველის - ზომა, ფერი", () => {
        cy.get(voucherPage.elements.enterMessageField())
            .should('be.visible')
            .and("have.css", "width", "792px")
            .and("have.css", "height", "184px")
            .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
    })
    
    it("Case 30: 'დარჩენილია 255/255 სიმბოლოდან' ტექსტის შემოწმება - ზომა, ფონტი, ფერი", () => {
        cy.contains('დარჩენილია 255/255 სიმბოლოდან')
            .should('be.visible')
            .and("have.css", "font-family", "Conv_MarkGEO-Medium")
            .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
            .and("have.css", "font-size", "14px")
    })

    it("Case 31: 'შეძენა' ღილაკის შემოწმება - ზომა, ფერი,", () => {
        cy.get(voucherPage.elements.purchaseButton())
            .should('be.visible')
            .and("have.css", "width", "384px")
            .and("have.css", "height", "48px")
            .and("have.css", "background-color", "rgb(122, 29, 255)")
    })

    it("Case 32: 'ელექტრონულ ვაუჩერზე' სავალდებულო ველების შევსება და ჩექაუთის გვერდზე გადასვლა", () => {

        cy.wait(1000)
        cy.scrollTo(0, 1000)
        cy.get(voucherPage.elements.receiverNameInput()).type('test', {force:true})
        cy.get(voucherPage.elements.receiverEmailInput()).type('sds@dhjshj.csdw', {force:true})
        cy.get(voucherPage.elements.receiverPhoneInput()).type('000000000', {force:true})
        cy.get(voucherPage.elements.leaveMessageInput()).type('სატესტო მესიჯი', {force:true})
        cy.get(voucherPage.elements.purchaseButton()).click({force:true})
        cy.url().should('include', 'https://staging.extra.ge/checkout')
    })

    it("Case 33: 'ფიზიკურ ვაუჩერზე' სავალდებულო ველების შევსება და ჩექაუთის გვერდზე გადასვლა", () => {
        cy.wait(1000)
        cy.get(voucherPage.elements.physicalVoucherButton()).click()
        cy.scrollTo(0, 1000)
        cy.get(voucherPage.elements.leaveMessageInput()).type('სატესტო მესიჯი', {force:true})
        cy.get(voucherPage.elements.purchaseButton()).click({force:true})
        cy.url().should('include', 'https://staging.extra.ge/checkout')
    })

    it("Case 34: 'ელექტრონულ ვაუჩერზე' სავალდებულო ველების გარეშე 'შეძენის' ღილაკზე დაჭერა და ერორ მესიჯის შემოწმება", () => {

        //ცარიელი "მიმღების სახელის" ველის ერორ მესიჯის ბორდერის შემოწმება
        cy.wait(1000)
        cy.scrollTo(0, 1000)
        cy.get(voucherPage.elements.purchaseButton()).click({force:true})
        cy.get(voucherPage.elements.emptyReceiverNameErrorBorder())
        .should("have.css", "width", "147.65625px")
        .and("have.css", "height", "30px")
        .and("have.css", "background-color", "rgb(241, 45, 45)")

        //ცარიელი "მიმღების სახელის" ველის ერორ მესიჯის ტექსტის შემოწმება
        cy.contains('სავალდებულო ველი')
        .should('be.visible')
        .and("have.css", "font-family", "Conv_MarkGEO-Medium")
        .and("have.css", "color", "rgb(255, 255, 255)")
        .and("have.css", "font-size", "12px")

        //ცარიელი "მიმღების ელ.ფოსტის" ველის ერორ მესიჯის ბორდერის შემოწმება
        cy.wait(1000)
        cy.scrollTo(0, 1000)
        cy.get(voucherPage.elements.purchaseButton()).click({force:true})
        cy.get(voucherPage.elements.emptyReceiverEmailErrorBorder())
        .should("have.css", "width", "340.953125px")
        .and("have.css", "height", "30px")
        .and("have.css", "background-color", "rgb(241, 45, 45)")
       
        //ცარიელი "მიმღების ელ.ფოსტის" ველის ერორ მესიჯის ტექსტის შემოწმება
        cy.contains('სავალდებულოა მიმღების ელ. ფოსტა ან ტელეფონი')
        .should('be.visible')
        .and("have.css", "font-family", "Conv_MarkGEO-Medium")
        .and("have.css", "color", "rgb(255, 255, 255)")
        .and("have.css", "font-size", "12px")
    })

})