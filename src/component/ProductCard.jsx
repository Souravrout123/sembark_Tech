
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/style.css";

const ProductCard = ({ product }) => {
  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 2) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return title;
  };

  return (
    <Card className="product-card mb-4">
      <Card.Img 
        variant="top" 
        src={product.image} 
        className="product-image"
      />
      <Card.Body>
        <Card.Title className="product-card-title d-flex align-items-center fs-5 fw-600">
          {truncateTitle(product.title)}
        </Card.Title>
        <Card.Text className='d-flex align-items-center fs-5 fw-700'>From ${product.price}</Card.Text>
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;