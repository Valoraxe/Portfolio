describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')

      cy.contains('This will be a portfolio')
    })
})