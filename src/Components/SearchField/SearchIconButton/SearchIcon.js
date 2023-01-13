import { IconButton } from "@mui/material";
import React from "react";
import search from "../../../Assets/Icons/search/search.icon.svg";

function SearchIcon() {
  return (
    <IconButton
      sx={{
        padding: "0.5rem",
        cursor: "pointer",
      }}
    >
      <img width={"20px"} alt={"SearchIcon"} src={search} />
    </IconButton>
  );
}

export default SearchIcon;
