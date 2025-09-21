import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StatsPage() {
  // Usuarios dummy para San Benito (20)
  const sanBenitoUsers = Array.from({ length: 20 }, (_, i) => ({
    name: `Usuario_SB${i + 1}`,
    interactions: Math.floor(Math.random() * 100) + 10,
  }));

  // Usuarios dummy para Andes Tech (15)
  const andesTechUsers = Array.from({ length: 15 }, (_, i) => ({
    name: `Usuario_AT${i + 1}`,
    interactions: Math.floor(Math.random() * 120) + 20,
  }));

  // Datos San Benito
  const dataSanBenito = {
    labels: sanBenitoUsers.map((u) => u.name),
    datasets: [
      {
        label: "Interacciones",
        data: sanBenitoUsers.map((u) => u.interactions),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  // Datos Andes Tech
  const dataAndesTech = {
    labels: andesTechUsers.map((u) => u.name),
    datasets: [
      {
        label: "Interacciones",
        data: andesTechUsers.map((u) => u.interactions),
        backgroundColor: "#10B981",
      },
    ],
  };

  // Datos globales académicos vs sociales
  const topicDistribution = {
    labels: ["Académicos", "Sociales"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#2563EB", "#F59E0B"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Actividad por grupo */}
      <div className="p-4 bg-white rounded-xl shadow-card border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Top usuarios — San Benito</h2>
        <Bar
          data={dataSanBenito}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
            },
            scales: {
              x: { ticks: { autoSkip: false, maxRotation: 60, minRotation: 45 } },
            },
          }}
        />
      </div>

      <div className="p-4 bg-white rounded-xl shadow-card border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Top usuarios — Andes Tech</h2>
        <Bar
          data={dataAndesTech}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
            },
            scales: {
              x: { ticks: { autoSkip: false, maxRotation: 60, minRotation: 45 } },
            },
          }}
        />
      </div>

      {/* Distribución académicos vs sociales */}
      <div className="p-4 bg-white rounded-xl shadow-card border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Distribución de temas</h2>
        <div className="w-64 mx-auto">
          <Doughnut
            data={topicDistribution}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: { usePointStyle: true },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
