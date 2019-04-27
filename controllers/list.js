const {
  create,
  getAll,
  getById,
  deleteById,
  updateModel,
  deleteModel,
  addList
} = require("../services/routing");
const List = require("../models/List");

const routes = {
  create: async (req, res) => {
    const data = req.body;
    create(res, List, data);
  },

  addList: async (req, res) => {
    const data = req.body;
    addList(res, data);
  },

  getAll: async (req, res) => {
    getAll(res, List);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    getById(res, List, id);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    deleteById(res, List, id);
  },
  updateModel: async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    updateModel(res, List, data, id);
  },
  deleteModel: async (req, res) => {
    deleteModel(res, List);
  }
};
module.exports = {
  routes
};
