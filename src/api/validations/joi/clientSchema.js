const Joi = require('joi');

const clientSchema = Joi.object({
  fullName: Joi.string()
    .required()
    .min(3),
  cpf: Joi.required()
});

module.exports = clientSchema;
