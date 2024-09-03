# User Service

This service manages user data and favorite repositories.

## Getting Started

1. **Install dependencies:**
   `npm install`
2. **Insert your MONGO_URI on .env file**
3. **Run the service:**
   `npm start`
4. **Access the service at:**
   Get USERNAME favorite repos
   `GET http://localhost:3002/api/users/USERNAME/favorites`

   OR add a favorite (using Postman): `POST http://localhost:3002/api/users/USERNAME/favorite?filter=FILTER`, where FILTER is a string between 1 and 30 characters.
   headers: `Content-Type` : `application/json`
   body: `{"repoId": "REPOSITORY_ID"}`

   NOTE that username should be a string between 3-30 chars, and repoId should be a non-empty string.
