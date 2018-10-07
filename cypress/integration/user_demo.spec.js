/// <reference types="Cypress" />

describe('https://example.com/', () => {
  beforeEach(() => {
    cy.visit('https://example.com/')
  })

  it('can take screenshot', () => {
    cy.viewport('ipad-2')
    cy.matchImageSnapshot();
  })
})
