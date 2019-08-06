const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const products = require('./src/routes/products.routes');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json()) 

app.get('/health', (req, res) => {
  res.send('Health is Okay');
});

app.use('/products', products);

exports.api = functions.https.onRequest(app);
