// src/components/Product/ProductItem.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;