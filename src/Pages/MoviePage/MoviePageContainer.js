import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../Hooks/Calls";
import Loader from "../../Components/Loader/Loader";
import MoviePage from "./MoviePage";

function MoviePageContainer() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    getMovieById(movieId)
      .then((res) => {
        setMovie(res.data);
        setHasLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);
  return <> {hasLoaded ? <MoviePage movieData={movie} /> : <Loader />}</>;
}

export default MoviePageContainer;
