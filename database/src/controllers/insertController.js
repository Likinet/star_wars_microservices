const store = require("../database");
const { response } = require("../utils");

module.exports = async (req,res) => {
    const item = req.body;
    const { model } = req.params;
    const resp = await store[model].insert(item);
    response(res, 200, resp);
}