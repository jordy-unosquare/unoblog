describe("about e2e", ()=>{
    it("about redirection", ()=>{
      cy.visit("http://localhost:3000")
  
      cy.get('[data-testid="aboutLink"]').click()
  
      cy.url().should('include', '/about')
      cy.get('[data-testid="aboutTitle"]').contains('About Us')
    })
  })