// // frontend/src/redux/reducers/productReducer.js
// import {
//   GET_PRODUCTS,
//   GET_PRODUCT,
//   ADD_PRODUCT,
//   UPDATE_PRODUCT,
//   DELETE_PRODUCT
// } from '../actions/productActions';

// const initialState = {
//   list: [],
//   selectedProduct: null,
// };

// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return { ...state, list: action.payload };
//     case GET_PRODUCT:
//       return { ...state, selectedProduct: action.payload };
//     case ADD_PRODUCT:
//       return { ...state, list: [...state.list, action.payload] };
//     case UPDATE_PRODUCT:
//       return {
//         ...state,
//         list: state.list.map(product =>
//           product.id === action.payload.id ? action.payload : product
//         ),
//       };
//     case DELETE_PRODUCT:
//       return {
//         ...state,
//         list: state.list.filter(product => product.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default productReducer;


// frontend/src/redux/reducers/productReducer.js
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from '../constants/productConstants';

const initialState = {
  list: [],
  product: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
          return { ...state, list: action.payload, error: null };
      case FETCH_PRODUCTS_FAILURE:
          return { ...state, error: action.payload };
      case FETCH_PRODUCT_SUCCESS:
          return { ...state, product: action.payload, error: null };
      case FETCH_PRODUCT_FAILURE:
          return { ...state, error: action.payload };
      case ADD_PRODUCT_SUCCESS:
          return { ...state, list: [...state.list, action.payload], error: null };
      case ADD_PRODUCT_FAILURE:
          return { ...state, error: action.payload };
      case UPDATE_PRODUCT_SUCCESS:
          return {
              ...state,
              list: state.list.map((product) => (product._id === action.payload._id ? action.payload : product)),
              error: null,
          };
      case UPDATE_PRODUCT_FAILURE:
          return { ...state, error: action.payload };
      case DELETE_PRODUCT_SUCCESS:
          return { ...state, list: state.list.filter((product) => product._id !== action.payload), error: null };
      case DELETE_PRODUCT_FAILURE:
          return { ...state, error: action.payload };
      default:
          return state;
  }
};

export default productReducer;
