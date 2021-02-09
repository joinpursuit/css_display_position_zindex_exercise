describe('Styling', () => {
    it("Name header has the correct font", () => {
      cy
      .get('nav')
      .should('have.css', 'position', 'fixed')
    })

    it("Make all the project images the same height", () => {
      cy
      .get('.project_image')
      .should('have.css', 'height')
      
    })

    it("Make all the project images the same width", () => {
      cy
      .get('.project_image')
      .should('have.css', 'width')
      
    })

    it.skip("Give each project a solid black border of 2px", () => {
      cy
      .get('.project_card')
      .should('have.css', 'border-style', 'solid')
      .and('have.css', 'border-color', 'rgb(0, 0, 0)')
      .and('have.css', 'border-width', '2px')
    })

    it("Give the project description a semi-transparent background with a color hex of #0c1427", () => {
      cy
      .get('.project_description')
      .should('have.css', 'background-color', 'rgba(12, 20, 39, 0.3)')
    })

    it("Change the project description text to white", () => {
      cy
      .get('.project_description')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it("Lay your project description over your project image using position absolute", () => {
      cy
      .get('.project_description')
      .should('have.css', 'position', 'absolute')
    })

    it("Give you project description's parent element a relative position", () => {
      cy
      .get('.project_card')
      .should('have.css', 'position', 'relative')
    })

    it("Fix your nav bar to the top using the z-index", () => {
      cy
      .get('nav')
      .should('have.css', 'z-index', '1')
    })

    it("Make the 'Back to top' button appear always visible on the bottom right corner of the window no matter where the user has scrolled to.", () => {
      cy
      .get('button')
      .should('have.css', 'position', 'fixed')
    })

    it("Give your sun image an id of #sun and keep it in the top right corner regardless of where you scroll. Use z-index to make sure nothing covers your sun image.", () => {
      cy.get('#sun').then(($sun) => {
        const zIndex = Number($sun.css('z-index'))
        expect(zIndex).to.be.greaterThan(0)
      })
     
      cy
      .get('#sun')
      .should('have.css', 'position', 'absolute')

    })  

    it("Skills section should increment 10% in steps.", () => {
      cy.get('#languages').then(($languages) => {
        const languageLeft = Number($languages.css('left').slice(0, $languages.css('left').length - 2))
        //$languages.css('left') returns the pixels, not the percentage so I used slice to remove the 'px's

        cy.get('#libraries').then(($libraries) => {
          const librariesLeft = Number($libraries.css('left').slice(0, $libraries.css('left').length - 2))

          expect(librariesLeft).to.be.greaterThan(languageLeft)
        })
      })
    })
      

})