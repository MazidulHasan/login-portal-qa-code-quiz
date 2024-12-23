// cypress/e2e/login.spec.js

describe('Login Page Tests', () => {
  it('should log in successfully with valid credentials', () => {
    cy.login('validUser', 'validPass');
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('should display an error message for invalid credentials', () => {
    cy.login('invalidUser', 'invalidPass');
    cy.verifyErrorMessage('If you do not have an account, contact an admin');
  });

  it('should display an error when username is blank', () => {
    cy.login('', 'validPass');
    cy.verifyErrorMessage('Username is required');
  });

  it('should display an error when password is blank', () => {
    cy.login('validUser', '');
    cy.verifyErrorMessage('Password is required');
  });

  it('should display an error when both fields are blank', () => {
    cy.login('', '');
    cy.verifyErrorMessage('Username is required');
    cy.verifyErrorMessage('Password is required');
  });

  it('should mask the password field', () => {
    cy.verifyFieldMasking('input[placeholder="password"]');
  });
});
