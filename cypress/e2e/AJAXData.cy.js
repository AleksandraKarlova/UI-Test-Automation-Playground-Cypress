/// <reference types='Cypress'/>

describe('AJAX Data tests', () => {
    it('should wait for an element to appear', () => {
        cy.visit('/ajax')
        cy.get('#ajaxButton')
					.click()
				cy.get('#spinner').should('be.visible')
				cy.wait(15000)
				cy.get('#content p')
					.click()
					.should('contain', 'Data loaded with AJAX get request.')
    })
})