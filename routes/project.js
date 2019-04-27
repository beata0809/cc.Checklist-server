const express = require("express");
const projectController = require("../controllers/project");

const router = express.Router();

router.post("/", projectController.routes.addProject);
router.get("/", projectController.routes.getAll);
router.get("/:id", projectController.routes.getById);
router.delete("/:id", projectController.routes.deleteById);
router.put("/:id", projectController.routes.updateModel);
router.delete("/", projectController.routes.deleteModel);

module.exports = router;
