///<reference types ="cypress"/>

describe('launch',()=>{
    beforeEach(()=>{
        cy.visit("https://www.cnarios.com/challenges/product-filtering#challenge")
    })
    it('Firsts',async()=>{
        await cy.get("div[class='MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input css-1ndjmue']").click()
        await cy.get('li').contains('Electronics').click()
        expect(cy.get("p[class='MuiTypography-root MuiTypography-body2 css-vouxdn']").should('contain.text','Electronics • ₹45 • ⭐ 5'))
    })
})