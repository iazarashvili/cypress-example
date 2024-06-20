import homePage from "../../../../support/pages/homePage";
import header from '../../../../support/pages/header'

describe("ავტორიზაციის და რეგისტრაციის ფორმის გადამოწმება 1920 x 1080 Resolution", () => {
  beforeEach("First Steps", () => {
    cy.authorization()
    cy.get(homePage.whiteElements.whiteDealsTimer(), { timeout: 10000 })
    cy.get(header.elements.signInButton()).click();
  });

  it("Case 1: ტექსტი (ავტორიზაცია) ფონტის ფერის და ზომის შემოწმება", () => {
    cy.contains(" ავტორიზაცია ")
      .and("have.css", "font-size", "20px")
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
  });

  it('Case 2: ტექსტი ფიზიკური პირი ფონტის ზომის და ფერის შემოწმება ', () => {
    cy.get('._x_border-b-2 > p')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(122, 29, 255)')
      .and('have.css', 'font-size', '14px')
      .invoke('text').should('eq', 'ფიზიკური პირი')

  });

  it("Case 3: იმეილის შესაყვანი ინფუთ ველის შწმოწმება", () => {
    cy.get('[formcontrolname="email"]').within(() => {
      cy.get("input")
        .should("have.attr", "autocomplete", "new-recover-password")
        .and("have.attr", "maxlength", "64");
      cy.get("label")
        .invoke("text")
        .then((emailInputPHtext) => {
          expect(emailInputPHtext).to.eq("ტელეფონი ან ელ.ფოსტა");
          expect(emailInputPHtext).to.have.length(20);
        });
    });
  });

  it("Case 4: პაროლის შესაყვანი ველის შემოწმება", () => {
    cy.get("app-new-input[formcontrolname=password]").within(() => {
      cy.get("input")
        .should("have.attr", "autocomplete", "new-recover-password")
        .and("have.attr", "maxlength", "64");
      cy.get("label")
        .invoke("text")
        .then((text) => {
          expect(text.length).to.of.at.greaterThan(5);
          expect(text).to.be.eq("პაროლი");
        });
    });
  });

  it("Case 5: ტექსტი (დაგავიწყდა პაროლი? პაროლის აღდგენა) ტექსტი ფერის და ზომის შემოწმება", () => {
    cy.contains(" დაგავიწყდა პაროლი? ")
      .should("be.visible")
      .and("have.css", "font-size", "14px")
      .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .invoke("text")
      .and('include', ' დაგავიწყდა პაროლი? ');

    cy.contains(" პაროლის აღდგენა ")
      .should("be.visible")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(0, 68, 187)')
      .invoke("text")
      .and('include', ' პაროლის აღდგენა ');
  });

  it('Case 6: ტექსტი (ახალი ხარ Extra-ზე დარეგისტრირდი) ფონტი ფერის და ზომის შემოწმება', () => {
    cy.contains(" ახალი ხარ Extra-ზე ? ")
      .and("have.css", "font-size", "14px")
      .and("have.css", "color", "rgba(43, 39, 49, 0.7)")
      .and("have.css", "font-family", "Conv_MarkGEO-Medium")
      .invoke("text")
      .and('include', ' ახალი ხარ Extra-ზე ? ');

    cy.contains(" დარეგისტრირდი ")
      .and("have.css", "font-size", "14px")
      .and("have.css", "font-family", "Conv_MarkGEO-Bold")
      .and('have.css', 'color', 'rgb(0, 68, 187)')
      .invoke("text")
      .and('include', 'დარეგისტრირდი');
  });

  it("Case 7: ავტორიზაციის ღილაკების შემოწმება", () => {
    cy.contains(" შესვლა")
      .should("have.css", "font-size", "16px")
      .invoke("text")
      .and("have.length.at.least", 5);

    cy.contains("Facebook-ით")
      .should("have.css", "font-size", "16px")
      .invoke("text")
      .and("have.length.at.least", 5);

    cy.contains("Gmail-ით")
      .should("have.css", "font-size", "16px")
      .invoke("text")
      .and("have.length.at.least", 5);
  });

  it("Case 8: პაროლის აღდგენის ფორმის შემოწმება", () => {
    cy.contains(" პაროლის აღდგენა ").click();
    cy.contains(" პაროლის აღდგენა").should("be.visible");
    cy.get("app-new-input[formcontrolname=username]").within(() => {
      cy.get("input")
        .should("have.attr", "autocomplete", "new-recover-password")
        .and("have.attr", "maxlength", "64");
      cy.get("label")
        .invoke("text")
        .then((emailInputPHtext) => {
          expect(emailInputPHtext).to.eq("ტელეფონი ან ელ.ფოსტა");
          expect(emailInputPHtext).to.have.length(20);
        });
    });
    cy.contains("გაგრძელება")
      .and("have.css", "font-size", "16px")
      .invoke("text")
      .and("have.length", 10);

    // back button in form
    cy.get('._x_icon-arrow-left-1').should("exist").click();
  });

  it("Case 9: რეგისტრაციის ფორმის შემოწმება", () => {
    cy.contains(" დარეგისტრირდი ").click();
    cy.contains("რეგისტრაცია")
      .should("have.css", "font-size", "20px")
      .invoke("text").and("have.length", 11);

    cy.get("app-new-select[placeholder=დღე]").should("exist");
    cy.get("app-new-select[placeholder=თვე]").should("exist");
    cy.get("app-new-select[placeholder=წელი]").should("exist");

    cy.contains("გაგრძელება")
      .and("have.css", "font-size", "16px")
      .invoke("text")
      .and("have.length", 11);
  });

  it('Case 10: სახელის შეყვანის ფორმის შემოწმება', () => {
    //  Check input form firstName
    cy.contains(" დარეგისტრირდი ").should("be.visible").click();
    cy.get("app-new-input[formcontrolname=firstName]").within(() => {
      cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

      cy.contains("სახელი")
        .should("have.css", "font-size", "10px")
        .invoke("text")
        .should("have.length", 6);
    });
  });

  it('Case 11: გვარის შეყვანის ფორმის შემოწმება', () => {
    //  Check input form lastName
    cy.contains(" დარეგისტრირდი ").should("be.visible").click();
    cy.get("app-new-input[formcontrolname=lastName]").within(() => {
      cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

      cy.contains("გვარი")
        .should("have.css", "font-size", "14px")
        .invoke("text")
        .should("have.length", 5);
    });
  });

  it('Case 12: იმეილის ან ტელეფონის ნომრის შეყვანის ფორმის შემოწმება', () => {
    //  Check input form emailOrPhone
    cy.contains(" დარეგისტრირდი ").should("be.visible").click();
    cy.get("app-new-input[formcontrolname=emailOrPhone]").within(() => {
      cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");

      cy.contains("ტელეფონი ან ელ.ფოსტა")
        .should("have.css", "font-size", "14px")
        .invoke("text")
        .should("have.length", 20);
    });
  });

  it('Case 13: ტექსტი (იურიდიული პირი) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.get('form div._x_text-dark p')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'cursor', 'pointer')
      .invoke('text', 'იურიდიული პირი')
  })
});
