require('dotenv').config();
const express = require('express');
const cors = require('cors');

try {
    const repoRoutes = require('./routes/repoRoutes');
    const { errorHandler } = require('./utils/errorHandler');

    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use('/api/repositories', repoRoutes);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Repository Service running on port ${PORT}`);
    });
} catch (error) {
    console.error("An error occurred during setup:", error);
}

