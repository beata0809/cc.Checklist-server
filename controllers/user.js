const {
  createUser,
  create,
  getAll,
  getById,
  deleteById,
  updateModel,
  deleteModel
} = require("../services/routing");
const User = require("../models/User");
const { validateUser, handleErros } = require('../validators/validateUser')

const routes = {
  createUser: async (req, res) => {
    const data = req.body;
    const result = validateUser(data);
    if (result.error) {
      res.status(400).send(handleErros(result.error));
    }
    createUser(res, User, data);
  },
  getAll: async (req, res) => {
    getAll(res, User);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    getById(res, User, id);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    deleteById(res, User, id);
  },
  updateModel: async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    updateModel(res, User, data, id);
  },
  deleteModel: async (req, res) => {
    deleteModel(res, User);
  }
};

module.exports = {
  routes
};
