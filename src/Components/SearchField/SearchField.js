import { Box, TextField, useTheme, Button } from "@mui/material";
import React from "react";
import SearchIcon from "./SearchIconButton/SearchIcon";

const SearchField = ({ input, setInput, ready }) => {
  const theme = useTheme();
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.color.white100,
        border: `0.012rem solid ${theme.color.black30} `,
        borderRadius: "1rem",
        padding: "0.5rem",
        margin: "0 2rem 1rem",
        outline: "none",
        "& .MuiInputBase-root": {
          height: 20,
        },
        "&:hover": {
          backgroundColor: theme.color.white100,
          boxShadow: `0px 2px 2px ${theme.color.black30} `,
        },
      }}
    >
      <TextField
        onChange={handleChange}
        placeholder={""}
        value={input}
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          startAdornment: <SearchIcon />,
        }}
      />
      <Button variant="contained" onClick={() => ready(true)}>
        Search
      </Button>
    </Box>
  );
};

export default SearchField;
