import React from "react";
import { Box, Typography, Chip, useTheme, useMediaQuery } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import InfoPair from "../InfoPair/InfoPair";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RatingsPair from "../RatingsPair/RatingsPair";

import "react-circular-progressbar/dist/styles.css";

function MovieCard({ movie }) {
  const genres = movie.Genre.split(",");

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.color.white100,
          display: "flex",
          flexDirection: "row",
          width: isDesktop ? "60%" : "80%",
          margin: isDesktop ? "5% 0 0 20%" : "5% 0 0 10%",
          borderRadius: "10px",
          padding: "0",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        {isDesktop && (
          <Box
            sx={{
              backgroundColor: "",
            }}
          >
            <img src={movie.Poster} style={{ borderRadius: "10px 0 0 10px" }} />
          </Box>
        )}

        <Box
          sx={{
            marginLeft: "10px",
            width: "100%",
            padding: "10px",
          }}
        >
          {/******************************************************************  Box Header ****************************************************/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
                color={theme.color.text}
              >
                {movie.Title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginLeft: "10px",
                }}
                color={theme.color.textSecondary}
              >
                ({movie.Year})
              </Typography>
            </Box>
            <div style={{ width: 50, height: 50 }}>
              <CircularProgressbar
                background
                width="50px"
                duration={1.4}
                value={(movie.imdbRating * 10).toFixed(0)}
                maxValue="100"
                text={`${(movie.imdbRating * 10).toFixed(0)}%`}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${movie.imdbRating / 10})`,
                  pathTransitionDuration: 2,
                  textColor: "white",
                  textSize: "22px",
                  backgroundColor: "#333",
                  trailColor: `${theme.color.secondary}`,
                  pathColor: `#2196f3`,
                })}
              />
            </div>
          </Box>
          {/*****************************************************************************************************************************************/}
          {/******************************************************************  Movie Genres ****************************************************/}
          <Box sx={{ width: "100%", display: "flex" }}>
            {genres.map((item) => (
              <Chip label={item} color="primary" sx={{ marginLeft: "5px" }} />
            ))}
          </Box>
          {/*****************************************************************************************************************************************/}
          {/******************************************************************  Movie Plot ****************************************************/}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              marginTop: "15px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
              color={theme.color.text}
            >
              {movie.Plot}
            </Typography>
          </Box>
          {/*****************************************************************************************************************************************/}
          {/******************************************************************  Movie Info ****************************************************/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "15px",
            }}
          >
            <InfoPair pairKey={"Writter"} value={movie.Writer} />
            <InfoPair pairKey={"Director"} value={movie.Director} />
            <InfoPair pairKey={"Runtime"} value={movie.Runtime} />
          </Box>
          {/*****************************************************************************************************************************************/}
          {/******************************************************************  Movie Info ****************************************************/}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              marginTop: "20px",
            }}
          >
            {movie.Ratings.map((item, index) => (
              <RatingsPair source={item.Source} value={item.Value} />
            ))}
          </Box>
          {/*****************************************************************************************************************************************/}
          {/******************************************************************  Movie Info ****************************************************/}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <InfoPair pairKey={"Actors"} value={movie.Actors} />
          </Box>
          {/*****************************************************************************************************************************************/}
        </Box>
      </Box>
    </>
  );
}

export default MovieCard;
