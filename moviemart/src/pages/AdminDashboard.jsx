// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [paymentFilter, setPaymentFilter] = useState("");
//   const [dateFilter, setDateFilter] = useState("");
//   const [showToast, setShowToast] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   // eslint-disable-next-line no-unused-vars
//   const [ordersPerPage, setOrdersPerPage] = useState(5);
//   const [sortBy, setSortBy] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     const updatedOrders = storedOrders.map((order) => ({
//       ...order,
//       fulfilled: order.fulfilled || false,
//     }));

//     setOrders(updatedOrders);
//   }, []);

//   const toggleFulfilled = (orderId) => {
//     const updated = orders.map((order) =>
//       order.orderId === orderId
//         ? { ...order, fulfilled: !order.fulfilled }
//         : order
//     );
//     setOrders(updated);
//     localStorage.setItem("orders", JSON.stringify(updated));
//   };

//   const highlightMatch = (text, query) => {
//     if (!query) return text;
//     const parts = text.split(new RegExp(`(${query})`, "gi"));
//     return parts.map((part, i) =>
//       part.toLowerCase() === query.toLowerCase() ? (
//         <mark key={i}>{part}</mark>
//       ) : (
//         part
//       )
//     );
//   };

//   const filteredOrders = orders
//     .filter((order) => {
//       const query = searchQuery.toLowerCase();
//       const matchesQuery =
//         order.customer.name.toLowerCase().includes(query) ||
//         order.customer.email.toLowerCase().includes(query) ||
//         order.orderId.toLowerCase().includes(query);

//       const matchesPayment = paymentFilter
//         ? order.payment.method === paymentFilter
//         : true;

//       const orderDate = new Date(order.timestamp);
//       const now = new Date();

//       const matchesDate = dateFilter
//         ? now - orderDate <= parseInt(dateFilter) * 24 * 60 * 60 * 1000
//         : true;

//       return matchesQuery && matchesPayment && matchesDate;
//     })
//     .sort((a, b) => {
//       if (!sortBy) return 0;
//       let valA, valB;
//       if (sortBy === "date") {
//         valA = new Date(a.timestamp);
//         valB = new Date(b.timestamp);
//       } else if (sortBy === "total") {
//         valA = a.total;
//         valB = b.total;
//       }
//       return sortOrder === "asc" ? valA - valB : valB - valA;
//     });

//   const exportToCSV = () => {
//     if (filteredOrders.length === 0) {
//       setShowToast(true);
//       setTimeout(() => setShowToast(false), 3000);
//       return;
//     }

//     const rows = filteredOrders.map((order) => {
//       const dateObj = new Date(order.timestamp);
//       const date = dateObj.toLocaleDateString("en-GB");
//       const time = dateObj.toLocaleTimeString("en-GB");

//       return [
//         order.orderId,
//         order.customer.name,
//         order.customer.email,
//         order.payment.method,
//         order.items
//           .map((item) => `${item.title} × ${item.quantity}`)
//           .join(" | "),
//         order.total,
//         date,
//         time,
//         order.fulfilled ? "Yes" : "No",
//       ];
//     });

//     const headers = [
//       "Order ID",
//       "Customer Name",
//       "Email",
//       "Payment Method",
//       "Items",
//       "Total",
//       "Date",
//       "Time",
//       "Fulfilled",
//     ];

//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       [headers, ...rows].map((e) => e.join(",")).join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "orders.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = filteredOrders.slice(
//     indexOfFirstOrder,
//     indexOfLastOrder
//   );
//   const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

//   const toggleSort = (key) => {
//     if (sortBy === key) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortBy(key);
//       setSortOrder("asc");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4">📦 Admin Dashboard</h2>

