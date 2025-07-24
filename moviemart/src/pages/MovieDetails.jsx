import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      })
      .then((res) => setMovie(res.data))
      .catch(console.error);
  }, [id]);

  if (!movie) return <div className="container mt-5">Loading...</div>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={posterUrl}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{movie.title}</h2>
          <p className="text-muted">{movie.release_date}</p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p>{movie.overview}</p>
          <button
            className="btn btn-success"
            onClick={() =>
              addToCart({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                price: 9.99,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
