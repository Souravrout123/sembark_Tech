import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import '../style/style.css';


const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="product-detail-container my-5">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-detail-image"
          />
        </Col>
        <Col md={6}>
          <h2 className="product-title mb-3">{product.title}</h2>
          <p className="product-description mb-4">{product.description}</p>
          <h4 className="product-price text-success mb-4">${product.price}</h4>
          <Button variant="dark" className="px-4 py-2" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

