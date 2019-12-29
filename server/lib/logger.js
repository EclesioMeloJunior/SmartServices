const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.simple(),
      colorize: true
    }),
    new winston.transports.File({
      level: 'info',
      format: winston.format.simple(),
      filename: `${process.cwd()}/logs/app.log`,
      maxFiles: 5,
      maxsize: 5242880
    })
  ]
});

module.exports = {
  log: (message, rest) => {
    const DATE_NOW = new Date().toLocaleString();
    const logMessage = `${message} [${DATE_NOW}]`;
    logger.log({ level: 'info', message: logMessage, ...rest });
  }
};
