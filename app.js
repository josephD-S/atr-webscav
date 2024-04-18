const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Part_3', 'n3uroconn3ct}');
    next();
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

