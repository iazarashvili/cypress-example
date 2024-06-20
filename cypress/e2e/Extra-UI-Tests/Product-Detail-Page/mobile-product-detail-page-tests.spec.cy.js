import mobileProdactDetailPage from "../../../support/pages/mobileProdactDetailPage"
import {checkInfoFromSeller, 
    checkSellerRealDataText, 
    checkPartnerBanksNames, 
    checkPartnerBankImages} from '../../../support/Helpers/productDetailPageHelper'


describe('პროდუქტის დეტალური გვერდი: ფასდაკლებული პროდუქტი', () => {
    beforeEach('First Steps', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit(Cypress.env('discount_item_detail_page_url')).wait(2000)
        cy.get(mobileProdactDetailPage.elements.hartIcon(), {timeout: 10000})
    })


    it('Case 1: დღის შეთავაზების კონტეინერის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.OfferOfTheDayContainer())
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'height', '40px')
            .and('have.css', 'width')
            .then((width) => {
                const roundedWidth = Math.round(parseFloat(width))
                expect(roundedWidth).to.equal(130)
            })
    })

    it('Case 2: "დღის შეთავაზება" ტექსტის ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.OfferOfTheDayText())
            .should('contain', 'დღის შეთავაზება')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'font-size', '12px')
    })

    it('Case 3: დღის შეთავაზების ტაიმერის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.OfferOfTheDayTimer())
            .should('exist')
            .should('have.descendants', 'p')
            .and('have.descendants', 'span')
            .and(($el) => {
                const pElement = $el.find('p')
                const spanElements = $el.find('span')
                expect(pElement).to.have.lengthOf(1)
                expect(spanElements).to.have.lengthOf(3)

                // should include this class 'weglot_exclude' for the first span element
                const firstSpan = spanElements.eq(0)
                expect(firstSpan.text()).to.be.a('string')

                //should include this class 'weglot_include' second span element
                const secondSpan = spanElements.eq(1)
                expect(secondSpan.text()).to.be.a('string')

                // should include this class 'weglot_exclude' third span element
                const thirdSpan = spanElements.eq(2)
                expect(thirdSpan.text()).to.be.a('string')
            })
    })

    it('Case 4: ფასდაკლებამდე ფასის გადამოწმება, ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.discountedPrice())
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
            .and('have.css', 'font-size', '18px')
    })

    it('Case 5: ფასდაკლებული ფასის გადამოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.discountProductPrice())
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '28px')
    })

    it('Case 6: ფასდაკლებული ფასის გადამოწმება პროცენტით, ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.discountedPriceWithPercent())
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'font-size', '12px')
    })

    it('Case 7: განვადებით ყიდვის ღილაკის შემოწმება (არ უნდა ჩანდეს)', () => {
        cy.get(mobileProdactDetailPage.elements.InstallmentPurchaseButton())
            .should('be.visible')
    })
})

