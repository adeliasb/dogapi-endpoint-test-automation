const listBreedsService = require("../../support/api/services/listBreedsService");
import { validateBreedList } from "../../support/api/utils/validateResponse";

describe("Dog API - List Breeds", () => {
  it("Deve retornar todas as raças de cães corretamente", () => {
    listBreedsService.listBreeds().then(validateBreedList);
  });
});
