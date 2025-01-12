import React from 'react';
import { Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';

const parseLocation = (location) => {
  
  const match = location.match(/POINT \(([-\d.]+) ([-\d.]+)\)/);
  console.log("natch",match)
  if (match) {
    return {
      lng: parseFloat(match[1]),
      lat: parseFloat(match[2]),
    };
  }
  return null; 
};

const LocateMap = ({ data }) => {
  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        gestureHandling={"greedy"}
      >
        {data.map((item, index) => {
          const coords = parseLocation(item["VehicleLocation"]);
          return (
            coords && (
              <Marker key={index} position={coords}>
                <InfoWindow>
                  {item.Make} {item.Model} - {item.City}, {item.State}
                </InfoWindow>
              </Marker>
            )
          );
        })}
      </Map>
    </div>
  );
};


export default LocateMap;

