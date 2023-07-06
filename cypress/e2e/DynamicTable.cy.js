/// <reference types='Cypress'/>

describe('Dymanic Table tests', () => {
	it('should check value in the table', () => {
		cy.visit('/dynamictable')
		cy.get('.bg-warning')
			.invoke('text')
			.then(text => {
				var labelValue = text.split(' ')[2]
				cy.get('div[role="table"]')
					.contains('Chrome')
					.siblings()
					.contains('%')
					.invoke('text')
					.then(tableValue => {
						expect(tableValue).to.equal(labelValue)
			})
		})
	})
})