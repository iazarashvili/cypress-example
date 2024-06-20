import homePage from "../../../support/pages/homePage";

describe("ფუტერის შემოწმება 1920 X 1080 რეზოლუციაზე", () => {
  beforeEach("", () => {
    cy.viewport(1920, 1080);
    cy.sessionAuth(Cypress.env('CorrectEmail'), Cypress.env('CorrectPassword'))
    cy.visit('')
    cy.get(homePage.whiteElements.whiteDealsTimer(), {timeout: 10000})
    cy.contains('© 2024 Extra.ge ყველა უფლება დაცულია').scrollIntoView()
    cy.wait(2000);
  })

  it('Case 1: ტექსტი მაღაზიების ციფრული პლატფორმა შემოწმება', () => {
    cy.get(homePage.elements.textDigitalPlatformStores())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgb(255, 255, 255)').invoke('text')
      .should('eq', ' ყველაზე დიდი ონლაინ მაღაზია ')
  });

  it('Case 2: ტექსტი ჩვენ შესახებ შემოწმება', () => {
    cy.get(homePage.footerElements.textAboutUs())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .invoke('text').should('eq', ' ჩვენ შესახებ ')
  });

  it('Case 3: სტატიკური გვერდი ვინ ვართ ჩვენ შემოწმება', () => {
    cy.contains(' ვინ ვართ ჩვენ ').should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.attr', 'href', 'static/about-us')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
  });

  it('Case 4: სტატიკური გვერდი ბლოგი შემოწმება', () => {
    cy.contains(' ბლოგი ').should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.attr', 'href', 'https://extra.ge/blog/')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
  });

  it('Case 5: ტექსტი წესები და პირობები შემოწმება', () => {
    cy.contains(' წესები და პირობები ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  });

  it('Case 6: ტექსტი ხშირად დასმული კითხვები შემოწმება', () => {
    cy.contains(' ხშირად დასმული კითხვები ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
      .and('have.attr', 'href', 'static/FAQ')
  });

  it('Case 7: საუკეთესო ფასის გარანტია შემოწმება', () => {
    cy.contains(' საუკეთესო ფასის გარანტია ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(43, 39, 49, 0.8)')
  });


  it('Case 8: განვადებით შეძენა შემოწმება', () => {
    cy.contains(' განვადებით შეძენა ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
      .and('have.attr', 'href', 'static/installment')
  });

  it('Case 9: დაბრუნების და გაცვლის პოლიტიკა შემოწმება', () => {
    cy.contains(' დაბრუნების და გაცვლის პოლიტიკა ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
      .and('have.attr', 'href', 'static/return-change')
  });

  it('Case 10:  წესები და პირობები  შემოწმება', () => {
    cy.contains(' წესები და პირობები ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  });

  it('Case 11: კონფიდენციალურობა  შემოწმება', () => {
    cy.contains(' კონფიდენციალურობა ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
  });

  it('Case 12: ტექსტი პარტნიორებისთვის შემოწმება', () => {
    cy.contains(' პარტნიორებისთვის ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  });

  it('Case 13: როგორ გავყიდოთ ექსტრაზე შემოწმება', () => {
    cy.contains(' როგორ გავყიდოთ ექსტრაზე ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.attr', 'href', 'static/how-to-sell')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
  });

  it('Case 14: წესები და პირობები შემოწმება', () => {
    cy.get(homePage.footerElements.pagePrivacyPolicy())
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
      .and('have.attr', 'href', 'static/privacy-policy')
      .and('have.css', 'color', 'rgba(255, 255, 255, 0.7)')
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
  it('Case 15: დაგვიკავშირდით ტექსტის შემოწმება', () => {
    cy.contains(' დაგვიკავშირდით ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Bold')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
  });

  it('Case 16: საკონტაქტო ნომრის და მისამართის შემოწმება', () => {
    cy.get('footer ul li a span:eq(0)').invoke('text')
      .should('eq', ' 032 2 333 111 ')

    cy.get('footer ul li a span:eq(1)').invoke('text')
      .should('eq', ' info@extra.ge')

    cy.contains(' სს „ექსტრა არეა“ ს/კ 402129763 თბილისი, პეკინის გამზირი, N 41 ')
      .should('have.css', 'font-size', '14px')
      .and('have.css', 'font-family', 'Conv_MarkGEO-Medium')
  });

  it('Case 17: სოც ქსელის აიქონების შემოწმება', () => {
   cy.get(homePage.footerElements.facebookIcon())
    .should('have.attr', 'href', 'https://www.facebook.com/Extramarketplace/')
    cy.get(homePage.footerElements.instagramIcon())
    .should('have.attr', 'href', 'https://www.instagram.com/extra__ge/')
    cy.get(homePage.footerElements.youtubeIcon())
    .should('have.attr', 'href', 'https://www.youtube.com/channel/UCt15iQDgO_LykoFZjynI_vg')
    cy.get(homePage.footerElements.linkDinIcon())
    .should('have.attr', 'href', 'https://www.linkedin.com/company/extra-ge/mycompany/')
  });
});
