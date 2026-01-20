const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    includeShadowDom:true,
    baseUrl:'https://tutorialsninja.com/demo',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*{js,jsx,ts,tsx,feature}",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
  },
});
