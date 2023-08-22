import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { useTranslation } from "react-i18next";

export default function Bar() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("bar.title")} subtitle="" />
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
