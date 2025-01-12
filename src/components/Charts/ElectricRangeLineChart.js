// src/components/ElectricRangeLineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const ElectricRangeLineChart = ({ data }) => {
  const modelYears = data.map(vehicle => vehicle["Model Year"]);
  const electricRange = data.map(vehicle => vehicle["Electric Range"]);

  const chartData = {
    labels: modelYears,
    datasets: [
      {
        label: "Electric Range (miles)",
        data: electricRange,
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Electric Range Over Model Years</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ElectricRangeLineChart;
