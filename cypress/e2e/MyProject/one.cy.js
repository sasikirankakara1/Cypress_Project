///<reference types="cypress"/>

describe("Launch Browser",()=>{
    beforeEach(()=>{
        cy.visit("https://www.cnarios.com/challenges/login-flow/")
    })
    it.only('TaskOne - Empty fields validation',async()=>{
        cy.log('Title of the Page: ',cy.url())
        cy.get("div[class='flex flex-col items-center justify-center p-2 bg-gray-50 px-4']").find("button").contains("Login").click()
        expect(cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div:nth-of-type(1)").should('have.text',"Both fields are required."))
    })
})