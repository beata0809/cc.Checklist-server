const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/', userController.routes.createUser);
router.get('/', userController.routes.getAll);
router.get('/:id', userController.routes.getById)
router.delete('/:id', userController.routes.deleteById);
router.put('/:id', userController.routes.updateModel);
router.delete('/', userController.routes.deleteModel)

module.exports = router;