// // // import React, { useEffect, useState } from "react";
// // // import { fetchPopularMovies } from "../models/tmdbAPI";
// // // import MovieCard from "../components/MovieCard";

// // // const Home = ({ addToCart }) => {
// // //   const [movies, setMovies] = useState([]);
// // //   const [page, setPage] = useState(1);
// // //   const [loading, setLoading] = useState(false);
// // //   const [hasMore, setHasMore] = useState(true);

// // //   useEffect(() => {
// // //     loadMovies(page);
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [page]); // ✅ Include page to respond to page changes

// // //   const loadMovies = async (pageNum) => {
// // //     setLoading(true);
// // //     try {
// // //       const data = await fetchPopularMovies(pageNum);
// // //       if (data && data.results) {
// // //         setMovies((prev) => [...prev, ...data.results]);
// // //         if (pageNum >= data.total_pages) {
// // //           setHasMore(false);
// // //         }
// // //       } else {
// // //         setHasMore(false);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error loading movies:", error);
// // //       setHasMore(false);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleLoadMore = () => {
// // //     if (hasMore && !loading) {
// // //       setPage((prevPage) => prevPage + 1); // ✅ Triggers useEffect
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-5">
// // //       <h2 className="text-center mb-4">🎬 Popular Movies on MovieMart</h2>
// // //       <div className="row">
// // //         {movies.map((movie) => (
// // //           <div className="col-md-4 mb-4" key={movie.id}>
// // //             <MovieCard movie={movie} addToCart={addToCart} />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="text-center my-4">
// // //         {loading ? (
// // //           <div className="spinner-border text-primary" role="status" />
// // //         ) : hasMore ? (
// // //           <button className="btn btn-outline-primary" onClick={handleLoadMore}>
// // //             Load More Movies
// // //           </button>
// // //         ) : (
// // //           <p className="text-muted">🚫 No more movies to load.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState } from "react";
// // import { fetchMovies, fetchGenres } from "../models/tmdbAPI";
// // import MovieCard from "../components/MovieCard";

// // const Home = ({ addToCart }) => {
// //   const [movies, setMovies] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [loading, setLoading] = useState(false);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [genres, setGenres] = useState([]);
// //   const [selectedGenre, setSelectedGenre] = useState("");
// //   const [sortBy, setSortBy] = useState("popularity.desc");

// //   useEffect(() => {
// //     fetchGenres().then(setGenres);
// //     loadMovies(1, true);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   const loadMovies = async (pageNum, reset = false) => {
// //     setLoading(true);
// //     try {
// //       const data = await fetchMovies({
// //         page: pageNum,
// //         genreId: selectedGenre,
// //         sortBy,
// //       });
// //       if (data && data.results) {
// //         if (reset) {
// //           setMovies(data.results);
// //         } else {
// //           setMovies((prev) => [...prev, ...data.results]);
// //         }
// //         setHasMore(pageNum < data.total_pages);
// //         setPage(pageNum + 1);
// //       } else {
// //         setHasMore(false);
// //       }
// //     } catch (error) {
// //       console.error("Error loading movies:", error);
// //       setHasMore(false);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleGenreChange = (e) => {
// //     setSelectedGenre(e.target.value);
// //     setPage(1);
// //     loadMovies(1, true);
// //   };

// //   const handleSortChange = (e) => {
// //     setSortBy(e.target.value);
// //     setPage(1);
// //     loadMovies(1, true);
// //   };

// //   const handleLoadMore = () => {
// //     if (hasMore && !loading) {
// //       loadMovies(page);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
// //         <h2 className="mb-3 mb-md-0">🎬 Popular Movies on MovieMart</h2>
// //         <div className="d-flex gap-2 flex-wrap">
// //           <select
// //             className="form-select"
// //             value={selectedGenre}
// //             onChange={handleGenreChange}
// //           >
// //             <option value="">All Genres</option>
// //             {genres.map((g) => (
// //               <option key={g.id} value={g.id}>
// //                 {g.name}
// //               </option>
// //             ))}
// //           </select>
// //           <select
// //             className="form-select"
// //             value={sortBy}
// //             onChange={handleSortChange}
// //           >
// //             <option value="popularity.desc">Popularity ↓</option>
// //             <option value="popularity.asc">Popularity ↑</option>
// //             <option value="vote_average.desc">Rating ↓</option>
// //             <option value="release_date.desc">Release Date ↓</option>
// //           </select>
// //         </div>
// //       </div>

