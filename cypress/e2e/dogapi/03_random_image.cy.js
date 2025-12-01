const randomImageService = require("../../support/api/services/randomImageService");
import { validateRandomImage } from "../../support/api/utils/validateResponse";

describe("Dog API - Random Image", () => {
  it("Deve retornar uma imagem aleatória de cachorro", () => {
    randomImageService.getRandomImage().then(validateRandomImage);
  });
});
