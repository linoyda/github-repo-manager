const express = require('express');
const path = require('path');
const axios = require('axios');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '../public')));

app.use(errorHandler);

// Route to serve the dashboard UI
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Endpoint to get repository data
app.get('/api/repositories', async (req, res) => {
  try {
    const response = await axios.get(
      'http://repo-service:3001/api/repositories/top?&order=desc&maxRepos=20'
    );
    res.json(response.data);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Error fetching repository data' });
  }
});

app.listen(PORT, () => {
  logger.info(`Dashboard Service running on port ${PORT}`);
});
