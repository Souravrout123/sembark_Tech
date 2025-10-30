import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Navbar from './component/Navbar';
import ProductDetailPage from './pages/ProductDetailPage';
import "./style/style.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
