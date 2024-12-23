// cypress/support/e2e.js

import './commands';

// Global hooks
before(() => {
  cy.log('Starting test suite...');
});

after(() => {
  cy.log('Test suite completed.');
});