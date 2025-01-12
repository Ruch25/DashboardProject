// src/components/Dashboard.js
import React, { useState,useEffect } from "react";
import CafvEligibilityChart from "./Charts/CafvEligibilityChart";
import ElectricRangeChart from "./Charts/ElectricRangeChart";
import ElectricRangeLineChart from "./Charts/ElectricRangeLineChart";
import CountryDistributionChart from "./Charts/CountryDistributionChart";
import VehicleAttributesRadarChart from "./Charts/VehicleAttributesRadarChart";
import RangeVsPriceChart from "./Charts/RangeVsPriceChart";
import data from "../data/evData.json"; // Assuming your data file is correctly placed

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(data);

  const filterDataByMake = (make) => {
    const filtered = data.filter(vehicle => vehicle.Make === make);
    setFilteredData(filtered);
  };

  const [makeCounts, setMakeCounts] = useState([]);

  useEffect(() => {
    // Count the occurrences of each make in the data
    const counts = data.reduce((acc, vehicle) => {
      acc[vehicle.Make] = acc[vehicle.Make] ? acc[vehicle.Make] + 1 : 1;
      return acc;
    }, {});

    // Convert the counts into an array of objects
    const makeCountArray = Object.keys(counts).map((make) => ({
      make,
      count: counts[make],
    }));

    setMakeCounts(makeCountArray);
  }, [data]);
  

  return (
    <div className="dashboard">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
  <div className="filtersdas">
  <h3 className="filters-title">Filter by Vehicle Make</h3>
  <div className="filters-buttons flex flex-wrap justify-between gap-6 lg:gap-8 xl:gap-12">
  {makeCounts.map(({ make, count }) => (
    <button
      key={make}
      className="filters-btn flex items-center justify-center w-40 h-16 rounded-lg text-white font-medium shadow-md transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none"
      onClick={() => filterDataByMake(make)}
      style={{ backgroundColor: getColorForMake(make) }}
    >
      <span className="text-lg font-semibold">{make}</span>
      <span className="ml-2 text-sm font-light">({count})</span>
    </button>
  ))}
</div>
        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
<div className="dashboard-container">
  <div className="chart-grid">
    <div className="chart-card">
      <CafvEligibilityChart data={filteredData} />
    </div>
    <div className="chart-card">
      <ElectricRangeChart data={filteredData} />
    </div>
    <div className="chart-card">
      <ElectricRangeLineChart data={filteredData} />
    </div>
    <div className="chart-card">
      <CountryDistributionChart data={filteredData} />
    </div>
    <div className="chart-card">
      <VehicleAttributesRadarChart data={filteredData} />
    </div>
    <div className="chart-card">
      <RangeVsPriceChart data={filteredData} />
    </div>
   
  </div>
</div>
</div>



    </div>
  );
};


const getColorForMake = (make) => {
  const colors = {
  
    
  };
  
  return colors[make.toUpperCase()] || '#007bff'; 
};

export default Dashboard;
