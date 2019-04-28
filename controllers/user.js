const {createUser, getAll, getById, deleteById, updateModel, deleteModel} = require('../services/routing');
const User = require('../models/User');
const Joi = require('../node_modules/joi');

const routes = {
    createUser: async (req, res) => {
        
        const data = req.body;
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required()
        };
        const result = Joi.validate(data, schema)
        if (result.error){
            console.log(result.error.details[0].type)
            if (result.error.details[0].type === 'string.email'){
            res.status(400).send('Invalid email address.')
            return
            } else {
            res.status(400).send('The password must be at least 8 characters and contain: uppercase, lowercase, digit, special character.')
            return
            }
        }
        
        createUser(res, User, data)
    },
    getAll: async (req, res) => {
        getAll(res, User);
    },
    getById: async (req, res) => {
        const {id} = req.params
        getById(res, User, id);
    },
    deleteById: async (req, res) => {
        const {id} = req.params
        deleteById(res, User, id);
    },
    updateModel: async (req, res) => {
        const data = req.body;
        const {id} = req.params;
        updateModel(res, User, data, id);
    },
    deleteModel: async (req, res) => {
        deleteModel(res, User);
    },
};

module.exports = {
    routes,
};