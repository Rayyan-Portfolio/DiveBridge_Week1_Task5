// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { Link } from "react-router-dom";

// // // // // // const Navbar = ({ cartCount, toggleTheme, theme }) => {
// // // // // //   const [visible, setVisible] = useState(true);
// // // // // //   const [lastScrollY, setLastScrollY] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const currentScrollY = window.scrollY;

// // // // // //       if (currentScrollY > lastScrollY && currentScrollY > 80) {
// // // // // //         setVisible(false);
// // // // // //       } else {
// // // // // //         setVisible(true);
// // // // // //       }

// // // // // //       setLastScrollY(currentScrollY);
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, [lastScrollY]);

// // // // // //   return (
// // // // // //     <nav
// // // // // //       className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top transition-navbar ${
// // // // // //         visible ? "visible" : "invisible"
// // // // // //       }`}
// // // // // //     >
// // // // // //       <Link className="navbar-brand fw-bold" to="/">
// // // // // //         🎬 MovieMart
// // // // // //       </Link>
// // // // // //       <button
// // // // // //         className="navbar-toggler"
// // // // // //         type="button"
// // // // // //         data-bs-toggle="collapse"
// // // // // //         data-bs-target="#navbarNav"
// // // // // //       >
// // // // // //         <span className="navbar-toggler-icon"></span>
// // // // // //       </button>

// // // // // //       <div className="collapse navbar-collapse" id="navbarNav">
// // // // // //         <ul className="navbar-nav ms-auto align-items-center">
// // // // // //           <li className="nav-item">
// // // // // //             <Link className="nav-link active" to="/">
// // // // // //               Home
// // // // // //             </Link>
// // // // // //           </li>
// // // // // //           <li className="nav-item me-2">
// // // // // //             <Link className="nav-link" to="/cart">
// // // // // //               🛒 Cart{" "}
// // // // // //               <span className="badge bg-light text-dark">{cartCount || 0}</span>
// // // // // //             </Link>
// // // // // //           </li>
// // // // // //           <li className="nav-item">
// // // // // //             <button
// // // // // //               className="btn btn-sm btn-outline-light"
// // // // // //               onClick={toggleTheme}
// // // // // //             >
// // // // // //               {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
// // // // // //             </button>
// // // // // //           </li>
// // // // // //         </ul>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Link, useNavigate } from "react-router-dom";

