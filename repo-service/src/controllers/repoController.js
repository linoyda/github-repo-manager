const githubService = require('../services/githubService');

const getTopRepositories = async (req, res, next) => {
    try {
        const sortOrder = req.query.order || 'desc'; // Default to 'desc'

        // Input validation: only allow 'asc' or 'desc'. 
        // This is super simple validation. If gets more complex, will be handled with express-validator on external file.
        if (sortOrder !== 'asc' && sortOrder !== 'desc') {
            return res.status(400).json({ error: "Invalid sort order. Use 'asc' or 'desc'." });
        }

        const repositories = await githubService.fetchTopRepositories(sortOrder);
        res.json(repositories);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { getTopRepositories };
