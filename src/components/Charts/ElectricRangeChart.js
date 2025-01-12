// src/components/ElectricRangeChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ElectricRangeChart = ({ data }) => {
  const electricRangeData = data.map(vehicle => vehicle["Electric Range"]);

  const chartData = {
    labels: electricRangeData.map((_, index) => `Vehicle ${index + 1}`),
    datasets: [
      {
        label: "Electric Range (miles)",
        data: electricRangeData,
        backgroundColor: "#007bff",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Electric Range Distribution</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default ElectricRangeChart;
