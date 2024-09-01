const githubService = require('../services/githubService');

const getTopRepositories = async (req, res, next) => {
    try {
        const repositories = await githubService.fetchTopRepositories();
        res.json(repositories);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { getTopRepositories };
