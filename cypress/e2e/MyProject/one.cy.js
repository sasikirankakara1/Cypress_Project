///<reference types="cypress"/>

describe("Launch Browser",()=>{
    beforeEach(()=>{
        cy.visit("https://www.cnarios.com/challenges/login-flow/")
    })
    it('TaskOne - Empty fields validation',async()=>{
      cy.log('Title of the Page: ',await cy.url())
        await cy.get("div[class='flex flex-col items-center justify-center p-2 bg-gray-50 px-4']").find("button").contains("Login").click()
        await expect(cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div:nth-of-type(1)").should('have.text',"Both fields are required."))
    })
    it('TaskTwo- Invaid credentials',async()=>{
        await cy.xpath("(//*[starts-with(@aria-invalid,'false')])[1]").type("hiewls")
        await cy.xpath("(//*[starts-with(@aria-invalid,'false')])[2]").type("hellos")
        await cy.get('button').contains("Login").click()
        expect(cy.get("div[class='MuiAlert-message css-127h8j3']").eq(1).should('have.text',"Invalid username or password."))
    })
    it('using_css_selector',async()=>{
        cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div>div").eq(0).type("hi")
        cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div>div").eq(1).type("eusuek")
        cy.get('button').contains("Login").click()
         expect(cy.get("div[class='MuiAlert-message css-127h8j3']").eq(1).should('have.text',"Invalid username or password."))
    })

    it('Login as User',async()=>{
        await cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div>div").eq(0).as('user-name')
        await cy.get("div[class='MuiCardContent-root flex flex-col gap-4 p-6 css-15q2cw4']>div>div").eq(1).as('passcode')
        await cy.get('button').contains('Login').as('btn')
        await cy.get('@user-name').type("user")
        await cy.get('@passcode').type('user123')
        await cy.get('@btn').click()
        await cy.get("div[class='MuiAlert-message css-127h8j3']").eq(1).as('verifyText')
        await cy.get('@verifyText').invoke('prop','innerText').then(($val)=>{
            expect(cy.wrap($val).should('eql','You are logged in as USER'))
        })
    })
    

})