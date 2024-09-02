# Repository Service

This service fetches top-rated GitHub repositories using the GitHub API.

## Getting Started

1. **Install dependencies:**
   `npm install`
2. **Insert your GitHub token on .env file**
3. **Run the service:**
   `npm start`
4. **Consume the provided routes:**

- Get top repositories (sorted by your choice, with 1 <= MAX_REPOS <= 40 fetched) 
`curl -X GET "http://localhost:3001/api/repositories/top?&order=asc|desc&maxRepos=MAX_REPOS"`
