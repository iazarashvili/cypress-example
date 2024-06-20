const detailPageHelpers = {
    checkPartnerBanksNames: function (htmlelement, text) {
        cy.get(htmlelement)
            .should('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').and('eq', text)
    },

    checkPartnerBankImages: function (htmlelement) {
        cy.get(htmlelement)
            .should('have.css', 'height', '20px')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'display', 'flex')
            .and('have.css', 'width', '20px')
    }
};

const sellerInfoPopupChecks = {
    checkInfoFromSeller: function (htmlelement, text) {
        cy.get(htmlelement)
            .should('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
            .invoke('text').and('eq', text)
    },

    checkSellerRealDataText: function (htmlelement, text) {
        cy.get(htmlelement)
            .should('have.css', 'color', 'rgb(43, 39, 49)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
            .invoke('text').and('eq', text)
    }
};

const checkTimerText = {
    checkText: function (htmlElement) {
        cy.get(htmlElement)
            .should('have.css', 'color', 'rgb(241, 45, 45)')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-family', 'Conv_MarkGEO-SemiBold')
    }
}

export function scroolToLastViewedProducts() {
    cy.wait(3000)
    cy.get('[routerlink="/"]:eq(1)').scrollIntoView({duration: 3000})
}

export const checkPartnerBanksNames = detailPageHelpers.checkPartnerBanksNames;
export const checkPartnerBankImages = detailPageHelpers.checkPartnerBankImages;
export const checkInfoFromSeller = sellerInfoPopupChecks.checkInfoFromSeller;
export const checkSellerRealDataText = sellerInfoPopupChecks.checkSellerRealDataText;
export const detailPageTimerTextCheck = checkTimerText.checkText;