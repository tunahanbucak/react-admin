import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface ProgressCircleProps {
  progress?: number;
  size?: number;
}
export default function ProgressCircle({
  progress = 0.75,
  size = 40,
}: ProgressCircleProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
