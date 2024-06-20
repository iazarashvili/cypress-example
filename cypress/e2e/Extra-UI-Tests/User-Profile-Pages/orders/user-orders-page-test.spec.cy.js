const profileOrdersPage = require("../../../../support/pages/profileOrdersPage");



describe('ჩემი შეკვეთების გვერდი: მთავარი ტექსტის და ფილტრის ტექსტების შემოწმება', () => {
    beforeEach('first steps', () => {
        cy.viewport(1920, 1080);
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('user/profile/orders')
        cy.url('').should('eq', Cypress.env('user_orders_url'))
        cy.wait(2000)
    })

    it('Case 1: ტექსტი ( ჩემი შეკვეთები ) შემოწმება', () => {
        cy.get('#profile-edit-form h2')
            .should('have.css', 'font-size', '18px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'line-height', '21.6px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', ' ჩემი შეკვეთები ')
    })

    it('Case 2: ფილტრის ტექსტი (ყველა) შემოწმება', () => {
        cy.contains('ყველა')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
            .and('have.class', '_x_cursor-pointer')
            .invoke('text').should('eq', ' ყველა ')
    })

    it('Case 3: ფილტრის ტექსტი (მიმდინარე) შემოწმება', () => {
        cy.contains('მიმდინარე')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.class', '_x_cursor-pointer')
            .invoke('text').should('eq', ' მიმდინარე ')
    })

    it('Case 4: ფილტრის ტექსტი (მიმდინარე) მონიშვნა და ტექსტის ფერის, ფონტის შემოწმება', () => {
        cy.contains('მიმდინარე').click()
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
    })

    it('Case 5: ფილტრის ტექსტი ( ჩაბარებული ) შემოწმება', () => {
        cy.contains('ჩაბარებული')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.class', '_x_cursor-pointer')
            .invoke('text').should('eq', ' ჩაბარებული ')
    })

    it('Case 6: ფილტრის ტექსტი ( ჩაბარებული ) მონიშვნა და ტექსტის ფერის, ფონტის შემოწმება', () => {
        cy.contains('ჩაბარებული').click()
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
    })

    it('Case 7: ფილტრის ტექსტი ( გაუქმებული ) შემოწმება', () => {
        cy.contains('გაუქმებული')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.class', '_x_cursor-pointer')
            .invoke('text').should('eq', ' გაუქმებული ')
    })

    it('Case 8: ფილტრის ტექსტი ( გაუქმებული ) მონიშვნა და ტექსტის ფერის, ფონტის შემოწმება', () => {
        cy.get(profileOrdersPage.whiteElements.whiteProfileEdit(), {timeout: 10000})
        cy.contains('გაუქმებული').click()
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(122, 29, 255)')
    })
})


describe('ჩემი შეკვეთების გვერდი: შეკვეთის ქარდის შემოწმება', () => {
    beforeEach('First steps', () => {
        cy.viewport(1920, 1080);
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('user/profile/orders')
        cy.url('').should('eq', Cypress.env('user_orders_url'))
    })

    it('Case 1: ტექსტი (შეკვეთის ნომერი) შემოწმება', () => {
        cy.contains('შეკვეთის ნომერი')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 2: შეკვეთის ნომრის მნიშვნელობის შემოწმება', () => {
        cy.get('[class="_x_text-2 sm:_x_text-3 _x_font-medium _x_text-black _x_h-unset sm:_x_h-9"]:eq(0)')
            .and('include.text', '#')
            .invoke('text').should('have.length.at.least', 8)
    });

    it('Case 3: ტექსტი (თარიღი) შემოწმება', () => {
        cy.contains('თარიღი').should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    })

    it('Case 4: თარიღის მნიშვნელობის შემოწმება', () => {
        cy.get('div.form-wrap div._x_font-medium:eq(1)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 8)

    });

    it('Case 5: ტექსტი (შეკვეთის ჯამი) შემოწმება', () => {
        cy.contains('შეკვეთის ჯამი').should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 6: შეკვეთის ჯამის მნიშვნელობის შემოწმება', () => {
        cy.get('#profile-edit-form div._x_h-unset:eq(5)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 1)
    });

    it('Case 7: ტექსტი (გადახდის მეთოდი) შემოწმება', () => {
        cy.contains('გადახდის მეთოდი')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 8: გადახდის მეთოდის მნიშვნელობის შემოწმება', () => {
        cy.get('#profile-edit-form div._x_font-medium:eq(3)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 4)
    });

    it('Case 9: ტექსტი (სტატუსი) შემოწმება', () => {
        cy.contains('სტატუსი').should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
    });

    it('Case 10: სტატუსის მნიშვნელობის შემოწმება', () => {
        cy.get('div._x_flex span span:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 68, 187)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
    });
})

describe('ჩემი შეკვეთების გვერდი: შეკვეთის ქარდის ჩამოშლა და მონაცემების შემოწმება', () => {
    beforeEach('first steps', () => {
        cy.viewport(1920, 1080);
        cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
        cy.visit('user/profile/orders')
        cy.url('').should('eq', Cypress.env('user_orders_url'))
        cy.get('._x_icon-arrow-right:eq(0)').click()
    })

    it('Case 1: ტექსტი (ქალაქი) შემოწმება', () => {
        cy.get('div._x_grid-cols-12 h5:eq(1)')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', 'ქალაქი')
    });

    it('Case 2: ტექსტი (ქალაქი) მნიშვნელობის შემოწმება', () => {
        cy.get('div._x_grid-cols-12 h6:eq(0)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 2)
    });

    it('Case 3: ტექსტი (მიტანის მისამართი) შემოწმება', () => {
        cy.get('div._x_w-full h5:eq(2)')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', 'მიტანის მისამართი')
    });

    it('Case 4: ტექსტი (მიტანის მისამართი) მნიშვნელობის შემოწმება', () => {
        cy.get('div._x_w-full h6:eq(1)')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 2)
    });

    it('Case 5: ტექსტი (მიტანის თარიღი:) შემოწმება', () => {
        cy.get('[class="_x_text-3 _x_color-gray-300 _x_font-medium _x_color-black"]')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('contain', 'მიტანის თარიღი:')
    });

    it('Case 6: ტექსტი (მიტანის თარიღი:) მნიშვნელობის შემოწმება', () => {
        cy.get('[class="_x_text-3 _x_color-gray-300 _x_font-medium _x_color-black"]')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('have.length.at.least', 2)
    });

    it('Case 7: ტექსტი (შეკვეთის ქვენომერი) და მნიშვნელობის შემოწმება', () => {
        cy.get('._x_text-subNumberGray')
            .should('have.css', 'color', 'rgb(107, 104, 111)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').should('contain', 'შეკვეთის ქვენომერი')
    });

    it('Case 8: შეკვეთის აითემის სურათის შემოწმება', () => {
        cy.get('[class="_x_block ng-star-inserted"] a:eq(0)')
            .should('have.class', '_x_h-30 _x_w-30 sm:_x_h-40 sm:_x_w-40')
            .and('have.attr', 'href').should('contain', '/product')

        cy.get('[class="_x_block ng-star-inserted"] a img').should('have.css', 'max-height', '100%')
            .and('have.css', 'max-width', '100%')
    });

    it('Case 9: აითემის სახელის  შემოწმება', () => {
        cy.get('[class="sm:_x_ml-5"] a div._x_mb-3')
            .should('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .invoke('text').should('have.length.at.least', 3)
    });

    it('Case 10: აითემის ტექსტი (სტატუსი) შემოწმება', () => {
        cy.get('[class="_x_text-dark-700"]:eq(0)')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .and('have.css', 'color', 'rgba(43, 39, 49, 0.7)')
            .invoke('text').should('eq', 'სტატუსი: ')
    });

    it('Case 11: აითემის სტატუსის მნიშვნელობის შემოწმება', () => {
        cy.get('._x_no-underline span:eq(1)')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .and('have.css', 'color', 'rgb(0, 68, 187)')
            .invoke('text').should('have.length.greaterThan', 1)
    });

    it('Case 12: ტექსტი (რაოდენობა) შემოწმება', () => {
        cy.get('[class="_x_text-dark-800 _x_font-medium _x_text-3"] span._x_hidden:eq(0)')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
        .invoke('text').should('eq', 'რაოდენობა')
    });

    it('Case 13: ტექსტი (რაოდენობა) მნიშვნელობის შემოწმება', () => {
        cy.get('[class="s"] span')
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(43, 39, 49)')
        .invoke('text').should('have.length.greaterThan', 0)
    });

    it('Case 14: ტექსტი (ღირებულება) შემოწმება', () => {
        cy.get('[class="_x_block ng-star-inserted"] div span._x_text-dark-800:eq(1)')
        .should('have.css', 'font-size', '14px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
        .invoke('text').should('eq', 'ღირებულება')
    });

    it('Case 15: ტექსტი (ღირებულება) მნიშვნელობის შემოწმება', () => {
        cy.get('[class="_x_font-bold _x_text-dark _x_text-4 _x_flex _x_items-center mb-0"]')
        .should('have.css', 'font-size', '16px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(43, 39, 49)')
        .invoke('text').should('have.length.greaterThan', 0)
    });

    it('Case 16: ღილაკი (ყიდვის გამეორება) შემოწმება', () => {
        cy.get('button._x_border-1:eq(0)')
        .should('have.css', 'border-color', 'rgba(43, 39, 49, 0.2)')
        .and('have.css', 'border-width', '1px')
        .and('have.css', 'border-radius', '10px')
        .and('have.css', 'height', '42px')
        .and('have.css', 'cursor', 'pointer')
    });

    it('Case 17: ღილაკი (ყიდვის გამეორება) ტექსტის შემოწმება', () => {
        cy.get('button._x_border-1 span:eq(0)')
            .should('have.css', 'font-size', '12px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .invoke('text').should('eq', 'ყიდვის გამეორება')
    })

    it('Case 18: ინვოისის გადმოწერა ღილაკის შემოწმება', () => {
        cy.get('div a[target="_blank"]:eq(0)')
        .should('have.css', 'font-size', '12px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(0, 68, 187)')
        .should('have.attr', 'href')
        .and('contain', '/user/profile/orders/invoice')

        cy.get('div a[target="_blank"]:eq(0)').invoke('text')
            .should('eq', 'ინვოისის გადმოწერა')
    });

    // it('Case 19: ტექსტი (მიტანის ღირებულება:) შემოწმება', () => {
    //     cy.get('[class="_x_text-3 _x_font-medium _x_text-dark-800"]')
    //         .should('have.css', 'font-size', '14px')
    //         .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
    //         .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
    //         .invoke('text').should('eq', 'მიტანის ღირებულება:')
    // });

    // it.only('Case 20: ტექსტი (მიტანის ღირებულება:) მნიშვნელობის შემოწმება შემოწმება', () => {
    //     cy.get('[class="_x_text-3 _x_font-medium _x_text-dark _x_pl-5"]')
    //         .should('have.css', 'font-size', '14px')
    //         .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
    //         .and('have.css', 'color', 'rgb(43, 39, 49)')
    //         .invoke('text').should('have.length.greaterThan', 0)

    //         // ლარის აიქონის შემოწმება
    //     cy.get('div._x_text-center ._x_icon-gel:eq(0)')
    //         .should('have.class', '_x_icon _x_icon-gel _x_text-dark _x_text-4 _x_items-center _x_p-1 icon-black mt-n2px')
    // })

    it('Case 21: ტექსტი (სულ თანხა) შემოწმება', () => {
        cy.get('[class="_x_flex _x_justify-end _x_items-center"] span._x_text-3')
            .should('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('eq', 'სულ თანხა:')
    });

    it('Case 22: ტექსტი (სულ თანხა) მნიშვნელობის შემოწმება', () => {
        cy.get('[class="_x_flex _x_justify-end _x_items-center"] span._x_text-6')
            .should('have.css', 'font-size', '20px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
            .and('have.css', 'color', 'rgb(43, 39, 49)')
            .invoke('text').should('have.length.greaterThan', 0)

            // ლარის აიქონის შემოწმება
        cy.get('[class="_x_flex _x_justify-end _x_items-center"] i._x_icon-gel')
            .should('have.class', '_x_icon _x_icon-gel _x_text-dark _x_text-4 sm:_x_text-6 _x_items-center sm:_x_p-1 _x_text-dark _x_mt-1')
    });
})