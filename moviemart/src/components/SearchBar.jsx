import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <form
      className="d-flex justify-content-center mb-4"
      onSubmit={handleSearchSubmit}
    >
      <input
        type="text"
        className="form-control me-2"
        style={{ maxWidth: "400px" }}
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;
