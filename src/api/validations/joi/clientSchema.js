const Joi = require('joi');

module.exports = Joi.object({
  fullName: Joi
    .string()
    .min(3)
    .required(),
  cpf: Joi
    .string()
    .length(11)
    .required()
});
