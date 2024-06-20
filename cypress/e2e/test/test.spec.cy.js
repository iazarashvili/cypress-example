import extraLoginForm from "../../support/pages/loginForm";
import extraHomePage from "../../support/pages/homePage";
import users from "../../fixtures/profile.json"
import { usserName } from "../../support/Helpers/checkoutPageHelpers";
import cmsApi from "../../support/Extra-API/cmsAPI"
import {baseHelper} from '../../support/Helpers/baseHelper'
import { basketApi } from "../../support/Extra-API/basketAPI";
import loginForm from "../../support/pages/loginForm";
import selectors from '../../support/pages/test'

//test
describe("ავტორიზაციის შემოწმება", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
  });

  it('', () => {
    basketApi.checkTotalPrice()
     selectors.
  });
});