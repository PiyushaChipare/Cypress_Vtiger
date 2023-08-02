describe('Alert',()=>{
    it('OK',()=>{
        cy.visit('https://demoqa.com/alerts');
        cy.get('#alertButton').click();
    })
})