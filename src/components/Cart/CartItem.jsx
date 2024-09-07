// src/components/Cart/CartItem.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;