import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        sx={{
          height: "75vh",
          border: `1px solid ${colors.grey[100]}`,
          borderRadius: "4px",
        }}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
