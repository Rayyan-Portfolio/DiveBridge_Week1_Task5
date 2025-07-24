// // // import React, { useEffect, useState } from "react";
// // // import { fetchPopularMovies } from "../models/tmdbAPI";
// // // import MovieCard from "../components/MovieCard";

// // // const Home = ({ addToCart }) => {
// // //   const [movies, setMovies] = useState([]);

// // //   useEffect(() => {
// // //     fetchPopularMovies()
// // //       .then(setMovies)
// // //       .catch((err) => console.error("Failed to fetch movies:", err));
// // //   }, []);

// // //   return (
// // //     <div className="container mt-5">
// // //       <h2 className="text-center mb-4 fs-4 fs-md-3 fs-lg-2">
// // //         🎬 Popular Movies on <br className="d-md-none" /> MovieMart
// // //       </h2>
// // //       <div className="row">
// // //         {movies.map((movie) => (
// // //           <div className="col-md-4 mb-4" key={movie.id}>
// // //             <MovieCard movie={movie} addToCart={addToCart} />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState } from "react";
// // import { fetchPopularMovies } from "../models/tmdbAPI";
// // import MovieCard from "../components/MovieCard";

// // const Home = ({ addToCart }) => {
// //   const [movies, setMovies] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [hasMore, setHasMore] = useState(true);
// //   const [loading, setLoading] = useState(false); // ⬅️ Spinner control

// //   useEffect(() => {
// //     loadMovies();
// //     // eslint-disable-next-line
// //   }, []);

// //   const loadMovies = () => {
// //     setLoading(true);
// //     fetchPopularMovies(page)
// //       .then((newMovies) => {
// //         if (newMovies.length === 0) {
// //           setHasMore(false);
// //         } else {
// //           setMovies((prev) => [...prev, ...newMovies]);
// //           setPage((prev) => prev + 1);
// //         }
// //       })
// //       .catch(console.error)
// //       .finally(() => setLoading(false)); // ⬅️ Stop spinner
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h2 className="text-center mb-4">🎬 Popular Movies on MovieMart</h2>
// //       <div className="row">
// //         {movies.map((movie) => (
// //           <div className="col-md-4 mb-4" key={movie.id}>
// //             <MovieCard movie={movie} addToCart={addToCart} />
// //           </div>
// //         ))}
// //       </div>

// //       {hasMore && (
// //         <div className="text-center mb-5">
// //           {loading ? (
// //             <div className="spinner-border text-primary" role="status">
// //               <span className="visually-hidden">Loading...</span>
// //             </div>
// //           ) : (
// //             <button className="btn btn-outline-primary" onClick={loadMovies}>
// //               Load More Movies
// //             </button>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState } from "react";
// import { fetchPopularMovies } from "../models/tmdbAPI";
// import MovieCard from "../components/MovieCard";

// const Home = ({ addToCart }) => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   //  const [totalPages, setTotalPages] = useState(null);

//   useEffect(() => {
//     loadMovies(page);
//   }, []);

//   const loadMovies = async (pageNum) => {
//     setLoading(true);
//     try {
//       const data = await fetchPopularMovies(pageNum);
//       setMovies((prev) => [...prev, ...data.results]);
//       //  setTotalPages(data.total_pages);
//       if (pageNum >= data.total_pages) {
//         setHasMore(false);
//       } else {
//         setPage(pageNum + 1);
//       }
//     } catch (error) {
//       console.error("Error loading movies:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">🎬 Popular Movies on MovieMart</h2>
//       <div className="row">
//         {movies.map((movie) => (
//           <div className="col-md-4 mb-4" key={movie.id}>
//             <MovieCard movie={movie} addToCart={addToCart} />
//           </div>
//         ))}
//       </div>

//       <div className="text-center my-4">
//         {loading ? (
//           <div className="spinner-border text-primary" role="status" />
//         ) : hasMore ? (
//           <button
//             className="btn btn-outline-primary"
//             onClick={() => loadMovies(page)}
//           >
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
import { fetchPopularMovies } from "../models/tmdbAPI";
import MovieCard from "../components/MovieCard";

const Home = ({ addToCart }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]); // ✅ Include page to respond to page changes

  const loadMovies = async (pageNum) => {
    setLoading(true);
    try {
      const data = await fetchPopularMovies(pageNum);
      if (data && data.results) {
        setMovies((prev) => [...prev, ...data.results]);
        if (pageNum >= data.total_pages) {
          setHasMore(false);
        }
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
      setPage((prevPage) => prevPage + 1); // ✅ Triggers useEffect
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎬 Popular Movies on MovieMart</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <MovieCard movie={movie} addToCart={addToCart} />
          </div>
        ))}
      </div>

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
