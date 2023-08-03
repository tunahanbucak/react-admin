import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}
export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);

  const handleDateClick = (info: { dateStr: string }) => {
    const title = prompt("Please enter a new title for your event");
    if (title) {
      const newEvent: Event = {
        id: `${info.dateStr}-${title}`,
        title,
        start: info.dateStr,
        end: info.dateStr,
        allDay: true,
      };
      setCurrentEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const handleEventClick = (info: { event: EventApi }) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${info.event.title}'`
      )
    ) {
      setCurrentEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== info.event.id)
      );
      info.event.remove();
    }
  };

  return (
    <Box
      sx={{
        m: "20px",
      }}
    >
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={<Typography>{event.start}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            flex: "1 1 100%",
            ml: "15px",
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}
          />
        </Box>
      </Box>
    </Box>
  );
}
