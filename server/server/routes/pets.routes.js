const PetsController = require("../controllers/pets.controller");

module.exports = app => {
    app.get("/api/test", PetsController.testResponse);

    app.get("/api/pets/all", PetsController.findAllPets);

    app.post("/api/pets/new",PetsController.newPet);

    app.get("/api/pets/:_id", PetsController.findOnePet);

    app.delete("/api/pets/:_id/delete",PetsController.deleteOnePet);

    app.patch("/api/pets/:_id/update", PetsController.updateOnePet);

}