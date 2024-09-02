const { validationResult } = require('express-validator');

const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (err.response) { // API response errors
        res.status(err.response.status).json({ error: err.response.data.message || 'An error occurred with the external service' });
    } else if (err.request) { // No response received
        res.status(500).json({ error: 'No response received from the external service' });
    } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('validation error occurred');
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { errorHandler, handleValidationErrors };