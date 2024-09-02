## github-repo-manager: Repository Dashboard and Favorites Manager
This project is a Node.js-based backend service that interacts with the GitHub REST API to fetch and manage repositories. It provides a web interface for users to view top repositories and manage their favorite repositories. The backend is designed using a microservices architecture and is fully containerized using Docker and Docker-compose.

### Features
 - Top Repositories Dashboard: Displays a chart of the top repositories on GitHub.
 - **Favorite Repositories Management (repo-service)**: Allows users to view, add, and manage their favorite repositories.
 - **Web Interface (dashboard-service)**: Clean and simple web interface to interact with the data.
 - **Microservices Architecture**: The backend services are decoupled and interact via RESTful APIs.
 - **Dockerized Services**: Each service runs in its own Docker container for easy deployment.

### Tech Stack
 - **Backend**: Node.js, Express.js, Axios
 - **Frontend**: HTML, CSS, JavaScript (with Fetch API)
 - **Database**: MongoDB (for storing user favorites)
 - **Containerization**: Docker, Docker Compose


### Project Setup
#### Prerequisites
 - Node (18.x.x)
 - Docker and Docker Compose
 - Git

#### Clone the repository:
`git clone https://github.com/linoyda/github-repo-manager.git`

#### Install Dependencies:
`npm install`

#### Set Up .env File:
GITHUB_TOKEN=YOUR_GITHUB_TOKEN
MONGO_URI=MONGO_URI

#### Build and Run the Containers:
`docker-compose up --build`

**NOTES:**
 - The dashboard service will be available on http://localhost:3003/
 - Each of repo-service, user-service has additional information in their README.


