describe('Registration Form', () => {
  it('should register successfully with valid data', () => {
    cy.visit('http://example.com/registration');

    cy.get('#fullName').type('Ali Hamza');
    cy.get('#email').type('alihamza20f1112@gmail.com');
    cy.get('#password').type('Abcd@1234');
    cy.get('#confirmPassword').type('Abcd@1234');
    cy.get('#dob').type('2001-10-04');
    cy.get('#gender').select('Male');
    cy.get('#newsletter').check('Yes');
    cy.get('#submit').click();

    cy.url().should('include', '/welcome');
    cy.contains('Registration successful').should('be.visible');
  });
});
