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
  res.json(req.body);
  products.setProduct(req.body)
})

module.exports = router;
