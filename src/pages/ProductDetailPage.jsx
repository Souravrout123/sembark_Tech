import React from 'react';
import ProductDetail from '../component/ProductDetail';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage = () => {
  const { addToCart } = useCart();

  return <ProductDetail addToCart={addToCart} />;
};

export default ProductDetailPage;