// //       <div className="row">
// //         {movies.map((movie) => (
// //           <div className="col-md-4 mb-4" key={movie.id}>
// //             <MovieCard movie={movie} addToCart={addToCart} />
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center my-4">
// //         {loading ? (
// //           <div className="spinner-border text-primary" role="status" />
// //         ) : hasMore ? (
// //           <button className="btn btn-outline-primary" onClick={handleLoadMore}>
// //             Load More Movies
// //           </button>
// //         ) : (
// //           <p className="text-muted">🚫 No more movies to load.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React, { useEffect, useState } from "react";
// // import { fetchMovies, fetchGenres } from "../models/tmdbAPI";
// // import MovieCard from "../components/MovieCard";

// // const Home = ({ addToCart }) => {
// //   const [movies, setMovies] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [loading, setLoading] = useState(false);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [genres, setGenres] = useState([]);
// //   const [selectedGenre, setSelectedGenre] = useState("");
// //   const [sortOption, setSortOption] = useState("popularity.desc");

// //   useEffect(() => {
// //     fetchGenres().then(setGenres);
// //     loadMovies(1, true);
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [sortOption, selectedGenre]);

// //   const loadMovies = async (pageNum, reset = false) => {
// //     setLoading(true);
// //     try {
// //       const data = await fetchMovies({
// //         page: pageNum,
// //         genreId: selectedGenre,
// //         sortBy: sortOption,
// //       });
// //       if (data && data.results) {
// //         setMovies((prev) =>
// //           reset ? data.results : [...prev, ...data.results]
// //         );
// //         if (pageNum >= data.total_pages) {
// //           setHasMore(false);
// //         } else {
// //           setHasMore(true);
// //         }
// //         setPage(pageNum + 1);
// //       } else {
// //         setHasMore(false);
// //       }
// //     } catch (error) {
// //       console.error("Error loading movies:", error);
// //       setHasMore(false);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleLoadMore = () => {
// //     if (hasMore && !loading) {
// //       loadMovies(page);
// //     }
// //   };

// //   const handleGenreChange = (e) => {
// //     setSelectedGenre(e.target.value);
// //     setPage(1);
// //     loadMovies(1, true);
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
// //         <h2 className="mb-3 mb-md-0">🎬 Popular Movies on MovieMart</h2>
// //         <div className="d-flex gap-2 flex-wrap">
// //           <select
// //             className="form-select"
// //             value={selectedGenre}
// //             onChange={handleGenreChange}
// //           >
// //             <option value="">All Genres</option>
// //             {genres.map((g) => (
// //               <option key={g.id} value={g.id}>
// //                 {g.name}
// //               </option>
// //             ))}
// //           </select>
// //           <select
// //             className="form-select"
// //             value={sortOption}
// //             onChange={(e) => setSortOption(e.target.value)}
// //           >
// //             <option value="popularity.desc">🔥 Popularity</option>
// //             <option value="vote_average.desc">⭐ Rating (High to Low)</option>
// //             <option value="release_date.desc">🆕 Release Date (Newest)</option>
// //           </select>
// //         </div>
// //       </div>

// //       <div className="row">
// //         {movies.map((movie) => (
// //           <div className="col-md-4 mb-4" key={movie.id}>
// //             <MovieCard
// //               movie={movie}
// //               addToCart={addToCart}
// //               genres={genres}
// //               theme={theme}
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       <div className="text-center my-4">
// //         {loading ? (
// //           <div className="spinner-border text-primary" role="status" />
// //         ) : hasMore ? (
// //           <button className="btn btn-outline-primary" onClick={handleLoadMore}>
// //             Load More Movies
// //           </button>
// //         ) : (
// //           <p className="text-muted">🚫 No more movies to load.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from "react";
// import { fetchMovies, fetchGenres } from "../models/tmdbAPI";
// import MovieCard from "../components/MovieCard";

// const Home = ({ addToCart, theme }) => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [sortOption, setSortOption] = useState("popularity.desc");

//   useEffect(() => {
//     fetchGenres().then(setGenres);
//     loadMovies(1, true);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [sortOption, selectedGenre]);

