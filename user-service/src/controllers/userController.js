const userService = require('../services/userService');
const logger = require('../utils/logger');

// Adds a favorite repoId to a given username
const addUserFavorite = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { repoId } = req.body;

    logger.info(`username: ${username}, repoId: ${repoId}`);
    const user = await userService.addFavorite(username, repoId);
    res.status(201).json({ message: 'Repository added to favorites.', user });
  } catch (error) {
    logger.error(`failed to add as favorite: ${error}`);
    next(error);
  }
};

// Fetches a given username favorite repos (if exist) according to an optional filter
const getUserFavorites = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { filter } = req.query;
    const favorites = await userService.getFavorites(username, filter);
    res.status(200).json({ favorites });
  } catch (error) {
    if (error.message === 'User not found') {
      return res.status(404).json({ error: error.message });
    }
    next(error);
  }
};

module.exports = { addUserFavorite, getUserFavorites };
