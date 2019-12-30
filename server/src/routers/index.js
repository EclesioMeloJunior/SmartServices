const empresasRoutes = require('../empresa/router');

function setupRoutes(router) {
  router.get('/v1', (_, response) => {
    response.json({
      message: `API Router V1`
    });
  });

  router.use('/v1/empresas', empresasRoutes(router));

  return router;
}

module.exports = setupRoutes;
