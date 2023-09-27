const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Film");
        return response.data;
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Film/${id}`);
        return response.data;
    },
    create: async (film) => {
        const response = await axios.post("http://database:8004/Film", film);
        return response.data;
    },
    delete: async (id) => {
        const response = await axios.delete(`http://database:8004/Film/${id}`);
        return response.data;
    }
}

//* Código utilizado en el momento que trabajábamos con los archivos JSON en lugar de la BBDD "database"
// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'films.json'); // Ruta al archivo JSON

// module.exports = {
//     list: async () => {
//         const filmsData = fs.readFileSync(filePath, 'utf-8');
//         const films = JSON.parse(filmsData);
//         return films;
//     },
//     get: async (id) => {
//         const filmsData = fs.readFileSync(filePath, 'utf-8');
//         const films = JSON.parse(filmsData);
//         return films.find((film) => film._id == id);
//     },
//     create: async (film) => {
//         const filmsData = fs.readFileSync(filePath, 'utf-8');
//         const films = JSON.parse(filmsData);
//         films.push(film);
//         fs.writeFileSync(filePath, JSON.stringify(films, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return film;
//     },
//     delete: async (id) => {
//         const filmsData = fs.readFileSync(filePath, 'utf-8');
//         const films = JSON.parse(filmsData);
//         const deletedFilm = films.find((film) => film._id == id);
//         const updatedfilms = films.filter((film) => film._id != id);
//         fs.writeFileSync(filePath, JSON.stringify(updatedfilms, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return deletedFilm;
//     }
// }