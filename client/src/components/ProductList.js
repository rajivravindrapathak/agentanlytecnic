// frontend/src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
import { fetchProducts } from '../api/productApi';
import axios from 'axios';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSave = (product) => {
    // Dispatch an action to save the new product to the Redux store
    setShowForm(false);
  };

  const fetchProductsData = async () => {
    try {
      // const response = await fetchProducts();
      const response = await axios.get(`http://localhost:5000/api/products`);
      console.log('Fetched products:', response.data.products); 
      console.log('Fetched products:', response.data); 
      console.log('Fetched products:', response); 
      // dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
    } catch (error) {   
      console.error('Error fetching products:', error); // Console log any error
      // dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  }

  console.log('Products from Redux store:', products);

  useEffect(() => {
    fetchProductsData()
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Product'}
      </button>
      {showForm && <ProductForm onSave={handleSave} />}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
