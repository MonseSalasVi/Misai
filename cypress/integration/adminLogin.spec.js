describe('Woman product selection', () => {
    before(() => {
      cy.visit('https://black-beach-0d0cbbf10.azurestaticapps.net/');
    });
  
    it('Go to the Login Admin', () => {
      cy.get(':nth-child(3) > .jss7 > .MuiButton-label').click();
      // In case we have a way to validate we are in woman category, add an assertion
    });
  
    

  });
  