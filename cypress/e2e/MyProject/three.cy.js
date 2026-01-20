///<reference types ="cypress"/>

describe('launch',()=>{
    beforeEach(()=>{
        cy.visit("https://travel.agileway.net/login")
    })
    it('Firsts',()=>{
        cy.get('a').each(($val)=>{
            if($val.text()=="Register"){
                cy.wrap($val).click()
            }
            cy.screenshot()
        })
    })
})