import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, addToCart }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="card h-100 shadow-sm d-flex flex-column">
      <img src={posterUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text text-muted">{movie.release_date}</p>
        </div>
        <div className="mt-3">
          <Link
            to={`/movie/${movie.id}`}
            className="btn btn-primary w-100 mb-2"
          >
            View Details
          </Link>
          {addToCart && (
            <button
              className="btn btn-outline-success w-100"
              onClick={() => addToCart(movie)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
