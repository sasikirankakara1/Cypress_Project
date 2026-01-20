///<reference types="cypress"/>

declare namespace Cypress{
    interface Chainable{
        login(username:string,password:string):Chainable<void>
        fourBars():Chainable<void>
        clickSpecifictext():Chainable<void>
        clickSpecificTextForAddToCart():Chainable<void>
        ClickSpecificTextRemoveCart():Chainable<void>
    }
}