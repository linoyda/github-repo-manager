const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (err.name === 'ValidationError') {
        res.status(400).json({ error: 'Invalid input data' });
    } else if (err.name === 'MongoError') {
        res.status(500).json({ error: 'Database error occurred' });
    } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

module.exports = errorHandler;
