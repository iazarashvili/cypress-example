export class BaseHeader {
    addItemToCompears(){
        cy.get('button i._x_text-comparisonArrowGray-500:eq(0)').click()
    }
}

export const baseHeader = new BaseHeader()