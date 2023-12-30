import { Box, Typography, useTheme } from '@mui/material'
import ProgressCircle from './ProgressCircle'
import BarChart from './BarChart'
import GeographyChart from './GeographyChart'
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme';

export default function Charts() {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box
                sx={{
                    gridColumn: "span 4",
                    gridRow: "span 2",
                    backgroundColor: colors.primary[400],
                    p: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    {t("dashboard.campaign")}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: "25px",
                    }}
                >
                    <ProgressCircle size={125} />
                    <Typography
                        variant="h5"
                        sx={{
                            mt: "15px",
                            color: colors.greenAccent[500],
                        }}
                    >
                        {t("dashboard.revenue")}
                    </Typography>
                    <Typography>{t("dashboard.extra")}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    gridColumn: "span 4",
                    gridRow: "span 2",
                    backgroundColor: colors.primary[400],
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        padding: "30px 30px 0 30px",
                        fontWeight: "600",
                    }}
                >
                    {t("dashboard.salesQuantity")}
                </Typography>
                <Box
                    sx={{
                        height: "250px",
                        mt: "-20px",
                    }}
                >
                    <BarChart isDashboard={true} />
                </Box>
            </Box>
            <Box
                sx={{
                    gridColumn: "span 4",
                    gridRow: "span 2",
                    backgroundColor: colors.primary[400],
                    padding: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        marginBottom: "15px",
                        fontWeight: "600",
                    }}
                >
                    {t("dashboard.basedTraffic")}
                </Typography>
                <Box
                    sx={{
                        height: "200px",
                    }}
                >
                    <GeographyChart isDashboard={true} />
                </Box>
            </Box>
        </>
    )
}
