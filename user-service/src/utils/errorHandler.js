const { validationResult } = require('express-validator');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: 'Invalid input data' });
  } else if (err.name === 'MongoError') {
    res.status(500).json({ error: 'Database error occurred' });
  } else {
    logger.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error('validation error occurred');
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { errorHandler, handleValidationErrors };
