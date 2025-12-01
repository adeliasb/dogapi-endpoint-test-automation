// importa o client correto
const dogApiClient = require("../clients/dogApiClient");

const breedImagesService = {
  getBreedImages(breed) {
    // usa template literal corretamente
    return dogApiClient.get(`/breed/${breed}/images`);
  },
};

module.exports = breedImagesService;
