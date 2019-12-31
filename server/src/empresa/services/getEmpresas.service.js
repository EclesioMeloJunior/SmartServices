const { getAll } = require('../repository');

function buildGetEmpresasService() {
  return async function getEmpresasService({
    page,
    itemsPerPage,
    filterBy,
    sortBy
  }) {
    return await getAll({ page, itemsPerPage });
  };
}

module.exports = buildGetEmpresasService;
