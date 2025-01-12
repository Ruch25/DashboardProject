import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadarController, RadialLinearScale, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Registering necessary components
ChartJS.register(
  RadarController,
  RadialLinearScale, // Scale for radar chart
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const VehicleAttributesRadarChart = ({ data }) => {
  // Assuming 'data' is an array of vehicles
  const labels = ["Electric Range", "Model Year", "Postal Code"];
  const electricRange = data.map(vehicle => vehicle["Electric Range"]);
  const modelYear = data.map(vehicle => vehicle["Model Year"]);
  const postalCode = data.map(vehicle => vehicle["Postal Code"]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Vehicle Attributes",
        data: [electricRange[0], modelYear[0], postalCode[0]], // Example of how to use data
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>Vehicle Attributes Comparison</h3>
      <Radar data={chartData} />
    </div>
  );
};

export default VehicleAttributesRadarChart;
