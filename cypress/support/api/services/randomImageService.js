const dogApiClient = require("../clients/dogApiClient");

const randomImageService = {
  getRandomImage() {
    return dogApiClient.get("/breeds/image/random");
  },
};

module.exports = randomImageService;
