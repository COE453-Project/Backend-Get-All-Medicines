const express = require('express');
const logResponse = require('./log.js');
const getMedicines = require('./data.js')

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    // TODO Get all of the medicine details from the database and replace the following hardcoded values
    const medicines = getMedicines();

    // Send the response
    res.json(medicines);
    next();
});

app.use(logResponse);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});