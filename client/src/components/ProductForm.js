// frontend/src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, editProduct } from '../redux/actions/productActions';

const ProductForm = ({ product = {}, onSave }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [description, setDescription] = useState(product.description || '');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setPrice(product.price || '');
      setDescription(product.description || '');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, description };
    if (product.id) {
      dispatch(editProduct(product.id, newProduct));
    } else {
      dispatch(addProduct(newProduct));
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
