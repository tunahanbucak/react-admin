import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

export default function Invoices() {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: t("invoices.name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: t("invoices.phone"),
      flex: 1,
    },
    {
      field: "email",
      headerName: t("invoices.email"),
      flex: 1,
    },
    {
      field: "cost",
      headerName: t("invoices.cost"),
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>${params.value}</Typography>
      ),
    },
    {
      field: "date",
      headerName: t("invoices.date"),
      flex: 1,
    },
  ];

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("invoices.title")} subtitle={t("invoices.subtitle")} />
      <Box
        sx={{
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
          m: "40px 0 0 0",
          height: "75vh",
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          components={{
            Pagination: () => null,
          }}
        />
      </Box>
    </Box>
  );
}
