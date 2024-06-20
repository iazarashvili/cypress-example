class extraLoginForm {
  elements = {
    usernameInput: () => "[formcontrolname=email] input",
    passwordInput: () => "[formcontrolname=password] input",
    formSignInButton: () => 'form button._x_bg-purple',
    errorMessage: () => cy.get('[class="_x_flex _x_font-medium _x_text-3 _x_text-white"]',{timeout: 6000}),
    errorMessages: () => cy.get('[class="_x_flex _x_font-medium _x_text-2 _x_text-white ng-star-inserted"]', {timeout: 6000}),
    signInButton: () => 'button[type="button"] span._x_text-3:eq(1)',
    legalEntity: () => 'div._x_w-76 p:eq(1)',
    
  };

  legalElements = {
    signInButton: () => 'button._x_bg-purple span:eq(0)'
  }
}

module.exports = new extraLoginForm();
