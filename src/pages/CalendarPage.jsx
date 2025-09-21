import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

export default function CalendarPage() {
  // 📌 Agenda completa: tareas + recordatorios
  const events = [
    // --- Grupo San Benito ---
    {
      id: "sb1",
      title: "Matemáticas — pág 32 (San Benito)",
      start: "2025-09-22T08:00:00",
      end: "2025-09-22T09:00:00",
      backgroundColor: "#3B82F6",
    },
    {
      id: "sb2",
      title: "Ciencias — Proyecto Plantas (San Benito)",
      start: "2025-09-25T10:00:00",
      end: "2025-09-25T11:00:00",
      backgroundColor: "#3B82F6",
    },
    {
      id: "sb3",
      title: "Inglés — 'The Lost Key' (San Benito)",
      start: "2025-09-27T08:00:00",
      end: "2025-09-27T09:00:00",
      backgroundColor: "#3B82F6",
    },
    {
      id: "sb4",
      title: "Tutoría Aula 2 (Recordatorio San Benito)",
      start: "2025-09-21T08:00:00",
      end: "2025-09-21T09:00:00",
      backgroundColor: "#60A5FA",
    },
    {
      id: "sb5",
      title: "Reunión padres-profesores",
      start: "2025-09-29T18:00:00",
      end: "2025-09-29T19:00:00",
      backgroundColor: "#2563EB",
    },

    // --- Grupo Andes Tech ---
    {
      id: "at1",
      title: "Programación — Sprint 3 (Andes Tech)",
      start: "2025-09-24T14:00:00",
      end: "2025-09-24T16:00:00",
      backgroundColor: "#10B981",
    },
    {
      id: "at2",
      title: "Algoritmos — Problema #4 (Andes Tech)",
      start: "2025-09-26T09:00:00",
      end: "2025-09-26T11:00:00",
      backgroundColor: "#10B981",
    },
    {
      id: "at3",
      title: "Proyecto de grupo — Avance (Andes Tech)",
      start: "2025-09-23T13:00:00",
      end: "2025-09-23T14:00:00",
      backgroundColor: "#34D399",
    },
    {
      id: "at4",
      title: "Sesión laboratorio (Recordatorio Andes Tech)",
      start: "2025-09-22T10:00:00",
      end: "2025-09-22T11:00:00",
      backgroundColor: "#059669",
    },
    {
      id: "at5",
      title: "Entrega parcial (Andes Tech)",
      start: "2025-09-30T09:00:00",
      end: "2025-09-30T10:00:00",
      backgroundColor: "#065F46",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-card">
      <h2 className="text-xl font-semibold mb-4">Calendario — Agenda Completa</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={esLocale}
        height={600} // altura fija
        contentHeight={500}
        dayMaxEventRows={3} // máximo 3 eventos visibles por día
        moreLinkContent={(args) => `+${args.num} más`} // texto del link "ver más"
        selectable={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  );
}
