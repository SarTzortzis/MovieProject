import axios from "axios";

const apikey = "247de336";

export const getMovieById = (id) => {
  return axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`, {});
};

export const getMovieBySearch = (input, page) => {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${input}&page=${page}`,
    {}
  );
};

export const getTrendingMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=79aec70e22d87a0e78a99bea670485eb&language=en`,
    {}
  );
};
