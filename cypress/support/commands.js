// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />

Cypress.Commands.add('login',(username,password)=>{
        cy.get('[name="user_name"]').type(username);
        cy.get('[name="user_password"]').type(password);
        cy.get('[id="submitButton"]').click();
})

Cypress.Commands.add('logout',()=>{
    cy.get('[src="themes/softed/images/user.PNG"]').trigger('mouseover');
    cy.xpath("//a[text()='Sign Out']").click();
    cy.wait(2000);
})