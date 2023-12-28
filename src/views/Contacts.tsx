import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import ContactsInformation from "../components/ContactsInformation";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("contacts.title")} subtitle={t("contacts.subtitle")} />
      <ContactsInformation />
    </Box>
  );
}
