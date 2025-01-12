import React, { useState } from "react";

const Filters = ({ data, setFilteredData }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const uniqueMakes = [...new Set(data.map(item => item.Make))];
  const uniqueModels = [...new Set(data.map(item => item.Model))];
  const uniqueCity = [...new Set(data.map(item => item.City))];

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    filterData(make, selectedModel);
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    filterData(selectedMake, model);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    filterData(selectedMake, selectedModel, city); 
  };

  const filterData = (make, model,city) => {
    let filtered = data;
    if (make) filtered = filtered.filter(item => item.Make === make);
    if (model) filtered = filtered.filter(item => item.Model === model);
    if (city) filtered = filtered.filter(item => item.City === city);
    setFilteredData(filtered);
  };

  return (
    <div className="filters">
    <div className="filter-group">
      <label htmlFor="make">Make</label>
      <select id="make" value={selectedMake} onChange={handleMakeChange}>
        <option value="">Select Make</option>
        {uniqueMakes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
    </div>
  
    <div className="filter-group">
      <label htmlFor="model">Model</label>
      <select id="model" value={selectedModel} onChange={handleModelChange}>
        <option value="">Select Model</option>
        {uniqueModels.map(model => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  
    <div className="filter-group">
      <label htmlFor="city">City</label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select City</option>
        {uniqueCity.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  </div>
  );
};

export default Filters;
