import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="text-success">✅ Order Confirmed!</h2>
      <p className="lead mt-3">
        Thank you for your purchase. Your order has been successfully placed and
        is being processed.
      </p>

      <div className="my-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Order confirmed"
          width={100}
        />
      </div>

      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
