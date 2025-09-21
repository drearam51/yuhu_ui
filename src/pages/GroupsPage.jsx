import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// --- Componente acordeón por grupo ---
function GroupAccordion({ group }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-gray-50 hover:bg-gray-100"
      >
        <span>{group.name}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="p-4 space-y-3">
          {group.sections &&
            Object.entries(group.sections).map(([key, items]) => (
              <div key={key} className="border rounded-lg p-2">
                <h4 className="font-medium text-sm capitalize mb-1">
                  {key.replace("_", " ")}
                </h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  {items.map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default function GroupsPage() {
  // --- Datos dummy de grupos ---
  const groups = [
    {
      id: "g1",
      name: "San Benito — Colegio",
      sections: {
        resumen: ["Excursión confirmada", "Tarea de matemáticas", "120 mensajes hoy"],
        tareas: ["Matemáticas pág 32", "Proyecto Plantas", "Lectura Inglés"],
        recordatorios: ["Tutoría mañana", "Pago excursión", "Reunión padres"],
        enlaces: ["Documento Drive", "Formulario Taller", "PDF Apoyo"],
        bibliografia: ["Guía Matemáticas", "Video YouTube", "Repositorio"],
      },
    },
    {
      id: "g2",
      name: "Externado Tech — Universidad",
      sections: {
        resumen: ["Examen próximo", "Entrega en 24h", "Chat académico"],
        tareas: ["Sprint 3", "Problema Algoritmos", "Proyecto Avance"],
        recordatorios: ["Laboratorio", "Entrega parcial", "Inscripción"],
        enlaces: ["Canvas", "Repositorio Git", "Slides"],
        bibliografia: ["Paper PDF", "Libro Cap 4", "Lecturas"],
      },
    },
  ];

  // --- Saludo dinámico según hora ---
  const [greeting, setGreeting] = useState("");
  const username = ""; // 👉 cámbialo luego por usuario real

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Buenos días 👋");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Buenas tardes 🌞");
    } else {
      setGreeting("Buenas noches 🌙");
    }
  }, []);

  // --- Resumen dinámico ---
  const totalTareas = groups.reduce((acc, g) => acc + g.sections.tareas.length, 0);
  const totalRecordatorios = groups.reduce(
    (acc, g) => acc + g.sections.recordatorios.length,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header dinámico */}
      <header className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-900 rounded-xl shadow-md p-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{greeting} {username}</h1>
          <p className="text-sm opacity-80">Tu asistente académico inteligente</p>
          <p className="mt-2 text-xs text-gray-700">
            📚 {totalTareas} tareas pendientes • ⏰ {totalRecordatorios} recordatorios activos
          </p>
        </div>
        <img
          src="/yuhu_logo.png"
          alt="YUHU Logo"
          className="w-12 h-12 rounded-full shadow bg-white p-1"
        />
      </header>

      {/* Lista de grupos en acordeones */}
      {groups.map((g) => (
        <GroupAccordion key={g.id} group={g} />
      ))}
    </div>
  );
}
