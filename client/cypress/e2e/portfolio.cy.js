describe('Portfolio E2E Test', () => {
  it('loads the home page and shows your intro text', () => {
    cy.visit('http://localhost:5173');  // your Vite app URL

    cy.contains("Hi, I’m Kaylie").should('be.visible');
    cy.contains("Get to know me better").should('be.visible');
  });
});