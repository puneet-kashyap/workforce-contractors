const express = require('express');
const router = express.Router();

const products = require('../services/products.service');

router.get('/', (req, res) => {
  res.send(products.getAllProducts());
})

router.get('/:id', (req, res) => {
  res.send(products.getProduct(req.params.id));
})

module.exports = router;
