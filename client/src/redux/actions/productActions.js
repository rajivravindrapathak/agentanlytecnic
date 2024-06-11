
// // frontend/src/redux/actions/productActions.js
// import {
//   fetchProducts,
//   fetchProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct
// } from '../../api/productApi';
// import {
//   FETCH_PRODUCTS_SUCCESS,
//   FETCH_PRODUCTS_FAILURE,
//   FETCH_PRODUCT_SUCCESS,
//   FETCH_PRODUCT_FAILURE,
//   ADD_PRODUCT_SUCCESS,
//   ADD_PRODUCT_FAILURE,
//   UPDATE_PRODUCT_SUCCESS,
//   UPDATE_PRODUCT_FAILURE,
//   DELETE_PRODUCT_SUCCESS,
//   DELETE_PRODUCT_FAILURE
// } from '../constants/productConstants';

// export const getProducts = () => async dispatch => {
//   try {
//       const response = await fetchProducts();
//       console.log('Fetched products:', response.data.products); // Console log to verify data
//       dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
//   } catch (error) {   
//       console.error('Error fetching products:', error); // Console log any error
//       dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
//   }
// };

// export const getProduct = (id) => async dispatch => {
//   try {
//     const response = await fetchProductById(id);
//     dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error.message });
//   }
// };

// export const addProduct = (product) => async dispatch => {
//   try {
//     const response = await createProduct(product);
//     dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
//   }
// };

// export const editProduct = (id, product) => async dispatch => {
//   try {
//       const response = await updateProduct(id, product);
//       dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
//   } catch (error) {
//       dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error.message });
//   }
// };

// export const removeProduct = (id) => async dispatch => {
//   try {
//       await deleteProduct(id);
//       dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
//   } catch (error) {
//       dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
//   }
// };
