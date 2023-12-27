import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import ContactsInformation from "../../components/ContactsInformation";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("contacts.title")} subtitle={t("contacts.subtitle")} />
      {/* <Box
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          m: "40px 0 0 0",
          height: "75vh",
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
            Pagination: () => null,
          }}
        />
      </Box> */}
      <ContactsInformation />
    </Box>
  );
}
