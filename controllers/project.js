const { create, getAll } = require('../services/routing');
const Project = require('../models/Project');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, Project, data);
    },

    getAll: async (req, res) => {
        getAll(res, Project);
    },
};

module.exports = { routes };