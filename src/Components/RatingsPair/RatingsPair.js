import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function RatingsPair({ source, value }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "5px",
      }}
    >
      <Typography
        sx={{
          fontSize: "1rem",
          fontWeight: "600",
          marginRight: "5px",
        }}
        color={theme.color.textSecondary}
      >
        {value}
      </Typography>
      {source}
    </Box>
  );
}

export default RatingsPair;
