
import { checkCategoryNames } from '../../../support/Helpers/homePageHelpers'

let counter = 0
let hrefElement = '[class="_x_pl-0 _x_ml-0"] a'
let srcElement = '[class="_x_pl-0 _x_ml-0"] li img'

interface TestCase {
  catalogHrefEllement: string,
  expectedOutput: string,
  catalogSrcElement: string
  expectedOutput2: string,
  categoryName: string,
}

const testCases: TestCase[] = [
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/eqspresi-35-50-tsuti/7459', catalogSrcElement: srcElement, expectedOutput2: '/icons/express', categoryName: 'ექსპრესი 35-50 წუთი' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/sakhli-da-ezo/8', catalogSrcElement: srcElement, expectedOutput2: '/icons/saxli-196b174f.svg', categoryName: 'სახლი და ეზო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/teqnika/1', catalogSrcElement: srcElement, expectedOutput2: '/icons/teknika-1b12fb43.svg', categoryName: 'ტექნიკა' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/baghi-da-ezo/1114', catalogSrcElement: srcElement, expectedOutput2: '/icons/icons-24-cat-beauty-aa3a1bc4.svg', categoryName: 'ბაღი და ეზო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/satamashoebi/1386', catalogSrcElement: srcElement, expectedOutput2: '/icons/toys-97df4762.svg', categoryName: 'სათამაშოები' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/silamaze-da-janmrteloba/344', catalogSrcElement: srcElement, expectedOutput2: '/icons/icons-24-cat-beauty-563d02f8-3f9d3275.svg', categoryName: 'სილამაზე და ჯანმრთელობა' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/industriuli-inventari/1562', catalogSrcElement: srcElement, expectedOutput2: '/icons/industriuli-70cf4abe.svg', categoryName: 'ინდუსტრიული ინვენტარი' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/mshenebloba-da-remonti/1652', catalogSrcElement: srcElement, expectedOutput2: '/icons/mshenebloba-f1a41486.svg', categoryName: 'მშენებლობა და რემონტი' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/bavshvta-samqaro/336', catalogSrcElement: srcElement, expectedOutput2: '/icons/kids-fc73b711.svg', categoryName: 'ბავშვთა სამყარო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/modis-samqaro/839', catalogSrcElement: srcElement, expectedOutput2: '/icons/fashion-e32d1435.svg', categoryName: 'მოდის სამყარო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/chkviani-sistemebi/207', catalogSrcElement: srcElement, expectedOutput2: '/icons/smart-home-e8970a38.svg', categoryName: 'ჭკვიანი სისტემები' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/marketi/1837', catalogSrcElement: srcElement, expectedOutput2: '/icons/marketi-a21a0513.svg', categoryName: 'მარკეტი' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/tsignebi/2350', catalogSrcElement: srcElement, expectedOutput2: '/icons/books-6f9e3709.svg', categoryName: 'წიგნები' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/sporti-da-mogzauroba/918', catalogSrcElement: srcElement, expectedOutput2: '/icons/icons-24-cat-sport-2b530833.svg', categoryName: 'სპორტი და მოგზაურობა' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/musika-da-instrumentebi/1587', catalogSrcElement: srcElement, expectedOutput2: '/icons/muisc-843c92da-61230718.svg', categoryName: 'მუსიკა და ინსტრუმენტები' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/tskhovelta-samqaro/1568', catalogSrcElement: srcElement, expectedOutput2: '/icons/pets-e0f10ee4.svg', categoryName: 'ცხოველთა სამყარო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/ofisi-da-sakantselario/1582', catalogSrcElement: srcElement, expectedOutput2: '/icons/documents-d224b92e.svg', categoryName: 'ოფისი და საკანცელარიო' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/achuqe/2806', catalogSrcElement: srcElement, expectedOutput2: '/icons/giftcard-8a0045ff.svg', categoryName: 'აჩუქე' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/sex-shop/2744', catalogSrcElement: srcElement, expectedOutput2: '/icons/adult-a7861693.svg', categoryName: 'Sex Shop' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/farmatsia/1910', catalogSrcElement: srcElement, expectedOutput2: '/icons/farmacia-99d47be1.svg', categoryName: 'ფარმაცია' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/tsveuleba-da-ghonisdzieba/1390', catalogSrcElement: srcElement, expectedOutput2: '/icons/drum_party-819d95de.svg', categoryName: 'წვეულება და ღონისძიება' },
  { catalogHrefEllement: hrefElement, expectedOutput: '/catalog/avto-samqaro/924', catalogSrcElement: srcElement, expectedOutput2: '/icons/auto-7522a369.svg', categoryName: 'ავტო სამყარო' },
]

describe('კატეგორიების შეწმოწმება. 1920 X 1080', () => {
  beforeEach('First Steps', () => {
    cy.viewport(1920, 1080)
    cy.authorization()
    cy.get('[class="_x_mt-4 _x_text-red _x_text-2 _x_font-bold ng-star-inserted"]', { timeout: 10000 })
    cy.contains("კატალოგი").click();
  })
  it('კატეგორიების შეწმოწმება. 1920 x 1080', () => {

    for (const { catalogHrefEllement, expectedOutput, catalogSrcElement, expectedOutput2, categoryName } of testCases) {

      cy.get(catalogHrefEllement).eq(counter)
        .should('have.attr', 'href', expectedOutput)

      // check category icon
      cy.get(catalogSrcElement).eq(counter)
        .invoke('attr', 'src')
        .should('include', expectedOutput2)

      // check category title
      checkCategoryNames(counter, categoryName)
      counter += 1
    }
  });
})

describe("კატეგორიების შეწმოწმება. 375 x 812", () => {
  beforeEach('Visit Site', () => {
    cy.viewport('iphone-x')
    cy.authorizationMobile()
    cy.wait(2000)
    cy.get("button i._x_icon-burger:eq(0)").click();
  });

  it('კატეგორიების შეწმოწმება. 375 x 812', () => {
    counter = 0
    for (const { catalogHrefEllement, expectedOutput, catalogSrcElement, expectedOutput2, categoryName } of testCases) {
      cy.get(catalogHrefEllement).eq(counter)
        .should('have.attr', 'href', expectedOutput)

      // check category icon
      cy.get(catalogSrcElement).eq(counter)
        .invoke('attr', 'src')
        .should('include', expectedOutput2)

      // check category title
      checkCategoryNames(counter, categoryName)
      counter += 1
    }
  });
});