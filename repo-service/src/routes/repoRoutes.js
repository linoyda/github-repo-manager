const express = require('express');
const repoController = require('../controllers/repoController');
const { validateMaxRepos, validateOrder } = require('../utils/validation');
const { handleValidationErrors } = require('../utils/errorHandler');
const router = express.Router();

router.get(
  '/top',
  validateOrder,
  validateMaxRepos,
  handleValidationErrors,
  repoController.getTopRepositories
);

module.exports = router;
