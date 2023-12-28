import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import ManageTeam from "../components/ManageTeam";

export default function Team() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Box>
        <Header title={t("team.title")} subtitle={t("team.subtitle")} />
      </Box>
      <ManageTeam />
    </Box>
  );
}
