const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome", // gera arquivos JSON por teste
  reporterOptions: {
    reportDir: "cypress/results", // onde salvar
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    baseUrl: "https://dog.ceo/api", // URL base da Dog API
    specPattern: "cypress/e2e/**/*.cy.js", // localização dos testes
    supportFile: "cypress/support/e2e.js",
  },
});
