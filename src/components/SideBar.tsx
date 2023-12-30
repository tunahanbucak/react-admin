import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useTranslation } from "react-i18next";
import { tokens } from "../theme";
interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
          background: selected === title ? colors.primary[400] : "transparent",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </NavLink>
  );
};

export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-sidebar-inner h3": {
          color: colors.grey[400],
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} backgroundColor="colors.grey[100]">
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            active={selected === "ADMINIS"}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[400],
              background:
                selected === "ADMINIS" ? colors.primary[400] : "transparent",
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ml: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {t("sideBar.adminis")}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    m: "10px 0 0 0",
                    fontWeight: "bold",
                    color: colors.grey[100],
                  }}
                >
                  Mark Zuckerberg
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[500],
                  }}
                >
                  {t("sideBar.admin")}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={t("sideBar.dashboard")}
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              sx={{
                m: "15px 0 5px 20px",
                color: colors.grey[300],
              }}
            >
              {t("sideBar.data")}
            </Typography>
            <Item
              title={t("sideBar.manageTeam")}
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.contactsInformation")}
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.invoicesBalances")}
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              sx={{
                m: "15px 0 5px 20px",
                color: colors.grey[300],
              }}
            >
              {t("sideBar.pages")}
            </Typography>
            <Item
              title={t("sideBar.profileForm")}
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.calendar")}
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.faqPage")}
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              sx={{
                m: "15px 0 5px 20px",
                color: colors.grey[300],
              }}
            >
              {t("sideBar.charts")}
            </Typography>
            <Item
              title={t("sideBar.barChart")}
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.pieChart")}
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.lineChart")}
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("sideBar.geographyChart")}
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
