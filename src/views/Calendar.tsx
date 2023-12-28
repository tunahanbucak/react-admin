import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import CalendarComponent from "../components/CalendarComponent";

export default function Calendar() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("calendar.title")} subtitle={t("calendar.subtitle")} />
      <CalendarComponent />
    </Box>
  );
}
