import { Box, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic"; import StatBox from './StatBox'
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from './LineChart';

export default function RevenueGenerated() {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                gridColumn: "span 8",
                gridRow: "span 2",
                backgroundColor: colors.primary[400],
            }}
        >
            <Box
                sx={{
                    mt: "25px",
                    p: "0 30px",
                    display: "flex ",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "600",
                            color: colors.grey[100],
                        }}
                    >
                        {t("dashboard.revenueGenerated")}{" "}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            color: colors.greenAccent[500],
                        }}
                    >
                        $59,342.32
                    </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <DownloadOutlinedIcon
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                        />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    height: "250px",
                    m: "-20px 0 0 0",
                }}
            >
                <LineChart isDashboard={true} />
            </Box>
        </Box>
    )
}
