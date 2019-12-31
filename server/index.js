const app = require('./src');
const config = require('./config');

const { applicationLog } = require('./lib/logger');

app.listen(config.port, () => {
  applicationLog(`Application started at port ${config.port}`);
});
