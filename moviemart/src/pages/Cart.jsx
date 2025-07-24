import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, theme }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        🛒 <span className="fw-bold">Your Cart</span>
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className={`list-group-item d-flex justify-content-between align-items-center rounded ${
                  theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                <div>
                  <h5>{item.title}</h5>
                  <small>Quantity: {item.quantity}</small>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-3">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <Link
                    to={`/movie/${item.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    View Details
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="fw-bold">Total: ${totalPrice.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
