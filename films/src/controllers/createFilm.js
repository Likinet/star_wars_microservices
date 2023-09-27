const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const film = req.body;
    const newFilm = await Film.create(film);
    response(res, 200, newFilm);
}