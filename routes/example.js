const express = require('express');
const exampleController = require('../controllers/example');

const router = express.Router();

router.post('/', exampleController.routes.create);
router.get('/', exampleController.routes.getAll);
router.get('/:id', exampleController.routes.getById);
router.delete('/:id', exampleController.routes.deleteById);
router.put('/:id', exampleController.routes.updateModel);
router.delete('/', exampleController.routes.deleteModel);

module.exports = router;