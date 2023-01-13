import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import { getMovieBySearch, getTrendingMovies } from "../../Hooks/Calls";

function HomePageContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [inputReady, setInputReady] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (trendingMovies.length < 1) {
      getTrendingMovies().then((res) => {
        setTrendingMovies(res.data.results);
      });
    }
    if (mounted) {
      getMovieBySearch(searchInput, page)
        .then((res) => {
          setInputReady(false);

          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setMounted(true);
  }, [inputReady, page]);

  return (
    <HomePage
      inputSetter={setSearchInput}
      ready={setInputReady}
      items={result}
      page={page}
      setPage={setPage}
      trending={trendingMovies}
    />
  );
}

export default HomePageContainer;
