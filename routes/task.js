const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();

router.post('/', taskController.routes.create);
router.get('/', taskController.routes.getAll);
router.get('/:id', taskController.routers.getOne);
router.put('/:id', taskController.routes.update);
router.delete('/:id', tasksConstroller.remove)

module.exports = router;