import addNewAddressPage from "../pages/addNewAddressPage";

export class AddressPage {

    selectCity() {
        cy.get(addNewAddressPage.elements.selectCity()).click()
        cy.contains(' თბილისი (Tbilisi) ').click()
    }
}

export const addAddressPage = new AddressPage();