const express = require('express');
const projectController = require('../controllers/project');

const router = express.Router();

router.post('/', projectController.routes.create);
router.get('/', projectController.routes.getAll);

module.exports = router;