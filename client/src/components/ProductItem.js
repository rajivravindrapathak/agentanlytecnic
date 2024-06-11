// frontend/src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductItem;
