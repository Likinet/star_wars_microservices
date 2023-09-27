const store = require("../database");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { model, id } = req.params;
    const resp = await store[model].get(id);
    response(res, 200, resp);
}