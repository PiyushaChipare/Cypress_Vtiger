import homePage from "../PageObject/homePage";

describe('Myntra',()=>{
    it.skip('open',()=>{
        cy.viewport(1200,800);
        cy.visit('https://www.amazon.in');
        let HomePage=new homePage();
        HomePage.searchEdt().type('iphone 14');
        HomePage.searchBtn().click();
        // cy.get('#twotabsearchtextbox').type('iphone 14');
        // cy.get('#nav-search-submit-button').click();
        cy.xpath("//span[text()='Apple iPhone 14 (128 GB) - Blue']").first().click();
        cy.visit('https://www.amazon.in/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_1_sspa?crid=LMKUCLOTZNXB&keywords=iphone+14&qid=1689931010&sprefix=iphone+14%2Caps%2C611&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1');
        cy.get('#add-to-cart-button').click();
        cy.get('#attach-close_sideSheet-link').click();
        cy.get('#nav-cart-text-container').click();
        cy.xpath('//span[@class="a-truncate-full a-offscreen"]').invoke('text').then(text=>{ expect(text).to.contain('Apple iPhone 14 (128 GB) - Blue')});
 })
 it('hover',()=>{
    cy.viewport(1200,800);
    cy.visit('https://www.amazon.in');
    let HomePage=new homePage();
    HomePage.searchEdt().type('Apple iPhone 14 Gold');
    HomePage.searchBtn().click();
    cy.get('[alt="Apple iPhone 14 Pro Max (128 GB) - Gold"]').click();
    cy.visit('https://www.amazon.in/Apple-iPhone-Pro-128GB-Gold/dp/B0BDJBGBF3/ref=sr_1_1?crid=1ZJYO0M0NTHEC&keywords=Apple+iPhone+14+Gold&qid=1690873296&sprefix=apple+iphone+14+gold%2Caps%2C715&sr=8-1');
    cy.xpath("//img[@alt='Silver']").trigger('mouseover');
    cy.wait(3000);
    cy.xpath("//span[text()='Silver']").should('have.text',"Silver");
   })

})