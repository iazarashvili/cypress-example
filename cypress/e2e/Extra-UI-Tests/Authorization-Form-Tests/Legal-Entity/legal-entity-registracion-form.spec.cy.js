import homePage from "../../../../support/pages/homePage";
import header from '../../../../support/pages/header'

describe("იურიდიული პირის სექციაზე გაადასვლა და ავტორიზაციის ფორმის გადამოწმება 1920 x 1080 Resolution", () => {
    beforeEach("First Steps", () => {
      cy.authorization()
      cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
      cy.get(header.elements.signInButton()).click();
      cy.get('._x_cursor-pointer > p').click()
    })

    it("Case 1: რეგისტრაციის ფორმის შემოწმება", () => {
        cy.contains(" დარეგისტრირდი ").should("be.visible").click();
        cy.contains("რეგისტრაცია")
          .should("have.css", "font-size", "20px")
          .invoke("text").and("have.length", 11);
    
        cy.get("app-new-input[formcontrolname=companyName]").should("exist");
        cy.get("app-new-input[formcontrolname=juridicalId").should("exist");
        cy.get("app-new-input[formcontrolname=userName]").should("exist");
    
        cy.contains("გაგრძელება")
          .and("have.css", "font-size", "16px")
          .invoke("text")
          .and("have.length", 11);
      });

      it('Case 2: "იურიდიული პირის დასახელების" ფორმის შემოწმება', () => {
        //  Check input form LegalEntityName
        cy.contains(" დარეგისტრირდი ").should("be.visible").click();
        cy.get("app-new-input[formcontrolname=companyName]").within(() => {
        cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

        cy.contains("იურიდიული პირის დასახელება")
        .should("have.css", "font-size", "10px")
        .invoke("text")
        .should("have.length", 26);
    });
  });

    it('Case 3: "საიდენტიფიკაციო კოდის" ფორმის შემოწმება', () => {
    //  Check input form IdentificationCode
        cy.contains(" დარეგისტრირდი ").should("be.visible").click();
        cy.get("app-new-input[formcontrolname=juridicalId]").within(() => {
        cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

        cy.contains("საიდენტიფიკაციო კოდი")
        .should("have.css", "font-size", "14px")
        .invoke("text")
        .should("have.length", 20);
});
});

    it('Case 4: "ტელეფონის ნომრის ან ელ.ფოსტის" ფორმის შემოწმება', () => {
    //  Check input form PhoneOrEmail
        cy.contains(" დარეგისტრირდი ").should("be.visible").click();
        cy.get("app-new-input[formcontrolname=userName]").within(() => {
        cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

        cy.contains("ტელეფონი ან ელ.ფოსტა")
        .should("have.css", "font-size", "14px")
        .invoke("text")
        .should("have.length", 20);
});
});
})