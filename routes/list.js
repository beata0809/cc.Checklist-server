const express = require("express");
const listController = require("../controllers/list");

const router = express.Router();

router.post("/", listController.routes.addList);
router.get("/", listController.routes.getAll);
router.get("/:id", listController.routes.getById);
router.delete("/:id", listController.routes.deleteById);
router.delete("/", listController.routes.deleteModel);
router.put("/:id", listController.routes.updateModel);

module.exports = router;
