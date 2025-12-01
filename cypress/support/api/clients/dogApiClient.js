const dogApiClient = {
  get(path) {
    return cy.request({
      method: "GET",
      url: path,
      failOnStatusCode: false,
    });
  },
};

module.exports = dogApiClient;
