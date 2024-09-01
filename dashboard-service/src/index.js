const express = require('express');
const path = require('path');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '../public')));
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Dashboard Service running on port ${PORT}`);
});
