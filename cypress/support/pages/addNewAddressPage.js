class addNewAddressPage {
  elements = {

    deliveryAddressTitle: () => 'app-my-addresses h2',
    addAddressButtonText: () => 'app-my-addresses button._x_border-purple',
    youDontHaveDeliveryAddressText: () => 'app-my-addresses p._x_font-medium',

    // ! popup element
    popupAddAddressButton: () => '[class="_x_text-3 _x_font-bold"] span',
    selectCity: () => 'app-dynamic-select ng-select',
    selectAddressInAddressList: () => ':nth-child(2) > .pac-item-query > .pac-matched',
    addressInputField: () => '[formcontrolname="address"]',
    moreDotsButton: () => '._x_absolute > ._x_hidden._x_items-center > ._x_icon',
    removeAddressButton: () => 'app-my-addresses div p._x_font-medium:eq(3)',
    confirmRemoveAddressButton: () => 'button._x_bg-purple:eq(3)',
    addAddressButtonPlusIcon: () => 'app-my-addresses button i._x_icon-plus',
    popupDeliveryAddressText: () => '[class="_x_font-bold _x_text-5"]',
    selectCityPlaceHolderText: () => '[class="ng-placeholder"]',
    addressPopupText: () => 'div._x_relative label._x_pointer-events-none',
    popupAddressAdditionalInfo: () => '[formcontrolname="addressAdditionalInfo"]',
    primaryAddressCheckBox: () => '[for="isDefaultCheckbox"]',
    selectAddressTickingText: () => '[class="_x_mb-6 _x_pointer-events-none _x_opacity-40"] p',
    popupAddAddressButtonText: () => '[class="_x_text-3 _x_font-bold"] span',
  }

  elementsMobile = {
    addAddressButtonText: () => 'app-my-addresses button i._x_icon-plus',
    selectCityPlaceHolderText: () => '[class="ng-placeholder"]',
    addressPopupText: () => 'div._x_relative label._x_pointer-events-none',
    openMapAndSelectAddressText: () => '[class="_x_font-bold _x_text-3 _x_text-dark _x_mb-6"]',
    selectAddressOnTheMapButtonText: () => 'app-address-form button._x_border-purple',
    popupAddAddressButtonText: () => '[class="_x_text-3 _x_font-bold"]'
  }
}


module.exports = new addNewAddressPage();