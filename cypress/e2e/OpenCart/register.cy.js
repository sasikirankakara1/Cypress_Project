///<reference types="cypress"/>



describe('open',()=>{

    it.only('tests',()=>{
        cy.get("div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12']").contains("Canon EOS 5D")
        .parents("div[class='product-layout col-lg-3 col-md-3 col-sm-6 col-xs-12']").within(()=>{
            cy.get('button').eq(0).click()
        })

    })
})
