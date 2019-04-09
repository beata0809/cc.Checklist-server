const express = require('express');
const exampleController = require('../controllers/example');

const router = express.Router();

router.post('/', exampleController.routes.create);
router.get('/', exampleController.routes.getAll);

module.exports = router;