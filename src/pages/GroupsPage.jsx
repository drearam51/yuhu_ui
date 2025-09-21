import React from "react";
import Accordion from "../components/Accordion";

export default function GroupsPage() {
  const groups = [
    {
      id: "g1",
      name: "San Benito — Colegio",
      color: "bg-yuhu-blue-400",
      sections: {
        resumen: [
          "Excursión confirmada",
          "Profesor indicó tarea de matemáticas",
          "120 mensajes hoy, 12 académicos",
        ],
        tareas: [
          "Matemáticas — pág 32 (Entrega 22 Sep)",
          "Ciencias — Proyecto Plantas (Entrega 25 Sep)",
          "Inglés — Lectura 'The Lost Key'",
        ],
        recordatorios: [
          "Tutoría mañana 8:00 AM (Aula 2)",
          "Pago excursión vence 30 Sep",
          "Reunión padres-profesores (confirmar asistencia)",
        ],
        enlaces: [
          "Documento de actividades (Drive)",
          "Formulario inscripción taller (Forms)",
          "Material de apoyo (PDF)",
        ],
        bibliografia: [
          "Guía de estudio Matemáticas (PDF)",
          "Video tutorial en YouTube",
          "Repositorio con actividades",
        ],
      },
    },
    {
      id: "g2",
      name: "Andes Tech — Universidad",
      color: "bg-yuhu-green-500",
      sections: {
        resumen: [
          "Mensajes con fechas clave (exámenes)",
          "Entregas destacadas últimas 24h",
          "Conversaciones marcadas como académicas",
        ],
        tareas: [
          "Programación — Sprint 3 (Entrega 24 Sep)",
          "Algoritmos — Problema #4 (Entrega 26 Sep)",
          "Proyecto de grupo — Reunión de avance",
        ],
        recordatorios: [
          "Sesión laboratorio (reservar equipo)",
          "Entrega parcial 30 Sep",
          "Inscripción optativa (cierra pronto)",
        ],
        enlaces: [
          "Canvas del curso",
          "Repositorio Git del profesor",
          "Slides de la clase",
        ],
        bibliografia: [
          "Paper recomendado (PDF)",
          "Libro — Capítulo 4",
          "Lecturas complementarias",
        ],
      },
    },
  ];

  return (
    <div className="space-y-6">
      {groups.map((g) => (
        <section
          key={g.id}
          className="p-4 bg-white rounded-xl shadow-card border border-gray-100"
        >
          {/* Encabezado del grupo */}
          <header className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">{g.name}</h3>
              <p className="text-xs text-gray-500">
                {g.id === "g1"
                  ? "2.345 mensajes • 3 tareas pendientes"
                  : "5.678 mensajes • 5 tareas pendientes"}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs text-white ${g.color}`}
            >
              Grupo
            </span>
          </header>

          {/* Acordeones */}
          <Accordion
            items={[
              {
                id: `${g.id}-resumen`,
                title: "Resumen del día",
                content: g.sections.resumen,
                count: g.sections.resumen.length,
              },
              {
                id: `${g.id}-tareas`,
                title: "Tareas relevantes",
                content: g.sections.tareas,
                count: g.sections.tareas.length,
              },
              {
                id: `${g.id}-recordatorios`,
                title: "Recordatorios",
                content: g.sections.recordatorios,
                count: g.sections.recordatorios.length,
              },
              {
                id: `${g.id}-enlaces`,
                title: "Enlaces relevantes",
                content: g.sections.enlaces,
                count: g.sections.enlaces.length,
              },
              {
                id: `${g.id}-bibliografia`,
                title: "Bibliografía de interés",
                content: g.sections.bibliografia,
                count: g.sections.bibliografia.length,
              },
            ]}
          />
        </section>
      ))}
    </div>
  );
}
