describe('Launch browser',()=>{
    it('open application',()=>{
        cy.visit('https://www.hotstar.com/in/home');
        cy.get('[class="rQ_gfJEdoJGvLVb_rKLtL items-center justify-center"]').eq(2).click();//.first().click();
        cy.get('[class="_1zc788KtPN0EmaoSx7RUA_  R3BvYL0DgqqpnQztSLAyZ "]').invoke('text').then(text=>{cy.log(text);})
        // expect(URL).should('eq','https://www.hotstar.com/in/movies/janaki-jaane/1260144502?filters=content_type%3Dmovie')
        // cy.get('.form-control input-lg').type('mobile');
        // cy.get('.btn btn-default btn-lg').click();
        // cy.get('#user-name')//.type('standard_user');
        // cy.get('#password').type('secret_sauce');
        // cy.get('#login-button').click();
    })
})