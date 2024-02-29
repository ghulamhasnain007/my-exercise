import React, { useState, useEffect } from 'react';
import './Weather.css';

import search_icon from '../Assets/search.png';
import Clear_icon from '../Assets/clear.png';
import Clouds_icon from '../Assets/cloud.png';
import Drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import Rain_icon from '../Assets/rain.png';
import Snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import { Link } from 'react-router-dom';
import History from '../History/History';

function Weather() {

  const APIKey = '252b8e51ed963ebea2fed98db5094d2a';
  const [city, setCity] = useState('Karachi');
  const [weatherData, setWeatherData] = useState({});
  
  // const [source, setSource] = useState(cloud_icon);
  useEffect(()=>{
    handleSubmit();
  },[])
 


  const handleSubmit = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        const timestamp = new Date().getTime();
      const newDataKey = `weather_${timestamp}`;
      // Save the new data under a different key in localStorage
      window.localStorage.setItem(newDataKey, JSON.stringify(data));
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="search-icon">
          <img src={search_icon} alt="City" onClick={handleSubmit} />
        </div>
      </div>
      <div className="weather-image">
      {weatherData.weather && weatherData.weather[0] && (
        <img
        src={
          weatherData.weather[0].main === 'Clear'
            ? Clear_icon
            : weatherData.weather[0].main === 'Clouds'
            ? Clouds_icon
            : weatherData.weather[0].main === 'Drizzle'
            ? Drizzle_icon
            : weatherData.weather[0].main === 'Rain'
            ? Rain_icon
            : weatherData.weather[0].main === 'Snow'
            ? Snow_icon
            : weatherData.weather[0].main === 'Thunderstorm'
            ? Clouds_icon
            : weatherData.weather[0].main === 'Smoke'
            ? Clouds_icon
            : null
        }
        alt=""
      />
      )}
    </div>
      <div className="weather-temp">{weatherData.main && `${weatherData.main.temp}°C`}</div>
      <div className="weather-location">{weatherData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">
              {weatherData.main && `${weatherData.main.humidity}%`}
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">
              {weatherData.wind && `${weatherData.wind.speed} km/h`}
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
      <button className='btn'><Link to={'/History'}>History</Link></button>
    </div>
  );
}

export default Weather;
