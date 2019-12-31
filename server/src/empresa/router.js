const { getEmpresasController } = require('./controllers');

function setupRoutes(router) {
  router.get('/', getEmpresasController);

  return router;
}

module.exports = setupRoutes;
