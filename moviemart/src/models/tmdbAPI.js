import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies(page = 1) {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: page,
    },
  });
  return response.data; // We now return full response, not just results
}
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export async function fetchMovies({
  page = 1,
  genreId = null,
  sortBy = "popularity.desc",
}) {
  const params = {
    api_key: API_KEY,
    language: "en-US",
    page,
    sort_by: sortBy,
  };

  if (genreId) {
    params.with_genres = genreId;
  }

  const response = await axios.get(`${BASE_URL}/discover/movie`, { params });
  return response.data;
}

export async function fetchGenres() {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: { api_key: API_KEY, language: "en-US" },
  });
  return response.data.genres;
}
