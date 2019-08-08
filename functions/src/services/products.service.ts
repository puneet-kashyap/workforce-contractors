import { Response } from 'express';
import { Product, ProductNotFound, ProductList } from '../interface/Products';

const firebase = require('../services/firebase.service');
const PRODUCTS = 'products';

const getAllProducts = (res: Response) => {
  firebase.db
    .collection(PRODUCTS)
    .get()
    .then((snapshot: any) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      const productList: ProductList = { products: [] };
      snapshot.forEach((doc: any) => {
        productList.products.push(doc.data());
      });
      res.send(productList);
    })
    .catch((err: any) => {
      console.log('Error getting documents', err);
    });
  return 'jsonProducts';
};

const getProduct = (id: string, res: Response) => {
  firebase.db
    .collection(PRODUCTS)
    .doc(id)
    .get()
    .then((doc: any) => {
      if (!doc.exists) {
        console.error('No such document!');
        const error: ProductNotFound = {
          id: id,
          message: 'Product not found'
        };
        res.send(error);
      } else {
        res.send(doc.data());
      }
    })
    .catch((err: any) => {
      console.log('Error getting document', err);
    });
};

const setProduct = (product: Product, res: Response) => {
  firebase.db
    .collection(PRODUCTS)
    .doc(product.id.toString())
    .set(product)
    .then((result: any) => {
      console.log(result);
    })
    .catch((err: any) => {
      console.error(err);
    });
};

export default {
  getAllProducts,
  getProduct,
  setProduct
};