//   const loadMovies = async (pageNum, reset = false) => {
//     setLoading(true);
//     try {
//       const data = await fetchMovies({
//         page: pageNum,
//         genreId: selectedGenre,
//         sortBy: sortOption,
//       });
//       if (data && data.results) {
//         setMovies((prev) =>
//           reset ? data.results : [...prev, ...data.results]
//         );
//         setHasMore(pageNum < data.total_pages);
//         setPage(pageNum + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error("Error loading movies:", error);
//       setHasMore(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadMore = () => {
//     if (hasMore && !loading) {
//       loadMovies(page);
//     }
//   };

//   const handleGenreChange = (e) => {
//     setSelectedGenre(e.target.value);
//     setPage(1);
//     loadMovies(1, true);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//         <h2 className="mb-3 mb-md-0">🎬 Popular Movies on MovieMart</h2>
//         <div className="d-flex gap-2 flex-wrap">
//           <select
//             className="form-select"
//             value={selectedGenre}
//             onChange={handleGenreChange}
//           >
//             <option value="">All Genres</option>
//             {genres.map((g) => (
//               <option key={g.id} value={g.id}>
//                 {g.name}
//               </option>
//             ))}
//           </select>
//           <select
//             className="form-select"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="popularity.desc">🔥 Popularity</option>
//             <option value="vote_average.desc">⭐ Rating (High to Low)</option>
//             <option value="release_date.desc">🆕 Release Date (Newest)</option>
//           </select>
//         </div>
//       </div>

//       <div className="row">
//         {movies.map((movie) => (
//           <div className="col-md-4 mb-4" key={movie.id}>
//             {/* <MovieCard
//               movie={movie}
//               addToCart={addToCart}
//               genres={genres}
//               theme={theme} // ✅ Passed here correctly
//             /> */}
//             <MovieCard
//               key={`${movie.id}-${theme}`} // 👈 This ensures re-render when theme changes
//               movie={movie}
//               addToCart={addToCart}
//               genres={genres}
//               theme={theme}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="text-center my-4">
//         {loading ? (
//           <div className="spinner-border text-primary" role="status" />
//         ) : hasMore ? (
//           <button className="btn btn-outline-primary" onClick={handleLoadMore}>
//             Load More Movies
//           </button>
//         ) : (
//           <p className="text-muted">🚫 No more movies to load.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { fetchMovies, fetchGenres } from "../models/tmdbAPI";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
//import { useNavigate } from "react-router-dom";

const Home = ({ addToCart, theme }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOption, setSortOption] = useState("popularity.desc");

  // const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    fetchGenres().then(setGenres);
    loadMovies(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOption, selectedGenre]);

  const loadMovies = async (pageNum, reset = false) => {
    setLoading(true);
    try {
      const data = await fetchMovies({
        page: pageNum,
        genreId: selectedGenre,
        sortBy: sortOption,
      });
      if (data && data.results) {
        setMovies((prev) =>
          reset ? data.results : [...prev, ...data.results]
        );
        setHasMore(pageNum < data.total_pages);
        setPage(pageNum + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading movies:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      loadMovies(page);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setPage(1);
    loadMovies(1, true);
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  //     setSearchQuery("");
  //   }
  // };

  return (
    <div className="container mt-5">
      {/* 🔍 Search bar at top of page */}
      {/* <form
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
      </form> */}
      <SearchBar />

      {/* 🎬 Filters & Heading */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <h2 className="mb-3 mb-md-0">🎬 Popular Movies on MovieMart</h2>
        <div className="d-flex gap-2 flex-wrap">
          <select
            className="form-select"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="popularity.desc">🔥 Popularity</option>
            <option value="vote_average.desc">⭐ Rating (High to Low)</option>
            <option value="release_date.desc">🆕 Release Date (Newest)</option>
          </select>
        </div>
      </div>

      {/* 🎥 Movie cards */}
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <MovieCard
              key={`${movie.id}-${theme}`} // Re-render on theme change
              movie={movie}
              addToCart={addToCart}
              genres={genres}
              theme={theme}
            />
          </div>
        ))}
      </div>

      {/* 🔄 Load more or status */}
      <div className="text-center my-4">
        {loading ? (
          <div className="spinner-border text-primary" role="status" />
        ) : hasMore ? (
          <button className="btn btn-outline-primary" onClick={handleLoadMore}>
            Load More Movies
          </button>
        ) : (
          <p className="text-muted">🚫 No more movies to load.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
