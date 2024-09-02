const express = require('express');
const { addUserFavorite, getUserFavorites } = require('../controllers/userController');
const {validateRepositoryId, validateUsername} = require('../utils/validation')
const { handleValidationErrors } = require('../utils/errorHandler');
const router = express.Router();

router.get('/test', (req, res) => {
    console.log('GET /test route hit');
    res.send('Test route works!');
});


// Validate both username and provided repositoryId
router.post('/:username/favorite', validateUsername, validateRepositoryId, handleValidationErrors, addUserFavorite);

router.get('/:username/favorites', validateUsername, handleValidationErrors, getUserFavorites);

module.exports = router;