const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('SECRET_DATA', '_flag_');
    next();
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

