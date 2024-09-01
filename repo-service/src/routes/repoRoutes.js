const express = require('express');
const repoController = require('../controllers/repoController');
const router = express.Router();

router.get('/top', repoController.getTopRepositories);

module.exports = router;
