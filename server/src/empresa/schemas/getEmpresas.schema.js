const Joi = require('@hapi/joi');

const getEmpresasSchema = Joi.object({
  page: Joi.number().required(),
  itemsPerPage: Joi.number().required()
});

module.exports = getEmpresasSchema;
