const express = require('express');
const logResponse = require('./log.js');
const getMedicines = require('./data.js')

let got;
import('got').then((gotModule) => {
  got = gotModule.default || gotModule;
});
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:3000/'
}));

app.get('/', (req, res, next) => {
    // Get all of the medicine details from the database at the link https://backend-database-olz2xjbmza-uc.a.run.app/

    // let medicines = got('https://backend-database-olz2xjbmza-uc.a.run.app/').json();
    let medicines = getMedicines();

    const expiryStatus = req.query.status;
    if (expiryStatus) {
        if (expiryStatus === 'expired') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Expired');
        } else if (expiryStatus === 'will-expire-soon') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Will Expire Soon');
        }
        else if (expiryStatus === 'not-expired') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Not Expired');
        }
    }

    // Send the response
    res.json(medicines);
    next();
});

app.use(logResponse);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});