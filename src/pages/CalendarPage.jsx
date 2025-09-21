import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Localización en español
const locales = {
  es: es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function CalendarPage() {
  // Datos dummy: tareas + recordatorios como eventos
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Matemáticas — pág 32 (San Benito)",
      start: new Date("2025-09-22T08:00:00"),
      end: new Date("2025-09-22T09:00:00"),
    },
    {
      id: 2,
      title: "Proyecto Plantas (San Benito)",
      start: new Date("2025-09-25T10:00:00"),
      end: new Date("2025-09-25T11:00:00"),
    },
    {
      id: 3,
      title: "Programación — Sprint 3 (Andes Tech)",
      start: new Date("2025-09-24T14:00:00"),
      end: new Date("2025-09-24T16:00:00"),
    },
    {
      id: 4,
      title: "Tutoría Aula 2 (Recordatorio)",
      start: new Date("2025-09-21T08:00:00"),
      end: new Date("2025-09-21T09:00:00"),
    },
    {
      id: 5,
      title: "Entrega parcial (Andes Tech)",
      start: new Date("2025-09-30T09:00:00"),
      end: new Date("2025-09-30T10:00:00"),
    },
  ]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-card border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Calendario</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{
          next: "Sig.",
          previous: "Ant.",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
        }}
      />
    </div>
  );
}
