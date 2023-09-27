const { catchedAsync } = require("../utils");

module.exports = {
    listController: catchedAsync(require("./listController")),
    getController: catchedAsync(require("./getController")),
    insertController: catchedAsync(require("./insertController")),
    deleteController: catchedAsync(require("./deleteController"))
}