/// <reference types='Cypress'/>

describe('Overlapped Element tests', () => {
  it('enters text to a partially visible element', () => {
    const name = 'John'

    cy.visit('/overlapped')
    cy.get('#name')
      //Before interacting with an element, Cypress always scrolls it into view 
      //This scrolling logic applies to actionable commands
      //So no additional actions are needed
      .type(name) 
      .invoke('prop', 'value')
      .should('eq', name)
  })
})