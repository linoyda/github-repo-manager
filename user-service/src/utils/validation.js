const { check } = require('express-validator');

const validateRepositoryId = [
  check('repoId')
    .isString()
    .notEmpty()
    .isLength({ min: 3, max: 30 })
    .withMessage('Repository ID must be a non empty string.'),
];

const validateUsername = [
  check('username')
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be a string between 3 and 30 characters.'),
];

const validateFilter = [
  check('filter')
    .optional({ checkFalsy: true }) // validate only if provided and non falsy.
    .isString()
    .isLength({ min: 1, max: 30 })
    .withMessage('Filter must be a string between 3 and 30 characters.'),
];

module.exports = { validateRepositoryId, validateUsername, validateFilter };