//       {/* Filters */}
//       <div className="row mb-3">
//         <div className="col-md-4 mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by name, email, or order ID"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="col-md-3 mb-2">
//           <select
//             className="form-select"
//             value={paymentFilter}
//             onChange={(e) => setPaymentFilter(e.target.value)}
//           >
//             <option value="">All Payment Methods</option>
//             <option>Credit Card</option>
//             <option>Debit Card</option>
//             <option>PayPal</option>
//             <option>Cash on Delivery</option>
//           </select>
//         </div>

//         <div className="col-md-2 mb-2">
//           <select
//             className="form-select"
//             value={dateFilter}
//             onChange={(e) => setDateFilter(e.target.value)}
//           >
//             <option value="">All Dates</option>
//             <option value="7">Last 7 Days</option>
//             <option value="30">Last 30 Days</option>
//             <option value="90">Last 90 Days</option>
//           </select>
//         </div>

//         {/* <div className="col-md-2 mb-2">
//           <select
//             className="form-select"
//             value={ordersPerPage}
//             onChange={(e) => {
//               setCurrentPage(1);
//               setOrdersPerPage(parseInt(e.target.value));
//             }}
//           >
//             <option value="5">5 per page</option>
//             <option value="10">10 per page</option>
//             <option value="20">20 per page</option>
//           </select>
//         </div> */}

//         <div className="col-md-2 mb-2">
//           <button className="btn btn-success w-100" onClick={exportToCSV}>
//             📄 Export CSV
//           </button>
//         </div>
//       </div>

//       {/* Toast */}
//       {showToast && (
//         <div
//           className="toast show position-fixed top-0 end-0 m-3 bg-warning text-dark"
//           style={{ zIndex: 9999 }}
//           role="alert"
//         >
//           <div className="toast-body">⚠️ No orders available to export.</div>
//         </div>
//       )}

