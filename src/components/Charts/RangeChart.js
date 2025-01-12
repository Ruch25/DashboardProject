import React from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
Chart.register(...registerables);

const RangeChart = ({ data }) => {
  const ranges = data.map((item) => item["Model Year"]);

  // Group ranges into bins
  const bins = [ 2005, 2008, 2011, 2014, 2017, 2020,2023];
  const rangeCounts = bins.map((bin, index) =>
    ranges.filter((range) => {
      if (index === bins.length - 1) return range >= bin; // Last bin includes all higher values
      return range >= bin && range < bins[index + 1];
    }).length
  );

  const chartData = {
    labels: ["2005-2008", "2008-2011", "2011-2014", "2014-2017", "2017-2020", "2020-2023", "2023+"],
    datasets: [
      {
        label: "Model Years",
        data: rangeCounts,
        backgroundColor: "#4caf50",
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Vehical Launch Year</h2>
      <div style={{ width: "570px", height: "285px" }}>
      <Bar data={chartData} />
      </div>
    </div>
  );
};

export default RangeChart;
