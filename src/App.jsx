// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {user ? (
                <>
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<Navigate to="/products" />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;