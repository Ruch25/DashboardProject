// src/components/CafvEligibilityChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CafvEligibilityChart = ({ data }) => {
  const cafvEligibilityCounts = data.reduce(
    (acc, vehicle) => {
      if (vehicle["Clean Alternative Fuel Vehicle (CAFV) Eligibility"] === "Clean Alternative Fuel Vehicle Eligible") {
        acc.eligible += 1;
      } else if (vehicle["Clean Alternative Fuel Vehicle (CAFV) Eligibility"].includes("unknown")) {
        acc.unknown += 1;
      } else {
        acc.notEligible += 1;
      }
      return acc;
    },
    { eligible: 0, notEligible: 0, unknown: 0 }
  );

  const chartData = {
    labels: ["Eligible", "Not Eligible", "Unknown"],
    datasets: [
      {
        data: [cafvEligibilityCounts.eligible, cafvEligibilityCounts.notEligible, cafvEligibilityCounts.unknown],
        backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h3>CAFV Eligibility</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default CafvEligibilityChart;
