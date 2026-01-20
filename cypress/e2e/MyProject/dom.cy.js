///<reference types="cypress"/>

describe('shadow-dom-handlings',()=>{
    beforeEach(()=>{
        cy.visit("https://www.cnarios.com/challenges/shadow-dom-login#challenge")
    })
    it.only('testOne',()=>{
        cy.get("#shadow-username").type("his")
        cy.get("#shadow-root-section").find('div').children("#shadow-password").type("isie")
        cy.get('button').contains('Login').click()
    })
})