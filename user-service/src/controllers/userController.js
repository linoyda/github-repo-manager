const userService = require('../services/userService');

const addUserFavorite = async (req, res, next) => {
    try {
        const { username } = req.params;
        const { repoId } = req.body;

        console.log(`username: ${username}, repoId: ${repoId}`)
        const user = await userService.addFavorite(username, repoId);
        res.status(201).json({ message: 'Repository added to favorites.', user });
    } catch (error) {
        console.log(`failed to add as favorite: ${error}`);
        next(error);
    }
};

const getUserFavorites = async (req, res, next) => {
    const { username } = req.params;

    try {
        const favorites = await userService.getFavorites(username);
        res.status(200).json({ favorites });
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ error: error.message });
        }
        next(error);
    }
};

module.exports = { addUserFavorite, getUserFavorites };
