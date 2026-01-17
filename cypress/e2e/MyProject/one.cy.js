///<reference types="cypress"/>

describe("Launch Browser",()=>{
    beforeEach(()=>{
        cy.visit("https://www.google.com")
    })
    it.only('Google',async()=>{
        cy.log('Title of the Page: ',cy.url())
    })
})