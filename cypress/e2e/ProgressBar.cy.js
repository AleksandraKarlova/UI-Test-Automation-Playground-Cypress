/// <reference types='Cypress'/>

describe('ProgressBar tests', () => {
	it('should read the value of a progress bar and stop', () => {
		cy.visit('/progressbar')
		cy.get('#startButton')
			.click()
		cy.get('.progress-bar', {timeout: 90000}).should(progressBar => {
			expect(progressBar[0].getAttribute('aria-valuenow')).to.equal('75')
		})
		cy.get('#stopButton').click()
	})
})