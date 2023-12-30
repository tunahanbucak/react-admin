import { useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Theme,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";

const languages = [
  { code: "en", label: "English", flag: "en" },
  { code: "tr", label: "Türkçe", flag: "tr" },
];
export default function TopBar() {
  const { i18n } = useTranslation();
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControl>
          <Select
            value={i18n.language}
            onChange={handleLanguageChange}
            label="Language"
          >
            {languages.map((lang) => (
              <MenuItem key={lang.code} value={lang.code}>
                <img
                  src={`./assets/flags/${lang.flag}.png`}
                  alt={lang.label}
                  style={{ width: "22px", marginRight: "8px" }}
                />
                {lang.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
