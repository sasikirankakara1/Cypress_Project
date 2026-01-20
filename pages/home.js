class Home {
    usernameInput(){
        return cy.get("input#user-name")
    }
    passwordInput(){
        return cy.get("input#password")
    }
    loginBtn(){
        return cy.get("input#login-button")
    }
    
    
}
export default new Home()
