const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

const products = require('./services/products.service');

const app = express();
admin.initializeApp();
app.use(cors({ origin: true }));

app.get('/health', (req, res) => {
  res.send('Health is Okay');
});

app.get('/products', (req, res) => {
  res.send(products.getAllProducts());
});

app.get('/products/:id', (req, res) => {
  res.send(products.getProduct(req.params.id));
});

exports.api = functions.https.onRequest(app);
