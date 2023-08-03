import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

export default function Pie() {
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title="Pie chart" subtitle="" />
      <Box
        sx={{
          height: "75vh",
        }}
      >
        <PieChart />
      </Box>
    </Box>
  );
}
