/// <reference types='Cypress'/>

describe('Text Input tests', () => {
    it('should put text into field and press the button', () => {
        const testText = 'New Button'

        cy.visit('/textinput')
        cy.get('#newButtonName')
          .type(testText)
        cy.get('#updatingButton')
          .click()
					.invoke('text')
					.should('eq', testText)
    })
})