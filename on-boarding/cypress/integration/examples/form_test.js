
describe("Form", () => {
    it("Creating a new form", () => {
        cy.visit("http://localhost:3000/")
        
        cy.get('input[name="name"]')
            .type("Amy").should("have.value", "Amy")

        cy.get('input[name="email"]')
            .type("amy@example.com").should("have.value", "amy@example.com")

        cy.get('input[name="password"]')
            .type("examplepassword").should("have.value", "examplepassword")

        cy.get('[type="checkbox"]').check()

        cy.get('.btn').click()
        
    })
})

describe("Form", () => {
    it('check validation message on invalid input', () => {
    cy.visit("http://localhost:3000/")
    cy.get('input:invalid').should('have.length', 0)
    // cy.get('.btn').click()
    cy.get('input[name="name"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('You must enter your name.')
      })
    })
})
