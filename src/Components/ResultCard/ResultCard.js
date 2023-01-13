import React from "react";
import { Box, TextField, useTheme, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./ResultCard.css";
import NotAvailable from "../../Assets/movies/no-poster-available.jpg";

function ResultCard({ item }) {
  const theme = useTheme();
  return (
    <NavLink
      className={"result_card_navlink"}
      to={item.imdbID}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: `${theme.color.text}`,
        width: "fit-content",
        borderRadius: "10px",
        paddingBottom: "10px",
      }}
    >
      <img
        src={item.Poster != "N/A" ? item.Poster : NotAvailable}
        style={{
          display: "block",
          maxWidth: "200px",
          maxHeight: "330px",
          width: "auto",
          height: "auto",
          borderRadius: "10px 10px 0 0",
        }}
      />

      <Typography
        sx={{
          fontSize: ".9rem",
          fontWeight: "600",

          alignItems: "center",
          maxWidth: "200px",
        }}
        color={theme.color.text}
      >
        {item.Title}{" "}
        <Typography
          sx={{
            fontSize: ".8rem",
            fontWeight: "600",
          }}
          color={theme.color.textSecondary}
        >
          ({item.Year})
        </Typography>
      </Typography>
    </NavLink>
  );
}

export default ResultCard;
