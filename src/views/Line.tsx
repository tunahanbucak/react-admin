import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

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
