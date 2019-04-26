const { validate } = require("../services/routing");
const User = require("../models/User");

const routes = {
  validate: async (req, res) => {
    const data = req.body;
    validate(res, User, data);
  }
};

module.exports = {
  routes
};
