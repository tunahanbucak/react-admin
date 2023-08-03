import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  increase: string;
  progress: number;
}
export default function StatBox({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        width: "100%",
        m: "0 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            sx={{
              color: colors.grey[100],
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "2px",
        }}
      >
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[600],
            fontStyle: "italic",
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
