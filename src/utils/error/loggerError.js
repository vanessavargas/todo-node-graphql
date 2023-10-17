const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

const logError = (error) => {
  logger.error(error.message, { stack: error.stack });
};

module.exports = {
  logError,
};
