const dogApiClient = require("../clients/dogApiClient");

const breedImagesService = {
  getBreedImages(breed) {
    return dogApiClient.get(`/breed/${breed}/images`);
  },
};

module.exports = breedImagesService;
