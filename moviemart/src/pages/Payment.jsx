import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate successful payment
    alert("Payment successful!");
    navigate("/order-confirmation");
  };

  return (
    <div className="container my-5">
      <h2>Payment</h2>
      <hr />
      <p>Please complete your payment to proceed with the order.</p>

      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input
            type="password"
            className="form-control"
            placeholder="123"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