describe('პროდუქტის დეტალური გვერდი: ფასი მეტია 100 ლარზე', () => {
    beforeEach('First Steps', () => {
        cy.viewport(375, 812)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit(Cypress.env('item_detail_page_url'))
        cy.get(mobileProdactDetailPage.elements.hartIcon(), {timeout: 10000})
    })

    it('Case 1: ნავბარში პირველი ელემენტის შემოწმება "ტექნიკა" ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.navbarElementTechnic())
            .should('contain', 'ტექნიკა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'cursor', 'pointer')
    })

    it('Case 2: ნავბარში მეორე ელემენტის შემოწმება "საოჯახო ტექნიკა" ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.navbarElementFamilyTechnic())
            .should('contain', 'საოჯახო ტექნიკა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'cursor', 'pointer')
    })

    it('Case 3: ნავბარში მესამე ელემენტის შემოწმება "სამზარეულოს ტექნიკა" ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.navbarElementKitchenTechnic())
            .should('contain', 'სამზარეულოს ტექნიკა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'cursor', 'pointer')
    })

    it('Case 4: ნავბარში მეოთხე ელემენტის შემოწმება "მიკროტალღური ღუმელი" ფონტი,ფერი,ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.navbarElementMicrowaveTechnic())
            .scrollTo(300, 0, { ensureScrollable: false })
            .should('contain', 'მიკროტალღური ღუმელი')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 5: პროდუქტის აიდის შემოწმება, ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.productID())
            .should('contain', ' ID 2268')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.5)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 6: გულის აიქონის ფერის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.hartIcon())
            .should('have.css', 'color', 'rgb(0, 0, 0)')
    })

    it('Case 7: გულის აიქონის ბორდერის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.hartIconBorder())
            .should('have.attr', 'width', '24') // without px
            .and('have.attr', 'height', '24')
    })

    it('Case 8: გაზიარების აიქონის ბორდერის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.shareIcon())
            .invoke('css', 'display', 'block')
            .scrollIntoView()
            .should('be.visible')
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'width', '24px') // with px
            .and('have.css', 'height', '24px')
    })

    it('Case 9: პროდუქტის სახელის, " Panasonic NN-DS596MZPE   მიკროტალღური ღუმელი " ფონტი, ფერი, ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.productName())
            .should('contain', ' Panasonic NN-DS596MZPE   მიკროტალღური ღუმელი ')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '18px')
    })

    it('Case 10: მერჩანტის სახელის, " Electronics Shop "   მიკროტალღური ღუმელი " ფონტი, ფერი,ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.merchantName())
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 68, 187)')
            .and('have.css', 'font-size', '14px').invoke('text')
            .should('eq', 'Electronics Shop')
    })

    it('Case 11: პროდუქტის ქარდის ბორდერის ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.productFrame())
            .should('have.css', 'width', '358px')
            .and('have.css', 'height', '358px')
    })

    it('Case 12: აღწერის სათაურის "მოკლე აღწერა" ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.describeText())
            .should('contain', 'მოკლე აღწერა:')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '16px')
    })

    it('Case 13: აღწერის სათაურის პირველი "P" ის ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.firstP())
            .scrollIntoView()
            .should('contain', 'ტიპი: მიკროტალღური ღუმელი')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 14: პროდუქტის შესახებ სათაურის ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.aboutProduct())
            .scrollIntoView()
            .should('contain', 'პროდუქტის შესახებ')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '20px')
    })

    it('Case 15 "ბრენდი" ტექსტის ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.brand())
            .scrollIntoView()
            .should('contain', 'ბრენდი:')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 16: პროდუქტის ბრენდის "Panasonic" ტექსტის ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.productBrand())
            .scrollIntoView()
            .should('contain', 'Panasonic')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 17: ტექსტი "მოდელი:" ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.model())
            .scrollIntoView()
            .should('contain', 'მოდელი:')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 18: პროდუქტის "მოდელი:" ტექსტის  ფონტის, ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.productModel())
            .scrollIntoView()
            .should('contain', 'NN-DS596MZPE')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 19: პროდუქტის "ძირითადი მახასიათებლების" ტექსტის ფონტის, ზომის და ფერის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.productMainFeatureText())
            .scrollIntoView()
            .should('contain', 'ძირითადი მახასიათებლები')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '18px')
    })

    it('Case 20: პროდუქტის "მწარმოებელი ქვეყანა:" ტექსტის ფონტის, ზომის და ფერის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.manufacturerCountry())
            .scrollIntoView()
            .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '14px')
            .invoke('text')
            .should('eq', 'გარანტიის ვადა:')
    })

    it('Case 21: პროდუქტის ფასის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.productPrice())
            .scrollIntoView()
            .should('contain', '1,399 ₾')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '28px')
    })

    it('Case 22: პროდუქტის განვადების ფასის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.productInstallment())
            .scrollIntoView()
            .should('contain', '68 ₾-დან თვეში')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 23: პროდუქტის განვადების ფასის აიქონის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.productInstallmentIcon())
            .scrollIntoView()
            .should('be.visible')
            .and('have.css', 'width', '16px')
            .and('have.css', 'height', '16px')
    })

    it('Case 24: ყიდვის ღილაკის ბექგრაუნდ ფერის და ზომის შემოწმება', () => {
        cy.wait(3000)
        cy.scrollTo(0, 1300, {duration: 3000})
        cy.get(mobileProdactDetailPage.elements.bayButton())
            .should('have.css', 'background-color', 'rgb(122, 29, 255)')
            .and('have.css', 'width', '326px')
            .and('have.css', 'height', '48px')
    })

    it('Case 25: ყიდვის ღილაკის ტექსტის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.bayButtonText())
            .should('contain', 'ყიდვა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 26: განვადებით ყიდვის ღილაკის ბექგრაუნდ ფერის და ზომის შემოწმება', () => {
        cy.scrollTo(0, 1300, {duration: 3000})
        cy.get(mobileProdactDetailPage.elements.buyInstallmentButton())
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'width', '326px')
            .and('have.css', 'height', '48px')
    })

    it('Case 27: განვადებით ყიდვის ღილაკის ტექსტის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.scrollTo(0, 1300, {duration: 3000})
        cy.get(mobileProdactDetailPage.elements.buyInstallmentButtonText())
            .should('contain', 'განვადებით ყიდვა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 28: კალათაში დამატების ღილაკის ბექგრაუნდ ფერის და ზომის შემოწმება', () => {
        cy.scrollTo(0, 1300, {duration: 3000})
        cy.get(mobileProdactDetailPage.elements.addToCartButton())
            .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .and('have.css', 'width', '326px')
            .and('have.css', 'height', '48px')
    })

    it('Case 29: კალათაში დამატების ღილაკის ტექსტის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.addToCartButtonText())
            .should('contain', 'კალათაში დამატება')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 30: კალათაში დამატების ღილაკის აიქონის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.addToCartButtonIcon())
            .scrollIntoView()
            .should('be.visible')
            .and('have.css', 'width', '20px')
            .and('have.css', 'height', '24px')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
    })

    it('Case 31: ტელეფონით ყიდვის ტექსტის ფონტის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.byWithPhoneText())
            .scrollIntoView()
            .should('be.visible')
            .should('contain', 'ტელეფონით ყიდვა')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
    })

    it('Case 32: ტელეფონით ყიდვის აიქონის ფერის და ზომის შემოწმება', () => {
        cy.get(mobileProdactDetailPage.elements.byWithPhoneIcon())
            .scrollIntoView()
            .should('be.visible')
            .and('have.css', 'width', '16px')
            .and('have.css', 'height', '16px')
            .and('have.css', 'color', 'rgb(0, 68, 187)')
    })

    it('Case 33: ტელეფონით ყიდვის ნომრის შემოწმება ფონტი, ფერი, ზომა', () => {
        cy.get(mobileProdactDetailPage.elements.byWithPhoneNumber())
            .scrollIntoView()
            .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 68, 187)')
            .and('have.css', 'font-size', '14px')
            .invoke('text')
            .should('eq', '032 2 333 111')
    })

    it('Case 34: "მსგავსი პროდუქტების" ტექსიტის ფონტის, ფერის და ფონტის შემოწმება', () => {
        cy.scrollTo(0, 4000, { duration: 5000 })
        cy.wait(2000)
        cy.get(mobileProdactDetailPage.elements.similarProducts())
            .scrollIntoView()
            .should('contain', 'მსგავსი პროდუქტები')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '18px')
    })
})

