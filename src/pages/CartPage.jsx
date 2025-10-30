import React from "react";
import { useCart } from "../contexts/CartContext";
import { Button, Table, Container, Card, Image } from "react-bootstrap";
import "../style/style.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-container my-5">
      <h2 className="mb-4 text-center"> Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive className="cart-table">
            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width="50"
                      height="50"
                      fluid
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={item.title}
                      className="d-md-none"
                    />
                    <span className="d-none d-md-inline">{item.title}</span>
                  </td>

                  <td className="text-truncate" style={{ maxWidth: "200px" }}>
                    {item.description}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end mt-4">
            <Card className="col-md-6 cart-card shadow-lg border-0">
              <Card.Body className="text-end p-4">
                <Card.Title className="fs-4 fw-bold text-primary mb-3">
                  Order Summary
                </Card.Title>

                <Card.Text className="fs-5 text-dark mb-4">
                  Total:{" "}
                  <span className="fw-bold text-success">
                    ${totalAmount.toFixed(2)}
                  </span>
                </Card.Text>

                <Button
                  variant="success"
                  size="sm"
                  className="checkout-btn px-5 py-2"
                  onClick={() => alert("Proceed to Checkout")}
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
