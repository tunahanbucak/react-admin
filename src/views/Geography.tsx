import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "../theme";
import Header from "../components/Header";
import GeographyChart from "../components/GeographyChart";

export default function Geography() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                m: "20px",
            }}
        >
            <Header title={t("geography.title")} subtitle={t("geography.subtitle")} />
            <Box
                sx={{
                    height: "75vh",
                    border: `1px solid ${colors.grey[100]}`,
                    borderRadius: "4px",
                }}
            >
                <GeographyChart />
            </Box>
        </Box>
    );
}
