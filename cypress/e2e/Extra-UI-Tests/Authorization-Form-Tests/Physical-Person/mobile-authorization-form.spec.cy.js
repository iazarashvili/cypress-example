

describe("ავტორიზაცია რეგისტრაციის ფორმა 375 X 812 გაფართოებაზე", () => {
    beforeEach("", () => {
      cy.authorizationMobile()
      cy.contains("შესვლა").should("be.visible")
        .and("have.css", "font-size", "16px")
        .click();
    });
  
    it("Case 1: ავტორიზაციის ფორმის გახსნა", () => {
      cy.get('app-sign-in-page form h3')
        .should("have.css", "font-size", "20px")
        .and('have.css', 'color', 'rgb(0, 0, 0)')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
    });
  
    it("Case 2: იმეილის შესაყვანი ველის შემოწმება", () => {
      cy.get("app-new-input[formcontrolname=email]").within(() => {
        cy.get("input")
          .should("have.attr", "autocomplete", "new-recover-password")
          .and("have.attr", "maxlength", "64");
        cy.get("label")
          .invoke("text")
          .then((emailInputText) => {
            expect(emailInputText).to.eq("ტელეფონი ან ელ.ფოსტა");
            expect(emailInputText).to.have.length(20);
          });
      });
    });
  
    it("Case 3: პაროლის შესაყვანი ველის შემოწმება", () => {
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
  
    it("Case 4: ტექსტი (დაგავიწყდა პაროლი?) ფონტის ფერის და ზომის შემოწმება", () => {
      cy.contains(" დაგავიწყდა პაროლი? ")
        .should("be.visible")
        .and("have.css", "font-size", "14px");
  
      cy.contains(" პაროლის აღდგენა ")
        .should("be.visible")
        .and("have.css", "font-size", "14px");
  
      cy.contains(" ახალი ხარ Extra-ზე ? ")
        .should("be.visible")
        .and("have.css", "font-size", "14px");
  
      cy.contains(" დარეგისტრირდი ")
        .should("be.visible")
        .and("have.css", "font-size", "14px");
    });
  
    it("Case 5: ღილაკი შესვლა შემოწმება", () => {
      cy.contains(" შესვლა")
        .should("be.visible")
        .should("have.css", "font-size", "16px")
        .invoke("text")
        .and("have.length.at.least", 4);
  
      cy.contains("Facebook-ით")
        .should("be.visible")
        .should("have.css", "font-size", "16px")
        .invoke("text")
        .and("have.length.at.least", 5);
  
      cy.contains("Gmail-ით")
        .should("be.visible")
        .should("have.css", "font-size", "16px")
        .invoke("text")
        .and("have.length.at.least", 5);
    });
  
    it("Case 6: პაროლის აღდგენა ტექსტის და ღილაკის შემოწმება", () => {
      cy.contains(" პაროლის აღდგენა ")
        .should("have.css", "font-size", "14px")
        .click();
      cy.contains(" პაროლის აღდგენა").should("be.visible");
      cy.get("app-new-input[formcontrolname=username]").within(() => {
        cy.get("input")
          .should("have.attr", "autocomplete", "new-recover-password")
          .and("have.attr", "maxlength", "64");
        cy.get("label")
          .invoke("text")
          .then((emailInputText) => {
            expect(emailInputText).to.eq("ტელეფონი ან ელ.ფოსტა");
            expect(emailInputText).to.have.length(20);
          });
      });
      cy.contains("გაგრძელება")
        .should("be.visible")
        .and("have.css", "font-size", "16px")
        .invoke("text")
        .and("have.length", 10);
  
      // form back button
      cy.get('._x_icon-arrow-left-1').should("exist").click();
    });
  });
  

describe('რეგისტრაციის ფორმა', () => {
  beforeEach('First settings', () => {
    cy.authorizationMobile()
    cy.wait(2000)
      cy.contains("შესვლა")
        .and("have.css", "font-size", "16px")
        .click();
    cy.get('app-sign-in-page form div p._x_text-3 span._x_text-link-blue:eq(1)').click()
  })

  it('Case 1: ტექსტი (რეგისტრაცია) ფონტის ფერის და ზომის შემოწმება', () => {
    cy.contains("რეგისტრაცია")
        .should("have.css", "font-size", "20px")
        .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
        .and('have.css', 'color', 'rgb(0, 0, 0)')
  });

  it('Case 2: ღილაკი (ფიზიკური პირი) და ტექსტის ფონტის ფერის და ზომის შემოწმება. როდესაც აქტიურია', () => {
    cy.get('app-sign-user-info div._x_border-purple')
      .should("have.css", "font-size", "14px")
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(122, 29, 255)')
      .invoke('text').should('eq', 'ფიზიკური პირი')
  });

  it('Case 3: ღილაკი (ფიზიკური პირი) და ტექსტის ფონტის ფერის და ზომის შემოწმება როდესაც არ არის აქტიური', () => {
    cy.get('app-sign-user-info div._x_text-dark').click()
    cy.wait(800)
    cy.get('app-sign-user-info div._x_text-dark')
      .should("have.css", "font-size", "14px")
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .invoke('text').should('eq', 'ფიზიკური პირი')
  });

  it('Case 4: სახელის ჩასაწერი ველის შემოწმება', () => {
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

  it('Case 5: გვარის ჩასაწერი ველის შემოწმება', () => {
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


  it('Case 6: ტელეფონის ან ელფოსტის ჩასაწერი ველის შემოწმება', () => {
    cy.get("app-new-input[formcontrolname=emailOrPhone]").within(() => {
      cy.get("input")
        .should("have.attr", "maxlength", "64")
        .should("have.attr", "autocomplete", "new-recover-password");
      cy.get("label")
        .invoke("text")
        .then((emailInputText) => {
          expect(emailInputText).to.eq("ტელეფონი ან ელ.ფოსტა");
          expect(emailInputText).to.have.length(20);
        });
    });
  });

  it('Case 7: დაბადების დღის თვის და წელის ამოსარჩევი ველების შემოწმება', () => {
      cy.get("app-new-select[placeholder=დღე]").should("exist");
      cy.get("app-new-select[placeholder=თვე]").should("exist");
      cy.get("app-new-select[placeholder=წელი]").should("exist");
  });

  it('Case 8: ღილაკი გაგრძელება ტექსტის და ფონის ფერის შემოწმება', () => {
    cy.get('app-sign-user-info form button')
      .should('have.css', 'background-color', 'rgb(122, 29, 255)')
      .and('have.css', 'cursor', 'pointer')

      // ღილაკის ტექსტის შემოწმება
    cy.get('app-sign-user-info form button span')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
  })

  it('Case 9: ტექსტი (იურიდიული პირი) ფონტი ფერი და ზომის შემოწმება', () => {
    cy.get('._x_cursor-pointer > p')
      .should('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'font-size', '14px')
      .and('have.css', 'color', 'rgb(43, 39, 49)')
      .and('have.css', 'cursor', 'pointer')
      .invoke('text', 'იურიდიული პირი')
  })
})