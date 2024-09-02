const axios = require('axios');

const fetchTopRepositories = async (sortOrder = 'desc') => {
    const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
            q: 'stars:>1',
            sort: 'stars',
            order: sortOrder,
            per_page: 10,
        },
        headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
    });
    return response.data.items;
};

module.exports = { fetchTopRepositories };
