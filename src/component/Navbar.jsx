import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

import logo from "../assets/sembark_logo.png"; 



const NavbarComponent = () => {
  const { cart } = useCart(); 
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>

  <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="SEMBARK Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">SEMBARK</span>
        </Navbar.Brand>        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              Cart ({cartItemCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
