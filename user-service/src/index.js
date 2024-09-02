require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
try {
    const userRoutes = require('./routes/userRoutes');
    const { errorHandler } = require('./utils/errorHandler');

    const app = express();
    const PORT = process.env.PORT || 3002;

    app.use(express.json()); // Parse JSON bodies

    app.use('/api/users', userRoutes);

    app.use(errorHandler);

    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB:', err.message));

    app.listen(PORT, () => {
        console.log(`User Service running on port ${PORT}`);
    });
} catch (error) {
    console.error("An error occurred during setup:", error);
}
