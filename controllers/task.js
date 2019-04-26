const { create, getAll, getById, deleteById, updateModel, deleteModel } = require('../services/routing');
const Task = require('../models/Task');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, Task, data)
    },
    getAll: async (req, res) => {
        getAll(res, Task) 
    },
    getTask: async (req, res) => {
        const { id } = req.params;
        getById(res, Task, id)
    },
    deleteById: async (req, res) => {
        const { id } = req.params;
        deleteById(res, Task, id)
    },
    updateTask: async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        updateModel(res, Task, data, id)
    },
    deleteTask: async (req, res) => {
       deleteModel(res, Task)
    }
};

module.exports = {
    routes,
};