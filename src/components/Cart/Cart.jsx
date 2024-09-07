// src/components/Cart/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;