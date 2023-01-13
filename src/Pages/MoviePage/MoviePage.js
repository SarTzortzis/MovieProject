import React from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../../Components/MovieCard/MovieCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Box } from "@mui/material";
import Snap from "../../Assets/search/snap.png";

function MoviePage({ movieData }) {
  console.log(movieData);
  return (
    <>
      <NavLink
        to={"/"}
        className="navLink_back"
        style={{
          color: "#2196f3",
          marginLeft: "20%",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          width: "fit-content",
        }}
      >
        <ArrowBackIosIcon fontSize="large" sx={{ marginTop: "20px" }} />
        <Typography sx={{ marginTop: "20px" }}>Home</Typography>
      </NavLink>
      {movieData.Response == "True" && <MovieCard movie={movieData} />}
      {movieData.Response == "False" && (
        <Box
          sx={{
            width: "100%",
            height: "50%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Oh Snap... Nothing Found</Typography>
          <img src={Snap} width="300px" />
        </Box>
      )}
    </>
  );
}

export default MoviePage;
