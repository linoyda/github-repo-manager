const errorHandler = (err, req, res, next) => {
    console.log('Server Error:', err.message);
    res.status(500).send('Internal Server Error');
};

module.exports = errorHandler;
