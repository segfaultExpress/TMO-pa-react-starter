describe('Cypress', () => {   
  it('is working', () => {     
      expect(true).to.equal(true)   
  }) 
  
  it('opens the app', () => {   
      cy.visit('http://localhost:3000') 
  })
  
  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole('heading').should('contain', 'My Recipes');
    cy.contains(/There are no recipes to list/i).should('exist');
})

it("contains an add recipe button that when clicked opens a form", () => {
    cy.findByRole('button').click();
    cy.get('form').findByRole('button').should('exist');
})

it("contains a form with fields named & labeled 'recipe-name' and 'recipe-instructions' after clicking the 'Add Recipe' button", () => {
    cy.findByRole('button').click();
    cy.findByRole('textbox', { name: /recipe-name/i });
    cy.findByRole('textbox', { name: /recipe-instructions/i }).should('exist');
})

it("displays a recipe name as a list item under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    cy.findByRole('button').click();
    cy.findByRole('textbox', { name: /recipe-name/i }).type('Tofu Scramble Tacos');
    cy.findByRole('textbox', { name: /recipe-instructions/i }).type("1. Heat skillet");
    return cy.findByRole('button').click().then(() => {
        cy.findByRole('listitem', /Tofu Scramble Tacos/i);
    });
})
})