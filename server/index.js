const app = require('./src');
const config = require('./config');
const database = require('./database');
const { applicationLog } = require('./lib/logger');

function startApp() {
  app.listen(config.port, () => {
    applicationLog(`Application started at port ${config.port}`);
  });
}

database.connect(config.database).then(startApp);
