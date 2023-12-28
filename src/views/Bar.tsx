import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import BarChart from "../components/BarChart";

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
