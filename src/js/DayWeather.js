import React, { useState, useEffect } from 'react'
import WeatherDate from './WeatherDate';
import '../css/Weather.css'

const WeatherTypes = {
  clear: {
    label: 'Clear',
    icon: '☀️'
  },
  pcloudy: {
    label: 'Partly Cloudy',
    icon: '🌤️'
  },
  mcloudy: {
    label: 'Mostly Cloudy',
    icon: '🌥️'
  },
  cloudy: {
    label: 'Cloudy',
    icon: '⛅️'
  },
  humid: {
    label: 'Humid',
    icon: '🌤️'
  },
  lightrain: {
    label: 'Light Rain',
    icon: '🌧️'
  },
  oshower: {
    label: 'Occasional Showers',
    icon: '🌦️'
  },
  ishower: {
    label: 'Isolated Showers',
    icon: '🌦️'
  },
  lightsnow: {
    label: 'Light Snow',
    icon: '🌨️'
  },
  rain: {
    label: 'Rain',
    icon: '🌧️'
  },
  snow: {
    label: 'Snow',
    icon: '🌨️'
  },
  rainsnow: {
    label: 'Rain and Snow',
    icon: '🌧️'
  }
};

const DayWeather = ({ weatherType, index }) => {
  const [weatherData, setWeatherData] = useState({ label: 'Unknown', icon: '' });

  useEffect(() => {
    setWeatherData(WeatherTypes[weatherType] || { label: 'Unknown', icon: '' });
  }, [weatherType]);

  return (
    <div className="day-weather">
        <WeatherDate index={index}></WeatherDate>
        <div className="weather-icon">{weatherData.icon}</div>
        <div className="weather-type">{weatherData.label}</div>
    </div>
  );
};

export default DayWeather