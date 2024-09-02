const githubService = require('../services/githubService');

const getTopRepositories = async (req, res, next) => {
  try {
    const sortOrder = req.query.order || 'desc'; // Default to 'desc'
    const maxRepos = req.query.maxRepos || 10; // Default to 10 repos

    const repositories = await githubService.fetchTopRepositories(
      sortOrder,
      maxRepos
    );
    res.json(repositories);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getTopRepositories };
