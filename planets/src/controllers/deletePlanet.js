const PLanet = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const { id } = req.params;
    const planet = await PLanet.delete(id);
    response(res, 200, planet);
}