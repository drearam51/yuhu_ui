import { useState } from "react";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import GroupsPage from "./pages/GroupsPage";
import TasksPage from "./pages/TasksPage";
import StatsPage from "./pages/StatsPage";
import RemindersPage from "./pages/RemindersPage";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  const [route, setRoute] = useState("groups");

  // Menú con etiquetas para mostrar título en cada vista
  const titles = {
    groups: "Mis grupos",
    tasks: "Tareas del día",
    reminders: "Recordatorios",
    calendar: "Calendario",
    stats: "Estadísticas",
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-yuhu-gray-100">
      {/* Sidebar (desktop) */}
      <Sidebar active={route} onNavigate={setRoute} />

      {/* Contenido principal */}
      <main className="flex-1 p-4 md:p-8 max-w-[1200px] mx-auto pb-16">
        <h1 className="text-2xl font-bold mb-6">{titles[route]}</h1>

        {route === "groups" && <GroupsPage />}
        {route === "tasks" && <TasksPage />}
        {route === "reminders" && <RemindersPage />}
        {route === "calendar" && <CalendarPage />}
        {route === "stats" && <StatsPage />}
      </main>

      {/* Bottom navigation (móvil) */}
      <BottomNav onNavigate={setRoute} />
    </div>
  );
}
