import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { mockTransactions } from '../data/mockData'
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function RecentTransactions() {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            sx={{
                gridColumn: "span 4",
                gridRow: "span 2",
                backgroundColor: colors.primary[400],
                overflow: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `4px solid ${colors.primary[500]}`,
                    colors: colors.grey[100],
                    p: "15px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: colors.grey[100],
                        fontWeight: "600",
                    }}
                >
                    {t("dashboard.recentTransactions")}
                </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
                <Box
                    key={`${transaction.txId}-${i}`}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: `4px solid ${colors.primary[500]}`,
                        p: "15px",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "600",
                                color: colors.greenAccent[500],
                            }}
                        >
                            {transaction.txId}
                        </Typography>
                        <Typography
                            sx={{
                                color: colors.grey[100],
                            }}
                        >
                            {transaction.user}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            color: colors.grey[100],
                        }}
                    >
                        {transaction.date}
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: colors.greenAccent[500],
                            p: "5px 10px",
                            borderRadius: "4px",
                        }}
                    >
                        ${transaction.cost}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
