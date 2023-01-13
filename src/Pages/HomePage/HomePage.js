import React from "react";
import SearchField from "../../Components/SearchField/SearchField";
import {
  Box,
  Pagination,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ResultCard from "../../Components/ResultCard/ResultCard";
import Snap from "../../Assets/search/snap.png";
import Carousel from "../../Components/CustomCarousel/CustomCarousel";
import "./HomePage.css";

function HomePage({ inputSetter, ready, items, page, setPage, trending }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box
      sx={{
        margin: "5% 10%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {items == null && isDesktop && (
        <div className="typewriter">
          <h1>What are you watching today?</h1>
        </div>
      )}

      <SearchField setInput={inputSetter} ready={ready} />
      {items == null && trending != null && (
        <Box sx={{ width: "100%", marginTop: "5%" }}>
          <Carousel movies={trending} />
        </Box>
      )}
      {items && items.Response == "True" && (
        <>
          <Pagination
            sx={{ margin: "20px 0" }}
            count={
              items.totalResults % 10 == 0
                ? parseInt(items.totalResults / 10)
                : parseInt(items.totalResults / 10) + 1
            }
            page={page}
            onChange={handleChange}
            color="primary"
          />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {items?.Search.map((item, index) => (
              <Grid item xs={3} key={index}>
                <ResultCard item={item} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            sx={{ margin: "20px 0" }}
            count={
              items.totalResults % 10 == 0
                ? parseInt(items.totalResults / 10)
                : parseInt(items.totalResults / 10) + 1
            }
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </>
      )}
      {items && items.Response == "False" && (
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
    </Box>
  );
}

export default HomePage;
