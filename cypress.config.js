const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:['cypress/integration/examples/standard_user.js','cypress/integration/examples/problem_user.js','cypress/integration/examples/automation_ad.js','cypress/integration/examples/magent.js','cypress/integration/examples/alert.js','cypress/integration/examples/singin.js','cypress/integration/examples/signup.js','cypress/integration/examples/almosafer.js']
  },
});
