import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import PieChart from "../components/PieChart";

export default function Pie() {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                m: "20px",
            }}
        >
            <Header title={t("pie.title")} subtitle="" />
            <Box
                sx={{
                    height: "75vh",
                }}
            >
                <PieChart />
            </Box>
        </Box>
    );
}
