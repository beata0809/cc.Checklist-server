const { create, getAll, getById, deleteById, deleteModel, updateModel } = require('../services/routing');
const Example = require('../models/Example');

const routes = {
    create: async (req, res) => {
        const data = req.body;
        create(res, Example, data);
    },
    getAll: async (req,res) => {
        getAll(res, Example);   
    },
    getById: async(req,res) => {
        const { id } = req.params;
        getById(res,Example,id);
    },
    deleteById: async(req,res) => {
        const { id }= req.params;
        deleteById(res,Example,id);
    },
    deleteModel: async(req,res) => {
        const data= req.body;
        deleteModel(res,Example,data);
    },
    updateModel:async(req,res) => {
        const { id } = req.params;
        const data = req.body;
        updateModel(res,Example,data,id);
    }
};

module.exports = {
    routes,
};