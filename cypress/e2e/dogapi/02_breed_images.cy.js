const breedImagesService = require("../../support/api/services/breedImagesService");
import { validateBreedImages } from "../../support/api/utils/validateResponse";

describe("Dog API - Breed Images", () => {
  const breed = "hound"; // exemplo de raça
  it(`Deve retornar imagens da raça ${breed}`, () => {
    breedImagesService.getBreedImages(breed).then(validateBreedImages);
  });
});
