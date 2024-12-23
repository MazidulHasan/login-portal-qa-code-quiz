// cypress/support/LoginPage.js

class LoginPage {
    // Fill the username input field
    fillUsername(username) {
      cy.get('#root > div > div.sc-ifAKCX.hiveTJ > input:nth-child(1)').type(username, { force: true });
    }
  
    // Fill the password input field
    fillPassword(password) {
      cy.get('#root > div > div.sc-ifAKCX.hiveTJ > input:nth-child(2)').type(password, { force: true });
    }
  
    // Click the login button
    clickLoginButton() {
      cy.get('button[class*="sc-bZQynM"]').click();
    }
  
    // Get the error message element
    getErrorMessage() {
      return cy.get('div').contains('If you do not have an account, contact an admin');
    }
  
    // Check if the password field is masked
    isPasswordMasked() {
      cy.get('#root > div > div.sc-ifAKCX.hiveTJ > input:nth-child(2)').should('have.attr', 'type', 'password');
    }
  
    // Check if the login button is enabled
    isLoginButtonEnabled() {
      cy.get('button[class*="sc-bZQynM"]').should('not.be.disabled');
    }
  }
  
  export default new LoginPage(); // Export the page object instance
  