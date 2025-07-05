const Joi = require('joi');

const signupSchema = Joi.object({
  fullName: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(64).required(),
});

module.exports = { signupSchema };
