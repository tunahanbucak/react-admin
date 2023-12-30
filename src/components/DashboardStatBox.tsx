import { Box, useTheme } from '@mui/material'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic"; import StatBox from './StatBox'
import { useTranslation } from 'react-i18next';
import { tokens } from '../theme';

export default function DashboardStatBox() {
    const { t } = useTranslation();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box
                sx={{
                    gridColumn: "span 3",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <StatBox
                    title="12,361"
                    subtitle={t("dashboard.emailsSent")}
                    progress={0.75}
                    increase="+14%"
                    icon={
                        <EmailIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                sx={{
                    gridColumn: "span 3",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <StatBox
                    title="431,225"
                    subtitle={t("dashboard.salesObtained")}
                    progress={0.5}
                    increase="+21%"
                    icon={
                        <PointOfSaleIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                sx={{
                    gridColumn: "span 3",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <StatBox
                    title="32,441"
                    subtitle={t("dashboard.newClients")}
                    progress={0.3}
                    increase="+5%"
                    icon={
                        <PersonAddIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
            <Box
                sx={{
                    gridColumn: "span 3",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <StatBox
                    title="1,325,134"
                    subtitle={t("dashboard.trafficReceived")}
                    progress={0.8}
                    increase="+43%"
                    icon={
                        <TrafficIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>
        </>
    )
}
