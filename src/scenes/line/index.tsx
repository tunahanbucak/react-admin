import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

export default function Line() {
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title="Line chart" subtitle="" />
      <Box
        sx={{
          height: "75vh",
        }}
      >
        <LineChart />
      </Box>
    </Box>
  );
}
