import { Box, Typography, useTheme } from "@mui/material";
import Accardion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title={t("faq.title")} subtitle={t("faq.subtitle")} />
      <Accardion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {t("faq.accordionSummary")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accardion>
      <Accardion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {t("faq.accordionSummary1")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accardion>
      <Accardion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {t("faq.accordionSummary2")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accardion>
      <Accardion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {t("faq.accordionSummary3")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accardion>
      <Accardion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {t("faq.accordionSummary4")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accardion>
    </Box>
  );
}
