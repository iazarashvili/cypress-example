// -- This is a parent command --
//    Cypress.Commands.add('logIn', (email, password) => {. . .})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginForm from "./pages/loginForm";
import header from "./pages/header.js";
const secUsserName = Cypress.env('authUserName')
const secPassword = Cypress.env('authPassword')



Cypress.Commands.add('authorization', () => {
  cy.clearAllSessionStorage()
  cy.clearAllLocalStorage()
  cy.viewport(1920, 1080);
  cy.visit('')
  cy.get('#username').type(secUsserName);
  cy.get('#password').type(secPassword);
  cy.contains(' Sign In ').click();
  cy.url().should('include', Cypress.env("home_page_url"));
  cy.wait(3000)
})

Cypress.Commands.add('authorizationMobile', () => {
  cy.clearAllSessionStorage()
  cy.clearAllLocalStorage()
  cy.viewport('iphone-x');
  cy.visit('')
  cy.get('#username').type(secUsserName);
  cy.get('#password').type(secPassword);
  cy.contains(' Sign In ').click();
  cy.url().should('include', Cypress.env("home_page_url"));
})

// ?-----------------------------------------------------------------


Cypress.Commands.add('sessionAuth', (name, password) => {
  cy.session("SessionAuthorization1", () => {
    cy.visit('')
    cy.get('#username').type(secUsserName);
    cy.get('#password').type(secPassword);
    cy.contains(' Sign In ').click();
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.get(header.elements.signInButton()).click({force: true});
    cy.get(loginForm.elements.usernameInput()).type(name);
    cy.get(loginForm.elements.passwordInput()).type(password);
    cy.get(loginForm.elements.formSignInButton()).click();
    cy.wait(2000);
  })
})

Cypress.Commands.add('sessionAuthLegalEntity', (name, password) => {
  cy.session("SessionAuthorization1", () => {
    cy.visit('')
    cy.get('#username').type(secUsserName);
    cy.get('#password').type(secPassword);
    cy.contains(' Sign In ').click();
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.get(header.elements.signInButton()).click({force: true});
    cy.get(loginForm.elements.legalEntity()).click()
    cy.get(loginForm.elements.usernameInput()).type('ripayed276@crodity.com');
    cy.get(loginForm.elements.passwordInput()).type('test1234');
    cy.get(loginForm.elements.formSignInButton()).click();
    cy.wait(3000);
  })
})

Cypress.Commands.add('mobileSessionAuth', (name, password) => {
  cy.session("SessionAuthorization1", () => {
    cy.visit('')
    cy.get('#username').type(secUsserName);
    cy.get('#password').type(secPassword);
    cy.contains(' Sign In ').click();
    cy.url().should('eq', Cypress.env('home_page_url') + '/');
    cy.get(header.elements.signInButton()).click({force: true});
    cy.get(loginForm.elements.usernameInput()).type(name);
    cy.get(loginForm.elements.passwordInput()).type(password);
    cy.get(loginForm.elements.formSignInButton()).click();
    cy.wait(2000);
  })
})

Cypress.Commands.add("logIn", (name, password) => {
  cy.get(header.elements.signInButton()).click();
  cy.get(loginForm.elements.usernameInput()).type(name);
  cy.get(loginForm.elements.passwordInput()).type(password);
  cy.get(loginForm.elements.formSignInButton()).click();
  cy.wait(3000);
});

Cypress.Commands.add("navigateToProfileAddressPage", () => {
  cy.visit("/user/profile/addresses")
  cy.location('pathname').should('equal', '/user/profile/addresses')
  cy.wait(3000)
});

Cypress.Commands.add("navigateToProfileAddressPageMobile", () => {
  cy.visit("/user/profile/addresses")
  cy.location('pathname').should('equal', '/user/profile/addresses')
});

Cypress.Commands.add("firstSettings", () => {
  cy.viewport(1920, 1080);
  cy.visit("");
});

Cypress.Commands.add("firstSettingsMobile", () => {
  cy.viewport("iphone-x");
  cy.visit("");
});

Cypress.Commands.add('priceParsing', (element) => {
  cy.get(element).invoke('text').then((prodPrice) => {
    const price = parseFloat(prodPrice.replace(/[\s₾,]/g, "")).toFixed(2);
    return parseFloat(price)
  })
})



