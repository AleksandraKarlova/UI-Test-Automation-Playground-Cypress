/// <reference types='Cypress'/>

describe('Visibility tests', () => {
    it('should check if element is visible on screen', () => {
        cy.visit('/visibility')
        cy.get('#hideButton')
					.click()
					.should('be.visible')
				cy.get('#removedButton').should('not.exist')
				cy.get('#zeroWidthButton').should('not.be.visible').and('have.css', 'width', '0px')
				cy.get('#overlappedButton').should('be.visible') //not sure, how to check for overlapping
				cy.get('#transparentButton').should('not.be.visible').and('have.css', 'opacity', '0')
				cy.get('#invisibleButton').should('not.be.visible').and('have.css', 'visibility', 'hidden')
				cy.get('#notdisplayedButton').should('not.be.visible').and('have.css', 'display', 'none')
				cy.get('#offscreenButton').should('be.visible').and('have.css', 'top', '-9999px')
    })
})