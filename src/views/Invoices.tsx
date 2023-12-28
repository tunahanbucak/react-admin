import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import InvoicesBalances from "../components/InvoicesBalances";
import Header from "../components/Header";

export default function Invoices() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("invoices.title")} subtitle={t("invoices.subtitle")} />
      <InvoicesBalances />
    </Box>
  );
}
