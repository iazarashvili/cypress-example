class MarketPage {
    elements = {
      expressButton: () => '[routerlink="/express"]',
      expressPageTitle: () => '._x_max-w-780 > ._x_font-bold',
      expressCategoryQuantity: () => 'ng-component.ng-star-inserted > ._x_max-w-780 > ._x_grid',
      marketPageCategoryQuantity: () => '[href="/express/market"] > ._x_cursor-pointer > ._x_w-full',
      marketBanner: () => 'a[href="/express/market"]',
      categoryPageTitle: () => '._x_w-full > ._x_text-5',
      selfCareBanner: () => '[href="/express/tavis-movla"] > ._x_cursor-pointer > ._x_w-full',
      electronicsBanner: () => '[href="/express/teqnika"] > ._x_cursor-pointer > ._x_w-full',
      toysBanner: () => '[href="/express/satamashoebi"] > ._x_cursor-pointer > ._x_w-full',
      expressLabel: () => '._x_hidden > ._x_left-0',
      expressLabelCloseButton: () => '._x_left-0 > ._x_icon',
      fruitAndVegetablesBanner: () => '[href="/catalog/parikebi/3061?deliveryTypes=3"] > ._x_cursor-pointer > img',
      breadAndCookiesBanner: () => '[href="/catalog/set/puri-funtusheuli/5844%09"] > ._x_cursor-pointer > img',
      bakaleaBanner: () => '[href="/catalog/set/bakalea/5845%09"] > ._x_cursor-pointer > img',
      meatAndFishBanner: () => '[href="/catalog/set/xorci-tevzi/5846"] > ._x_cursor-pointer > img',
      coffeeAndTeaBanner: () => '[href="/catalog/set/yava-chai/5847"] > ._x_cursor-pointer > img',
      easterOfferBanner: () => '[href="/catalog/marketi/1837?filterByDiscount=true"] > ._x_cursor-pointer > img',
      closeAddNewAddressModal: () => '._x_hidden > ._x_bg-dark-900 > ._x_max-w-780 > ._x_relative > ._x_top-9 > ._x_flex'
    }
  
    elementsMobile = {
      breadAndCookiesBannerMobile: () => '[href="/catalog/set/puri-funtusheuli/5844"] > ._x_cursor-pointer > img',
      bakaleaBannerMobile: () => '[href="/catalog/set/bakalea/5845"] > ._x_cursor-pointer > img',
      easterOfferBannerMobile: () => '[href="/catalog/set/saagdgomo-shetavazeba/5848"] > ._x_cursor-pointer > img',
      selfCareBannerMobile: () => '[href="/express/tavis-movla"] > ._x_cursor-pointer > ._x_w-full'
    }
  }
  
  
  module.exports = new MarketPage();