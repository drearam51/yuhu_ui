import React, { useState } from "react";

export default function RemindersPage() {
  // Datos dummy combinados
  const [reminders, setReminders] = useState([
    {
      id: 1,
      text: "Tutoría mañana 8:00 AM (Aula 2)",
      group: "San Benito",
      date: "2025-09-21 08:00",
      channel: "App",
      active: true,
    },
    {
      id: 2,
      text: "Pago excursión vence 30 Sep",
      group: "San Benito",
      date: "2025-09-30",
      channel: "WhatsApp",
      active: true,
    },
    {
      id: 3,
      text: "Sesión laboratorio (reservar equipo)",
      group: "Andes Tech",
      date: "2025-09-22 10:00",
      channel: "Email",
      active: false,
    },
    {
      id: 4,
      text: "Entrega parcial 30 Sep",
      group: "Andes Tech",
      date: "2025-09-30",
      channel: "App",
      active: true,
    },
  ]);

  const toggleReminder = (id) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, active: !r.active } : r
      )
    );
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recordatorios</h2>
        <div className="text-sm text-gray-500">
          Activos: {reminders.filter((r) => r.active).length} / {reminders.length}
        </div>
      </header>

      <div className="space-y-3">
        {reminders.map((r) => (
          <div
            key={r.id}
            className="p-4 bg-white rounded-xl shadow-card border border-gray-100 flex justify-between items-center"
          >
            <div>
              <div
                className={`font-medium ${
                  !r.active ? "line-through text-gray-400" : ""
                }`}
              >
                {r.text}
              </div>
              <div className="text-xs text-gray-500">
                {r.group} • {r.date} • Canal: {r.channel}
              </div>
            </div>
            <div>
              <button
                onClick={() => toggleReminder(r.id)}
                className={`px-3 py-1 rounded-md text-sm ${
                  r.active
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {r.active ? "Desactivar" : "Activar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
