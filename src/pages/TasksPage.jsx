import React, { useState } from "react";

export default function TasksPage() {
  // Datos dummy combinados de San Benito y Andes Tech
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Matemáticas — pág 32",
      group: "San Benito",
      due: "2025-09-22",
      status: "pending",
    },
    {
      id: 2,
      title: "Ciencias — Proyecto Plantas",
      group: "San Benito",
      due: "2025-09-25",
      status: "pending",
    },
    {
      id: 3,
      title: "Programación — Sprint 3",
      group: "Andes Tech",
      due: "2025-09-24",
      status: "in-progress",
    },
    {
      id: 4,
      title: "Algoritmos — Problema #4",
      group: "Andes Tech",
      due: "2025-09-26",
      status: "pending",
    },
  ]);

  // Acción para marcar como completada
  const completeTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "completed" } : t))
    );
  };

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tareas del día</h2>
        <div className="text-sm text-gray-500">
          Total: {tasks.length} | Pendientes:{" "}
          {tasks.filter((t) => t.status !== "completed").length}
        </div>
      </header>

      <div className="space-y-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="p-4 bg-white rounded-xl shadow-card border border-gray-100 flex justify-between items-center"
          >
            <div>
              <div
                className={`font-medium ${
                  t.status === "completed" ? "line-through text-gray-400" : ""
                }`}
              >
                {t.title}
              </div>
              <div className="text-xs text-gray-500">
                {t.group} • Vence {t.due}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {t.status !== "completed" ? (
                <button
                  onClick={() => completeTask(t.id)}
                  className="px-3 py-1 rounded-md bg-yuhu-blue-700 text-white text-sm"
                >
                  Completar
                </button>
              ) : (
                <span className="text-xs px-3 py-1 rounded-md bg-green-100 text-green-700">
                  ✅ Completada
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
