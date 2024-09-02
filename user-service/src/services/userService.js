const User = require('../models/userModel');

/**
 * Adds a repository to the user's favorites.
 * @param {string} username - The username of the user.
 * @param {string} repoId - The repository ID to add.
 * @returns {Promise<Object>} - The updated user object.
 */
const addFavorite = async (username, repoId) => {
  let user = await User.findOne({ username });

  if (!user) {
    user = new User({ username, favorites: [] });
  }

  if (!user.favorites.includes(repoId)) {
    user.favorites.push(repoId);
    await user.save();
  }

  return user;
};

/**
 * Retrieves the user's favorite repositories.
 * @param {string} username - The username of the user.
 * @returns {Promise<Array>} - An array of favorite repository IDs.
 * @throws {Error} - If the user is not found.
 */
const getFavorites = async (username) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('User not found');
  }

  return user.favorites;
};

module.exports = {
  addFavorite,
  getFavorites,
};
