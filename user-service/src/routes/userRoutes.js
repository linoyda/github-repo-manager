const express = require('express');
const {
  addUserFavorite,
  getUserFavorites,
} = require('../controllers/userController');
const {
  validateRepositoryId,
  validateFilter,
  validateUsername,
} = require('../utils/validation');
const { handleValidationErrors } = require('../utils/errorHandler');
const router = express.Router();

// Route for adding a favorite repo to a username. validate username, repoid
router.post(
  '/:username/favorite',
  validateUsername,
  validateRepositoryId,
  handleValidationErrors,
  addUserFavorite
);

// Route for fetching favorite repos of a username. validate username, filter
router.get(
  '/:username/favorites',
  validateUsername,
  validateFilter,
  handleValidationErrors,
  getUserFavorites
);

module.exports = router;
