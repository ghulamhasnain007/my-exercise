import React, { useState, useEffect } from 'react';

function History() {
  const [weatherHistory, setWeatherHistory] = useState([]);

  useEffect(() => {
    // Retrieve all keys from localStorage
    const keys = Object.keys(localStorage);
    
    // Filter out keys that start with 'weather_'
    const weatherKeys = keys.filter(key => key.startsWith('weather_'));

    // Retrieve weather data for each key
    const historyData = weatherKeys.map(key => {
      const data = JSON.parse(localStorage.getItem(key));
      return { key, data };
    });

    // Set the retrieved weather data to state
    setWeatherHistory(historyData);
  }, []);

  return (
    <div style={{backgroundColor:"white"}}>
      <h1>Weather History</h1>
      <ul>
        {weatherHistory.map((item, index) => (
          <li key={index}>
            {/* <p>Key: {item.key}</p> */}
            <p>Data: {JSON.stringify(item.data.name)}</p>
            <p>Temperature: {JSON.stringify(item.data.main.temp)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
