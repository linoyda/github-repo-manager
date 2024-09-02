
# User Service

This service manages user data and favorite repositories.

## Getting Started

1. **Install dependencies:**
   ```npm install```
2. **Run the service:**
   ```npm start```
3. **Access the service at:**
   ```GET http://localhost:3002/api/users/USERNAME/favorites```

   OR add a favorite (I used postman to construct the request): ```POST http://localhost:3002/api/users/USERNAME/favorite```
   headers: ```Content-Type``` : ```application/json```
   body: ```{"repoId": "REPOSITORY_ID"}```

   NOTE that username should be a string between 3-30 chars, and repoId should be a non-empty string.
 

