require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/',routes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 