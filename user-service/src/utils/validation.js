const { check } = require('express-validator');

const validateRepositoryId = [ 
    check('repoId')
    .isString()
    .notEmpty()
    .withMessage('Repository ID must be a non empty string.')
];

const validateUsername = [
    check('username')
    .isString()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be a string between 3 and 30 characters.')
];

module.exports = { validateRepositoryId, validateUsername };
