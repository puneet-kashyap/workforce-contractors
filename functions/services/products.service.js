const fs = require('fs');
const jsonProducts = require('../assets/products.json');

const getAllProducts = () => {
  // let rawdata = fs.readFileSync(__dirname + "/../assets/products.json");
  return jsonProducts;
};

const getProduct = (id) => {
  const product = jsonProducts.products.filter(x => x.id == id)[0];
  return product;
}

const setProduct = (product) => {
  jsonProducts.products.push(product);
}

module.exports = {
  getAllProducts,
  getProduct
}
