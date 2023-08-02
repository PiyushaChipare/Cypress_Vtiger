describe('Page title ',()=>{
    it('validation',()=>{
        cy.title().should('be.equal','Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM').and('not.contain','123');
    })
})