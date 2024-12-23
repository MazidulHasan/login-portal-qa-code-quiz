class HomePage {
    getHeader() {
      return cy.get('[role="heading"][name="Welcome"]'); // Replace with actual selector
    }
  
    getCompanyLogo() {
      return cy.get('.company-logo'); // Replace with actual selector
    }
  }
  
  module.exports = new HomePage();
  