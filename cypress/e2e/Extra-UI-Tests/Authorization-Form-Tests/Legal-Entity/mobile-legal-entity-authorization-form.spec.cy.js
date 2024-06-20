describe("ავტორიზაცია რეგისტრაციის ფორმა 375 X 812 გაფართოებაზე", () => {
    beforeEach("", () => {
      cy.authorizationMobile()
      cy.contains("შესვლა").should("be.visible")
        .and("have.css", "font-size", "16px")
        .click();
    });

    it("Case 1: ტექსტი (იურიდიული პირი) ფონტის ფერის და ზომის შემოწმება", () => {
        cy.contains(" ავტორიზაცია ")
          .and("have.css", "font-size", "20px")
          .and('have.css', 'font-family' , 'Conv_MarkGEO-Bold')
      });
    
      it('Case 2: "იურიდიული პირი" ტექსტის შემოწმება, როდესაც "იურიდიული პირის" სექცია არ არის მონიშნული - ფონტი, ზომა, ფერი ', () => {
        cy.get('._x_cursor-pointer > p')
          .should('have.css', 'font-family' , 'Conv_MarkGEO-Medium')
          .and('have.css', 'color' , 'rgb(43, 39, 49)')
          .and('have.css', 'font-size' , '14px')
          .invoke('text').should('eq', 'იურიდიული პირი')
    
          
      });
    
      it('Case 3: "იურიდიული პირი" ტექსტის შემოწმება, როდესაც "იურიდიული პირის" სექცია მონიშნულია - ფონტი, ზომა, ფერი ', () => {
        cy.get('._x_cursor-pointer > p').click()
          .should('have.css', 'font-family' , 'Conv_MarkGEO-Bold')
          .and('have.css', 'color' , 'rgb(122, 29, 255)')
          .and('have.css', 'font-size' , '14px')
          .invoke('text').should('eq', 'იურიდიული პირი')
      });

      describe("ავტორიზაცია რეგისტრაციის ფორმა 375 X 812 გაფართოებაზე", () => {
        beforeEach("", () => {
          cy.authorizationMobile()
          cy.contains("შესვლა").should("be.visible")
            .and("have.css", "font-size", "16px")
            .click();
            cy.get('._x_cursor-pointer > p').click()
        });

        it('Case 1: "იურიდიული პირის" ავტორიზაციის გვერდზე მეილის შესაყვანი ველის შემოწმება', () => {
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
    
        it("Case 2: პაროლის შესაყვანი ველის შემოწმება", () => {
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

          it("Case 3: ტექსტი (დაგავიწყდა პაროლი? პაროლის აღდგენა) ტექსტი ფერის და ზომის შემოწმება", () => {
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
          it('Case 4: ტექსტი (ახალი ხარ Extra-ზე დარეგისტრირდი) ფონტი ფერის და ზომის შემოწმება', () => {
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

          it("Case 5: ავტორიზაციის ღილაკის შემოწმება", () => {
            cy.contains(" შესვლა")
              .should("have.css", "font-size", "16px")
              .invoke("text")
              .and("have.length.at.least", 5);
          });

          it("Case 6: პაროლის აღდგენის ფორმის შემოწმება", () => {
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
    })
})