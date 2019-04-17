const express = require('express');
const listController = require('../controllers/list');

const router = express.Router();

router.post('/', listController.routes.create);
router.get('/', listController.routes.getAll);
router.delete('/', listController.routes.del);
router.put('/', listController.routes.put)

module.exports = router;