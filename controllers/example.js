const { create, getAll } = require('../services/routing');
const Example = require('../models/Example');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, Example, data)
    },

    getAll: async (req, res) => {
        getAll(res, Example);   
    },
};

module.exports = {
    routes,
};