const { getEmpresasSchema } = require('../schemas');
const { getEmpresasService } = require('../services');

function buildGetEmpresasController() {
  return async function getEmpresasController(request, response) {
    const { page, itemsPerPage, sortBy, filterBy } = request.query;

    const requestPayload = getEmpresasSchema.validate({ page, itemsPerPage });

    if (requestPayload.errors) {
      return response.status(400).json(requestPayload.errors);
    }

    const getEmpresasDto = { ...requestPayload.value };

    if (sortBy) {
      const normalizeSortBy = fieldAndValue => {
        const [field, orientation] = fieldAndValue.split(':');

        const defineOrientation = orientation => {
          if (!orientation) return false;
          if (orientation === 'desc') return true;
          if (orientation === 'asc') return false;
        };

        return { name: field, desc: defineOrientation(orientation) };
      };

      const sortRequest = sortBy.split(',').map(normalizeSortBy);
      getEmpresasDto['sortBy'] = sortRequest;
    }

    if (filterBy) {
      const normalizeFilterBy = fieldAndValue => {
        const [field, value] = fieldAndValue.split(':');

        return { name: field, value: value || null };
      };

      const filterRequest = filterBy.split(',').map(normalizeFilterBy);
      getEmpresasDto['filterBy'] = filterRequest;
    }

    try {
      const empresas = await getEmpresasService(getEmpresasDto);
      return response.json(empresas);
    } catch (exception) {
      return response.status(500).json(exception);
    }
  };
}

module.exports = buildGetEmpresasController;
