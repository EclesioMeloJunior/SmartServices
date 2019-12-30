const { getEmpresas } = require('./controllers/empresa.controller');

function setupRoutes(router) {
  router.get('/', getEmpresas);

  return router;
}

module.exports = setupRoutes;
