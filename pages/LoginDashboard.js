class LoginDashboard{

    fourBar(){
        return cy.get("button#react-burger-menu-btn")
    }
}
export default new LoginDashboard()