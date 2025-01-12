import React, { useMemo } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Tooltip as ReactTooltip } from "react-tooltip"; 
// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const EVTypeChart = ({ data }) => {
  // Memoize the processed chart data to prevent unnecessary re-renders
  const chartData = useMemo(() => {
    const evTypes = data.reduce((acc, curr) => {
      const type = curr["Electric Vehicle Type"];
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(evTypes),
      datasets: [
        {
          label: "Electric Vehicle Types",
          data: Object.values(evTypes),
          backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        },
      ],
    };
  }, [data]);

  return (
 
    <div>
      <ReactTooltip id="chart" place="top" effect="solid">
        EV Types Distribution
      </ReactTooltip>
      <div style={{ width: "500px", height: "500px" }}>
      <Pie data={chartData} data-tip data-for="chart" />
      </div>
    </div>
  );
};

export default EVTypeChart;
