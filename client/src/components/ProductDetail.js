// // frontend/src/components/ProductDetail.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProduct } from '../redux/actions/productActions';

// const ProductDetail = ({ match }) => {
//   const dispatch = useDispatch();
//   const product = useSelector(state => state.products.selectedProduct);

//   useEffect(() => {
//     dispatch(getProduct(match.params.id));
//   }, [dispatch, match.params.id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.price}</p>
//       <p>{product.description}</p>
//     </div>
//   );
// };

// export default ProductDetail;


// frontend/src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import ProductForm from './ProductForm';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, [dispatch, match.params.id]);

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <ProductForm product={product} onSave={handleSave} />
      ) : (
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
