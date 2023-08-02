///<reference types="Cypress" />
describe('Handle',()=>{
    it.only('Dropdown',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('[name="tablepress-1_length"]').select("25").should('have.value','100');
        
    })
    it('Mouseover using trigger',()=>{
        cy.visit('https://selectorshub.com/xpath-practice-page/');
        cy.get('.dropbtn').last().trigger('mouseover');
        cy.xpath("//a[.='Join Training']").should('be.visible');
        cy.wait(2000);
    })
    it('iframe',()=>{
            cy.log('First Test');
            cy.visit('http://localhost:8888');
            cy.login('admin','password');
            cy.xpath("//td[@class='tabUnSelected']/a[text()='Documents']").click();
            cy.get('[alt="Create Document..."]').click();
            let iframe=cy.get('#cke_contents_notecontent iframe').its('0.contentDocument.body').then(cy.wrap);
            iframe.type('Alpha');
            iframe.invoke('text')
            // cy.frameLoaded('iframe');
            // cy.iframe('iframe').type('Alpha');
    })
})
// describe('',()=>{
//     it('',()=>{

//     })
// })
