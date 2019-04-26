const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();

router.post('/', taskController.routes.create);
router.get('/', taskController.routes.getAll);
router.get('/:id', taskController.routes.getTask);
router.delete('/:id', taskController.routes.deleteById);
router.put('/:id', taskController.routes.updateTask);
router.delete('/', taskController.routes.deleteTask);

module.exports = router;