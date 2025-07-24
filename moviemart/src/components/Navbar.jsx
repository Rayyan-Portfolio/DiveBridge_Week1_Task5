// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ cartCount, toggleTheme, theme }) => {
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY && currentScrollY > 80) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top transition-navbar ${
//         visible ? "visible" : "invisible"
//       }`}
//     >
//       <Link className="navbar-brand fw-bold" to="/">
//         🎬 MovieMart
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto align-items-center">
//           <li className="nav-item">
//             <Link className="nav-link active" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item me-2">
//             <Link className="nav-link" to="/cart">
//               🛒 Cart{" "}
//               <span className="badge bg-light text-dark">{cartCount || 0}</span>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <button
//               className="btn btn-sm btn-outline-light"
//               onClick={toggleTheme}
//             >
//               {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // clear input
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top transition-navbar ${
        visible ? "visible" : "invisible"
      }`}
    >
      <Link className="navbar-brand fw-bold" to="/">
        🎬 MovieMart
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-3">
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Cart{" "}
              <span className="badge bg-light text-dark">{cartCount || 0}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
