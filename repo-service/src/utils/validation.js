const { check } = require('express-validator');

const validateMaxRepos = [
  check('maxRepos')
    .isInt({ min: 1, max: 50 })
    .withMessage('maxRepos must be an integer between 1 and 40.'),
];

const validateOrder = [
  check('order').custom((value) => {
    if (value !== 'desc' && value !== 'asc') {
      throw new Error('Invalid order. Must be "desc" or "asc".');
    }
    return true;
  }),
];

module.exports = { validateMaxRepos, validateOrder };
