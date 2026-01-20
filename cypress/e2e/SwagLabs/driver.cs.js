///<reference types="cypress"/>
describe('launch',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it.only('Login-Functionality',()=>{
    
        cy.login('standard_user','secret_sauce')
        // cy.fourBars()
        // cy.clickSpecifictext("Test.allTheThings() T-Shirt (Red)")
        // cy.clickSpecificTextForAddToCart("Test.allTheThings() T-Shirt (Red)")
       cy.ClickSpecificTextRemoveCart("Test.allTheThings() T-Shirt (Red)")
    // cy.get("select[class='product_sort_container']").select("Price (low to high)")
        cy.get("a[class='shopping_cart_link']").click()
        cy.get('button').contains('Checkout').click()
        cy.get('input').contains('Continue').click()
        expect(cy.get("h3[data-test='error']").should('have.text',"Error: First Name is required"))
        
    })
   
})