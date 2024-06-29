const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "5hndem",
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
    },
    cypressQaseReporterReporterOptions: {
      projectCode: 'EWP',
      logging: true,
      basePath: 'https://api.qase.io/v1',
      screenshotFolder: 'screenshots',
      sendScreenshot: false,
      runComplete: true,
      environmentId: 1,
    },
  },
  env: {
    // Campaign ids
    balance: 1156,
    cashOnHand: 1189,
    plusPoints: 2676,
    installment: 2677,
    partByPart: 2678,
    ipay: 2680,
  },
  // retries: {
  //   runMode: 2,
  //   openMode: 2,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      if (config.env.dev) {
        return {
          baseUrl: "https://dev.extra.ge/dev-auth",
          env: {
            env: "dev",
           

            detail_page_url: "https://dev.extra.ge/product/",
            product_page_has_color_size: "https://dev.extra.ge/product/vans---ua-authentic-sf-kedi/503691",
            dashboard_Url: "https://merchant.dev.extra.ge/auth/user",
            checkout_page_url: "https://dev.extra.ge/checkout",
            user_orders_url: "https://dev.extra.ge/user/profile/orders",
            add_balanse_page_url: "https://dev.extra.ge/user/profile/balance",
            basket_page_url: "https://dev.extra.ge/basket",
            merchant_page_url: "https://dev.extra.ge/seller/hotspot/29",
            dashboard_home_page_url: "https://merchant.dev.extra.ge/routes/orders",
            orders_api_url: "https://payment.dev.extra.ge/v1/payment/order",
            gc_url: "https://mpi.gc.ge/extra_test/",
            home_page_url: "https://dev.extra.ge/",
            cms_url: "https://admin.dev.extra.ge",
            popular_set_page_url: 'https://dev.extra.ge/catalog/set/popular/110',
            timed_deals_set_url: 'https://dev.extra.ge/catalog/set/dgis%2520shetavazebebi/75',
            discount_item_detail_page_url: 'https://staging.extra.ge/product/philips-bhd30010-tmis-sashrobi/262785',
            item_detail_page_url: 'https://staging.extra.ge/product/panasonic-nn-ds596mzpe-mikrotalghuri-ghumeli/2268',

            // ? swagger urls
            api_ordering_url_inter: 'https://ordering.dev.extra.ge/api/orders?requestId=*',
            api_basket_url: 'https://basket.dev.extra.ge',
            api_identity_url: 'https://identity.dev.extra.ge',
            api_ordering_url: 'http://ordering.dev.extra.ge',
          },
        };
      } else if (config.env.beta) {
        return {
          baseUrl: "https://beta.extra.ge/",
          env: {
          

            detail_page_url: "https://beta.extra.ge/product/",
            product_page_has_color_size: "https://beta.extra.ge/product/vans---ua-authentic-sf-kedi/503691",
            dashboard_Url: "https://merchant.beta.extra.ge/auth/user",
            checkout_page_url: "https://beta.extra.ge/checkout",
            user_orders_url: "https://beta.extra.ge/user/profile/orders",
            add_balanse_page_url: "https://beta.extra.ge/user/profile/balance",
            basket_page_url: "https://beta.extra.ge/basket",
            merchant_page_url: "https://beta.extra.ge/seller/hotspot/29",
            dashboard_home_page_url: "https://merchant.beta.extra.ge/routes/orders",
            orders_api_url: "https://payment.beta.extra.ge/v1/payment/order",
            gc_url: "https://mpi.gc.ge/extra_test/",
            home_page_url: "https://beta.extra.ge/",
            cms_url: "https://admin.beta.extra.ge",
            my_cards_url: 'https://beta.extra.ge/user/profile/my-cards',
            popular_set_page_url: 'https://beta.extra.ge/catalog/set/popular/5710',
            timed_deals_set_url: 'https://beta.extra.ge/catalog/set/timed-deals/4988',
            discount_item_detail_page_url: 'https://beta.extra.ge/product/philips-bhd30010-tmis-sashrobi/262785',
            item_detail_page_url: 'https://beta.extra.ge/product/panasonic-nn-ds596mzpe-mikrotalghuri-ghumeli/2268',

            // ? swagger urls
            api_ordering_url_inter: 'https://ordering.beta.extra.ge/api/orders?requestId=*',
            api_basket_url: 'https://basket.beta.extra.ge',
            api_identity_url: 'https://identity.beta.extra.ge',
            api_ordering_url: 'http://ordering.beta.extra.ge',
          },
        };

      } else
        return {
          baseUrl: "https://staging.extra.ge/",
          env: {
            env: "staging",
            
            detail_page_url: "https://staging.extra.ge/product/",
            product_page_has_color_size: "https://staging.extra.ge/product/vans---ua-authentic-sf-kedi/503691",
            dashboard_Url: "https://merchant.staging.extra.ge/auth/user",
            checkout_page_url: "https://staging.extra.ge/checkout",
            user_orders_url: "https://staging.extra.ge/user/profile/orders",
            add_balanse_page_url: "https://staging.extra.ge/user/profile/balance",
            basket_page_url: "https://staging.extra.ge/basket",
            merchant_page_url: "https://staging.extra.ge/seller/hotspot/29",
            dashboard_home_page_url: "https://merchant.staging.extra.ge/routes/orders",
            orders_api_url: "https://payment.staging.extra.ge/v1/payment/order",
            gc_url: "https://mpi.gc.ge/extra_test/",
            home_page_url: "https://staging.extra.ge",
            cms_url: "https://admin.staging.extra.ge",
            my_cards_url: 'https://staging.extra.ge/user/profile/my-cards',
            popular_set_page_url: 'https://staging.extra.ge/catalog/set/popular/5710',
            timed_deals_set_url: 'https://staging.extra.ge/catalog/set/timed-deals/4988',
            discount_item_detail_page_url: 'https://staging.extra.ge/product/apple-iphone-12-64gb-black-mobiluri-telefoni/136072',
            item_detail_page_url: 'https://staging.extra.ge/product/panasonic-nn-ds596mzpe-mikrotalghuri-ghumeli/2268',
            product_detail_page_url: 'https://staging.extra.ge/product/apple-iphone-14-256gb6gb-purple-mobiluri-telefoni/685625',
            discount_product_detail_page_url: 'https://staging.extra.ge/product/hummel-onella-sharvali/450358',
            timer_product_detail_page_url: 'https://staging.extra.ge/product/philips-bhd30010-tmis-sashrobi/262785',
            color_size_product_detail_page_url: 'https://staging.extra.ge/product/hummel-onella-sharvali/450358',
            electronics_url: "https://staging.extra.ge/catalog/teqnika/1",
            // page urls

            express_page_url: "https://staging.extra.ge/express",
            market_page_url: "https://staging.extra.ge/express/market",
            toys_page_url: "https://staging.extra.ge/express/satamashoebi",
            selfcare_page_url: "https://staging.extra.ge/express/tavis-movla",
            electronics_page_url: "https://staging.extra.ge/express/teqnika",
            express_products_page_url: 'https://staging.extra.ge/catalog/parikebi/3061?deliveryTypes=3',
            technic_page: 'https://staging.extra.ge/catalog/foto-video/6?deliveryTypes=1',



            // ? swagger urls
            api_ordering_url_inter: 'https://ordering.staging.extra.ge/api/orders?requestId=*',
            api_basket_url: 'https://basket.staging.extra.ge',
            api_identity_url: 'https://identity.staging.extra.ge',
            api_ordering_url: 'http://ordering.staging.extra.ge',
          },
        };

    },
    chromeWebSecurity: true,
    testIsolation: false,
    scrollBehavior: false,
    requestTimeout: 5000,   // aqrdan
    numTestsKeptInMemory: 50,
    execTimeout: 1800000,
    responseTimeout: 10000,
    pageLoadTimeout: 40000,
    failOnStatusCode: false,
    defaultCommandTimeout: 9000,
    experimentalRunAllSpecs: true,
    trashAssetsBeforeRuns: true,
    video: false
  },
});
