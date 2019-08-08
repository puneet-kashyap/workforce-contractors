const fs = require('fs');
const firebase = require('../services/firebase.service');

const getAllProducts = () => {
  return 'jsonProducts';
};

const getProduct = id => {
  firebase.db
    .collection('products')
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.error('No such document!');
      } else {
        console.log('Document data:', doc.data());
        return doc.data();
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
};

const setProduct = product => {
  console.log(product.id)
  firebase.db
    .collection('products')
    .doc(product.id.toString())
    .set(product)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err);
    })
};

module.exports = {
  getAllProducts,
  getProduct,
  setProduct
};
