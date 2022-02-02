const Joi = require('joi');

module.exports = Joi.object({
  name: Joi
    .string()
    .min(3)
    .required(),
  cpf: Joi
    .number()
    .min(11)
    .max(11)
    .required()
});