//       {/* Orders Table */}
//       {currentOrders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-bordered table-hover align-middle">
//             <thead className="table-dark">
//               <tr>
//                 <th>Order ID</th>
//                 <th>Customer</th>
//                 <th>Email</th>
//                 <th>Payment</th>
//                 <th>Items</th>
//                 <th onClick={() => toggleSort("total")}>Total ($) ⬍</th>
//                 <th onClick={() => toggleSort("date")}>Date ⬍</th>
//                 <th>Time</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentOrders.map((order) => {
//                 const dateObj = new Date(order.timestamp);
//                 const date = dateObj.toLocaleDateString("en-GB");
//                 const time = dateObj.toLocaleTimeString("en-GB");
//                 return (
//                   <tr key={order.orderId}>
//                     <td>{highlightMatch(order.orderId, searchQuery)}</td>
//                     <td>{highlightMatch(order.customer.name, searchQuery)}</td>
//                     <td>{highlightMatch(order.customer.email, searchQuery)}</td>
//                     <td>{order.payment.method}</td>
//                     <td>
//                       <ul className="mb-0">
//                         {order.items.map((item, i) => (
//                           <li key={i}>
//                             {item.title} × {item.quantity}
//                           </li>
//                         ))}
//                       </ul>
//                     </td>
//                     <td>${order.total}</td>
//                     <td>{date}</td>
//                     <td>{time}</td>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={order.fulfilled}
//                         onChange={() => toggleFulfilled(order.orderId)}
//                       />{" "}
//                       {order.fulfilled ? (
//                         <span className="badge bg-success">Fulfilled</span>
//                       ) : (
//                         <span className="badge bg-warning text-dark">
//                           Pending
//                         </span>
//                       )}
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <nav className="mt-4">
//           <ul className="pagination justify-content-center flex-wrap">
//             <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               >
//                 Previous
//               </button>
//             </li>
//             <li className="page-item disabled">
//               <span className="page-link">Page {currentPage}</span>
//             </li>
//             <li
//               className={`page-item ${
//                 currentPage === totalPages ? "disabled" : ""
//               }`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [ordersPerPage, setOrdersPerPage] = useState(5);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = storedOrders.map((order) => ({
      ...order,
      fulfilled: order.fulfilled || false,
    }));

    setOrders(updatedOrders);
  }, []);

  const toggleFulfilled = (orderId) => {
    const updated = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, fulfilled: !order.fulfilled }
        : order
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const deleteOrder = (orderId) => {
    const updated = orders.filter((order) => order.orderId !== orderId);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  };

  const filteredOrders = orders
    .filter((order) => {
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        order.customer.name.toLowerCase().includes(query) ||
        order.customer.email.toLowerCase().includes(query) ||
        order.orderId.toLowerCase().includes(query);

      const matchesPayment = paymentFilter
        ? order.payment.method === paymentFilter
        : true;

      const orderDate = new Date(order.timestamp);
      const now = new Date();

      const matchesDate = dateFilter
        ? now - orderDate <= parseInt(dateFilter) * 24 * 60 * 60 * 1000
        : true;

      return matchesQuery && matchesPayment && matchesDate;
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      let valA, valB;
      if (sortBy === "date") {
        valA = new Date(a.timestamp);
        valB = new Date(b.timestamp);
      } else if (sortBy === "total") {
        valA = a.total;
        valB = b.total;
      }
      return sortOrder === "asc" ? valA - valB : valB - valA;
    });

  const exportToCSV = () => {
    if (filteredOrders.length === 0) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    const rows = filteredOrders.map((order) => {
      const dateObj = new Date(order.timestamp);
      const date = dateObj.toLocaleDateString("en-GB");
      const time = dateObj.toLocaleTimeString("en-GB");

      return [
        order.orderId,
        order.customer.name,
        order.customer.email,
        order.payment.method,
        order.items
          .map((item) => `${item.title} × ${item.quantity}`)
          .join(" | "),
        order.total,
        date,
        time,
        order.fulfilled ? "Yes" : "No",
      ];
    });

    const headers = [
      "Order ID",
      "Customer Name",
      "Email",
      "Payment Method",
      "Items",
      "Total",
      "Date",
      "Time",
      "Fulfilled",
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const toggleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">📦 Admin Dashboard</h2>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, email, or order ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
          >
            <option value="">All Payment Methods</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>PayPal</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        <div className="col-md-2 mb-2">
          <select
            className="form-select"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">All Dates</option>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>

        <div className="col-md-2 mb-2">
          <button className="btn btn-success w-100" onClick={exportToCSV}>
            📄 Export CSV
          </button>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div
          className="toast show position-fixed top-0 end-0 m-3 bg-warning text-dark"
          style={{ zIndex: 9999 }}
          role="alert"
        >
          <div className="toast-body">⚠️ No orders available to export.</div>
        </div>
      )}

      {/* Orders Table */}
      {currentOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Payment</th>
                <th>Items</th>
                <th onClick={() => toggleSort("total")}>Total ($) ⬍</th>
                <th onClick={() => toggleSort("date")}>Date ⬍</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => {
                const dateObj = new Date(order.timestamp);
                const date = dateObj.toLocaleDateString("en-GB");
                const time = dateObj.toLocaleTimeString("en-GB");
                return (
                  <tr key={order.orderId}>
                    <td>{highlightMatch(order.orderId, searchQuery)}</td>
                    <td>{highlightMatch(order.customer.name, searchQuery)}</td>
                    <td>{highlightMatch(order.customer.email, searchQuery)}</td>
                    <td>{order.payment.method}</td>
                    <td>
                      <ul className="mb-0">
                        {order.items.map((item, i) => (
                          <li key={i}>
                            {item.title} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>${order.total}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={order.fulfilled}
                        onChange={() => toggleFulfilled(order.orderId)}
                      />{" "}
                      {order.fulfilled ? (
                        <span className="badge bg-success">Fulfilled</span>
                      ) : (
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteOrder(order.orderId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center flex-wrap">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </button>
            </li>
            <li className="page-item disabled">
              <span className="page-link">Page {currentPage}</span>
            </li>
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default AdminDashboard;
