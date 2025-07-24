import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../models/tmdbAPI";
import MovieCard from "../components/MovieCard";

const SearchResults = ({ addToCart }) => {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q");

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setResults).catch(console.error);
    }
  }, [query]);

  return (
    <div className="container mt-5 pt-4">
      <h3 className="mb-4">Search Results for "{query}"</h3>
      <div className="row">
        {results.length > 0 ? (
          results.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.id}>
              <MovieCard movie={movie} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
