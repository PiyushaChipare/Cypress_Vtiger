describe('Handle',()=>{
    it('Shadow element',()=>{
        cy.visit('https://selectorshub.com/iframe-in-shadow-dom/');

        //If >>>["includeShadowDom":true] is NOT included in cypress.config.js
        // let InputEdt=cy.get('#userName').shadow().find('#kils');
        // InputEdt.type('{a}{b}');
        // assert(InputEdt.getValue()==='ab','Not ab');

        //If >>>["includeShadowDom":true] is included in cypress.config.js
    let InputEdt=cy.get('#kils');
    InputEdt.type('{a}{b}');
    InputEdt.invoke('val').should('eq',"abc");
    })
})