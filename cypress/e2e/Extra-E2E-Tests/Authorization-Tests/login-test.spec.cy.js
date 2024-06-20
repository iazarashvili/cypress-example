import extraLoginForm from "../../../support/pages/loginForm";
import loginForm from "../../../support/pages/loginForm";
import homePage from "../../../support/pages/homePage";
import header from '../../../support/pages/header'
import { qase } from 'cypress-qase-reporter/dist/mocha';

//test
describe('My First Test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.authorization()
    cy.wait(2000)
  });

  qase([1,2],
      it('Case 1: ავტორიზაცია სწორი მონაცემებით', () => {
        cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'));
        cy.url().should("include", Cypress.env("home_page_url"));
        cy.contains("შესვლა").should("not.exist");
      })
  );

  qase(3,
      it('Case 2: ავტორიზაცია არასწორი სახელით', () => {
        cy.logIn(Cypress.env('IncorrectEmail'), Cypress.env('CorrectPassword'));
        extraLoginForm.elements
          .errorMessage()
          .should("have.text", " მომხმარებელი არ მოიძებნა ", {})
          .and('have.css', 'font-size', '14px')
          .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
          .and('have.css', 'color', 'rgb(255, 255, 255)')
        cy.url().should("include", Cypress.env("home_page_url") + '/');
      })
  );

  qase(4,
      it('Case 3: ავტორიზაცია არასწორი პაროლით', () => {
        cy.logIn(Cypress.env('CorrectEmail'), Cypress.env('IncorrectPassword'));
        extraLoginForm.elements
          .errorMessage()
          .should("have.text", " მომხმარებელი არ მოიძებნა ")
          .and('have.css', 'font-size', '14px')
          .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
          .and('have.css', 'color', 'rgb(255, 255, 255)')
        cy.url().should("include", Cypress.env("home_page_url"));
      })
  );

  qase(5,
      it('Case 4: არ ვავსებთ მეილის და პაროლის ველებს და ვაჭერთ ღილაკზე შესვლა', () => {
        cy.get(header.elements.signInButton()).click();
        cy.get(extraLoginForm.elements.usernameInput()).click();
        cy.get(extraLoginForm.elements.formSignInButton()).click();
        extraLoginForm.elements
          .errorMessages()
          .should("have.text", " სავალდებულო ველი ")
          .and('have.css', 'font-size', '12px')
          .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
          .and('have.css', 'color', 'rgb(255, 255, 255)')
      })
  );

  qase(6,
    it('Case 5: არავალიდური ფორმატის ერორ მესიჯის შემოწმება', () => {
      cy.get(header.elements.signInButton()).click()
      cy.get(loginForm.elements.usernameInput()).type("notvalid.imeil.com");
      cy.get(loginForm.elements.formSignInButton()).click();
      loginForm.elements.errorMessages().should('have.text', ' არავალიდური ფორმატის ')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
    })
  );

  qase(7,
    it('Case 6: (სავალდებულო ველი) ერორ მესიჯის შემოწმება', () => {
      cy.get(header.elements.signInButton()).click()
      cy.get(loginForm.elements.formSignInButton()).click();
      loginForm.elements.errorMessages().should('have.text', ' სავალდებულო ველი ')
        .and('have.css', 'font-size', '12px')
        .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
    })
  );
});