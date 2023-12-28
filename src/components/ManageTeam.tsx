import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { useTranslation } from "react-i18next";
import { tokens } from "../theme";
import { mockDataTeam } from "../data/mockData";

export default function ManageTeam() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t } = useTranslation();
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "name",
            headerName: t("team.name"),
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: t("team.age"),
            type: "number",
            headerAlign: "left",
            align: "left",
            width: 120,
        },
        { field: "phone", headerName: t("team.phone"), flex: 1 },
        { field: "email", headerName: t("team.email"), flex: 1 },
        {
            field: "access",
            headerName: t("team.access"),
            flex: 1,
            renderCell: ({ row }) => {
                const { access } = row;
                return (
                    <Box
                        sx={{
                            width: "60%",
                            m: "0 auto",
                            p: "5px",
                            ml: 1,
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:
                                access === "admin"
                                    ? colors.greenAccent[600]
                                    : colors.greenAccent[700],
                            borderRadius: "4px",
                        }}
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];
    return (
        <Box
            sx={{
                m: "40px 0 0 0",
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}
        >
            <DataGrid
                checkboxSelection
                rows={mockDataTeam}
                columns={columns}
                components={{
                    Pagination: () => null,
                }}
            />
        </Box>
    )
}
