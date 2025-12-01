// validateResponse.js
export function validateOk(response) {
  expect(response.status).to.eq(200);
  expect(response.body.status).to.eq("success");
}

export function validateBreedList(response) {
  validateOk(response);
  expect(response.body.message).to.be.an("object");
  Object.values(response.body.message).forEach((subBreeds) => {
    expect(subBreeds).to.be.an("array");
  });
}

export function validateBreedImages(response) {
  validateOk(response);
  expect(response.body.message).to.be.an("array");
  response.body.message.forEach((url) =>
    expect(url).to.be.a("string").and.include("https://")
  );
}

export function validateRandomImage(response) {
  validateOk(response);
  expect(response.body.message).to.be.a("string").and.include("https://");
}
