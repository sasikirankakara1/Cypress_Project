// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import home from "../../pages/home"
import LoginDashboard from "../../pages/LoginDashboard"

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(username,password)=>{
    home.usernameInput().type(username)
    home.passwordInput().type(password)
    home.loginBtn().click()
    cy.url().should('include','/inventory')
})
Cypress.Commands.add('fourBars',()=>{
    LoginDashboard.fourBar().click()
})
Cypress.Commands.add('clickSpecifictext',(text)=>{
    cy.get("div[class='inventory_item']").find("div[class='inventory_item_label']>a").then(($act)=>{
            cy.wrap($act).contains(text).click()
        })
})
Cypress.Commands.add('clickSpecificTextForAddToCart',(text)=>{
    cy.contains("div[class='inventory_item']",text)
        .within(()=>{
            cy.get('button').click()
        })
})
Cypress.Commands.add('ClickSpecificTextRemoveCart',(text)=>{
    
        cy.contains("div[class='inventory_item']",text).within(()=>{
            cy.get('button').should('be.enabled').click()
            
        })
})