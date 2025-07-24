import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ theme }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = Math.round((scrollTop / docHeight) * 100);
    setProgress(scrolled);
    setVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div
      className={`scroll-progress ${visible ? "show" : ""} ${
        theme === "dark" ? "dark" : "light"
      }`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <svg className="progress-ring" width="60" height="60">
        <circle
          className="ring-bg"
          stroke="#ccc"
          strokeWidth="6"
          fill="transparent"
          r="26"
          cx="30"
          cy="30"
        />
        <circle
          className="ring-fill"
          stroke="#007bff"
          strokeWidth="6"
          fill="transparent"
          r="26"
          cx="30"
          cy="30"
          strokeDasharray={2 * Math.PI * 26}
          strokeDashoffset={2 * Math.PI * 26 * (1 - progress / 100)}
        />
      </svg>
      <span className="arrow-icon">
        <FaArrowUp />
      </span>
    </div>
  );
};

export default ScrollToTopButton;
