const express = require('express');
const logResponse = require('./log.js');
const getMedicines = require('./data.js')
const cors = require('cors');

const db = 'https://backend-database-olz2xjbmza-uc.a.run.app'
const app = express();
const port = 3000;

app.use(cors());

app.get('/', async (req, res, next) => {
  const expiryStatus = req.query.status;
  let options = { method: 'GET' };
  try{
    const response = await fetch(db, options)
    let medicines = await response.json();
    if (expiryStatus){
      if (expiryStatus) {
        if (expiryStatus === 'expired') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Expired');
        } else if (expiryStatus === 'will-expire-soon') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Will Expire Soon');
        }
        else if (expiryStatus === 'not-expired') {
          medicines = medicines.filter(medicine => medicine.expiryStatus === 'Not Expired');
        }
    }}
    res.status(200)
    res.json(medicines);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  next()
});

app.use(logResponse);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