describe('გამყიდველის აიქონზე დაკლიკებით გახსნილი პოპაპის შემოწმება', () => {
    beforeEach('First settings', () => {
        cy.viewport(372, 815)
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit(Cypress.env('product_detail_page_url'))
        cy.wait(3000)
        cy.get(mobileProdactDetailPage.elements.sellerHelpIcon()).click().wait(1000)
    })

    it('Case 1: ტექსტი (გამყიდველის ინფორმაცია) ფონტის ფერის და ზომის გადამოწმება', () => {
        cy.get(mobileProdactDetailPage.sellerInfoPopup.sellerInfoText())
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .invoke('text').and('eq', 'გამყიდველის ინფორმაცია')
    })

    it('Case 2: ტექსტი (იურიდიული დასახელება) და (სს "ექსტრა არეა") ფონტი ფერი ზომის შემოწმება ', () => {
        checkInfoFromSeller(mobileProdactDetailPage.sellerInfoPopup.legalNameText(), 'იურიდიული დასახელება')
        checkSellerRealDataText(mobileProdactDetailPage.sellerInfoPopup.infoLegalNameText(), 'სს "ექსტრა არეა"')
    });

    it('Case 3: ტექსტი (საიდენტიფიკაციო) და (402129763) ფონტი ფერი ზომის შემოწმება ', () => {
        checkInfoFromSeller(mobileProdactDetailPage.sellerInfoPopup.identificationText(), 'საიდენტიფიკაციო')
        checkSellerRealDataText(mobileProdactDetailPage.sellerInfoPopup.infoIdentificationText(), '402129763')
    });

    it('Case 4: ტექსტი (მისამართი) და (თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, N 41) ფონტი ფერი ზომის შემოწმება ', () => {
        checkInfoFromSeller(mobileProdactDetailPage.sellerInfoPopup.addressText(), 'მისამართი')
        checkSellerRealDataText(mobileProdactDetailPage.sellerInfoPopup.infoAddressText(), 'თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, N 41')
    });

    it('Case 5: ტექსტი (ტელეფონი) და (0322 333 111) ფონტი ფერი ზომის შემოწმება ', () => {
        checkInfoFromSeller(mobileProdactDetailPage.sellerInfoPopup.phoneText(), 'ტელეფონი')
        checkSellerRealDataText(mobileProdactDetailPage.sellerInfoPopup.infoPhoneText(), '0322 333 111')
    });
})

