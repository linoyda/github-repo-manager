const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/user/:username/favorite', userController.addUserFavorite);
router.get('/user/:username/favorites', userController.getUserFavorites);

module.exports = router;
