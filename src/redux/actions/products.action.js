import productApi from '../../apis/productsApi';

export const getAllProducts = async dispatch => {
  const allProducts = await productApi.get('/products');
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: allProducts
  });
}

export const getProduct = id => async dispatch => {
  const product = await productApi.get(`/products/${id}`);
  dispatch({
    type: GET_PRODUCT,
    payload: product
  });
}