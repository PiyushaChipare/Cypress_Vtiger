// ***********************************************************
// This example support/e2e.js is processed and
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
import './commands'
import 'cypress-xpath'
import 'cypress-iframe'
import 'cypress-file-upload'
// import 'cypress-mochawesome-reporter'

beforeEach(()=>{
    cy.visit('http://localhost:8888');
    cy.login('admin','password');

    // cy.fixture('testDAta').then(data=>{
    //     cy.login(data.username,data.password);
    // })
})
// afterEach(()=>{
//     cy.logout();
// })
// const { should } = require("chai");

// Alternatively you can use CommonJS syntax:
// require('./commands')