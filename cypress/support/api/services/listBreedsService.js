const dogApiClient = require("../clients/dogApiClient");

const listBreedsService = {
  listBreeds() {
    // Endpoint /breeds/list/all
    return dogApiClient.get("/breeds/list/all");
  },
};

module.exports = listBreedsService;
