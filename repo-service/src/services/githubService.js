const axios = require('axios');
const logger = require('../utils/logger');

const fetchTopRepositories = async (sortOrder = 'desc', maxRepos = 10) => {
  const perPage = 10;
  let allRepos = [];
  let page = 1;

  try {
    while (allRepos.length < maxRepos) {
      const response = await axios.get(
        'https://api.github.com/search/repositories',
        {
          params: {
            q: 'stars:>1',
            sort: 'stars',
            order: sortOrder,
            per_page: perPage,
            page: page,
          },
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      );

      allRepos = allRepos.concat(response.data.items);

      // If the number of repositories on the current page is less than perPage, we are done
      if (response.data.items.length < perPage) {
        break;
      }

      page++;
    }

    // Trim the result to the maximum number of repositories
    return allRepos.slice(0, maxRepos);
  } catch (error) {
    logger.error(`Error fetching repositories: ${error}`);
    throw error;
  }
};

module.exports = { fetchTopRepositories };
