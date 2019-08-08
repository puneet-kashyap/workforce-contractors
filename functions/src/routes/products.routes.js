const express = require('express');
const router = express.Router();

const products = require('../services/products.service');

router.get('/', (req, res) => {
  res.send(products.getAllProducts());
})

router.get('/:id', (req, res) => {
  const product = products.getProduct(req.params.id);
  console.log(product);
  res.send('hi');
})

router.post('/',(req, res) => {
  products.setProduct(req.body)
  res.json(req.body);
})

module.exports = router;
