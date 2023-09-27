const store = require("../database");
const { response } = require("../utils");

module.exports = async (req,res) => {
    const { model, id } = req.params;
    const resp = await store[model].delete(id);
    response(res, 200, resp);
}