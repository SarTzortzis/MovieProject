import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Loader from "./Components/Loader/Loader";
import ThemeConfig from "./configs/ThemeConfig.json";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const HomePageContainer = lazy(() =>
  import("./Pages/HomePage/HomePageContainer.js")
);
const MoviePageContainer = lazy(() =>
  import("./Pages/MoviePage/MoviePageContainer.js")
);
function App() {
  const theme = createTheme(ThemeConfig);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route index path="/" element={<HomePageContainer />} />
              <Route index path="/:movieId" element={<MoviePageContainer />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
