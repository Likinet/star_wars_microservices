const { Router } = require("express");
const middlewares = require("../middlewares");
const controllers = require("../controllers");

const router = Router();

router.get("/:model", middlewares.validateModel, controllers.listController);

router.get("/:model/:id", middlewares.validateModel, controllers.getController);

router.post("/:model", middlewares.validateModel, controllers.insertController);

router.delete("/:model/:id", middlewares.validateModel, controllers.deleteController)  

module.exports = router;