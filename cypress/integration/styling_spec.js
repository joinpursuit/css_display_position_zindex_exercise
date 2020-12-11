describe('Styling', () => {
    it("Name header has the correct font", () => {
      cy
      .get('nav')
      .should('have.css', 'position', 'fixed')
    })
})