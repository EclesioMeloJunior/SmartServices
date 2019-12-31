const winston = require('winston');

function createLogger(fileName) {
  if (!fileName) throw new Error('Args filepath must be filled');

  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'debug',
        format: winston.format.simple(),
        colorize: true
      }),
      new winston.transports.File({
        level: 'info',
        format: winston.format.simple(),
        filename: `${process.cwd()}/logs/${fileName}`,
        maxFiles: 5,
        maxsize: 5242880
      })
    ]
  });
}

const log = logger => (message, rest) => {
  const DATE_NOW = new Date().toLocaleString();
  const logMessage = `${message} [${DATE_NOW}]`;
  logger.log({ level: 'info', message: logMessage, ...rest });
};

const applicationLogger = createLogger('app.log');
const databaseLogger = createLogger('database.log');

module.exports = {
  applicationLog: log(applicationLogger),
  databaseLog: log(databaseLogger)
};
