const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const products = require('./routes/products.routes');

const app = express();
admin.initializeApp();
app.use(cors({ origin: true }));

app.get('/health', (req, res) => {
  res.send('Health is Okay');
});

app.use('/products', products);

exports.api = functions.https.onRequest(app);
