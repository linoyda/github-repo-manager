const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`Server Error: ${err.message}`);
  res.status(500).send('Internal Server Error');
};

module.exports = errorHandler;
