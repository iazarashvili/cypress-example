// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "./helpers/checkoutPageHelpers";
import "./Helpers/conftests";
import 'cypress-plugin-api';
import './Helpers/baseHelper';
import './Extra-API/basketAPI';
import './Extra-API/cmsAPI';
import './pages/successPage';
import './Helpers/productDetailPageHelper'
import './Helpers/homePageHelpers'
import './pages/iframes'
import 'cypress-mochawesome-reporter/register';
import './pages/homePage'
import './Helpers/baseHelper'
import './pages/resultPage'
import './pages/wishListPage'
import 'cypress-file-upload';


// supplement parentSuite name with folder name

// Alternatively you can use CommonJS syntax:
// require('./commands')

// npx cypress run --record --key d9ef2fb3-fdb2-4540-9a9d-e0035fe16466
// npx cypress verify
// npx cypress run

// report test run
// npm test
// npm run launchReport
// git remote update origin --prune  # update brenches
// git fetch --prune  # brenchebis darefresheba
// ./node_modules/.bin/cypress open  open cypress


//! QASE IO
//  $env:QASE_REPORT=1
// npx cypress run

//! reporter
// npm run html-report

//! environment dev or staging
// npm run open-staging    run staging environments
// git branch -D bugfix/fix-tests