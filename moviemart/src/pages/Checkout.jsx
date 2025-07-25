// // // // import React, { useState } from "react";

// // // // const Checkout = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     address: "",
// // // //     paymentMethod: "Credit Card",
// // // //   });

// // // //   // Mock cart items (replace with props or context later)
// // // //   const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// // // //   const totalItems = cartItems.reduce(
// // // //     (acc, item) => acc + (item.quantity || 1),
// // // //     0
// // // //   );
// // // //   const totalCost = cartItems.reduce(
// // // //     (acc, item) => acc + (item.price || 10),
// // // //     0
// // // //   );

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleCheckout = (e) => {
// // // //     e.preventDefault();
// // // //     alert("Checkout complete! (mock)");
// // // //   };

// // // //   return (
// // // //     <div className="container my-5">
// // // //       <h2>Checkout</h2>
// // // //       <hr />

// // // //       <h4>Order Summary</h4>
// // // //       <ul className="list-group mb-4">
// // // //         {cartItems.map((item, index) => (
// // // //           <li
// // // //             className="list-group-item d-flex justify-content-between"
// // // //             key={index}
// // // //           >
// // // //             <span>
// // // //               {item.title} x {item.quantity || 1}
// // // //             </span>
// // // //             <span>${item.price || 10}</span>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <p>
// // // //         <strong>Total Items:</strong> {totalItems}
// // // //       </p>
// // // //       <p>
// // // //         <strong>Estimated Total Cost:</strong> ${totalCost}
// // // //       </p>

// // // //       <h4 className="mt-5">Customer Information</h4>
// // // //       <form onSubmit={handleCheckout}>
// // // //         <div className="mb-3">
// // // //           <label className="form-label">Full Name</label>
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             className="form-control"
// // // //             value={formData.name}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label className="form-label">Email Address</label>
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             className="form-control"
// // // //             value={formData.email}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label className="form-label">Shipping Address</label>
// // // //           <textarea
// // // //             name="address"
// // // //             className="form-control"
// // // //             value={formData.address}
// // // //             onChange={handleChange}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         <div className="mb-3">
// // // //           <label className="form-label">Payment Method</label>
// // // //           <select
// // // //             name="paymentMethod"
// // // //             className="form-select"
// // // //             value={formData.paymentMethod}
// // // //             onChange={handleChange}
// // // //           >
// // // //             <option>Credit Card</option>
// // // //             <option>Debit Card</option>
// // // //             <option>PayPal</option>
// // // //             <option>Cash on Delivery</option>
// // // //           </select>
// // // //         </div>

// // // //         <button type="submit" className="btn btn-primary mt-3">
// // // //           Complete Order
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Checkout;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Checkout = ({ cartItems = [] }) => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     address: "",
// //     paymentMethod: "Credit Card",
// //   });

// //   const navigate = useNavigate();

// //   // Calculate totals from passed props
// //   const totalItems = cartItems.reduce(
// //     (acc, item) => acc + (item.quantity || 1),
// //     0
// //   );

// //   const totalCost = cartItems.reduce(
// //     (acc, item) => acc + (item.price || 10) * (item.quantity || 1),
// //     0
// //   );

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleCheckout = (e) => {
// //     e.preventDefault();

// //     // Store order details in localStorage (optional for confirmation page)
// //     localStorage.setItem("orderDetails", JSON.stringify(formData));

// //     if (formData.paymentMethod === "Cash on Delivery") {
// //       navigate("/order-confirmation");
// //     } else {
// //       navigate("/payment");
// //     }
// //   };

// //   return (
// //     <div className="container my-5">
// //       <h2>Checkout</h2>
// //       <hr />

// //       <h4>Order Summary</h4>
// //       <ul className="list-group mb-4">
// //         {cartItems.map((item, index) => (
// //           <li
// //             key={index}
// //             className="list-group-item d-flex justify-content-between"
// //           >
// //             <span>
// //               {item.title} x {item.quantity || 1}
// //             </span>
// //             <span>
// //               ${((item.price || 10) * (item.quantity || 1)).toFixed(2)}
// //             </span>
// //           </li>
// //         ))}
// //       </ul>

// //       <p>
// //         <strong>Total Items:</strong> {totalItems}
// //       </p>
// //       <p>
// //         <strong>Estimated Total Cost:</strong> ${totalCost.toFixed(2)}
// //       </p>

// //       <h4 className="mt-5">Customer Information</h4>
// //       <form onSubmit={handleCheckout}>
// //         <div className="mb-3">
// //           <label className="form-label">Full Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             className="form-control"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Email Address</label>
// //           <input
// //             type="email"
// //             name="email"
// //             className="form-control"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Shipping Address</label>
// //           <textarea
// //             name="address"
// //             className="form-control"
// //             value={formData.address}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label className="form-label">Payment Method</label>
// //           <select
// //             name="paymentMethod"
// //             className="form-select"
// //             value={formData.paymentMethod}
// //             onChange={handleChange}
// //           >
// //             <option>Credit Card</option>
// //             <option>Debit Card</option>
// //             <option>PayPal</option>
// //             <option>Cash on Delivery</option>
// //           </select>
// //         </div>

// //         <button type="submit" className="btn btn-primary mt-3">
// //           Complete Order
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Checkout = ({ cartItems = [] }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     paymentMethod: "Credit Card",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const totalItems = cartItems.reduce(
//     (acc, item) => acc + (item.quantity || 1),
//     0
//   );

//   const totalCost = cartItems.reduce(
//     (acc, item) => acc + (item.price || 10) * (item.quantity || 1),
//     0
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckout = (e) => {
//     e.preventDefault();

//     if (
//       formData.paymentMethod !== "Cash on Delivery" &&
//       (!formData.cardNumber || !formData.expiryDate || !formData.cvv)
//     ) {
//       alert("Please fill in your card details.");
//       return;
//     }

//     localStorage.setItem("orderDetails", JSON.stringify(formData));
//     alert("Order placed successfully!");
//     navigate("/order-confirmation");
//   };

//   return (
//     <div className="container my-5">
//       <h2>Checkout</h2>
//       <hr />

//       <h4>Order Summary</h4>
//       <ul className="list-group mb-4">
//         {cartItems.map((item, index) => (
//           <li
//             className="list-group-item d-flex justify-content-between"
//             key={index}
//           >
//             <span>
//               {item.title} x {item.quantity || 1}
//             </span>
//             <span>
//               ${((item.price || 10) * (item.quantity || 1)).toFixed(2)}
//             </span>
//           </li>
//         ))}
//       </ul>

//       <p>
//         <strong>Total Items:</strong> {totalItems}
//       </p>
//       <p>
//         <strong>Estimated Total Cost:</strong> ${totalCost.toFixed(2)}
//       </p>

//       <h4 className="mt-5">Customer Information</h4>
//       <form onSubmit={handleCheckout}>
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Shipping Address</label>
//           <textarea
//             name="address"
//             className="form-control"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Payment Method</label>
//           <select
//             name="paymentMethod"
//             className="form-select"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option>Credit Card</option>
//             <option>Debit Card</option>
//             <option>PayPal</option>
//             <option>Cash on Delivery</option>
//           </select>
//         </div>

//         {/* Conditionally show card fields */}
//         {formData.paymentMethod !== "Cash on Delivery" && (
//           <>
//             <div className="mb-3">
//               <label className="form-label">Card Number</label>
//               <input
//                 type="text"
//                 name="cardNumber"
//                 className="form-control"
//                 placeholder="1234 5678 9012 3456"
//                 value={formData.cardNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Expiry Date</label>
//               <input
//                 type="text"
//                 name="expiryDate"
//                 className="form-control"
//                 placeholder="MM/YY"
//                 value={formData.expiryDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">CVV</label>
//               <input
//                 type="password"
//                 name="cvv"
//                 className="form-control"
//                 placeholder="123"
//                 value={formData.cvv}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         <button type="submit" className="btn btn-primary mt-3">
//           Complete Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//const Checkout = ({ cartItems = [] }) => {
const Checkout = ({ cartItems = [], setCartItems }) => {
  const navigate = useNavigate();
  const toastRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Credit Card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [showToast, setShowToast] = useState(false);

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  const totalCost = cartItems.reduce(
    (acc, item) => acc + (item.price || 10) * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Card Number: Only digits, max 16
    if (name === "cardNumber") {
      value = value.replace(/\D/g, "").slice(0, 16);
    }

    // CVV: Only digits, max 3
    if (name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 3);
    }

    // Expiry Date: auto-format MM/YY
    if (name === "expiryDate") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length >= 3) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  //   const handleCheckout = (e) => {
  //     e.preventDefault();

  //     if (formData.paymentMethod !== "Cash on Delivery") {
  //       if (
  //         formData.cardNumber.length !== 16 ||
  //         formData.cvv.length !== 3 ||
  //         !/^\d{2}\/\d{2}$/.test(formData.expiryDate)
  //       ) {
  //         alert("Please enter valid payment details.");
  //         return;
  //       }
  //     }

  //     localStorage.setItem("orderDetails", JSON.stringify(formData));
  //     setShowToast(true);

  //     setTimeout(() => {
  //       navigate("/order-confirmation");
  //     }, 2000);
  //   };
  const handleCheckout = (e) => {
    e.preventDefault();

    if (formData.paymentMethod !== "Cash on Delivery") {
      if (
        formData.cardNumber.length !== 16 ||
        formData.cvv.length !== 3 ||
        !/^\d{2}\/\d{2}$/.test(formData.expiryDate)
      ) {
        alert("Please enter valid payment details.");
        return;
      }
    }

    const orderId = "ORD-" + Date.now();

    const fullOrder = {
      orderId,
      timestamp: new Date().toISOString(),
      customer: {
        name: formData.name,
        email: formData.email,
        address: formData.address,
      },
      payment: {
        method: formData.paymentMethod,
        cardNumber: formData.cardNumber,
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
      },
      items: cartItems,
      //       items: cartItems.map(item => ({
      //   title: item.title,
      //   quantity: item.quantity,
      //   price: item.price
      // }))
      total: totalCost.toFixed(2),
    };

    // Save to order history
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, fullOrder])
    );

    // ✅ Clear the cart
    localStorage.removeItem("movieMartCart");
    setCartItems([]);
    setShowToast(true);

    setTimeout(() => {
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <h4>Order Summary</h4>
      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            <span>
              {item.title} x {item.quantity || 1}
            </span>
            <span>
              ${((item.price || 10) * (item.quantity || 1)).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total Items:</strong> {totalItems}
      </p>
      <p>
        <strong>Estimated Total Cost:</strong> ${totalCost.toFixed(2)}
      </p>

      <h4 className="mt-5">Customer Information</h4>
      <form onSubmit={handleCheckout}>
        {/* Form fields... */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shipping Address</label>
          <textarea
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select
            name="paymentMethod"
            className="form-select"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>PayPal</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        {formData.paymentMethod !== "Cash on Delivery" && (
          <>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                placeholder="1234567812345678"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                className="form-control"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input
                type="password"
                name="cvv"
                className="form-control"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Complete Order
        </button>
      </form>

      {/* Toast */}
      {showToast && (
        <div
          className="toast show position-fixed top-0 end-0 m-3 bg-success text-white"
          style={{ zIndex: 9999 }}
          role="alert"
        >
          <div className="toast-body">🎉 Order placed successfully!</div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