// // // // // const Navbar = ({ cartCount }) => {
// // // // //   const [visible, setVisible] = useState(true);
// // // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;
// // // // //       setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
// // // // //       setLastScrollY(currentScrollY);
// // // // //     };
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [lastScrollY]);

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (searchQuery.trim()) {
// // // // //       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
// // // // //       setSearchQuery(""); // clear input
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <nav
// // // // //       className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top transition-navbar ${
// // // // //         visible ? "visible" : "invisible"
// // // // //       }`}
// // // // //     >
// // // // //       <Link className="navbar-brand fw-bold" to="/">
// // // // //         🎬 MovieMart
// // // // //       </Link>
// // // // //       <div className="collapse navbar-collapse" id="navbarNav">
// // // // //         <ul className="navbar-nav ms-auto align-items-center">
// // // // //           <li className="nav-item me-3">
// // // // //             <form onSubmit={handleSubmit} className="d-flex">
// // // // //               <input
// // // // //                 className="form-control me-2"
// // // // //                 type="search"
// // // // //                 placeholder="Search"
// // // // //                 value={searchQuery}
// // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // //               />
// // // // //             </form>
// // // // //           </li>
// // // // //           <li className="nav-item">
// // // // //             <Link className="nav-link active" to="/">
// // // // //               Home
// // // // //             </Link>
// // // // //           </li>
// // // // //           <li className="nav-item">
// // // // //             <Link className="nav-link" to="/cart">
// // // // //               🛒 Cart{" "}
// // // // //               <span className="badge bg-light text-dark">{cartCount || 0}</span>
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = ({ cartCount, toggleTheme, theme }) => {
// //   const [visible, setVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
// //       setLastScrollY(currentScrollY);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (searchQuery.trim()) {
// //       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
// //       setSearchQuery("");
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top transition-navbar ${
// //         visible ? "visible" : "invisible"
// //       }`}
// //     >
// //       <Link className="navbar-brand fw-bold" to="/">
// //         🎬 MovieMart
// //       </Link>

// //       <button
// //         className="navbar-toggler"
// //         type="button"
// //         data-bs-toggle="collapse"
// //         data-bs-target="#navbarNav"
// //       >
// //         <span className="navbar-toggler-icon"></span>
// //       </button>

// //       <div className="collapse navbar-collapse" id="navbarNav">
// //         <ul className="navbar-nav ms-auto align-items-center">
// //           <li className="nav-item me-3">
// //             <form onSubmit={handleSubmit} className="d-flex">
// //               <input
// //                 className="form-control me-2"
// //                 type="search"
// //                 placeholder="Search"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //               />
// //             </form>
// //           </li>

// //           <li className="nav-item">
// //             <Link className="nav-link active" to="/">
// //               Home
// //             </Link>
// //           </li>

// //           <li className="nav-item me-2">
// //             <Link className="nav-link" to="/cart">
// //               🛒 Cart{" "}
// //               <span className="badge bg-light text-dark">{cartCount || 0}</span>
// //             </Link>
// //           </li>

// //           <li className="nav-item">
// //             <button
// //               className="btn btn-sm btn-outline-light"
// //               onClick={toggleTheme}
// //             >
// //               {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = ({ cartCount, toggleTheme, theme }) => {
// //   const [visible, setVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
// //       setLastScrollY(currentScrollY);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (searchQuery.trim()) {
// //       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
// //       setSearchQuery("");
// //     }
// //   };

// //   return (
// //     <nav
// //       className={`navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top transition-navbar ${
// //         visible ? "visible" : "invisible"
// //       }`}
// //     >
// //       <Link className="navbar-brand fw-bold" to="/">
// //         🎬 MovieMart
// //       </Link>

// //       <form
// //         className="d-flex ms-auto me-2"
// //         onSubmit={handleSubmit}
// //         style={{ maxWidth: "160px" }}
// //       >
// //         <input
// //           className="form-control form-control-sm"
// //           type="search"
// //           placeholder="Search"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //       </form>

// //       <button
// //         className="navbar-toggler ms-auto"
// //         type="button"
// //         data-bs-toggle="collapse"
// //         data-bs-target="#navbarNav"
// //       >
// //         <span className="navbar-toggler-icon"></span>
// //       </button>

// //       <div
// //         className="collapse navbar-collapse justify-content-end"
// //         id="navbarNav"
// //       >
// //         <ul className="navbar-nav align-items-center">
// //           {/* <li className="nav-item">
// //             <form onSubmit={handleSubmit} className="d-flex">
// //               <input
// //                 className="form-control form-control-sm"
// //                 type="search"
// //                 placeholder="Search"
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 style={{ width: "160px" }}
// //               />
// //             </form>
// //           </li> */}
// //           <li className="nav-item">
// //             <Link className="nav-link active" to="/">
// //               Home
// //             </Link>
// //           </li>

// //           <li className="nav-item me-2">
// //             <Link className="nav-link" to="/cart">
// //               🛒 Cart{" "}
// //               <span className="badge bg-light text-dark">{cartCount || 0}</span>
// //             </Link>
// //           </li>

// //           <li className="nav-item me-2">
// //             <button
// //               className="btn btn-sm btn-outline-light"
// //               onClick={toggleTheme}
// //             >
// //               {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ cartCount, toggleTheme, theme }) => {
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//     useEffect(() => {

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top transition-navbar ${
//         visible ? "visible" : "invisible"
//       }`}
//     >
//       {/* Left side: Logo + Search */}
//       <div className="d-flex align-items-center">
//         <Link className="navbar-brand fw-bold me-3" to="/">
//           🎬 MovieMart
//         </Link>
//       </div>

//       {/* Hamburger toggle (for mobile) */}
//       <button
//         className="navbar-toggler ms-auto"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       {/* Right side: collapsible menu */}
//       <div
//         className="collapse navbar-collapse justify-content-end"
//         id="navbarNav"
//       >
//         <ul className="navbar-nav align-items-center">
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

//           <li className="nav-item me-2">
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
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, toggleTheme, theme }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Auto-collapse hamburger menu on any link/button click inside menu
  useEffect(() => {
    const navbar = document.getElementById("navbarNav");

    const handleLinkClick = (e) => {
      const isLink = e.target.tagName === "A";
      const isButton = e.target.closest("button");

      if ((isLink || isButton) && navbar?.classList.contains("show")) {
        const bsCollapse = new window.bootstrap.Collapse(navbar, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    };

    navbar?.addEventListener("click", handleLinkClick);
    return () => navbar?.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top transition-navbar ${
        visible ? "visible" : "invisible"
      }`}
    >
      {/* Left side: Logo */}
      <div className="d-flex align-items-center">
        <Link className="navbar-brand fw-bold me-3" to="/">
          🎬 MovieMart
        </Link>
      </div>

      {/* Hamburger toggle (for mobile) */}
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Right side: collapsible menu */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item me-2">
            <Link className="nav-link" to="/cart">
              🛒 Cart{" "}
              <span className="badge bg-light text-dark">{cartCount || 0}</span>
            </Link>
          </li>

          <li className="nav-item me-2">
            <button
              className="btn btn-sm btn-outline-light"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
