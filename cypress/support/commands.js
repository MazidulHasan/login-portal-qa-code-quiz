// cypress/support/commands.js

const LoginPage = require('../pages/LoginPage');

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/'); // Assumes baseUrl is set in cypress.config.js
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.clickLoginButton();
});


Cypress.Commands.add('verifyErrorMessage', (expectedMessage) => {
  LoginPage.getErrorMessage()
    .should('be.visible')
    .and('contain.text', expectedMessage);
});

Cypress.Commands.add('verifyFieldMasking', (selector) => {
  cy.get(selector).type('password123');
  cy.get(selector).should('have.attr', 'type', 'password');
});
