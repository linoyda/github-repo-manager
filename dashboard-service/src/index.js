const express = require('express');
const path = require('path');
const axios = require('axios');
const errorHandler = require('./utils/errorHandler');

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
        const response = await axios.get('http://repo-service:3001/api/repositories/top');
        res.json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching repository data' });
    }
});

app.listen(PORT, () => {
    console.log(`Dashboard Service running on port ${PORT}`);
});
