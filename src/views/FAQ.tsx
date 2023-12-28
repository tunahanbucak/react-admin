import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Question from "../components/Question";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("faq.title")} subtitle={t("faq.subtitle")} />
      <Question />
    </Box>
  );
}
