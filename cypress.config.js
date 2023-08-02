const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "pageLoadTimeout": 90000,
  "defaultCommandTimeout":10000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  "includeShadowDom":true
});