describe('განვადების აიქონზე დაკლიკებით გახსნილი პოპაპის შემოწმება', () => {
    beforeEach('First settings', () => {
      cy.viewport(375, 812)
      cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
      cy.visit(Cypress.env('product_detail_page_url'))
      cy.get(mobileProdactDetailPage.elements.hartIcon(), {timeout: 10000})
      cy.scrollTo(0, 1000, {duration: 3000})
      cy.get(mobileProdactDetailPage.elements.installmentPopupIcon()).click({force: true}).wait(1000)
    })
  
    it('Case 1: ტექსტი (განვადების პირობები) ფონტი ზომა და ფერის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.TermsOfInstallmentsText())
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '18px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('eq', 'განვადების პირობები')
    });
  
    it('Case 2: ტექსტი (Extra.ge-ის პარტნიორი ბანკები) ფონტი ზომა და ფერის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.extraPartnerBanksText())
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('eq', 'Extra.ge-ის პარტნიორი ბანკები')
    });
  
    it('Case 3: ტექსტი (შენს შერჩეულ პროდუქტს extra.ge-ზე 5 ბანკის განვადებით შეიძენ:) ფონტი ფერი და ზომის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.purchasedByBankInstallmentsText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .invoke('text').and('eq', 'შენს შერჩეულ პროდუქტს extra.ge-ზე 4 ბანკის განვადებით შეიძენ:')
    });
  
    it('Casee 4: ტექსტი (საქართველოს ბანკი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
      checkPartnerBanksNames(mobileProdactDetailPage.installmentPopup.georgianBankText(), 'საქართველოს ბანკი')
      checkPartnerBankImages(mobileProdactDetailPage.installmentPopup.georgianBankIcon())
    });
  
    it('Casee 5: ტექსტი (თიბისი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
      checkPartnerBanksNames(mobileProdactDetailPage.installmentPopup.tbcBankText(), 'თიბისი')
      checkPartnerBankImages(mobileProdactDetailPage.installmentPopup.tbcBankIcon())
    });
  
    it('Casee 6: ტექსტი (კრედო) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
      checkPartnerBanksNames(mobileProdactDetailPage.installmentPopup.credoBanText(), 'კრედო')
      checkPartnerBankImages(mobileProdactDetailPage.installmentPopup.credoBankIcon())
    });
  
    it('Casee 7: ტექსტი (ტერაბანკი) ფონტი, ფერი, ზომა და მისი აიქონის შემოწმება', () => {
      checkPartnerBanksNames(mobileProdactDetailPage.installmentPopup.teraBankText(), 'ტერაბანკი')
      checkPartnerBankImages(mobileProdactDetailPage.installmentPopup.teraBankIcon())
    });
  
    it('Case 8: ტექსტი (განვადების საუკეთესო პირობები) ფონტის ფერის და ზომის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.theBestTermsInstallmentsText())
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-size', '16px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('eq', 'განვადების საუკეთესო პირობები')
    });
  
    it('Case 9: ტექსტი (გადაანაწილე თანხა და გადაიხადე ნივთის ღირებულება გაძვირების გარეშე. ) ფონტის ფერის და ზომის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.infoDivideTheAmountText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .invoke('text').and('eq', 'გადაანაწილე თანხა და გადაიხადე ნივთის ღირებულება გაძვირების გარეშე. ')
    });
  
    it('Case 10: ტექსტი ( 0-დან 6 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე.) და ინფოს ფონტის, ფერის, ზომის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.infoGeorgianTbcBankPercentBoldText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('eq', 'საქართველოს ბანკი, თიბისი ბანკი, კრედო ბანკი:')
  
      cy.get(mobileProdactDetailPage.installmentPopup.infoGeorgianTbcBankPercentText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .invoke('text').and('eq', 'საქართველოს ბანკი, თიბისი ბანკი, კრედო ბანკი: 0-დან 6 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე.')
    });
  
    it('Csae 11: ტექსტის (სფეისი) და ინფოს ფონტის, ფერის, ზომის შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.spaceText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('eq', 'სფეისი:')
  
      cy.get(mobileProdactDetailPage.installmentPopup.infoSpaceText())
        .should('have.css', 'color', 'rgb(43, 39, 49)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .invoke('text').and('include', ' 0-დან 3 თვემდე განვადება ეფექტური 0% - დამატებითი საკომისიოების და გადასახადების გარეშე. ')
    });
  
    it('Case 12: ღილაკის (განვადებით ყიდვა) შემოწმება', () => {
      cy.get(mobileProdactDetailPage.installmentPopup.buyingInstallmentButton())
        .should('have.css', 'background-color', 'rgb(122, 29, 255)')
        .and('have.css', 'border-radius', '8px')
        .and('have.css', 'width', '343px')
        .and('have.css', 'height', '48px')
        .and('have.css', 'cursor', 'pointer')
  
      cy.get(mobileProdactDetailPage.installmentPopup.buyingInstallmentButtonText())
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .invoke('text').and('include', 'განვადებით ყიდვა')
    });
  })



