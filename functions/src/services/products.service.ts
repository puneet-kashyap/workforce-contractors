import { Product, ProductNotFound, ProductList } from '../interface/Products';

import firebase from '../services/firebase.service';
const PRODUCTS = 'products';

const getAllProducts = (fn: any) => {
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
      fn(productList);
    })
    .catch((err: any) => {
      console.log('Error getting documents', err);
    });
};

const getProduct = (id: string, fn: any) => {
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
        fn(error);
      } else {
        fn(doc.data());
      }
    })
    .catch((err: any) => {
      console.log('Error getting document', err);
    });
};

const setProduct = (product: Product, fn: any) => {
  firebase.db
    .collection(PRODUCTS)
    .doc(product.id.toString())
    .set(product)
    .then((result: any) => {
      console.log(result);
      fn(product);
    })
    .catch((err: any) => {
      console.error(err);
      fn({ error: err });
    });
};

const updateProduct = (product: Product, fn: any) => {
  firebase.db
    .collection(PRODUCTS)
    .doc(product.id.toString())
    .update(product)
    .then((result: any) => {
      console.log(result);
      fn(product);
    })
    .catch((err: any) => {
      console.error(err);
      const error: ProductNotFound = {
        id: product.id,
        message: 'Product not found'
      };
      fn(error);
    });
};

const deleteProduct = (id: string, fn: any) => {
  firebase.db
    .collection(PRODUCTS)
    .doc(id.toString())
    .delete()
    .then((result: any) => {
      fn({
        status: 'Success',
        message: `Product ID: ${id} doesn't exist anymore.`
      });
    })
    .catch((err: any) => {
      console.error(err);
    });
};

export default {
  getAllProducts,
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct
};
