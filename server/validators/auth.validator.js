const Joi = require("joi");

const { constants } = require("../constants");

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .trim()
    .email()
    .lowercase(),
  password: Joi.string().regex(constants.PASSWORD_REGEXP).required(),
});

module.exports = {
  loginSchema,
};
