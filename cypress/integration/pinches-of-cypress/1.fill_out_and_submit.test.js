/// <reference types="cypress" />

describe('Online tickets selling app', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/forms')
    })

    it('successfully orders a ticket', () => {
        cy.get('input[id="firstname"]')
         .should('be.visible')
         .type('John')
         cy.get('input[id="lasttname"]')
         .should('be.visible')
         .type('Doe')
         cy.get('input[id="email"]')
         .should('be.visible')
         .type('gmail.com')
         cy.get('input[id="Phno"]')
         .should('be.visible')
         .type('+123456789')
         cy.get('input[id="Addl1"]')
         .should('be.visible')
         .type('Kp. Setu babakan')
         cy.get('input[id="Addl2"]')
         .should('be.visible')
         .type('Kp. angsana')
         cy.get('input[id="state"]')
         .should('be.visible')
         .type('bogor')
         cy.get('input[id="postalcode"]')
         .should('be.visible')
         .type('bogor')
         cy.get('input[id="male"]')
         .should('be.visible')
         .click()
         cy.get('input[type="checkbox"]')
         .should('be.visible')
         .click()
         cy.get('input[type="submit"]')
         .should('be.visible')
         .click()


         
         
         

        // cy.get('#email')
        //  .should('be.visible')
        //  .type('john-dpe@example.com')
        // cy.get('#iAgree')
        //     .should('be.visible')
        //     .click()
        // cy.get('button[types"submit"]')
        //     .should('be.visible')
        //     .click()

        // cy.contains('You will recive an email to finish the purchase')
        //     .should('be.visible')

    })
})
