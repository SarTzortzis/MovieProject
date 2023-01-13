import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function InfoPair({ pairKey, value }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
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
        color={theme.color.text}
      >
        {pairKey}:
      </Typography>
      {value}
    </Box>
  );
}

export default InfoPair;
