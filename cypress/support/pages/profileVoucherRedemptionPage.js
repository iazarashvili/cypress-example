class profileVoucherRedemptionPage {
    elements = {

        //Web Elements
        voucherRedemptionSectionButton: () => ':nth-child(5) > ._x_flex > ._x_text-2',
        enterVoucherCodeField: () => '._x_pr-10:eq(0)',
        activateVoucherButton: () => '._x_ml-0:eq(0)',
        enterVoucherCodeInput: () => '._x_pl-10:eq(0)',
        activateButtonText: () => '._x_text-2._x_font-bold',
        invalidVoucherCodeErrorBorder: () => '._x_top-minus-8',

        //Mobile Elements
        voucherRedemptionSectionButtonMobile: () => ':nth-child(5) > ._x_py-5 > ._x_text-4',
    }
}

module.exports = new profileVoucherRedemptionPage()