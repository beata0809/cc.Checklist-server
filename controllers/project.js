const {
  create,
  getAllProjects,
  getProjectById,
  deleteById,
  updateModel,
  deleteModel,
  addProject
} = require("../services/routing");
const Project = require("../models/Project");

const routes = {
  create: async (req, res) => {
    const data = req.body;
    create(res, Project, data);
  },

  addProject: async (req, res) => {
    const data = req.body;
    addProject(res, data);
  },

  getAll: async (req, res) => {
    getAllProjects(res, Project);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    getProjectById(res, Project, id);
  },

  deleteById: async (req, res) => {
    const { id } = req.params;
    deleteById(res, Project, id);
  },

  updateModel: async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    updateModel(res, Project, data, id);
  },

  deleteModel: async (req, res) => {
    deleteModel(res, Project);
  }
};

module.exports = { routes };
