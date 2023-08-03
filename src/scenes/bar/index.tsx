import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Bar() {
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title="Bar chart" subtitle="" />
      <Box
        sx={{
          height: "75vh",
        }}
      >
        <BarChart />
      </Box>
    </Box>
  );
}
