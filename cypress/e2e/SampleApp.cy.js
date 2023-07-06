/// <reference types="Cypress" />

describe('Sample App tests', () => {
    beforeEach(() => {
      cy.visit('/sampleapp')
      cy.get('#loginstatus').as('status')
      cy.get('input[name="UserName"]').as('userName')
      cy.get('input[name="Password"]').as('password')
    })

    it('should fill in and submit the form with valid credentials', () => {
      const userName = 'Mary'
      const password = 'pwd'

      cy.get('@status').should('contain', 'User logged out.')
      cy.get('@userName').should('have.attr', 'placeholder').should('eq', 'User Name')
      cy.get('@userName').type(userName)
      cy.get('@password').should('have.attr', 'placeholder').should('eq', '********')
      cy.get('@password').type(password)
      cy.get('#login')
        .should('have.text', 'Log In')
        .click()
        .should('have.text', 'Log Out')
      cy.get('@userName').invoke('prop', 'value').should('eq', userName)
      cy.get('@password').invoke('prop', 'value').should('have.lengthOf', password.length)
      cy.get('@status').should('contain', `Welcome, ${userName}!`)
    })

    it('should fill in and submit the form with invalid credentials', () => {
      const userName = 'John'
      const password = 'pwddd'

      cy.get('@userName').type(userName)
      cy.get('@password').type(password)
      cy.get('#login')
        .should('have.text', 'Log In')
        .click()
        .should('have.text', 'Log In')
      cy.get('@userName').invoke('prop', 'value').should('eq', '')
      cy.get('@password').invoke('prop', 'value').should('eq', '')
      cy.get('@status').should('contain', 'Invalid username/password')
    })

    it('should submit an empty form', () => {

      cy.get('#login')
        .click()
      cy.get('@status').should('contain', 'Invalid username/password')
    })


})














