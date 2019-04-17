const { create, getAll } = require('../services/routing');
const Task = require('../models/Task');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, Task, data)
    },

    getAll: async (req, res) => {
        getAll(res, Task);   
    },
    getTask: async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        getById(res, Task, data);
    }
    update: async (req, res) => {
        const data = req.body;
        update(res, Task, data);
    }
    remove: async (req, res) => {
        const data = req.body;
        remove(res, Task, data);
    }
};

module.exports = {
    routes,
};