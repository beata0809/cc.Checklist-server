const { put ,del , create, getAll } = require('../services/routing');
const List = require('../models/List');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, List, data)
    },
    getAll: async (req, res) => {
        getAll(res, List);   
    },
    del: async (req, res) =>{
        const data = req.body;
        del(res,List, data);
    },
    put: async (req, res) => {
        const data = req.body;
        put(res, List, data);
    }
};

module.exports = {
    routes,
};