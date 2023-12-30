import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { useTranslation } from "react-i18next";
import { tokens } from "../theme";
import Header from "../components/Header";
import DashboardStatBox from "../components/DashboardStatBox";
import RevenueGenerated from "../components/RevenueGenerated";
import RecentTransactions from "../components/RecentTransactions";
import Charts from "../components/Charts";

export default function Dashboard() {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                m: "20px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Header
                    title={t("dashboard.title")}
                    subtitle={t("dashboard.subtitle")}
                />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        {t("dashboard.downloadReport")}
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    gridAutoRows: "140px",
                    gap: "20px",
                }}
            >
                <DashboardStatBox />
                <RevenueGenerated />
                <RecentTransactions />
                <Charts />
            </Box>
        </Box>
    );
}
