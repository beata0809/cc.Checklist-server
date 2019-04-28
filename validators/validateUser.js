const Joi = require("joi");

const validateUser = user => {
  const schema = {
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required()
  };
  return Joi.validate(user, schema);
};

const handleErros = error => {
  switch (error.details[0].type) {
    case 'string.email':
      return "Invalid email";
    case 'string.min':
      return 'Name must be at least 3 characters long ';
    case 'string.regex.base':
      return 'The password must be at least 8 characters and contain: uppercase, lowercase, digit, special character.';
    default:
      return 'Error, something went wrong';
  }
};

module.exports = { validateUser, handleErros };