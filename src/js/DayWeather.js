import React, { useState, useEffect } from 'react'
import WeatherDate from './WeatherDate';
import WeatherTypes from './WeatherTypes'
import '../css/weather-styles.css'

const DayWeather = ({ weatherType, index }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setWeatherData(WeatherTypes[weatherType] || {});
  }, [weatherType]);

  return (
    <span>
        <div className="weather--day">
            <WeatherDate index={index}></WeatherDate>
            <div className="weather--icon">{weatherData.icon}</div>
            <div className="weather--type">{weatherData.label}</div>
        </div>
        <span className="tooltip--text">{weatherData.description}</span>
    </span>
  );
};

export default DayWeather