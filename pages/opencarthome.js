class OpenCartHome {
  getAllListDetails() {
    return cy.get("li");
  }
  clickNavBarTabs(elementName) {
    return this.getAllListDetails().contains(elementName).click();
  }
  getAllLinkDetails() {
    return cy.get("a");
  }
  clickSubDropdowntabs(elementName) {
    return this.getAllLinkDetails().contains(elementName).click();
  }
  performMultiFunction(tabName, dropdownName) {
    return this.getAllListDetails().contains(tabName).click()
    .then(()=>{

        return this.getAllLinkDetails().contains(dropdownName).click()
    })
  }
}

export default new OpenCartHome();
