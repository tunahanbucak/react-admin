import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Contacts from "./views/Contacts";
import Form from "./views/Form";
import FAQ from "./views/FAQ";
import Bar from "./views/Bar";
import Pie from "./views/Pie";
import Line from "./views/Line";
import Geography from "./views/Geography";
import Calendar from "./views/Calendar";
import Team from "./views/Team";
import Invoices from "./views/Invoices";
import Layout from "./components/Layout";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
