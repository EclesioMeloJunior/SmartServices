const app = require('./src');
const config = require('./config');

const logger = require('./lib/logger');

app.listen(config.port, () => {
  logger.log(`Application started at port ${config.port}`);
});
