require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err.message));

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
