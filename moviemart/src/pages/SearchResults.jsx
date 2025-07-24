import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../models/tmdbAPI";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

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
      <SearchBar />
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

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { searchMovies } from "../models/tmdbAPI";
// import MovieCard from "../components/MovieCard";
// import SearchBar from "../components/SearchBar";

// const SearchResults = ({ addToCart, genres, theme }) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("q");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const loadSearch = async () => {
//       if (!query) return;
//       try {
//         const data = await searchMovies({ query });
//         setResults(data.results || []);
//       } catch (err) {
//         console.error("Search failed:", err);
//       }
//     };
//     loadSearch();
//   }, [query]);

//   return (
//     <div className="container mt-5">
//       <SearchBar />
//       <h3 className="mb-4">Search Results for "{query}"</h3>

//       <div className="row">
//         {results.map((movie) => (
//           <div className="col-md-4 mb-4" key={movie.id}>
//             <MovieCard
//               movie={movie}
//               addToCart={addToCart}
//               genres={genres}
//               theme={theme}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;
