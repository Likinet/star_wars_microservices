const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:8004/Character");
        return response.data;
    },
    get: async (id) => {
        const response = await axios.get(`http://database:8004/Character/${id}`);
        return response.data;
    },
    create: async (character) => {
        const response = await axios.post("http://database:8004/Character", character);
        return response.data;
    },
    delete: async (id) => {
        const response = await axios.delete(`http://database:8004/Character/${id}`);
        return response.data;
    }
}

//* Código utilizado en el momento que trabajábamos con los archivos JSON en lugar de la BBDD "database"
// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'characters.json'); // Ruta al archivo JSON

// module.exports = {
//     list: async () => {
//         const charactersData = fs.readFileSync(filePath, 'utf-8');
//         const characters = JSON.parse(charactersData);
//         return characters;
//     },
//     get: async (id) => {
//         const charactersData = fs.readFileSync(filePath, 'utf-8');
//         const characters = JSON.parse(charactersData);
//         return characters.find((char) => char._id == id);
//     },
//     create: async (character) => {
//         const charactersData = fs.readFileSync(filePath, 'utf-8');
//         const characters = JSON.parse(charactersData);
//         characters.push(character);
//         fs.writeFileSync(filePath, JSON.stringify(characters, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return character;
//     },
//     delete: async (id) => {
//         const charactersData = fs.readFileSync(filePath, 'utf-8');
//         const characters = JSON.parse(charactersData);
//         const deletedCharacter = characters.find((char) => char._id == id);
//         const updatedCharacters = characters.filter((char) => char._id != id);
//         fs.writeFileSync(filePath, JSON.stringify(updatedCharacters, null, 2), 'utf-8'); // Escribir de vuelta al archivo
//         return deletedCharacter;
//     }
// }