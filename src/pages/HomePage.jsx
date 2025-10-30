import React, { useState, useEffect, useCallback } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const applyFiltersAndSort = useCallback(() => {
    let updatedProducts = [...products];

    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (sortOption === "price-low-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "popularity") {
      updatedProducts.sort((a, b) => b.rating?.rate - a.rating?.rate);
    }

    setFilteredProducts(updatedProducts);
  }, [category, sortOption, products]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [category, sortOption, applyFiltersAndSort]);

  return (
    <Container className="my-4">
      <Row className="mb-4 align-items-center">
        <Col md={4} sm={6} xs={12} className="mb-2">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </Form.Select>
        </Col>

        <Col md={4} sm={6} xs={12} className="mb-2">
          <Form.Label>Sort By</Form.Label>
          <Form.Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
