class ProfileOrdersPage {
  elements = {
    orderIdFromOrdersPage: () => '[id="profile-edit-form"] div._x_text-2:eq(1)',
    orderTotalPrice: () => '[id="profile-edit-form"] div._x_items-center:eq(0)',
    myOrdersText: () => '[id="profile-edit-form"] h2'
  };

  whiteElements = {
    whiteProfileEdit: () => 'app-orders span[class="_x_text-2 sm:_x_text-3 _x_font-medium _x_text-link-blue _x_h-unset sm:_x_h-9"]:eq(0)'
  };

}

module.exports = new ProfileOrdersPage();
