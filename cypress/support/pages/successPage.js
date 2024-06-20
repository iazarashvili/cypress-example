class extraSuccessPage {
  elements = {
    orderID: () => 'p u[tabindex="0"]',
  };

  congratulations() {
    return cy.contains(" გილოცავ! ");
  }
  viewOrderButton() {
    return cy.contains("შეკვეთის ნახვა");
  }

  whiteEll = {
    congratulationText: () => 'app-checkout-success h1._x_font-bold'
  }
}

module.exports = new extraSuccessPage();
