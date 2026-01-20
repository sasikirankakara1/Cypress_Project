///<reference types="cypress"/>

describe('upload',()=>{
    beforeEach(()=>{
        cy.visit("https://www.cnarios.com/challenges/job-application-form#challenge")
    })
    it.only('action',()=>{
        cy.get("input[class='border-2 p-1 rounded-xs']").selectFile("cypress/fixtures/one.pdf")
        expect(cy.get("a[class='hover:underline']").should('have.text','one.pdf'))
    })
})