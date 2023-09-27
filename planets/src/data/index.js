const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Planet");
        return response.data;
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Planet/${id}`);
        return response.data;
    },
    create: async (planet) => {
        const response = await axios.post("http://database:8004/Planet", planet);
        return response.data;
    },
    delete: async (id) => {
        const response = await axios.delete(`http://database:8004/Planet/${id}`);
        return response.data;
    }
}

//* Código utilizado en el momento que trabajábamos con los archivos JSON en lugar de la BBDD "database"
// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'planets.json'); // Ruta al archivo JSON

// module.exports = {
//     list: async () => {
//         const planetsData = fs.readFileSync(filePath, 'utf-8');
//         const planets = JSON.parse(planetsData);
//         return planets;
//     },
//     get: async (id) => {
//         const planetsData = fs.readFileSync(filePath, 'utf-8');
//         const planets = JSON.parse(planetsData);
//         return planets.find((planet) => planet._id == id);
//     },
//     create: async (planet) => {
//         const planetsData = fs.readFileSync(filePath, 'utf-8');
//         const planets = JSON.parse(planetsData);
//         planets.push(planet);
//         fs.writeFileSync(filePath, JSON.stringify(planets, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return planet;
//     },
//     delete: async (id) => {
//         const planetsData = fs.readFileSync(filePath, 'utf-8');
//         const planets = JSON.parse(planetsData);
//         const deletedPlanet = planets.find((planet) => planet._id == id);
//         const updatedPlanets = planets.filter((planet) => planet._id != id);
//         fs.writeFileSync(filePath, JSON.stringify(updatedPlanets, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return deletedPlanet;
//     }
// }