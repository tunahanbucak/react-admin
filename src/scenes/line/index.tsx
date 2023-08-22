import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useTranslation } from "react-i18next";

export default function Line() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("line.title")} subtitle="" />
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
