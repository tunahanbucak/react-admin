import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useTranslation } from "react-i18next";

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
      </Box>
    </Box>
  );
}
