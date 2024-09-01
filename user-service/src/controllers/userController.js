const User = require('../models/userModel');

const addUserFavorite = async (req, res, next) => {
    const { username } = req.params;
    const { repoId } = req.body;

    try {
        let user = await User.findOne({ username });

        if (!user) {
            user = new User({ username, favorites: [] });
        }

        if (!user.favorites.includes(repoId)) {
            user.favorites.push(repoId);
            await user.save();
        }

        res.json(user);
    } catch (error) {
        next(error);
    }
};

const getUserFavorites = async (req, res, next) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.favorites);
    } catch (error) {
        next(error);
    }
};

module.exports = { addUserFavorite, getUserFavorites };
