import React, { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Dashboard from "./components/Dashboard";
import EVTypeChart from "./components/Charts/EVTypeChart";
import RangeChart from "./components/Charts/RangeChart";
import Footer from "./components/Footer";
import LocateMap from "./components/LocateMap";
import data from "./data/evData.json";
import "./styles/dashboard.css";
import { motion } from "framer-motion";
import { APIProvider } from "@vis.gl/react-google-maps";
const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="app">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Filters data={data} setFilteredData={setFilteredData} />
        </motion.div>

        <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dashboard-container" >
          <div className="chart-card">
            <EVTypeChart data={filteredData} />
          </div>
          <div className="chart-card">
            <RangeChart data={filteredData} />
          </div>
        </div>
        </div>

        <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dashboard data={filteredData} />
        </div>

        {/* Charts and Map */}
        <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
    
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <LocateMap data={filteredData} />
      </APIProvider>
        </div>

 
        <div className="col-span-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Footer  />
        </div>
      </div>
    </div>
  );
};

export default App;
