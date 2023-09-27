const { catchedAsync } = require("../utils");

module.exports = {
    getPlanets: catchedAsync(require("./getPlanets")),
    getOnePlanet: catchedAsync(require("./getOnePlanet")),
    createPlanet: catchedAsync(require("./createPlanet")),
    deletePlanet: catchedAsync(require("./deletePlanet"))
}